import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { images } from "@/assets/images";

export function PageHero({ title, subtitle, crumb }) {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={images.pageHeroBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        {/* Depth scrim â€” dark toward text, image stays visible above */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/60 to-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 sm:pb-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs font-medium text-white/70 mb-5" aria-label="Breadcrumb">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Home className="size-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="text-white">{crumb || title}</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl drop-shadow-sm">
          {title}
        </h1>

        {subtitle && (
          <p className="text-sm sm:text-base text-white/85 max-w-2xl mt-4 leading-relaxed drop-shadow-sm">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}