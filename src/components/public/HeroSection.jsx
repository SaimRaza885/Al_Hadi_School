import { useEffect, useState } from "react";
import { siteContent } from "@/data/siteContent.data";
import { dummyImages } from "@/lib/dummyImages";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const slides = dummyImages.heroSlides || [dummyImages.pageHeroBg];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      {/* 1. HERO — auto-rotating campus images + clean hierarchy */}
      <section className="relative min-h-screen overflow-hidden text-white flex items-center">
        {/* Background image slider layer */}
        <div className="absolute inset-0 z-0">
          {slides.map((src, index) => (
            <img
              key={src}
              src={src}
              alt=""
              aria-hidden={index !== activeIndex}
              className={cn(
                "absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-out",
                index === activeIndex ? "opacity-100" : "opacity-0"
              )}
            />
          ))}
          {/* Depth scrim — dark toward text, image stays visible above */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10" />
        </div>

        {/* Centered content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-5 sm:space-y-6">
            <Reveal delay={80}>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold     tracking-tight leading-[1.06] drop-shadow-sm">
                Welcome to{" "}
                <span className="text-primary-light ">Al-Hadi Academy Gilgit</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                {siteContent.heroSubtitle}
              </p>
            </Reveal>

            {/* <Reveal delay={240}>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  to="#welcome"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover active:bg-primary-active transition-colors focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-transparent"
                >
                 
                  <span>Learn More</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal> */}
          </div>
        </div>

        {/* Slider dots — pinned to bottom of hero */}
        {slides.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center gap-2">
            {slides.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show slide ${index + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  index === activeIndex
                    ? "w-8 bg-white"
                    : "w-3 bg-white/40 hover:bg-white/70"
                )}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}