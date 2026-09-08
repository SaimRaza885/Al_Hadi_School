export const academicCalendarData = {
  session: "2026–27",

  keyDates: [
    { month: "January", activity: "Advertisement & application forms available", date: "10 Jan – 13 Feb 2026" },
    { month: "February", activity: "Submission of forms (last date)", date: "10 Feb 2026" },
    { month: "February", activity: "Mental & physical test", date: "15 Feb 2026" },
    { month: "February", activity: "Entrance test", date: "15 Feb 2026" },
    { month: "February", activity: "Interviews of shortlisted candidates", date: "23 – 25 Feb 2026" },
    { month: "February", activity: "Announcement of selected students", date: "27 Feb 2026" },
    { month: "March", activity: "Orientation program for new students", date: "02 Mar 2026" },
    { month: "March", activity: "Classes begin", date: "03 Mar 2026" },
    { month: "April", activity: "1st Term begins", date: "01 Apr 2026" },
    { month: "May", activity: "1st term exams", date: "15 – 20 May 2026" },
    { month: "July", activity: "Summer break", date: "01 – 30 Jul 2026" },
    { month: "August", activity: "Classes resume after summer break", date: "10 Aug 2026" },
    { month: "September", activity: "2nd term exams", date: "15 – 20 Sep 2026" },
    { month: "October", activity: "Final term begins", date: "01 Oct 2026" },
    { month: "December", activity: "Final exams", date: "10 – 25 Dec 2026" },
    { month: "December", activity: "Annual Parent's Day for session", date: "29 Dec 2026" },
    { month: "January 2027", activity: "Winter break begins (Grade 6–8)", date: "01 Jan – 10 Feb 2027" },
  ],

  terms: [
    {
      name: "Term 1",
      period: "24 Feb – 30 June 2026",
      highlights: [
        { label: "Monthly Test", detail: "Mid-March" },
        { label: "Monthly Test", detail: "Mid-April" },
        { label: "Summative Exam", detail: "End of June" },
        { label: "Summer Vacation", detail: "Full July" },
      ],
    },
    {
      name: "Term 2",
      period: "10 Aug – 31 Oct 2026",
      highlights: [
        { label: "Monthly Test", detail: "Mid-August" },
        { label: "Monthly Test", detail: "Mid-September" },
        { label: "Summative Exam", detail: "End of October" },
      ],
    },
    {
      name: "Term 3",
      period: "1 Nov – 31 Dec 2026",
      highlights: [
        { label: "Monthly Test", detail: "Mid-November" },
        { label: "Monthly Test", detail: "Early December" },
        { label: "Final Summative Exam", detail: "Mid-December" },
        { label: "Winter Vacation", detail: "Full January" },
      ],
    },
  ],

  workingDays: [
    { month: "Jan", days: 0 },
    { month: "Feb", days: 15 },
    { month: "Mar", days: 25 },
    { month: "Apr", days: 26 },
    { month: "May", days: 26 },
    { month: "Jun", days: 25 },
    { month: "Jul", days: 0 },
    { month: "Aug", days: 18 },
    { month: "Sep", days: 23 },
    { month: "Oct", days: 22 },
    { month: "Nov", days: 22 },
    { month: "Dec", days: 22 },
  ],
  workingDaysTotal: 224,

  holidays: [
    { name: "Eid-ul-Fitr", date: "21 – 25 Mar 2026" },
    { name: "Eid-ul-Adha", date: "27 – 30 Jun 2026" },
    { name: "Muharram Ul Haram (Ashura)", date: "23 – 26 Jul 2026" },
    { name: "Independence Day (Pakistan)", date: "14 Aug 2026" },
    { name: "Independence Day (Gilgit Baltistan)", date: "01 Nov 2026" },
    { name: "Iqbal Day", date: "09 Nov 2026" },
    { name: "Prophet Muhammad's Birthday (Eid Milad-un-Nabi)", date: "05 Sep 2026" },
    { name: "Summer Break", date: "01 – 30 Jun 2026" },
    { name: "Winter Break", date: "01 Jan – 10 Feb 2026" },
  ],

  extraCurricular: [
    { activity: "Study Tour", date: "30 Jun 2026" },
    { activity: "Sports Week", date: "01 – 07 Nov 2026" },
    { activity: "Debate Competition", date: "15 Sep 2026" },
    { activity: "Annual Day", date: "29 Dec 2026" },
    { activity: "Science Fair", date: "20 Jul 2026" },
  ],

  policies: [
    {
      title: "Monthly Tests Policy",
      points: [
        "Each monthly test covers the syllabus taught in the previous weeks.",
        "Duration: 1 – 1.5 hours.",
        "Objective (MCQs, fill-in-the-blanks, true/false) — 30%",
        "Short questions — 40%",
        "Long questions — 30%",
        "Strict discipline is maintained and results are shared with parents.",
      ],
    },
    {
      title: "Summative Exams Policy",
      points: [
        "Each summative exam covers the full syllabus of the term.",
        "Duration: 2 – 3 hours.",
        "Objective — 25% · Short questions — 35% · Long questions — 40%",
        "Passing marks: 70% (Grade 6), 75% (Grade 7), 80% (Grade 8).",
        "Re-exam only for genuine medical or family emergencies.",
        "Students must pass all summative exams to be promoted.",
      ],
    },
    {
      title: "General Policies",
      points: [
        "Minimum 95% attendance required to sit for exams.",
        "Any misconduct during exams results in strict disciplinary action.",
        "Parent–Teacher Meetings held after each summative exam.",
      ],
    },
  ],
};