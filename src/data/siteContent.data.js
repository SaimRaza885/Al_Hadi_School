import { images } from "@/assets/images";

const schoolContact = {
  phone: "03555679715",
  email: "alhadiacademygilgit123@gmail.com",
  // Shown on the website
  address: "Danyor Main Chock Near Shaheen Adda",
  // Used only for Google Maps (plus code / precise location)
  mapsQuery: "W9CJ+C6J, Danyor",
  timings: "Monday – Saturday: 8:00 AM – 2:30 PM",
};

export const siteContent = {
  schoolName: "Al-Hadi Academy Gilgit",
  schoolTag: "Al-Hadi Academy",
  schoolLogo: images.logo,
  tagline: "Tomorrow's Leaders Start Here",
  heroSubtitle:
    "Experience a transformative education that balances academic rigor with personal growth, preparing students to excel in a global landscape.",
  admissionsSession: "2026-2027",
  announcement:
    "Admissions for Academic Session 2026-2027 are officially OPEN!",

  contact: schoolContact,

  principal: {
    name: "Hassan Abbas",
    title: "Principal",
    image: images.staffPrincipal,
    welcomeHeading: "Welcome to  Al-Hadi Academy Gilgit",
    paragraphs: [
      "In the Name of Allah, the Most Compassionate, the Most Merciful.",
      "At Al-Hadi Academy, we view a school not merely as an administrative building or a center for the transmission of textbooks, but as a \u201cliving social institution.\u201d Our mission is rooted in the sacred task of Human-Building (Insan-Sazi), and we are committed to a model of \u201cModern Islamic Education\u201d that harmonizes the highest standards of contemporary scientific excellence with the timeless, foundational values of faith, ethics, and character.",
      "Our vision is to cultivate a generation that reaches the \u201cpeaks of knowledge\u201d while remaining deeply grounded in spiritual integrity. We do not simply prepare students to succeed in examinations; we prepare them to be the vanguard of a society built on justice, service, and devotion.",

    ],
    lsaNote:
      "We invite you to join us on this transformative journey of excellence and growth. \u2014 Hassan Abbas, Principal, Al-Hadi Academy Gilgit.",
  },

  stats: [{ value: "5+", label: "YEARS OF EXCELLENCE" },
  { value: "15:1", label: "STUDENT-TEACHER RATIO" },
  { value: "24/7", label: "HOSTEL CARE & SUPERVISION" },
  { value: "30+", label: "CLUBS, SPORTS & ACTIVITIES" },],

  coCurricular: [
    {
      id: "sports",
      title: "Athletics & Sports",
      description:
        "From competitive football to swimming, we offer professional coaching in over 12 different sports disciplines.",
      link: "/facilities#sports",
      linkText: "View Sports Facilities ",
      image: images.sports,
    },
    {
      id: "arts",
      title: "Creative Arts",
      description:
        "Our fine arts, music, and drama programs provide a platform for self-expression, theatre production, and creative exploration.",
      link: "/co-curricular#arts",
      linkText: "Explore the Arts ",
      image: images.arts,
    },
    {
      id: "clubs",
      title: "Leadership & Clubs",
      description:
        "Developing civic responsibility through student council, debate clubs, robotics teams, and community service initiatives.",
      link: "/co-curricular#clubs",
      linkText: "See Active Clubs ",
      image: images.clubs,
    },
  ],

  academicPrograms: [
    {
      id: "middle",
      name: "Middle School",
      grades: "Grades 6 - 8",
      description: "Exploration of integrated sciences, humanities, analytical mathematics, and creative arts.",
      image: images.middleProgram,
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
      grades: "Grades 9 - 10",
      description: "Rigorous board exam preparation, specialized science and computer applications tracks.",
      image: images.secondaryProgram,
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
      grades: "Grades 6 - 10",
      description: "Cutting-edge robotics, digital fabrication, computer science, and experiential physics labs.",
      image: images.stemProgram,
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
        description: "Lessons build deep understanding through inquiry, discussion, and real-world application â€” not rote memorisation.",
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
        description: "Life Skills & Activities run alongside academics â€” athletics, arts, clubs, and leadership at every grade.",
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
      description: "Our team evaluates academic transcripts and other important documents.",
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
      "A living social institution rooted in Human-Building (Insan-Sazi) — where contemporary scientific excellence meets the timeless values of faith, ethics, and character.",
    mission:
      "Our mission is rooted in the sacred task of Human-Building (Insan-Sazi) — a model of \u201cModern Islamic Education\u201d that harmonizes the highest standards of contemporary scientific excellence with the timeless, foundational values of faith, ethics, and character.",
    vision:
      "To cultivate a generation that reaches the \u201cpeaks of knowledge\u201d while remaining deeply grounded in spiritual integrity — not merely prepared to succeed in examinations, but ready to be the vanguard of a society built on justice, service, and devotion.",
    story: [
      "At Al-Hadi Academy, we view a school not merely as an administrative building or a center for the transmission of textbooks, but as a \u201cliving social institution.\u201d Our mission is rooted in the sacred task of Human-Building (Insan-Sazi), and our philosophy is built on three inseparable pillars.",
      "First, Academic Excellence as a Tool for Empowerment: we believe the modern sciences are essential tools for the dignity and progress of our community, and we challenge every student to become a committed specialist who serves humanity. Second, Ethical Refinement and Spiritual Self-Construction (Tarbiyat): true education is the refinement of the soul, guided by teachers who are Morabbis (mentors) \u2014 educators whose own ethical character flows like a waterfall into the hearts of their students.",
      "Third, the Sacred Synergy of School and Family: the family is the primary foundation of a child\u2019s identity, so we invite parents to be active, conscious partners, ensuring the values of our classrooms are mirrored in the sanctuary of the home. As we navigate the 21st century, Al-Hadi Academy remains \u201calways the same\u201d in its core principles, yet dynamic and innovative in its methods — protecting the \u201cjewels of faith\u201d entrusted to our care so every graduate enters society as a source of honor and benefit.",
    ],
    values: [
      {
        title: "Academic Excellence as a Tool for Empowerment",
        description: "Modern sciences as essential tools for the empowerment and dignity of our community — technical expertise used not for personal gain, but for the selfless service of humanity and the progress of our nation.",
        icon: "GraduationCap",
      },
      {
        title: "Ethical Refinement & Spiritual Self-Construction",
        description: "True education as the \u201crefinement of the soul.\u201d Our teachers are Morabbis (mentors) whose ethical self-building flows naturally into the hearts of their students — cultivating honesty, simplicity, and moral anchor in an ever-changing world.",
        icon: "ShieldCheck",
      },
      {
        title: "The Sacred Synergy of School & Family",
        description: "The family is the primary foundation of a child\u2019s identity. We align the school and home as sacred partners, so the values practised in our classrooms are lived again in the sanctuary of the home.",
        icon: "HeartHandshake",
      },
    ],
    milestones: [
      { year: "2005", title: "Campus Founded", description: "Opened with three classrooms and a vision for balanced education." },
      { year: "2012", title: "Science Wing", description: "Dedicated physics, chemistry, and computer laboratories established." },
      { year: "2017", title: "Robotics & STEM", description: "Launched our STEM program with robotics kits and coding curriculum." },
      { year: "2021", title: "Digital Campus", description: "Every classroom upgraded with interactive smart boards." },
      { year: "2024", title: "Results Portal", description: "Online published results and a modern admissions portal go live." },
      { year: "2026", title: "1,200+ Students", description: "A thriving community of learners across grades 6-10." },
    ],
    leadership: [
      { name: "Hassan Abbas", role: "Principal", bio: "Leads the school's vision of \u201cModern Islamic Education\u201d — human-building through academic excellence and spiritual refinement.", image: images.staffPrincipal },
      { name: "Amjad", role: "MS Chemistry", bio: "Chemistry faculty supporting students across the science and STEM programmes.", image: images.staffAmjad },
      { name: "Sajjad Ali", role: "MS English", bio: "English faculty strengthening students' language, literature, and communication skills.", image: images.staffSajjad },
      { name: "Yaadgar", role: "MS Biology", bio: "Biology faculty helping students explore the life sciences with practical understanding.", image: images.staffYaadgar },
      { name: "Kumail Abbas", role: "BS Computer Science", bio: "Computer science faculty guiding students in the digital world.", image: images.staffKumail },
      { name: "Arif Hussain", role: "MS Chemistry", bio: "Chemistry faculty supporting students across the science and STEM programmes.", image: images.staffArif },
    ],
    alumuni: [
      { name: "Mukaram Ali Shah", fatherName: "Sultan Khan", rollNo: "1056687", Matric: "90", review: "The science labs and STEM program took me far beyond what the board exams required.", image: images.alumuni_3 },
      { name: "Kashif Hussain", fatherName: "Hajat Ali", rollNo: "1056685", Matric: "87", review: "Al-Hadi's leadership clubs and community service shaped who I am today.", image: images.alumuni_8 },
      { name: "Muhammad Abbas", fatherName: "Sultan Mir", rollNo: "1056692", Matric: "86", image: images.alumuni_1 },
      { name: "Ali Fiazan", fatherName: "Najat Hussain", rollNo: "1056691", Matric: "84", image: undefined },
      { name: "Ali Muhammad", fatherName: "Sher Ali", rollNo: "1056684", Matric: "80", image: undefined },
      { name: "Muzamil Hassan", fatherName: "Muhammad Hassan", rollNo: "1056690", Matric: "79", review: "The hostel environment kept me focused and helped me turn good habits into great marks.", image: images.alumuni_2 },
      { name: "Azmat Hussain", fatherName: "Shamsullah", rollNo: "1056686", Matric: "79", review: "Discipline, caring mentors, and a supportive community made all the difference for me.", image: images.alumuni_4 },
      { name: "Nizam Hussain", fatherName: "Essa", rollNo: "1056689", Matric: "79", review: "I owe my confidence on stage to the school's Qirat and cultural events. Thank you, Al-Hadi.", image: images.alumuni_6 },
      { name: "Imtiyaz Ali", fatherName: "Mukhtar Ali", rollNo: "1056688", Matric: "78", image: undefined },
      { name: "Awais Iqbal", fatherName: "Bakhtawar Khan", rollNo: "1056682", Matric: "77", review: "The teachers here go beyond the syllabus — they build character that lasts a lifetime.", image: images.alumuni_7 },
      { name: "Shabi ul Hassan", fatherName: "Asghar Hussain", rollNo: "1056681", Matric: "77", review: "The sports and hiking programme made me physically and mentally stronger alongside my studies.", image: images.alumuni_5 },
      { name: "Muhammad Mujtaba", fatherName: "Basharat Hussain", rollNo: "1056683", Matric: "74", image: undefined },
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
        lines: [schoolContact.address, "Gate opens 8:00 AM - 2:30 PM"],
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
      { name: "Admissions Office", email: "alhadiacademygilgit123@gmail.com", phone: "03555679715" },
      { name: "Academic Office", email: "alhadiacademygilgit123@gmail.com", phone: "03555679715" },
      { name: "Accounts & Fees", email: "alhadiacademygilgit123@gmail.com", phone: "03555679715" },
      { name: "Examinations", email: "alhadiacademygilgit123@gmail.com", phone: "03555679715" },
    ],
  },
};
