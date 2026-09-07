import {
  BrainCircuit,
  FlaskConical,
  HeartHandshake,
  Lightbulb,
  Map,
  Mountain,
  Palette,
  Trophy,
  UsersRound,
} from "lucide-react";
import { PageHero } from "@/components/public/PageHero";
import { CtaBanner } from "@/components/public/CtaBanner";
import { Reveal } from "@/components/shared/Reveal";

const extraCurricularAreas = [
   {
  title: "Hiking & Outdoor Adventure",
  icon: Mountain,
  items: [
    "Mountain Hiking",
    "Nature Walks",
    "Trekking Adventures",
    "Outdoor Exploration",
    "Team-Building Activities",
  ],
},

  {
    title: "Academic & Intellectual Enrichment",
    icon: BrainCircuit,
    items: [
      "Advanced Mathematics",
      "English Language Enrichment",
      "Logic and Critical Thinking",
      "Debate and Discussion",
      "Reading and Literature",
    ],
  },
  {
    title: "Science & Technology",
    icon: FlaskConical,
    items: [
      "Robotics",
      "Computer Science",
      "Programming",
      "Astronomy",
      "Innovation and Invention",
    ],
  },
  {
    title: "Arts & Creativity",
    icon: Palette,
    items: [
      "Calligraphy",
      "Visual Arts and Crafts",
      "Theater and Drama",
      "Music and Choir",
      "Creative Arts Workshops",
    ],
  },
  {
    title: "Sports & Physical Development",
    icon: Trophy,
    items: [
      "Football",
      "Volleyball",
      "Gymnastics",
      "Swimming",
      "Athletics and Fitness",
    ],
  },
  {
    title: "Research & Innovation",
    icon: Lightbulb,
    items: [
      "Student Research Projects",
      "Science Fair",
      "Olympiad Preparation",
      "Independent Study",
      "Project-Based Learning",
    ],
  },
  {
    title: "Leadership & Student Development",
    icon: UsersRound,
    items: [
      "Student Leadership Programs",
      "Student Council",
      "Teamwork Activities",
      "Event Organization",
      "Decision-Making and Leadership Workshops",
    ],
  },
  {
    title: "Educational Camps & Excursions",
    icon: Map,
    items: [
      "Educational Field Trips",
      "Historical and Cultural Visits",
      "Science and Museum Visits",
      "Nature and Outdoor Learning",
      "Educational Camps",
    ],
  },

];

export function ExtraCurricularPage() {
  return (
    <div className="w-full flex flex-col">
      <PageHero
        title="Extra-Curricular Activities"
        subtitle="A broad programme of academic, creative, physical, and character-building opportunities that helps every student discover a strength and a sense of purpose."
        crumb="Extra-Curricular Activities"
      />

      <section className="py-20 bg-background border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Beyond the Classroom
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight mt-2">
                Many ways to learn, lead, and grow
              </h2>
              <p className="text-sm sm:text-base text-text-secondary mt-4 leading-relaxed">
                Students can explore new interests, build practical skills, and learn alongside their peers through a balanced mix of structured programmes and hands-on experiences.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {extraCurricularAreas.map(({ title, icon: Icon, items }, index) => (
              <Reveal key={title} delay={index * 60} className="h-full">
                <article className="group h-full bg-surface border border-border rounded-xl p-6 shadow-card hover:shadow-md hover:-translate-y-1 transition-all">
                  <div className="size-12 rounded-xl bg-primary-light flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-base font-bold text-text-primary mt-5 leading-snug">
                    {title}
                  </h3>
                  <ul className="mt-5 pt-5 border-t border-border-light space-y-3">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary leading-relaxed">
                        <span className="size-1.5 rounded-full bg-primary shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}