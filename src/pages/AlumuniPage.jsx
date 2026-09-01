import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { PageHero } from "@/components/public/PageHero";
import { CtaBanner } from "@/components/public/CtaBanner";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { siteContent } from "@/data/siteContent.data";
import { AlumuniCard } from "@/components/shared/AlumuniCard";
import { Reveal } from "@/components/shared/Reveal";

const alumnaiStats = [
  { value: "98%", label: "Top Matric Result" },
  { value: "94%", label: "Average Board Marks" },
  { value: "1,200+", label: "Strong Alumni Network" },
  { value: "25+", label: "Years of Excellence" },
];

export function AlumuniPage() {
    const { alumuni } = siteContent.about;
    const featured = alumuni[0];

    return (
        <div className="w-full flex flex-col">
            <PageHero
                title="Our Alumni"
                subtitle="Meet the toppers and proud graduates whose dedication continues to inspire every student at Al-Hadi."
                crumb="Alumni / Topers"
            />

      

            {/* Alumni spotlight */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {alumuni.map((alumuni, index) => (
                            <Reveal key={index} delay={index * 60}>
                                <AlumuniCard alumuni={alumuni} />
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={200}>
                        <div className="mt-12 text-center">
                            <Link
                                to="/facilities"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors focus:outline-none focus:ring-2 focus:ring-primary ring-offset-2"
                            >
                                <span>Our Facilities</span>
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