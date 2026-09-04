import { dummyImages } from "@/lib/dummyImages";

const schoolContact = {
  phone: "+1 (234) 567-8900",
  email: "admissions@greenwood.edu",
  address: "123 Academy Blvd, North District, Metropolis 56789",
  timings: "Monday – Saturday: 8:00 AM – 2:30 PM",
};

export const siteContent = {
  schoolName: "Al-Hadi Academy Gilgit",
  schoolTag: "Al-Hadi",
  schoolLogo: "https://alhadihostel.com/images/AHHlogo.png",
  tagline: "Tomorrow's Leaders Start Here",
  heroSubtitle:
    "Experience a transformative education that balances academic rigor with personal growth, preparing students to excel in a global landscape.",
  admissionsSession: "2026–2027",
  announcement:
    "Admissions for Academic Session 2026–2027 are officially OPEN!",

  contact: schoolContact,

  principal: {
    name: "Dr. Hassan",
    title: "Principal",
    image: dummyImages.principal,
    welcomeHeading: "Welcome to Al-Hadi School",
    paragraphs: [
      "At Al-Hadi, we believe every child carries unique potential. Our mission is to create an environment where curiosity thrives, character is built, and futures are shaped through education that goes beyond textbooks.",
      "We are dedicated to academic distinction, fostering an atmosphere where digital literacy and holistic life skills are integrated into every facet of the learning journey, ensuring our students are prepared for the global stage.",
    ],
    lsaNote: "Our comprehensive Life Skills & Activities (LSA) program ensures every student finds their passion and builds resilient character.",
  },

  stats: [
    { value: "25+", label: "YEARS OF EXCELLENCE" },
    { value: "100%", label: "FULLY EQUIPPED LABS" },
    { value: "45+", label: "CLUBS & ACTIVITIES" },
    { value: "15:1", label: "STUDENT-TEACHER RATIO" },
  ],

  coCurricular: [
    {
      id: "sports",
      title: "Athletics & Sports",
      description:
        "From competitive football to swimming, we offer professional coaching in over 12 different sports disciplines.",
      link: "/facilities#sports",
      linkText: "View Sports Facilities →",
      image: dummyImages.sports,
    },
    {
      id: "arts",
      title: "Creative Arts",
      description:
        "Our fine arts, music, and drama programs provide a platform for self-expression, theatre production, and creative exploration.",
      link: "/activities#arts",
      linkText: "Explore the Arts →",
      image: dummyImages.arts,
    },
    {
      id: "clubs",
      title: "Leadership & Clubs",
      description:
        "Developing civic responsibility through student council, debate clubs, robotics teams, and community service initiatives.",
      link: "/activities#clubs",
      linkText: "See Active Clubs →",
      image: dummyImages.clubs,
    },
  ],

  academicPrograms: [
    {
      id: "middle",
      name: "Middle School",
      grades: "Grades 6 – 8",
      description: "Exploration of integrated sciences, humanities, analytical mathematics, and creative arts.",
      image: dummyImages.middleProgram,
      subjects: [
        "English, Urdu & Regional Languages",
        "Mathematics (Algebra & Geometry)",
        "Physics, Chemistry & Biology",
        "History, Geography & Islamic Studies",
        "Computer Science",
        "LSA: Arts, Sports & Clubs",
      ],
      highlights: [
        "Integrated project-based sciences",
        "Introduction to laboratory experiments",
        "Public speaking & debate training",
        "Subject clubs and house competitions",
      ],
    },
    {
      id: "secondary",
      name: "Secondary School",
      grades: "Grades 9 – 10",
      description: "Rigorous board exam preparation, specialized science and computer applications tracks.",
      image: dummyImages.secondaryProgram,
      subjects: [
        "English, Urdu & Islamic Studies",
        "Mathematics",
        "Physics, Chemistry & Biology",
        "Computer Applications",
        "Pakistan Studies & Geography",
        "LSA: Leadership & Community Service",
      ],
      highlights: [
        "Board exam focused coaching",
        "Weekly test series & mock papers",
        "Career & guidance counselling",
        "Merit scholarships for top performers",
      ],
    },
    {
      id: "stem",
      name: "STEM Wings",
      grades: "Grades 6 – 10",
      description: "Cutting-edge robotics, digital fabrication, computer science, and experiential physics labs.",
      image: dummyImages.stemProgram,
      subjects: [
        "Robotics & Coding (Scratch, Python)",
        "Digital Fabrication & 3D Design",
        "Applied Electronics & IoT",
        "Mathematics & Logical Reasoning",
        "Experiential Physics & Chemistry",
        "LSA: Innovation & Maker Challenges",
      ],
      highlights: [
        "Dedicated robotics & maker lab",
        "National STEM competition entries",
        "Hands-on, inquiry-based curriculum",
        "Mentorship from industry engineers",
      ],
    },
  ],

  academicsPage: {
    heroEyebrow: "Academics",
    heroTitle: "A Balanced Curriculum for Every Stage",
    heroSubtitle:
      "From middle school foundations to board exam preparation, our programs blend rigorous academics with the Life Skills & Activities (LSA) framework at every level.",
    approachTitle: "Our Learning Approach",
    approach: [
      {
        title: "Concept-Based Teaching",
        description: "Lessons build deep understanding through inquiry, discussion, and real-world application — not rote memorisation.",
        icon: "Lightbulb",
      },
      {
        title: "Continuous Assessment",
        description: "Regular class tests, term exams, and teacher feedback track every student so no one falls behind.",
        icon: "ClipboardCheck",
      },
      {
        title: "Smart Classroom Learning",
        description: "Interactive boards, digital aids, and curated online resources make every lesson engaging and visual.",
        icon: "MonitorSmartphone",
      },
      {
        title: "Integrated LSA",
        description: "Life Skills & Activities run alongside academics — athletics, arts, clubs, and leadership at every grade.",
        icon: "HeartHandshake",
      },
    ],
  },

  admissionsGuide: [
    {
      step: 1,
      title: "Submit Online Form",
      description: "Initial application with necessary student background and preferred grade level.",
    },
    {
      step: 2,
      title: "Document Review",
      description: "Our team evaluates academic transcripts, birth certificate, and previous records.",
    },
    {
      step: 3,
      title: "Student Assessment",
      description: "An interactive friendly session to understand student's aptitudes and potential.",
    },
    {
      step: 4,
      title: "Final Enrollment",
      description: "Welcome to the family! Secure your seat with initial fee payment and welcome kit.",
    },
  ],

  about: {
    heroEyebrow: "Who We Are",
    heroTitle: "A Legacy of Learning, A Future of Leaders",
    heroSubtitle:
      "Since our founding, Al-Hadi Public School has grown into a modern centre of academic excellence — where every child is known, guided, and challenged to lead.",
    mission:
      "To create an environment where curiosity thrives, character is built, and futures are shaped through education that goes beyond textbooks.",
    vision:
      "To nurture confident, compassionate, and digitally-literate global citizens who lead with integrity and serve their communities.",
    story: [
      "Al-Hadi Public School was established with a simple belief: that a great school shapes not only minds but also hearts. What began as a small campus with a few classrooms has grown into a complete educational community serving grades 6 through 10.",
      "Today our campus houses modern science and robotics laboratories, a central library, sports grounds, and creative arts studios — all in service of a balanced, child-centred education. Our faculty blends experienced educators with young, technology-savvy teachers to keep learning vibrant and relevant.",
      "We measure success not just in examination results, but in the confidence of a student who speaks on stage, the teamwork of a house that wins a relay, and the character of a graduate who leads with kindness.",
    ],
    values: [
      {
        title: "Academic Excellence",
        description: "Rigorous, well-planned academics with consistent assessment and personalised attention.",
        icon: "GraduationCap",
      },
      {
        title: "Character & Integrity",
        description: "A values-based culture that builds honesty, responsibility, and respect for others.",
        icon: "ShieldCheck",
      },
      {
        title: "Holistic Growth",
        description: "Life Skills & Activities woven into every term so talent grows beyond the classroom.",
        icon: "HeartHandshake",
      },
      {
        title: "Innovation & Technology",
        description: "Smart classrooms, robotics, and digital literacy that prepare students for tomorrow.",
        icon: "Cpu",
      },
    ],
    milestones: [
      { year: "2005", title: "Campus Founded", description: "Opened with three classrooms and a vision for balanced education." },
      { year: "2012", title: "Science Wing", description: "Dedicated physics, chemistry, and computer laboratories established." },
      { year: "2017", title: "Robotics & STEM", description: "Launched our STEM program with robotics kits and coding curriculum." },
      { year: "2021", title: "Digital Campus", description: "Every classroom upgraded with interactive smart boards." },
      { year: "2024", title: "Results Portal", description: "Online published results and a modern admissions portal go live." },
      { year: "2026", title: "1,200+ Students", description: "A thriving community of learners across grades 6–10." },
    ],
    leadership: [
      { name: "Dr. A. Ali", role: "Principal", bio: "Over 25 years in education leadership, championing holistic learning.", image: dummyImages.staffPrincipal },
      { name: "Ms. F. Hassan", role: "Vice Principal & Academics", bio: "Drives curriculum design, assessments, and teacher development.", image: dummyImages.staffAcademics },
      { name: "Mr. K. Mehmood", role: "Head of STEM", bio: "Leads robotics, coding, and the innovation lab program.", image: dummyImages.staffStem },
      { name: "Ms. S. Iqbal", role: "Head of Activities (LSA)", bio: "Coordinates athletics, arts, clubs, and community service.", image: dummyImages.staffActivities },
    ],
    alumuni: [
      { name: "Adeel Abbas", Matric: "98%", review: "Al-Hadi Academy is the best school in Gilgit. The teachers genuinely care about every single student.", image: dummyImages.staffPrincipal },
      { name: "Shoaib Karim", Matric: "96%", review: "The hostel environment kept me focused and helped me turn good habits into great marks.", image: dummyImages.staffAcademics },
      { name: "Maryam Ali", Matric: "93%", review: "The science labs and STEM program took me far beyond what the board exams required.", image: dummyImages.staffActivities },
      { name: "Hassan Raza", Matric: "91%", review: "Discipline, caring mentors, and a supportive community made all the difference for me.", image: dummyImages.staffStem },
    ]
  },

  contactPage: {
    heroEyebrow: "Get in Touch",
    heroTitle: "Contact & Admissions Office",
    heroSubtitle:
      "Questions about admissions, academics, or your child's progress? Our office team is ready to help.",
    cards: [
      {
        title: "Visit Our Campus",
        lines: [schoolContact.address, "Gate opens 8:00 AM – 2:30 PM"],
        icon: "MapPin",
      },
      {
        title: "Call the Office",
        lines: [schoolContact.phone, schoolContact.timings],
        icon: "Phone",
      },
      {
        title: "Email Us",
        lines: [schoolContact.email, "Replies within 1 working day"],
        icon: "Mail",
      },
    ],
    departments: [
      { name: "Admissions Office", email: "admissions@greenwood.edu", phone: "+1 (234) 567-8900" },
      { name: "Academic Office", email: "academics@greenwood.edu", phone: "+1 (234) 567-8901" },
      { name: "Accounts & Fees", email: "accounts@greenwood.edu", phone: "+1 (234) 567-8902" },
      { name: "Examinations", email: "exams@greenwood.edu", phone: "+1 (234) 567-8903" },
    ],
  },
};
