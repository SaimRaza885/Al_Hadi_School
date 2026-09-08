import { Link } from "react-router-dom";
import {
  GraduationCap,
  ShieldCheck,
  HeartHandshake,
  Cpu,
  ArrowRight,
  Target,
  Eye,
  History,
  Quote,
} from "lucide-react";
import { PageHero } from "@/components/public/PageHero";
import { CtaBanner } from "@/components/public/CtaBanner";
import { SEOHead } from "@/components/SEOHead";
import { siteContent } from "@/data/siteContent.data";
import { images } from "@/assets/images";
import { FacultyCard } from "@/components/shared/FacultyCard";
import { Reveal } from "@/components/shared/Reveal";

const valueIcons = {
  GraduationCap: GraduationCap,
  ShieldCheck: ShieldCheck,
  HeartHandshake: HeartHandshake,
  Cpu: Cpu,
};

export function AboutPage() {
  const { about, principal } = siteContent;

  return (
    <div className="w-full flex flex-col">
      <SEOHead
        title="About Us"
        description="Discover the mission, vision and story of Al-Hadi Academy Gilgit, Danyor — a modern Islamic school blending academic excellence, ethical character and family partnership for grades 6-10."
        path="/about"
      />
      <PageHero
        title="About Us"
        subtitle={about.heroSubtitle}
        crumb="About Us"
      />

      {/* Mission & Vision */}
      <section className="py-20 bg-surface border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              <div className="bg-surface-tertiary rounded-xl p-6 sm:p-8 border border-border h-full">
                <div className="size-12 rounded-xl bg-surface flex items-center justify-center text-primary mb-5 shadow-card">
                  <Eye className="size-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Our Vision</span>
                <p className="mt-3 text-text-secondary leading-relaxed text-sm sm:text-base">
                  {about.vision}
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="bg-primary-muted rounded-xl p-6 sm:p-8 border border-border h-full">
                <div className="size-12 rounded-xl bg-primary-light flex items-center justify-center text-primary mb-5">
                  <Target className="size-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Mission</span>
                <p className="mt-3 text-text-secondary leading-relaxed text-sm sm:text-base">
                  {about.mission}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Story text */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="size-12 rounded-xl bg-primary-light flex items-center justify-center text-primary">
                  <History className="size-6" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight mt-4">
                  Our Story
                </h2>
              </Reveal>

              <Reveal delay={80}>
                <div className="space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed">
                  {about.story.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="bg-primary-muted border-l-4 border-primary rounded-r-xl p-4 text-xs sm:text-sm text-text-secondary">
                  <span className="font-semibold text-text-primary">From the Principal: </span>
                  {principal.lsaNote}
                </div>
              </Reveal>
            </div>

            {/* Story image */}
            <div className="lg:col-span-5">
              <Reveal delay={100} className="lg:h-full">
                <div className="relative h-72 lg:h-full lg:min-h-[24rem] w-full overflow-hidden rounded-2xl border border-border shadow-card">
                  <img
                    src={images.about_hero}
                    alt="Al-Hadi Academy Gilgit campus"
                    className="size-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      {/* Values */}
      <section className="py-20 bg-surface border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Values</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight mt-2">
                What We Stand For
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {about.values.map((value, index) => {
              const Icon = valueIcons[value.icon] || GraduationCap;
              return (
                <Reveal key={value.title} delay={index * 60}>
                  <div className="group bg-surface border border-border rounded-xl p-6 shadow-card hover:shadow-md transition-all hover:-translate-y-1 h-full">
                    <div className="size-12 rounded-xl bg-primary-light flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-base font-bold text-text-primary">{value.title}</h3>
                    <p className="text-xs sm:text-sm text-text-secondary mt-2 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="staff" className="py-20 bg-background border-b border-border-light scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Leadership</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight mt-2">
                  Meet Our Leadership Team
                </h2>
              </div>
              <p className="text-sm sm:text-base text-text-secondary max-w-md">
                Experienced educators guiding every facet of academic and co-curricular life.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.leadership.slice(0,4).map((member, index) => (
              <Reveal key={index} delay={index * 60}>
                <FacultyCard member={member} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-12 text-center">
              <Link
                to="/faculty"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors"
              >
                <span>View Faculty Directory</span>
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