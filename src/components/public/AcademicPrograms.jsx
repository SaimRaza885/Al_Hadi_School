import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/data/siteContent.data";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function AcademicPrograms() {
  return (
    <section className="py-20 sm:py-24 bg-surface border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Curriculum"
            title="Academic Programs"
            description="Three progressive stages of learning, each building on the last — from middle school foundations to board exam preparation."
            className="mb-0"
          />
          <Reveal>
            <Link
              to="/curriculum"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover transition-colors whitespace-nowrap"
            >
              <span>View All Programs</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteContent.academicPrograms.map((prog, idx) => (
            <Reveal key={prog.id} delay={idx * 80}>
              <Link
                to="/curriculum"
                className="group flex flex-col h-full bg-surface border border-border rounded-xl overflow-hidden shadow-card hover:shadow-md transition-all"
              >
                <div className="relative h-44 w-full overflow-hidden bg-surface-tertiary">
                  <img
                    src={prog.image}
                    alt={prog.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 right-3 bg-surface/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[11px] font-bold text-text-primary shadow-xs">
                    {prog.grades}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-text-primary group-hover:text-primary transition-colors">
                    {prog.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary mt-2 leading-relaxed">
                    {prog.description}
                  </p>
                  <span className="mt-auto pt-4 inline-flex items-center gap-1 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all">
                    <span>Explore</span>
                    <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}