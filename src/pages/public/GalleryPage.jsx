import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Images, Camera } from "lucide-react";
import { PageHero } from "@/components/public/PageHero";
import { CtaBanner } from "@/components/public/CtaBanner";
import { Reveal } from "@/components/shared/Reveal";
import { dummyImages } from "@/lib/dummyImages";

const photos = dummyImages.gallery;

export function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const openLightbox = (index) => setActiveIndex(index);
  const closeLightbox = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i - 1 + photos.length) % photos.length),
    []
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i + 1) % photos.length),
    []
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (activeIndex === null) return;
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };

    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, closeLightbox, prev, next]);

  const activePhoto = activeIndex !== null ? photos[activeIndex] : null;
  const activeAlt = activePhoto ? dummyImages.galleryFileName(activePhoto) : "";

  return (
    <div className="w-full flex flex-col">
      <PageHero
        title="Gallery"
        subtitle="Visual archives of sports galas, annual exhibitions, cultural festivals, and student achievements across the years."
        crumb="Gallery"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center justify-between gap-4 mb-12">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
                  Campus Memories
                </h2>
                <p className="text-sm text-text-muted mt-1">
                  Photos are auto-loaded from the assets folder — add more any
                  time.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border text-text-secondary">
                <Camera className="size-4 text-primary" />
                <span className="text-xs font-bold tracking-wide">
                  {photos.length} PHOTOS
                </span>
              </div>
            </div>
          </Reveal>

          {photos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((src, idx) => (
                <Reveal key={src} delay={(idx % 6) * 60}>
                  <button
                    type="button"
                    onClick={() => openLightbox(idx)}
                    className="group relative w-full h-full rounded-xl overflow-hidden bg-surface border border-border shadow-card hover:shadow-md transition-all text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label={`Open photo ${dummyImages.galleryFileName(src)}`}
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-surface-tertiary">
                      <img
                        src={src}
                        alt={dummyImages.galleryFileName(src)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs font-medium text-white/90">
                        {dummyImages.galleryFileName(src)}
                      </p>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="text-center py-16">
                <Images className="size-10 text-text-subtle mx-auto mb-3" />
                <p className="text-sm text-text-muted">
                  Drop photos into{" "}
                  <code className="text-xs px-1.5 py-0.5 rounded bg-surface-tertiary">
                    src/data/asserts/website image/gallery/
                  </code>{" "}
                  and they will appear here automatically.
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={activeAlt}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close gallery"
            className="absolute top-5 right-5 size-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="size-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
            className="absolute left-3 sm:left-6 size-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronLeft className="size-6" />
          </button>

          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              key={activePhoto}
              src={activePhoto}
              alt={activeAlt}
              className="w-full max-h-[70vh] object-contain rounded-xl shadow-lg"
            />
            <div className="mt-5 text-center">
              <p className="text-sm font-medium text-white/80">{activeAlt}</p>
              <p className="text-xs text-white/50 mt-1">
                {activeIndex + 1} / {photos.length}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
            className="absolute right-3 sm:right-6 size-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
      )}

      <CtaBanner />
    </div>
  );
}