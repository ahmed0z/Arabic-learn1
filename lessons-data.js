// Lessons Data for Arabic Learning App
export const lessons = {
  pronouns3rd: {
    title: "ضمائر الغائب",
    titleEn: "Third-Person Pronouns",
    explanation: "ضمائر الغائب هي الضمائر التي تستخدم للإشارة إلى شخص أو أشخاص غير المتكلم والمخاطب",
    examples: [
      { ar: "هُوَ", en: "He", color: "#FF6B6B" },
      { ar: "هِيَ", en: "She", color: "#4ECDC4" },
      { ar: "هُمْ", en: "They (masculine)", color: "#FFD166" },
      { ar: "هُنَّ", en: "They (feminine)", color: "#6A0572" },
      { ar: "هُما", en: "They (dual)", color: "#1A936F" }
    ],
    visualAids: [
      "https://api.placeholder.com/300/200", 
      "https://api.placeholder.com/300/200"
    ],
    quiz: [
      {
        question: "ما هو الضمير المناسب لفتاة واحدة؟",
        options: ["هُوَ", "هِيَ", "هُمْ", "هُنَّ"],
        correctAnswer: "هِيَ"
      },
      {
        question: "ما هو الضمير المناسب لولد واحد؟",
        options: ["هُوَ", "هِيَ", "هُمْ", "هُما"],
        correctAnswer: "هُوَ"
      },
      {
        question: "أكمل الجملة: _____ يذهبون إلى المدرسة",
        options: ["هُوَ", "هِيَ", "هُمْ", "هُنَّ"],
        correctAnswer: "هُمْ"
      },
      {
        question: "ما هو الضمير المستخدم للإشارة إلى مجموعة من الفتيات؟",
        options: ["هُوَ", "هِيَ", "هُمْ", "هُنَّ"],
        correctAnswer: "هُنَّ"
      },
      {
        question: "أكمل الجملة: _____ تقرأ كتاباً",
        options: ["هُوَ", "هِيَ", "هُمْ", "هُما"],
        correctAnswer: "هِيَ"
      },
      {
        question: "ما هو الضمير المناسب لاثنين من الناس؟",
        options: ["هُوَ", "هِيَ", "هُمْ", "هُما"],
        correctAnswer: "هُما"
      },
      {
        question: "أكمل الجملة: _____ يلعب بالكرة",
        options: ["هُوَ", "هِيَ", "هُمْ", "هُنَّ"],
        correctAnswer: "هُوَ"
      },
      {
        question: "الضمير المناسب للإشارة إلى غائبين اثنين هو:",
        options: ["هُوَ", "هِيَ", "هُمْ", "هُما"],
        correctAnswer: "هُما"
      },
      {
        question: "أكمل الجملة: _____ يتحدثن العربية",
        options: ["هُوَ", "هِيَ", "هُمْ", "هُنَّ"],
        correctAnswer: "هُنَّ"
      },
      {
        question: "ضمير الغائب المستخدم للمفرد المذكر هو:",
        options: ["هُوَ", "هِيَ", "هُمْ", "هُنَّ"],
        correctAnswer: "هُوَ"
      }
    ]
  },
  pronouns1st: {
    title: "ضمائر المتكلم",
    titleEn: "First-Person Pronouns",
    explanation: "ضمائر المتكلم هي الضمائر التي يستخدمها الشخص للإشارة إلى نفسه",
    examples: [
      { ar: "أنا", en: "I", color: "#FF6B6B" },
      { ar: "نحن", en: "We", color: "#4ECDC4" }
    ],
    visualAids: [
      "https://api.placeholder.com/300/200", 
      "https://api.placeholder.com/300/200"
    ],
    quiz: [
      {
        question: "ما هو الضمير المستخدم للإشارة إلى نفسك؟",
        options: ["أنا", "نحن", "هُوَ", "هِيَ"],
        correctAnswer: "أنا"
      },
      {
        question: "أكمل الجملة: _____ نلعب في الحديقة",
        options: ["أنا", "نحن", "هُوَ", "هُمْ"],
        correctAnswer: "نحن"
      },
      {
        question: "ضمير المتكلم للجماعة هو:",
        options: ["أنا", "نحن", "أنتم", "هُمْ"],
        correctAnswer: "نحن"
      },
      {
        question: "أكمل الجملة: _____ أحب القراءة",
        options: ["أنا", "نحن", "أنتَ", "هُوَ"],
        correctAnswer: "أنا"
      },
      {
        question: "ما هو الضمير المناسب لمجموعة تتحدث عن نفسها؟",
        options: ["أنا", "نحن", "أنتَ", "هُمْ"],
        correctAnswer: "نحن"
      },
      {
        question: "أكمل الجملة: _____ أذهب إلى المدرسة كل يوم",
        options: ["أنا", "نحن", "أنتَ", "هِيَ"],
        correctAnswer: "أنا"
      },
      {
        question: "الضمير المستخدم للمتكلم المفرد هو:",
        options: ["أنا", "نحن", "أنتَ", "هُوَ"],
        correctAnswer: "أنا"
      },
      {
        question: "أكمل الجملة: _____ نعيش في مدينة جميلة",
        options: ["أنا", "نحن", "أنتم", "هُمْ"],
        correctAnswer: "نحن"
      },
      {
        question: "ما هو الضمير الذي يستخدمه طفل للإشارة إلى نفسه؟",
        options: ["أنا", "نحن", "أنتَ", "هُوَ"],
        correctAnswer: "أنا"
      },
      {
        question: "أكمل الجملة: _____ نحب التعلم معاً",
        options: ["أنا", "نحن", "أنتم", "هُنَّ"],
        correctAnswer: "نحن"
      }
    ]
  },
  demonstratives: {
    title: "أسماء الإشارة",
    titleEn: "Demonstrative Pronouns",
    explanation: "أسماء الإشارة هي كلمات تستخدم للإشارة إلى شخص أو شيء قريب أو بعيد",
    examples: [
      { ar: "هَذا", en: "This (masculine)", color: "#FF6B6B" },
      { ar: "هَذِهِ", en: "This (feminine)", color: "#4ECDC4" },
      { ar: "هَؤُلاء", en: "These", color: "#FFD166" },
      { ar: "ذَلِكَ", en: "That (masculine)", color: "#6A0572" },
      { ar: "تِلْكَ", en: "That (feminine)", color: "#1A936F" },
      { ar: "أُولَئِكَ", en: "Those", color: "#2F9599" }
    ],
    visualAids: [
      "https://api.placeholder.com/300/200", 
      "https://api.placeholder.com/300/200"
    ],
    quiz: [
      {
        question: "ما هو اسم الإشارة المناسب لكتاب قريب منك؟",
        options: ["هَذا", "هَذِهِ", "ذَلِكَ", "تِلْكَ"],
        correctAnswer: "هَذا"
      },
      {
        question: "ما هو اسم الإشارة المناسب لقلم بعيد عنك؟",
        options: ["هَذا", "هَذِهِ", "ذَلِكَ", "تِلْكَ"],
        correctAnswer: "ذَلِكَ"
      },
      {
        question: "أكمل الجملة: _____ طلاب مجتهدون (للقريب)",
        options: ["هَذا", "هَذِهِ", "هَؤُلاء", "أُولَئِكَ"],
        correctAnswer: "هَؤُلاء"
      },
      {
        question: "ما هو اسم الإشارة المناسب لحقيبة قريبة منك؟",
        options: ["هَذا", "هَذِهِ", "ذَلِكَ", "تِلْكَ"],
        correctAnswer: "هَذِهِ"
      },
      {
        question: "أكمل الجملة: _____ الأطفال يلعبون في الحديقة البعيدة",
        options: ["هَذا", "هَذِهِ", "هَؤُلاء", "أُولَئِكَ"],
        correctAnswer: "أُولَئِكَ"
      },
      {
        question: "ما هو اسم الإشارة المناسب لسيارة بعيدة عنك؟",
        options: ["هَذا", "هَذِهِ", "ذَلِكَ", "تِلْكَ"],
        correctAnswer: "تِلْكَ"
      },
      {
        question: "أكمل الجملة: _____ كرة جميلة (للقريب)",
        options: ["هَذا", "هَذِهِ", "ذَلِكَ", "تِلْكَ"],
        correctAnswer: "هَذِهِ"
      },
      {
        question: "ما هو اسم الإشارة المناسب لمجموعة كتب بعيدة عنك؟",
        options: ["هَذا", "هَذِهِ", "هَؤُلاء", "أُولَئِكَ"],
        correctAnswer: "أُولَئِكَ"
      },
      {
        question: "أكمل الجملة: _____ الولد يقرأ كتاباً (للقريب)",
        options: ["هَذا", "هَذِهِ", "ذَلِكَ", "تِلْكَ"],
        correctAnswer: "هَذا"
      },
      {
        question: "ما هو اسم الإشارة المناسب لمجموعة أقلام قريبة منك؟",
        options: ["هَذا", "هَذِهِ", "هَؤُلاء", "أُولَئِكَ"],
        correctAnswer: "هَؤُلاء"
      }
    ]
  }
}; 