export const examinationData = {
  session: "2026–27",

  snapshot: [
    { value: "3", label: "Academic terms per year" },
    { value: "6", label: "Monthly tests — two per term" },
    { value: "3", label: "Summative exams — one per term" },
    { value: "95%", label: "Minimum attendance to sit exams" },
  ],

  marksDistribution: [
    {
      examType: "Monthly Test",
      duration: "1 – 1.5 hours",
      coverage: "Syllabus taught in the previous weeks.",
      segments: [
        { label: "Objective", pct: 30, blurb: "MCQs, fill-in-the-blanks, true/false" },
        { label: "Short Questions", pct: 40 },
        { label: "Long Questions", pct: 30 },
      ],
    },
    {
      examType: "Summative Exam",
      duration: "2 – 3 hours",
      coverage: "Full syllabus of the term.",
      segments: [
        { label: "Objective", pct: 25, blurb: "MCQs, fill-in-the-blanks, true/false" },
        { label: "Short Questions", pct: 35 },
        { label: "Long Questions", pct: 40 },
      ],
    },
  ],

  segmentWidths: {
    30: "w-[30%]",
    40: "w-[40%]",
    25: "w-[25%]",
    35: "w-[35%]",
  },

  segmentColors: ["bg-primary", "bg-primary-hover", "bg-primary-active"],

  policies: [
    {
      title: "Monthly Tests Policy",
      points: [
        "Each monthly test covers the syllabus taught in the previous weeks.",
        "Duration: 1 – 1.5 hours.",
        "Strict discipline is maintained during the test.",
        "Results are shared with parents.",
      ],
    },
    {
      title: "Summative Exams Policy",
      points: [
        "Each summative exam covers the full syllabus of the term.",
        "Duration: 2 – 3 hours.",
        "Passing marks: 70% (Grade 6), 75% (Grade 7), 80% (Grade 8).",
        "A student must pass all summative exams to be promoted.",
      ],
    },
    {
      title: "General Policies",
      points: [
        "Minimum 95% attendance is required to sit for exams.",
        "Misconduct during exams results in strict disciplinary action.",
        "Parent–Teacher Meetings are held after each summative exam.",
      ],
    },
  ],

  passingMarks: [
    { grade: "Grade 6", marks: "70%" },
    { grade: "Grade 7", marks: "75%" },
    { grade: "Grade 8", marks: "80%" },
  ],

  reExam:
    "Re-exams are offered only to students with a genuine medical or family emergency during the exam window.",
};