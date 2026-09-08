import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/public/PageHero";
import { CtaBanner } from "@/components/public/CtaBanner";
import { SEOHead } from "@/components/SEOHead";
import { siteContent } from "@/data/siteContent.data";
import { FacultyCard } from "@/components/shared/FacultyCard";
import { Reveal } from "@/components/shared/Reveal";

export function FacultyPage() {
  const { leadership } = siteContent.about;

  return (
    <div className="w-full flex flex-col">
      <SEOHead
        title="Faculty"
        description="Meet the faculty and leadership team of Al-Hadi Academy Gilgit — experienced teachers and mentors committed to academic and personal growth."
        path="/faculty"
      />
      <PageHero
        title="Faculty"
        subtitle="Our leadership team brings experience, care, and a shared commitment to academic and personal growth."
        crumb="Faculty"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((member, index) => (
              <Reveal key={index} delay={index * 60}>
                <FacultyCard member={member} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-12 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors"
              >
                <span>Contact the Office</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
