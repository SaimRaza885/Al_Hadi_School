import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { blogsData } from "@/data/blogs.data";
import { images } from "@/assets/images";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const fallbackImages = [images.galleryScience, images.sports];

export function BlogHighlightsSection() {
  const featuredBlogs = blogsData.slice(0, 2);

  return (
    <section className="py-20 sm:py-24 bg-surface border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="From School Life"
            title="Ideas, Stories & Discoveries"
            description="A closer look at the learning, curiosity, and community shaping life at Al-Hadi."
            className="mb-0"
          />
          <Reveal>
            <Link
              to="/blogs"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover transition-colors whitespace-nowrap"
            >
              <span>View All Stories</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredBlogs.map((blog, idx) => (
            <Reveal key={blog.slug} delay={idx * 80}>
              <Link
                to={`/blogs/${blog.slug}`}
                className="group grid grid-cols-1 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] h-full bg-background border border-border rounded-xl overflow-hidden shadow-card hover:shadow-md transition-all"
              >
                <div className="relative min-h-52 sm:min-h-full overflow-hidden bg-surface-tertiary">
                  <img
                    src={blog.coverImage}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.src = fallbackImages[idx % fallbackImages.length];
                    }}
                  />
                  <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-surface/90 backdrop-blur-sm text-[11px] font-bold uppercase tracking-wider text-primary shadow-xs">
                    {blog.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="size-3.5" />
                      {blog.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="size-3.5" />
                      {blog.readTime}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold leading-snug text-text-primary group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-xs font-bold text-primary">
                    <span>Read Story</span>
                    <ArrowRight className="size-3.5 -translate-x-1 group-hover:translate-x-0 transition-transform" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}