import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/public/PageHero";
import { CtaBanner } from "@/components/public/CtaBanner";
import { siteContent } from "@/data/siteContent.data";
import { StaffCard } from "@/components/shared/StaffCard";
import { Reveal } from "@/components/shared/Reveal";

export function StaffPage() {
    const { leadership } = siteContent.about;

    return (
        <div className="w-full flex flex-col">
            <PageHero
                title="Staff Information"
                subtitle="Our leadership team brings experience, care, and a shared commitment to academic and personal growth."
                crumb="Staff Information"
            />

            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {leadership.map((member, index) => (
                            <Reveal key={index} delay={index * 60}>
                                <StaffCard member={member} />
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