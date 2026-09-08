import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/data/siteContent.data";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AlumuniCard } from "@/components/shared/AlumuniCard";

export function AlumniHomeSection({ count = 6, className }) {
  const { alumuni } = siteContent.about;
  const featured = (alumuni || []).slice(0, count);

  if (featured.length === 0) return null;

  return (
    <section className={`py-20 sm:py-24 bg-background border-b border-border-light ${className || ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Our Alumni"
          title="Toppers Who Inspire Us"
          description="Proud graduates and Matric toppers whose dedication continues to inspire every student at Al-Hadi Academy."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((alumuni, index) => (
            <Reveal key={index} delay={index * 60}>
              <AlumuniCard alumuni={alumuni} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <Link
              to="/alumuni"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors focus:outline-none focus:ring-2 focus:ring-primary ring-offset-2"
            >
              <span>View All Alumni</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
