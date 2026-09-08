import { images } from "@/assets/images";
import { Reveal } from "@/components/shared/Reveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const hero = images.heroImage;

  return (
    <div>
      <section className="relative min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] overflow-hidden text-white flex items-center">
        {/* Static hero image */}
        <div className="absolute inset-0 z-0">
          <img
            src={hero.src}
            width={hero.width}
            height={hero.height}
            alt=""
            aria-hidden="true"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Depth scrim — darkest behind the centered text, image stays visible at the edges */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/60 to-black/30" />
        </div>

        {/* Centered content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-5 sm:space-y-6">
            <Reveal delay={80}>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.06] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                Welcome to <span>Al-Hadi Academy Gilgit</span>
              </h1>
            </Reveal>

            <Reveal delay={240}>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  to="/curriculum"
                  className="group inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/35 active:translate-y-0 active:bg-primary-active focus:outline-none focus:ring-2 focus:ring-white/80 focus:ring-offset-2 focus:ring-offset-transparent"
                >
                  <span>Explore Our Programs</span>
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}