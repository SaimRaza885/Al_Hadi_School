import { UserRound } from "lucide-react";

export function AlumuniCard({ alumuni }) {
  const matricScore = alumuni.Matric || "--";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-lg">

      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-secondary">
        {alumuni.image ? (
          <img
            src={alumuni.image}
            alt={alumuni.name}
            className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="flex size-full items-center justify-center text-primary">
            <UserRound className="size-16" />
          </div>
        )}

        {/* Bottom depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* FEATURED PURE SVG/CSS HONOR BADGE - Responsive on Every Device */}
        <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10 select-none">
          <div className="relative flex flex-col items-center filter drop-shadow-xl transition-transform duration-300 group-hover:scale-105">
            <svg
              viewBox="0 0 100 125"
              className="h-24 w-20 sm:h-28 sm:w-24 md:h-32 md:w-26 overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Ribbon Tail Left */}
              <path
                d="M34 76L16 118L36 108L50 118L43 76H34Z"
                fill="#991B1B"
              />
              {/* Ribbon Tail Right */}
              <path
                d="M66 76L50 118L64 108L84 118L66 76H66Z"
                fill="#7F1D1D"
              />

              {/* Reddish Outer Starburst Ring */}
              <circle cx="50" cy="48" r="44" fill="#DC2626" opacity="0.9" />

              {/* Main Badge Base - Reddish Gradient */}
              <circle cx="50" cy="48" r="41" fill="url(#badge-brand-grad)" stroke="#FFFFFF" strokeWidth="2.5" />

              {/* Gradient Definitions */}
              <defs>
                <linearGradient id="badge-brand-grad" x1="50" y1="7" x2="50" y2="89" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#DC2626" />
                  <stop offset="1" stopColor="#991B1B" />
                </linearGradient>
              </defs>
            </svg>

            {/* Badge Centered Score & Label */}
            <div className="absolute top-0 inset-x-0 h-[76%] flex flex-col items-center justify-center text-center p-1">
              {/* <span className="text-[10px] sm:text-xs text-amber-300 leading-none">★</span> */}
              <span className="text-xl sm:text-2xl md:text-3xl font-black leading-none text-white tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                {matricScore}
                <span className="ml-0.5 text-[0.55em] font-bold text-amber-300">%</span>
              </span>
              <span className="mt-0.5 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-amber-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                Matric
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
        {/* Name */}
        <div>
          <h2 className="text-lg font-extrabold leading-tight text-text-primary transition-colors group-hover:text-primary sm:text-xl md:text-2xl">
            {alumuni.name}
          </h2>
          <div className="mt-2.5 h-0.5 w-12 bg-primary-light transition-all duration-300 group-hover:w-16 group-hover:bg-primary" />
        </div>

        {/* Review / Testimonial */}
        {alumuni.review && (
          <p className="mt-4 text-sm font-medium leading-relaxed text-text-muted italic sm:text-base">
            "{alumuni.review}"
          </p>
        )}
      </div>
    </article>
  );
}