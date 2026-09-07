import { ProfileCard } from "@/components/shared/ProfileCard";

export function StaffCard({ member }) {
    return (
        <ProfileCard
            name={member.name}
            image={member.image}
            primaryDetail={member.role}
            secondaryDetail={member.bio}
        />
    );
}
