import { UserRound } from "lucide-react";

function DetailMarker() {
  return (
    <span className="relative inline-flex size-4 shrink-0 items-center justify-center mt-0.5" aria-hidden="true">
      <span className="absolute left-0 top-1 size-2.5 rounded-[2px] bg-primary" />
      <span className="absolute left-1.5 top-0 size-2.5 rounded-[2px] bg-success" />
      <span className="absolute bottom-0 right-0 size-2.5 rounded-[2px] bg-warning" />
    </span>
  );
}

export function ProfileCard({ name, image, primaryDetail, secondaryDetail }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-lg">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-primary-light">
        {image ? (
          <>
            <img
              src={image}
              alt={name}
              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </>
        ) : (
          <div className="flex size-full items-center justify-center text-primary">
            <UserRound className="size-12" />
          </div>
        )}
      </div>

      <div className="flex min-h-44 flex-1 flex-col px-6 py-6 sm:px-7 sm:py-7">
        <h2 className="text-lg font-extrabold leading-tight text-text-primary sm:text-xl">
          {name}
        </h2>

        <span className="mt-3 h-px w-10 bg-primary-light transition-all duration-300 group-hover:w-14 group-hover:bg-primary" />

        <p className="mt-4 flex items-start gap-2.5 text-sm font-semibold leading-snug text-text-secondary">
          <DetailMarker />
          <span>{primaryDetail}</span>
        </p>
        <p className="mt-3 pl-6 text-sm font-medium leading-snug text-text-muted">
          {secondaryDetail}
        </p>
      </div>
    </article>
  );
}