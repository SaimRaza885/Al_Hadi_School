import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { PageHero } from "@/components/public/PageHero";
import { PlaceholderPage } from "@/pages/public/PlaceholderPage";
import { blogsData } from "@/data/blogs.data";
import { images } from "@/assets/images";

const fallbackImages = [images.galleryScience, images.sports];

export function BlogDetailPage() {
  const { slug } = useParams();
  const blogIndex = blogsData.findIndex((item) => item.slug === slug);
  const blog = blogsData[blogIndex];

  if (!blog) {
    return (
      <PlaceholderPage
        title="Story Not Found"
        description="This story may have moved or is not available yet."
        badge="Blog"
      />
    );
  }

  return (
    <div className="w-full flex flex-col">
      <PageHero
        title={blog.title}
        subtitle={blog.excerpt}
        crumb="Blog Story"
      />

      <article className="py-16 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-text-muted mb-8">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-3.5" />
              {blog.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="size-3.5" />
              {blog.readTime}
            </span>
            <span>By {blog.author}</span>
          </div>

          <div className="relative h-64 sm:h-96 rounded-xl overflow-hidden bg-surface-tertiary shadow-card mb-10">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-full object-cover"
              onError={(event) => {
                event.currentTarget.src = fallbackImages[blogIndex % fallbackImages.length];
              }}
            />
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl leading-relaxed font-semibold text-text-primary">
              {blog.introduction}
            </p>

            <div className="mt-10 space-y-8">
              {blog.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-xl sm:text-2xl font-bold text-text-primary">
                    {section.heading}
                  </h2>
                  <p className="mt-3 text-base leading-8 text-text-secondary">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>

            <div className="mt-12 pt-6 border-t border-border-light flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/blogs"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover transition-colors"
              >
                <ArrowLeft className="size-3.5" />
                <span>Back to All Stories</span>
              </Link>
              {blogsData[(blogIndex + 1) % blogsData.length] && (
                <Link
                  to={`/blogs/${blogsData[(blogIndex + 1) % blogsData.length].slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover transition-colors"
                >
                  <span>Next Story</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}