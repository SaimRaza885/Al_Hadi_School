import { SEOHead } from "@/components/SEOHead";
import { OrganizationSchema, WebSiteSchema } from "@/components/SchemaData";
import { HeroSection } from "@/components/public/HeroSection";
import { WelcomeSection } from "@/components/public/WelcomeSection";
import { StatsBar } from "@/components/public/StatsBar";
import { AlumniHomeSection } from "@/components/public/AlumniHomeSection";
import { TalentsSection } from "@/components/public/TalentsSection";
import { AcademicPrograms } from "@/components/public/AcademicPrograms";
import { BlogHighlightsSection } from "@/components/public/BlogHighlightsSection";
import { AdmissionsGuide } from "@/components/public/AdmissionsGuide";
import { CtaBanner } from "@/components/public/CtaBanner";

export function HomePage() {
  return (
    <div className="w-full flex flex-col">
      <SEOHead
        title=""
        description="Al-Hadi Academy Gilgit, Danyor — a modern Islamic school for grades 6-10 blending academic excellence, character building, STEM, sports and the arts. Admissions and enquiries open."
        path="/"
      />
      <OrganizationSchema />
      <WebSiteSchema />
      {/* 1. Hero & Quick Actions */}
      <HeroSection />

      {/* 2. Principal Welcome & Vision */}
      <WelcomeSection />

      {/* 3. Key Statistics Bar */}
      <StatsBar />

      {/* 3.5 Alumni Toppers */}
      <AlumniHomeSection count={3} />

      {/* 4. Beyond Academics / Co-Curricular */}
      <TalentsSection />

      {/* 5. Academic Programs & Curriculum */}
      <AcademicPrograms />

      {/* 6. School Life Stories */}
      <BlogHighlightsSection />

      {/* 7. Step-by-Step Admissions Guide */}
      <AdmissionsGuide />

      {/* 8. Final Call to Action Banner */}
      <CtaBanner />
    </div>
  );
}
