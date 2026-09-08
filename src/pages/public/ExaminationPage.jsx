import { BadgeCheck, Check, ClipboardList, Hourglass, RefreshCcw } from "lucide-react";
import { PageHero } from "@/components/public/PageHero";
import { CtaBanner } from "@/components/public/CtaBanner";
import { SEOHead } from "@/components/SEOHead";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { examinationData as data } from "@/data/examination.data";

const segmentColor = (index) => data.segmentColors[index] || "bg-primary";

export function ExaminationPage() {
  return (
    <div className="w-full flex flex-col">
      <SEOHead
        title="Examinations"
        description="How assessment works at Al-Hadi Academy Gilgit — test structure, marks distribution, passing criteria and examination policies for the current session."
        path="/examinations"
      />
      <PageHero
        title="Examinations"
        subtitle={`How assessment works at Al-Hadi Academy — test structure, marks distribution, passing criteria, and examination policies for session ${data.session}.`}
        crumb="Examinations"
      />

      {/* Session snapshot */}
      <section className="py-16 border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {data.snapshot.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 70}>
                <div className="text-center">
                  <p className="text-4xl sm:text-5xl font-extrabold tracking-tight">{stat.value}</p>
                  <p className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-text-muted leading-relaxed max-w-[180px] mx-auto">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Marks distribution — the signature comparison */}
      <section className="py-20 sm:py-24 bg-surface border-b border-border-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Marks Distribution"
            title="How Marks Are Split Across Question Types"
            description="Monthly tests and summative exams weight their questions differently — the bars show each share at a glance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.marksDistribution.map((exam, idx) => (
              <Reveal key={exam.examType} delay={idx * 100}>
                <div className="h-full bg-surface border border-border rounded-xl p-6 sm:p-8 shadow-card flex flex-col">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-text-primary">{exam.examType}</h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-light px-3 py-1 text-[11px] font-bold text-primary">
                      <Hourglass className="size-3" />
                      {exam.duration}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-text-muted mb-6">{exam.coverage}</p>

                  <div className="flex h-4 w-full overflow-hidden rounded-full bg-surface-tertiary">
                    {exam.segments.map((segment, segIdx) => {
                      const widthClass = data.segmentWidths[segment.pct];
                      return (
                        <div
                          key={segment.label}
                          className={`${widthClass} ${segmentColor(segIdx)} flex items-center justify-center`}
                        />
                      );
                    })}
                  </div>

                  <ul className="mt-6 space-y-2.5">
                    {exam.segments.map((segment, segIdx) => (
                      <li key={segment.label} className="flex items-center gap-3 text-sm">
                        <span aria-hidden className={`size-3 rounded-sm shrink-0 ${segmentColor(segIdx)}`} />
                        <span className="font-semibold text-text-primary">{segment.pct}%</span>
                        <span className="text-text-secondary">{segment.label}</span>
                        {segment.blurb && <span className="ml-auto text-xs text-text-muted text-right">{segment.blurb}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Rules of the Exam Hall"
            title="Examination Policies"
            description="The conduct, attendance, and promotion rules every student follows."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.policies.map((policy, idx) => (
              <Reveal key={policy.title} delay={idx * 100}>
                <div className="h-full bg-surface border border-border rounded-xl p-6 shadow-card">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="size-10 rounded-xl bg-primary-light text-primary flex items-center justify-center shrink-0">
                      <ClipboardList className="size-5" />
                    </span>
                    <h3 className="text-base font-bold text-text-primary leading-snug">{policy.title}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {policy.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-text-secondary">
                        <span className="size-4 rounded-full bg-primary-light flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="size-2.5 text-primary" />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Passing marks & promotion */}
      <section className="py-20 sm:py-24 bg-surface border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Progression"
            title="Passing Marks & Promotion"
            description="The bar rises with each grade — and every summative exam must be passed to move up."
          />

          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
            {data.passingMarks.map((item, idx) => (
              <Reveal key={item.grade} delay={idx * 90}>
                <div className="h-full text-center bg-surface border border-border rounded-xl p-6 shadow-card">
                  <p className="text-4xl font-extrabold text-primary">{item.marks}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-text-muted">{item.grade}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150} className="mt-8">
            <div className="max-w-5xl mx-auto rounded-2xl bg-primary-muted border border-border p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-center gap-5">
                <span className="size-12 shrink-0 rounded-xl bg-surface text-primary flex items-center justify-center shadow-xs">
                  <BadgeCheck className="size-6" />
                </span>
                <div className="flex-1">
                  <p className="text-base font-bold text-text-primary">
                    A student must pass all summative exams to be promoted to the next grade.
                  </p>
                  <p className="mt-2 flex items-start gap-2 text-sm text-text-secondary leading-relaxed">
                    <RefreshCcw className="size-4 text-primary shrink-0 mt-0.5" />
                    {data.reExam}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}