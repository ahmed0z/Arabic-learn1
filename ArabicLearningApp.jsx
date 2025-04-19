import { useState } from 'react';

// Import lessons data from separate file for better organization
import { lessons } from './lessons-data';

// Main App Component
const ArabicLearningApp = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [currentLesson, setCurrentLesson] = useState(null);
  const [quizMode, setQuizMode] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [draggedAnswer, setDraggedAnswer] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [showCorrectAnimation, setShowCorrectAnimation] = useState(false);

  // Handle section change
  const navigateTo = (section, lesson = null) => {
    setCurrentSection(section);
    setCurrentLesson(lesson);
    setQuizMode(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setAnsweredQuestions([]);
  };

  // Start quiz for current lesson
  const startQuiz = () => {
    setQuizMode(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setAnsweredQuestions([]);
  };

  // Handle drag start
  const handleDragStart = (answer) => {
    setDraggedAnswer(answer);
  };

  // Handle drop with animation
  const handleDrop = () => {
    if (!draggedAnswer) return;
    
    const isCorrect = draggedAnswer === lessons[currentLesson].quiz[currentQuestionIndex].correctAnswer;
    
    // Show feedback animation before proceeding to next question
    if (isCorrect) {
      setScore(score + 1);
      setAnsweredQuestions([...answeredQuestions, {
        index: currentQuestionIndex,
        correct: true,
        answer: draggedAnswer
      }]);
      
      setShowCorrectAnimation(true);
      
      // Let the animation run before moving to next question
      setTimeout(() => {
        setShowCorrectAnimation(false);
        if (currentQuestionIndex < lessons[currentLesson].quiz.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setShowScore(true);
        }
        setDraggedAnswer(null);
      }, 1200); // Animation time
    } else {
      setAnsweredQuestions([...answeredQuestions, {
        index: currentQuestionIndex,
        correct: false,
        answer: draggedAnswer
      }]);
      
      setTimeout(() => {
        if (currentQuestionIndex < lessons[currentLesson].quiz.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setShowScore(true);
        }
        setDraggedAnswer(null);
      }, 800); // Shorter time for incorrect answers
    }
  };
  
  // Prevent default behavior for dragover
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Check if question has been answered
  const isQuestionAnswered = (index) => {
    return answeredQuestions.some(q => q.index === index);
  };

  // Get answer status for a question
  const getAnswerStatus = (index) => {
    const answered = answeredQuestions.find(q => q.index === index);
    return answered ? answered.correct : null;
  };

  // Format question to separate parts (for sentences with blanks)
  const formatQuestion = (question) => {
    if (question.includes('_____')) {
      // Split question into parts (before and after the blank)
      const parts = question.split('_____');
      return {
        prefix: parts[0],
        suffix: parts[1] || '',
        hasBlank: true
      };
    }
    return {
      prefix: question,
      suffix: '',
      hasBlank: false
    };
  };

  // Render Home
  const renderHome = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-300 to-purple-400 p-8 text-center">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">تعلم اللغة العربية</h1>
        <h2 className="text-2xl text-white">Arabic Learning App</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-8">
        {Object.keys(lessons).map(lessonKey => (
          <div 
            key={lessonKey}
            className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={() => navigateTo('lesson', lessonKey)}
            onKeyDown={(e) => e.key === 'Enter' && navigateTo('lesson', lessonKey)}
            tabIndex="0"
            role="button"
            aria-label={`Start lesson: ${lessons[lessonKey].titleEn}`}
          >
            <h3 className="text-2xl font-bold mb-2 text-purple-600">{lessons[lessonKey].title}</h3>
            <p className="text-gray-600">{lessons[lessonKey].titleEn}</p>
            <div className="mt-4 bg-purple-100 rounded-lg p-3">
              <p className="text-sm text-purple-800">اضغط للبدء</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Render Lesson
  const renderLesson = () => {
    if (!currentLesson) return null;
    
    const lesson = lessons[currentLesson];
    
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-300 to-purple-400 p-4 md:p-8">
        <button 
          className="bg-white rounded-full shadow-md px-4 py-2 mb-6 text-purple-600 hover:bg-purple-50 transition-colors"
          onClick={() => navigateTo('home')}
          aria-label="Return to home page"
        >
          العودة للرئيسية ↩
        </button>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">{lesson.title}</h2>
          <h3 className="text-xl text-center text-gray-600 mb-8">{lesson.titleEn}</h3>
          
          <div className="bg-purple-50 rounded-lg p-4 mb-8">
            <h3 className="text-xl font-semibold mb-4">شرح</h3>
            <p className="text-lg text-right mb-6">{lesson.explanation}</p>
            
            <h3 className="text-xl font-semibold mb-4">أمثلة</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {lesson.examples.map((example, idx) => (
                <div 
                  key={idx} 
                  className="rounded-lg p-4 shadow-md transform transition-all duration-300 hover:scale-105 text-center"
                  style={{ backgroundColor: example.color }}
                >
                  <p className="text-2xl font-bold text-white mb-2">{example.ar}</p>
                  <p className="text-sm text-white">{example.en}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-8 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              {lesson.visualAids.map((img, idx) => (
                <img 
                  key={idx}
                  src={img} 
                  alt={`Visual aid for ${lesson.titleEn}`} 
                  className="rounded-lg shadow-md max-w-full h-auto" 
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <button 
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
              onClick={startQuiz}
              aria-label="Start quiz"
            >
              ابدأ الاختبار
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Render Quiz
  const renderQuiz = () => {
    if (!currentLesson) return null;
    
    const lesson = lessons[currentLesson];
    const currentQuestion = lesson.quiz[currentQuestionIndex];
    
    const formattedQuestion = formatQuestion(currentQuestion.question);
    
    if (showScore) {
      return (
        <div className="min-h-screen bg-gradient-to-b from-blue-300 to-purple-400 p-4 md:p-8 flex items-center justify-center">
          <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-6">النتيجة النهائية</h2>
            <div className="text-6xl font-bold mb-6 text-purple-600">
              {score} / {lesson.quiz.length}
            </div>
            
            {score === lesson.quiz.length ? (
              <div className="mb-8">
                <div className="text-2xl font-bold text-green-500 mb-2">أحسنت! 🎉</div>
                <p className="text-gray-600">لقد أجبت على جميع الأسئلة بشكل صحيح!</p>
              </div>
            ) : (
              <div className="mb-8">
                <div className="text-xl font-bold text-orange-500 mb-2">جيد جداً!</div>
                <p className="text-gray-600">يمكنك المحاولة مرة أخرى للحصول على نتيجة أفضل</p>
              </div>
            )}
            
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 rtl:space-x-reverse">
              <button 
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full"
                onClick={() => startQuiz()}
                aria-label="Restart quiz"
              >
                إعادة الاختبار
              </button>
              <button 
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full"
                onClick={() => navigateTo('lesson', currentLesson)}
                aria-label="Return to lesson"
              >
                العودة للدرس
              </button>
              <button 
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-full"
                onClick={() => navigateTo('home')}
                aria-label="Go to home page"
              >
                الصفحة الرئيسية
              </button>
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-300 to-purple-400 p-4 md:p-8">
        <div className="flex justify-between mb-6">
          <button 
            className="bg-white rounded-full shadow-md px-4 py-2 text-purple-600 hover:bg-purple-50 transition-colors"
            onClick={() => navigateTo('lesson', currentLesson)}
            aria-label="Return to lesson"
          >
            العودة للدرس ↩
          </button>
          
          <div className="bg-white rounded-full shadow-md px-4 py-2">
            السؤال {currentQuestionIndex + 1} من {lesson.quiz.length}
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            {/* Question with a clearer separation between question prompt and sentence */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3 text-right text-purple-800 border-b border-purple-200 pb-2">
                {!formattedQuestion.hasBlank ? currentQuestion.question : 'أكمل الجملة:'}
              </h3>
              
              {formattedQuestion.hasBlank && (
                <div className={`text-lg text-right p-3 rounded-lg transition-all duration-500 ${
                  draggedAnswer === currentQuestion.correctAnswer && showCorrectAnimation ? 
                  'bg-green-100' : 'bg-purple-50'
                }`}>
                  <span>{formattedQuestion.prefix}</span>
                  {draggedAnswer ? (
                    <span className={`inline-block mx-1 px-2 py-1 rounded-md font-bold
                      ${draggedAnswer === currentQuestion.correctAnswer && showCorrectAnimation ? 
                        'bg-green-300' : 'bg-purple-200'}`}>
                      {draggedAnswer}
                    </span>
                  ) : (
                    <span className="inline-block mx-1 px-6 py-1 border-b-2 border-dashed border-purple-300">
                      _____
                    </span>
                  )}
                  <span>{formattedQuestion.suffix}</span>
                </div>
              )}
            </div>
            
            {/* Drop area with improved accessibility */}
            <div 
              className="border-2 border-dashed border-purple-300 rounded-lg p-3 mb-4 h-16 flex items-center justify-center bg-purple-50"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onClick={() => draggedAnswer && handleDrop()} 
              tabIndex="0"
              role="button"
              aria-label="Drop your answer here"
            >
              {draggedAnswer ? (
                <div className="text-lg font-bold text-purple-600">{draggedAnswer}</div>
              ) : (
                <p className="text-gray-400">اسحب أو انقر على الإجابة الصحيحة</p>
              )}
            </div>
            
            {/* Answer options - now with touch support and improved accessibility */}
            <div className="grid grid-cols-2 gap-4">
              {currentQuestion.options.map((option, idx) => (
                <div
                  key={idx}
                  className="bg-purple-100 rounded-lg p-3 text-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-md"
                  draggable="true"
                  onDragStart={() => handleDragStart(option)}
                  onClick={() => {
                    handleDragStart(option);
                    // For mobile: Set a slight delay before attempting drop to give visual feedback
                    setTimeout(() => {
                      if (draggedAnswer === option) {
                        handleDrop();
                      }
                    }, 100);
                  }}
                  onTouchStart={() => handleDragStart(option)}
                  onTouchEnd={() => draggedAnswer && handleDrop()}
                  tabIndex="0"
                  role="button"
                  aria-label={`Select answer: ${option}`}
                >
                  <span className="text-lg font-bold text-purple-800">{option}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Progress indicator */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="flex justify-evenly">
              {lesson.quiz.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-4 h-4 rounded-full ${
                    isQuestionAnswered(idx) 
                      ? getAnswerStatus(idx) 
                        ? 'bg-green-500' 
                        : 'bg-red-500' 
                      : idx === currentQuestionIndex 
                        ? 'bg-yellow-400' 
                        : 'bg-gray-300'
                  }`}
                  aria-label={isQuestionAnswered(idx) 
                    ? getAnswerStatus(idx) ? 'Correct answer' : 'Incorrect answer'
                    : idx === currentQuestionIndex ? 'Current question' : 'Unanswered question'}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Main render
  return (
    <div dir="rtl" lang="ar" className="font-sans min-h-screen">
      {currentSection === 'home' && renderHome()}
      {currentSection === 'lesson' && !quizMode && renderLesson()}
      {currentSection === 'lesson' && quizMode && renderQuiz()}
    </div>
  );
};

export default ArabicLearningApp; 