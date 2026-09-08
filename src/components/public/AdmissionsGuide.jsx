import { siteContent } from "@/data/siteContent.data";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function AdmissionsGuide() {
const { admissionsGuide } = siteContent;

  return (
    <section className="py-20 sm:py-24 bg-surface border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Enrollment"
          title="Step-by-Step Admissions Guide"
        />

        <div className="relative">
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-border" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 relative z-10">
            {admissionsGuide.map((step, idx) => (
              <Reveal key={step.step} delay={idx * 90}>
                <div className="flex flex-col items-center text-center group">
                  <div className="size-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-base font-bold shadow-sm ring-4 ring-primary-light mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-text-primary transition-colors group-hover:text-primary">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary mt-2 leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}