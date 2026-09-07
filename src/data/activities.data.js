import { images } from "@/assets/images";

export const activitiesData = {
  intro:
    "Our Life Skills & Activities (LSA) program balances academics with athletics, creative arts, leadership, and community service â€” so every student finds their passion and builds resilient character.",
  coCurricular: [
    {
      id: "act-hiking",
      title: "Hiking & Mountain Adventure",
      tagline: "Explore the valley trails, build endurance",
      description:
        "Surrounded by the peaks of Gilgit Baltistan, our hiking program takes students onto safe, guided mountain trails — building endurance, teamwork, environmental awareness, and a lifelong connection to nature.",
      image: images.sports,
      highlights: [
        "Guided weekend hikes on Gilgit's valley & mountain trails",
        "Camping, navigation & outdoor survival training",
        "Annual inter-house mountain trekking competition",
        "Leave-no-trace & environmental stewardship lessons",
      ],
    },
    {
      id: "act-arts",
      title: "Creative Arts & Drama",
      tagline: "Self-expression through art & performance",
      description:
        "Our fine arts, music, and drama programs provide a platform for self-expression, theatre production, and creative exploration through the school's annual arts festival.",
      image: images.arts,
      highlights: [
        "Fine arts, sketching & pottery workshops",
        "Annual theatre production & cultural night",
        "Instrumental & vocal music training",
        "Student-curated art exhibitions",
      ],
    },
    {
      id: "act-clubs",
      title: "Leadership & Clubs",
      tagline: "Civic responsibility & student voice",
      description:
        "Developing civic responsibility through student council, debate clubs, robotics teams, and community service initiatives that run throughout the academic year.",
      image: images.clubs,
      highlights: [
        "Elected student council & prefect body",
        "Debate, quiz & public speaking clubs",
        "Robotics & STEM challenge teams",
        "Community service & volunteering drives",
      ],
    },
  ],
  extraCurricular: [
    {
      id: "ext-hiking",
      title: "Hiking & Mountain Treks",
      description: "Weekend guided hikes and valley treks that build endurance, teamwork, and a love for Gilgit's mountains.",
      icon: "Mountain",
    },
    {
      id: "ext-1",
      title: "Scouting & First Aid",
      description: "Junior & senior scouts with first-aid, camping, and disaster-preparedness drills.",
      icon: "Compass",
    },
    {
      id: "ext-2",
      title: "Qirat & Naat",
      description: "Weekly religious recitation practice building confidence on the stage.",
      icon: "Music4",
    },
    {
      id: "ext-3",
      title: "Book & Reading Club",
      description: "Guided reading circles and monthly book reviews in the central library.",
      icon: "BookOpen",
    },
    {
      id: "ext-4",
      title: "Gardening & Eco Club",
      description: "Students maintain school gardens and run recycling and green-campus drives.",
      icon: "Leaf",
    },
    {
      id: "ext-5",
      title: "Coding & Web Club",
      description: "Hands-on introduction to programming, logic puzzles, and small web projects.",
      icon: "Code2",
    },
    {
      id: "ext-6",
      title: "Table Tennis & Chess",
      description: "Indoor games leagues that sharpen focus, strategy, and sportsmanship.",
      icon: "Target",
    },
  ],
};