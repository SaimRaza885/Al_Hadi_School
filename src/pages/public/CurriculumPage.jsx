import {
  Award,
  Brain,
  Check,
  FlaskConical,
  FolderKanban,
  Lightbulb,
  MonitorPlay,
  Presentation,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/public/PageHero";
import { CtaBanner } from "@/components/public/CtaBanner";
import { SEOHead } from "@/components/SEOHead";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { curriculumData } from "@/data/curriculum.data";

const iconMap = {
  Lightbulb,
  Brain,
  FlaskConical,
  Users,
  Presentation,
  FolderKanban,
  MonitorPlay,
};

export function CurriculumPage() {
  return (
    <div className="w-full flex flex-col">
      <SEOHead
        title="Curriculum"
        description="Explore the Al-Hadi Academy Gilgit curriculum — middle school, secondary school and STEM programs blending rigorous academics with the Life Skills & Activities framework."
        path="/curriculum"
      />
      <PageHero
        title="Curriculum"
        subtitle={`Our complete curriculum plan for session ${curriculumData.session} — philosophy, study levels, assessment, teaching methodology, and the academic calendar, based on FBISE standards.`}
        crumb="Curriculum"
      />

      {/* Philosophy */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Philosophy"
            title="Our Curriculum Philosophy"
            description="Four principles shape every lesson, activity, and assessment at Al-Hadi Academy."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculumData.philosophy.map((item, idx) => {
              const Icon = iconMap[item.icon];
              return (
                <Reveal key={item.title} delay={idx * 80}>
                  <div className="h-full bg-surface border border-border rounded-xl p-6 shadow-card hover:-translate-y-1 hover:shadow-md transition-all">
                    <div className="size-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-4">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-base font-bold text-text-primary">{item.title}</h3>
                    <p className="text-sm text-text-secondary mt-2 leading-relaxed">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="py-20 sm:py-24 bg-surface border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Programme"
            title="Two Levels, One Learning Journey"
            description="A progressive structure where each stage builds the knowledge, skills, and habits the next one demands."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {curriculumData.levels.map((level, idx) => (
              <Reveal key={level.name} delay={idx * 100}>
                <article className="h-full bg-surface border border-border rounded-xl overflow-hidden shadow-card flex flex-col">
                  <div className="bg-primary-muted px-6 py-5 border-b border-border-light flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-xl font-bold text-text-primary">{level.name}</h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-light px-3 py-1 text-[11px] font-bold text-primary tracking-wide">
                      <Award className="size-3.5" />
                      {level.grades}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">Teaching approach</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{level.approach}</p>

                    <div className="mt-6 pt-5 border-t border-border-light">
                      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
                        Subjects ({level.subjects.length})
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {level.subjects.map((subject) => (
                          <li
                            key={subject}
                            className="inline-flex items-center gap-1.5 rounded-md bg-surface-tertiary px-3 py-1.5 text-xs font-medium text-text-secondary"
                          >
                            <Check className="size-3 text-primary shrink-0" />
                            {subject}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Assessment"
            title="How Learning Is Measured"
            description="A balanced assessment system that tracks understanding continuously, not just at exam time."
          />

          {/* Weighted bar */}
          <Reveal className="max-w-3xl mx-auto mb-10">
            <div className="flex h-4 w-full overflow-hidden rounded-full bg-surface-tertiary">
              <div className="w-[40%] bg-primary" />
              <div className="w-[60%] bg-primary-active" />
            </div>
            <div className="flex justify-between mt-3 text-xs font-bold uppercase tracking-wider">
              <span className="text-primary">Formative · 40%</span>
              <span className="text-primary-active">Summative · 60%</span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {curriculumData.assessment.map((group, idx) => (
              <Reveal key={group.label} delay={idx * 100}>
                <div className="h-full bg-surface border border-border rounded-xl p-6 shadow-card">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-bold text-text-primary">{group.label}</h3>
                    <span className="text-3xl font-extrabold text-primary">{group.weight}%</span>
                  </div>
                  <div className="mt-4 h-1.5 w-full rounded-full bg-surface-tertiary overflow-hidden">
                    <div
                      className={group.label === "Formative" ? "w-[40%] bg-primary" : "w-[60%] bg-primary-active"}
                    />
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                        <span className="size-4 rounded-full bg-primary-light flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="size-2.5 text-primary" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 sm:py-24 bg-surface border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Methodology"
            title="Our Teaching Methodology"
            description="Four classroom approaches keep lessons active, visual, and collaborative."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculumData.methodology.map((item, idx) => {
              const Icon = iconMap[item.icon];
              return (
                <Reveal key={item.title} delay={idx * 80}>
                  <div className="h-full bg-surface border border-border rounded-xl p-6 shadow-card hover:-translate-y-1 hover:shadow-md transition-all">
                    <div className="size-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-4">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-base font-bold text-text-primary">{item.title}</h3>
                    <p className="text-sm text-text-secondary mt-2 leading-relaxed">{item.description}</p>
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