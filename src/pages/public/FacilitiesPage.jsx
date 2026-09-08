import {
  FlaskConical,
  Laptop,
  BookOpen,
  Trophy,
  Palette,
  MonitorPlay,
  Home,
  Check,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/public/PageHero";
import { CtaBanner } from "@/components/public/CtaBanner";
import { SEOHead } from "@/components/SEOHead";
import { facilitiesData, facilitiesStats } from "@/data/facilities.data";
import { Reveal } from "@/components/shared/Reveal";

const facilityIcons = {
  FlaskConical: FlaskConical,
  Laptop: Laptop,
  BookOpen: BookOpen,
  Trophy: Trophy,
  Palette: Palette,
  MonitorPlay: MonitorPlay,
  Home: Home,
};

export function FacilitiesPage() {
  return (
    <div className="w-full flex flex-col">
      <SEOHead
        title="Campus Facilities"
        description="Explore Al-Hadi Academy Gilgit's campus facilities — hostel care, science and STEM labs, library, sports grounds, smart classrooms and creative arts spaces."
        path="/facilities"
      />
      <PageHero
        title="Facilities"
        subtitle="Explore our science & robotics laboratories, sports arena, library, and arts studios — built to support academic rigor and holistic growth."
        crumb="Facilities"
      />

      {/* Stats strip */}
      <section className="py-12 bg-surface-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {facilitiesStats.map((stat, idx) => (
              <Reveal key={idx} delay={idx * 60}>
                <div className="text-center px-4 py-3 flex flex-col items-center justify-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold tracking-wider uppercase text-text-muted mt-2">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities grid */}
      <section className="py-20 bg-background border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Campus Facilities</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight mt-2">
                Everything Your Child Needs to Thrive
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facilitiesData.map((facility, index) => {
              const Icon = facilityIcons[facility.icon] || MonitorPlay;
              return (
                <Reveal key={facility.id} delay={index * 60}>
                  <div className="group bg-surface border border-border rounded-xl p-6 sm:p-8 shadow-card hover:shadow-md transition-all flex flex-col h-full">
                    <div className="flex items-start gap-4">
                      <div className="size-14 rounded-xl bg-primary-light flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="size-7" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-text-primary">{facility.title}</h3>
                        <p className="text-xs sm:text-sm text-text-secondary mt-1.5 leading-relaxed">
                          {facility.description}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-6 pt-6 border-t border-border-light space-y-2.5">
                      {facility.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                          <span className="size-4 rounded-full bg-success-light flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="size-2.5 text-success-foreground" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
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