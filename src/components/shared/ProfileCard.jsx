import { UserRound } from "lucide-react";

function DetailMarker() {
  return (
    <span
      className="relative mt-0.5 inline-flex size-4 shrink-0 items-center justify-center"
      aria-hidden="true"
    >
      <span className="absolute left-0 top-1 size-2.5 rounded-[2px] bg-primary" />
      <span className="absolute left-1.5 top-0 size-2.5 rounded-[2px] bg-success" />
      <span className="absolute bottom-0 right-0 size-2.5 rounded-[2px] bg-warning" />
    </span>
  );
}

export function ProfileCard({
  name,
  image,
  primaryDetail,
  secondaryDetail,
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-lg">
      
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-secondary">
        {image ? (
          <img
            src={image}
            alt={name}
            className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : (
          <div className="flex size-full items-center justify-center text-primary">
            <UserRound className="size-12" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-6 py-5 sm:px-7 sm:py-6">
        <h2 className="text-lg font-extrabold leading-tight text-text-primary sm:text-xl">
          {name}
        </h2>

        <span className="mt-3 h-px w-14 bg-primary-light transition-all duration-300 group-hover:w-16 group-hover:bg-primary" />

        <p className="mt-4 flex items-start gap-2.5 text-sm font-semibold leading-snug text-text-secondary">
          <DetailMarker />
          <span>{primaryDetail}</span>
        </p>

        <p className="mt-2 pl-[26px] text-sm font-medium leading-snug text-text-muted">
          {secondaryDetail}
        </p>
      </div>
    </article>
  );
}