import { useEffect, useState } from "react";
import { siteContent } from "@/data/siteContent.data";
import { images } from "@/assets/images";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const slides = images.heroSlides || [images.pageHeroBg];
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
      {/* 1. HERO â€” auto-rotating campus images + clean hierarchy */}
      <section className="relative min-h-screen overflow-hidden text-white flex items-center">
        {/* Background image slider layer */}
        <div className="absolute inset-x-0 top-16 lg:top-20 bottom-0 z-0">
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
          {/* Depth scrim â€” uniform veil + stronger dark toward text */}
          {/* <div className="absolute inset-0 bg-black/15" /> */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/50 to-black/25" />
        </div>

        {/* Centered content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-5 sm:space-y-6">
            <Reveal delay={80}>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold     tracking-tight leading-[1.06] drop-shadow-md text-white/90">
                Welcome to{" "}
                <span className=" ">Al-Hadi Academy Gilgit</span>
              </h1>
            </Reveal>

            {/* <Reveal delay={160}>
              <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                {siteContent.heroSubtitle}
              </p>
            </Reveal> */}

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

        {/* Slider dots â€” pinned to bottom of hero */}
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