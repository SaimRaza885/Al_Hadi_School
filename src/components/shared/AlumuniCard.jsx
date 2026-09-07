import { ProfileCard } from "@/components/shared/ProfileCard";

export function AlumuniCard({ alumuni }) {
    return (
        <ProfileCard
            name={alumuni.name}
            image={alumuni.image}
            primaryDetail={alumuni.study || "Al-Hadi Alumni"}
            secondaryDetail={alumuni.Matric ? `Matric Marks ${alumuni.Matric}` : alumuni.review}
        />
    );
}
