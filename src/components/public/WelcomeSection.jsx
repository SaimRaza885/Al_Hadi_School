import { Quote } from "lucide-react";
import { siteContent } from "@/data/siteContent.data";
import { Reveal } from "@/components/shared/Reveal";

export function WelcomeSection() {
  const { principal } = siteContent;

  return (
    <section className="py-20 sm:py-24 bg-background border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Principal portrait */}
          <Reveal className="lg:col-span-5">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="rounded-xl overflow-hidden bg-surface-tertiary border border-border">
                <img
                  src={principal.image}
                  alt={principal.name}
                  width={761}
                  height={800}
                  className="w-full h-[420px] sm:h-[460px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="mt-4 flex items-center justify-between px-1">
                <div>
                  <h3 className="text-base font-bold text-text-primary">{principal.name}</h3>
                  <p className="text-xs text-text-muted font-medium">{principal.title}</p>
                </div>
                {/* <span className="font-serif italic text-sm font-semibold text-primary">
                  {principal.name}
                </span> */}
              </div>
            </div>
          </Reveal>

          {/* Right: Welcome & vision */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Welcome from the Principal
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight leading-tight mt-2">
                {principal.welcomeHeading}
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <div className="space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed">
                {principal.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="flex gap-4 bg-primary-muted border border-border rounded-xl p-5">
                <div className="size-10 rounded-lg bg-primary-light flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Quote className="size-5" />
                </div>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  <span className="font-semibold text-text-primary">From the Principal: </span>
                  {principal.lsaNote}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}