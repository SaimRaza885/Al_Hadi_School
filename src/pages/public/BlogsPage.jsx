import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { PageHero } from "@/components/public/PageHero";
import { blogsData } from "@/data/blogs.data";
import { images } from "@/assets/images";
import { Reveal } from "@/components/shared/Reveal";

const fallbackImages = [images.galleryScience, images.sports];

export function BlogsPage() {
  return (
    <div className="w-full flex flex-col">
      <PageHero
        title="Blogs"
        subtitle="Explore the learning, curiosity, and community shaping everyday life at Al-Hadi."
        crumb="Blog"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogsData.map((blog, idx) => (
              <Reveal key={blog.slug} delay={idx * 80}>
                <article
                  id={blog.slug}
                  className="group bg-surface border border-border rounded-xl overflow-hidden shadow-card h-full"
                >
                  <div className="relative h-60 overflow-hidden bg-surface-tertiary">
                    <img
                      src={blog.coverImage}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(event) => {
                        event.currentTarget.src = fallbackImages[idx % fallbackImages.length];
                      }}
                    />
                    <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-surface/90 backdrop-blur-sm text-[11px] font-bold uppercase tracking-wider text-primary shadow-xs">
                      {blog.category}
                    </span>
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col justify-between">
                    <div>
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
                      <h2 className="mt-4 text-xl font-bold leading-snug text-text-primary">
                        {blog.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                        {blog.excerpt}
                      </p>
                    </div>
                    <div>
                      <Link
                        to={`/blogs/${blog.slug}`}
                        className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover transition-colors"
                      >
                        <span>Read Story</span>
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}