import { createBrowserRouter } from "react-router-dom";
import { PublicShell } from "@/components/layout/PublicShell";
import { HomePage } from "@/pages/public/HomePage";
import { AboutPage } from "@/pages/public/AboutPage";
import { CurriculumPage } from "@/pages/public/CurriculumPage";
import { CoCurricularPage } from "@/pages/public/CoCurricularPage";
import { FacilitiesPage } from "@/pages/public/FacilitiesPage";
import { ActivitiesPage } from "@/pages/public/ActivitiesPage";
import { GalleryPage } from "@/pages/public/GalleryPage";
import { NoticesPage } from "@/pages/public/NoticesPage";
import { BlogsPage } from "@/pages/public/BlogsPage";
import { BlogDetailPage } from "@/pages/public/BlogDetailPage";
import { ContactPage } from "@/pages/public/ContactPage";
import { StaffPage } from "@/pages/public/StaffPage";
import { PlaceholderPage } from "@/pages/public/PlaceholderPage";
import { ApplicationClosedPage } from "@/pages/public/ApplicationClosedPage";
import { AlumuniPage } from "@/pages/AlumuniPage";

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
        path: "co-curricular",
        element: <CoCurricularPage />,
      },
      {
        path: "facilities",
        element: <FacilitiesPage />,
      },
      {
        path: "activities",
        element: <ActivitiesPage />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
      {
        path: "notices",
        element: <NoticesPage />,
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
        path: "staff",
        element: <StaffPage />,
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
          <PlaceholderPage
            title="Staff Authentication Portal"
            description="Secure dashboard sign-in for Administrators and Class Teachers."
            badge="Staff Login"
          />
        ),
      },
      {
        path: "*",
        element: (
          <PlaceholderPage
            title="Page Not Found"
            description="The page you requested does not exist or has been moved."
            badge="404 Not Found"
          />
        ),
      },
    ],
  },
]);
