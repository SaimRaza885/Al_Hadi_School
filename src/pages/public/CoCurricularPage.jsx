import { Check } from "lucide-react";
import { PageHero } from "@/components/public/PageHero";
import { CtaBanner } from "@/components/public/CtaBanner";
import { SEOHead } from "@/components/SEOHead";
import { activitiesData } from "@/data/activities.data";

export function CoCurricularPage() {
  return (
    <div className="w-full flex flex-col">
      <SEOHead
        title="Co-curricular"
        description="Co-curricular activities at Al-Hadi Academy Gilgit — sports, arts, clubs and leadership that build confidence, teamwork and discipline alongside academics."
        path="/co-curricular"
      />
      <PageHero
        title="Co-curricular Activities"
        subtitle="Structured activities help students build confidence, teamwork, discipline, and a strong sense of belonging alongside their academic work."
        crumb="Co-curricular Activities"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activitiesData.coCurricular.map((program) => (
              <article
                key={program.id}
                className="bg-surface border border-border rounded-xl overflow-hidden shadow-card flex flex-col"
              >
                <div className="h-52 overflow-hidden bg-surface-tertiary">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-text-primary">{program.title}</h2>
                  <p className="text-xs font-semibold text-primary mt-1">{program.tagline}</p>
                  <p className="text-sm text-text-secondary mt-3 leading-relaxed">{program.description}</p>
                  <ul className="mt-6 pt-5 border-t border-border-light space-y-2.5">
                    {program.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 text-sm text-text-secondary">
                        <span className="size-4 rounded-full bg-primary-light flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="size-2.5 text-primary" />
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
