import { createBrowserRouter } from "react-router-dom";
import { PublicShell } from "@/components/layout/PublicShell";
import { SEOHead } from "@/components/SEOHead";
import { HomePage } from "@/pages/public/HomePage";
import { AboutPage } from "@/pages/public/AboutPage";
import { CurriculumPage } from "@/pages/public/CurriculumPage";
import { AcademicCalendarPage } from "@/pages/public/AcademicCalendarPage";
import { ExaminationPage } from "@/pages/public/ExaminationPage";
import { CoCurricularPage } from "@/pages/public/CoCurricularPage";
import { FacilitiesPage } from "@/pages/public/FacilitiesPage";
import { ExtraCurricularPage } from "@/pages/public/EnrichmentPage";
import { GalleryPage } from "@/pages/public/GalleryPage";
import { BlogsPage } from "@/pages/public/BlogsPage";
import { BlogDetailPage } from "@/pages/public/BlogDetailPage";
import { ContactPage } from "@/pages/public/ContactPage";
import { Navigate } from "react-router-dom";
import { FacultyPage } from "@/pages/public/FacultyPage";
import { PlaceholderPage } from "@/pages/public/PlaceholderPage";
import { ApplicationClosedPage } from "@/pages/public/ApplicationClosedPage";
import { AlumuniPage } from "@/pages/public/AlumuniPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicShell />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "curriculum",
        element: <CurriculumPage />,
      },
      {
        path: "academic-calendar",
        element: <AcademicCalendarPage />,
      },
      {
        path: "examinations",
        element: <ExaminationPage />,
      },
      {
        path: "co-curricular",
        element: <CoCurricularPage />,
      },
      {
        path: "facilities",
        element: <FacilitiesPage />,
      },
      {
        path: "activities/extra-curricular",
        element: <ExtraCurricularPage />,
      },
      {
        path: "activities/enrichment",
        element: <ExtraCurricularPage />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
      {
        path: "blogs",
        element: <BlogsPage />,
      },
      {
        path: "blogs/:slug",
        element: <BlogDetailPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "faculty",
        element: <FacultyPage />,
      },
      {
        path: "staff",
        element: <Navigate to="/faculty" replace />,
      },
      {
        path:"alumuni",
        element: <AlumuniPage/>
      },
      {
        path: "application",
        element: <ApplicationClosedPage />,
      },
      {
        path: "login",
        element: (
          <>
            <SEOHead
              title="Staff Login"
              description="Secure staff portal sign-in for administrators and class teachers at Al-Hadi Academy Gilgit."
              path="/login"
              noindex
            />
            <PlaceholderPage
              title="Staff Authentication Portal"
              description="Secure dashboard sign-in for Administrators and Class Teachers."
              badge="Staff Login"
            />
          </>
        ),
      },
      {
        path: "*",
        element: (
          <>
            <SEOHead
              title="Page Not Found"
              description="The page you requested could not be found. Return to the Al-Hadi Academy Gilgit homepage."
              path="/404"
              noindex
            />
            <PlaceholderPage
              title="Page Not Found"
              description="The page you requested does not exist or has been moved."
              badge="404 Not Found"
            />
          </>
        ),
      },
    ],
  },
]);
