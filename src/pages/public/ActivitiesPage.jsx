import {
  Compass,
  Music4,
  BookOpen,
  Leaf,
  Code2,
  Target,
  Mountain,
  Check,
} from "lucide-react";
import { PageHero } from "@/components/public/PageHero";
import { CtaBanner } from "@/components/public/CtaBanner";
import { SEOHead } from "@/components/SEOHead";
import { activitiesData } from "@/data/activities.data";
import { Reveal } from "@/components/shared/Reveal";

const extraIcons = {
  Compass: Compass,
  Music4: Music4,
  BookOpen: BookOpen,
  Leaf: Leaf,
  Code2: Code2,
  Target: Target,
  Mountain: Mountain,
};

export function ActivitiesPage() {
  return (
    <div className="w-full flex flex-col">
      <SEOHead
        title="Student Activities"
        description="Explore sports, creative arts, clubs and leadership programmes at Al-Hadi Academy Gilgit. Structured co-curricular activities that build confidence, teamwork and discipline."
        path="/activities/extra-curricular"
      />
      <PageHero
        title="Activities"
        subtitle={activitiesData.intro}
        crumb="Activities"
      />

      {/* Co-curricular flagship programs */}
      <section className="py-20 bg-background border-b border-border-light scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Co-Curricular</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight mt-2">
                  Flagship Programs
                </h2>
              </div>
              <p className="text-sm sm:text-base text-text-secondary max-w-md">
                Structured, coached programs that run through the academic year alongside the timetable.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activitiesData.coCurricular.map((program, index) => (
              <Reveal key={program.id} delay={index * 80}>
                <div
                  id={program.id === "act-hiking" ? "hiking" : program.id === "act-arts" ? "creative-arts" : "leadership"}
                  className="group bg-surface border border-border rounded-xl overflow-hidden shadow-card hover:shadow-md transition-all flex flex-col h-full"
                >
                  <div className="h-48 w-full overflow-hidden bg-surface-tertiary">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-text-primary">{program.title}</h3>
                    <p className="text-xs font-semibold text-primary mt-0.5">{program.tagline}</p>
                    <p className="text-xs sm:text-sm text-text-secondary mt-3 leading-relaxed">
                      {program.description}
                    </p>

                    <ul className="mt-5 pt-5 border-t border-border-light space-y-2 mt-auto">
                      {program.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-text-secondary">
                          <span className="size-4 rounded-full bg-primary-light flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="size-2.5 text-primary" />
                          </span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Extra-curricular clubs */}
      <section id="clubs" className="py-20 bg-surface border-b border-border-light scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Extra-Curricular</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight mt-2">
                Clubs & Societies for Every Interest
              </h2>
              <p className="text-sm sm:text-base text-text-secondary mt-3 leading-relaxed">
                Weekly clubs where students explore hobbies, build friendships, and develop confidence beyond the syllabus.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activitiesData.extraCurricular.map((club, index) => {
              const Icon = extraIcons[club.icon] || Compass;
              return (
                <Reveal key={club.id} delay={index * 60}>
                  <div className="group bg-background border border-border rounded-xl p-6 shadow-card hover:shadow-md transition-all hover:-translate-y-1 flex items-start gap-4 h-full">
                    <div className="size-12 rounded-xl bg-primary-light flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-text-primary">{club.title}</h3>
                      <p className="text-xs sm:text-sm text-text-secondary mt-1.5 leading-relaxed">
                        {club.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}