import {
  CalendarDays,
  Check,
  GraduationCap,
  Landmark,
  Trophy,
} from "lucide-react";
import { PageHero } from "@/components/public/PageHero";
import { CtaBanner } from "@/components/public/CtaBanner";
import { SEOHead } from "@/components/SEOHead";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { academicCalendarData as data } from "@/data/academicCalendar.data";

export function AcademicCalendarPage() {
  return (
    <div className="w-full flex flex-col">
      <SEOHead
        title="Academic Calendar"
        description="Key dates, term schedule, public holidays and assessment policies in the Al-Hadi Academy Gilgit academic calendar for the current session."
        path="/academic-calendar"
      />
      <PageHero
        title="Academic Calendar"
        subtitle={`Key dates, term schedule, public holidays, and assessment policies for session ${data.session}.`}
        crumb="Academic Calendar"
      />

      {/* Key dates */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Session at a Glance"
            title="Key Dates 2026 – 2027"
            description="Every milestone of the academic year, from admissions to the final exams and winter break."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.keyDates.map((item, idx) => (
              <Reveal key={`${item.month}-${item.activity}`} delay={(idx % 3) * 80}>
                <div className="h-full flex flex-col bg-surface border border-border rounded-xl p-6 shadow-card relative overflow-hidden">
                  <span className="absolute inset-y-0 left-0 w-1 bg-primary" />
                  <span className="inline-flex self-start items-center gap-1.5 rounded-full bg-primary-light px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                    <CalendarDays className="size-3" />
                    {item.month}
                  </span>
                  <p className="text-sm font-semibold text-text-primary mt-3 leading-snug">{item.activity}</p>
                  <span className="mt-auto pt-3 text-xs font-medium text-text-muted">{item.date}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Term schedule */}
      <section className="py-20 sm:py-24 bg-surface border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Term Structure"
            title="Three Terms, Six Monthly Tests"
            description="Each term includes two monthly tests and one summative exam."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {data.terms.map((term, idx) => (
              <Reveal key={term.name} delay={idx * 100}>
                <article className="h-full bg-surface border border-border rounded-xl overflow-hidden shadow-card flex flex-col">
                  <div className="bg-primary-muted px-6 py-5 border-b border-border-light flex items-center justify-between gap-3">
                    <h3 className="text-xl font-bold text-text-primary">{term.name}</h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-light px-3 py-1 text-[11px] font-bold text-primary tracking-wide">
                      <GraduationCap className="size-3.5" />
                      {term.period}
                    </span>
                  </div>
                  <ul className="p-6 space-y-3 flex-1">
                    {term.highlights.map((highlight) => (
                      <li
                        key={highlight.label + highlight.detail}
                        className="flex items-start gap-2.5 text-sm text-text-secondary"
                      >
                        <span className="size-4 rounded-full bg-primary-light flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="size-2.5 text-primary" />
                        </span>
                        <span>
                          <span className="font-semibold text-text-primary">{highlight.label}:</span>{" "}
                          {highlight.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Working days */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Working Days"
            title={`${data.workingDaysTotal} Working Days`}
            description="Planned school working days across the calendar year."
            className="mb-10"
          />

          <Reveal>
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-3">
              {data.workingDays.map((day) => (
                <div
                  key={day.month}
                  className="rounded-xl border border-border bg-surface px-2 py-4 text-center shadow-card"
                >
                  <p className="text-[11px] font-bold uppercase tracking-wider text-text-muted">{day.month}</p>
                  <p className="mt-1 text-xl font-extrabold text-text-primary">{day.days}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Holidays */}
      <section className="py-20 sm:py-24 bg-surface border-y border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Off Days"
            title="Public Holidays & Breaks"
            description="Religious, national, and seasonal holidays observed across the session."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.holidays.map((holiday, idx) => (
              <Reveal key={holiday.name} delay={(idx % 3) * 80}>
                <div className="h-full flex items-start gap-4 bg-surface border border-border rounded-xl p-6 shadow-card">
                  <span className="size-11 shrink-0 rounded-xl bg-primary-light text-primary flex items-center justify-center">
                    <Landmark className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-text-primary leading-snug">{holiday.name}</p>
                    <p className="text-xs font-medium text-text-muted mt-1">{holiday.date}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Co-curricular */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Beyond the Classroom"
            title="Co-curricular Activities"
            description="Planned events that keep learning alive outside the classroom."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {data.extraCurricular.map((item, idx) => (
              <Reveal key={item.activity} delay={idx * 70}>
                <div className="h-full flex flex-col items-center text-center bg-surface border border-border rounded-xl p-6 shadow-card">
                  <span className="size-11 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-3">
                    <Trophy className="size-5" />
                  </span>
                  <p className="text-sm font-semibold text-text-primary leading-snug">{item.activity}</p>
                  <p className="text-xs font-medium text-text-muted mt-1.5">{item.date}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}