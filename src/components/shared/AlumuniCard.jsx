import { Award, Quote, UserRound } from "lucide-react";

export function AlumuniCard({ alumuni }) {
    return (
        <article className="group relative bg-surface border border-border rounded-xl p-6 shadow-card hover:shadow-md hover:-translate-y-1 transition-all text-center h-full">
            <Quote className="absolute top-5 right-5 size-5 text-primary-light group-hover:text-primary/30 transition-colors" />
            <div className="mx-auto size-24 rounded-full bg-primary-light overflow-hidden flex items-center justify-center text-primary mb-4 ring-4 ring-primary-muted group-hover:ring-primary/20 transition-all">
                {alumuni.image ? (
                    <img
                        src={alumuni.image}
                        alt={alumuni.name}
                        className="size-full object-cover"
                        loading="lazy"
                    />
                ) : (
                    <UserRound className="size-8" />
                )}
            </div>
            <h2 className="text-base font-bold text-text-primary">{alumuni.name}</h2>
            <p className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold text-primary bg-primary-light rounded-full px-3 py-1">
                <Award className="size-3.5" />
                Matric Marks {alumuni.Matric}
            </p>
            <p className="text-sm text-text-muted mt-3 leading-relaxed">&ldquo;{alumuni.review}&rdquo;</p>
        </article>
    )
}
