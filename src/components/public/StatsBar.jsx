import { siteContent } from "@/data/siteContent.data";
import { Reveal } from "@/components/shared/Reveal";

export function StatsBar() {
  return (
    <section className="py-14 sm:py-16 bg-surface-secondary border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {siteContent.stats.map((stat, idx) => (
            <Reveal
              key={idx}
              delay={idx * 70}
              className="text-center px-4 flex flex-col-reverse"
            >
              <dt className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-text-muted mt-2">
                {stat.label}
              </dt>
              <dd className="text-4xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
                {stat.value}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}