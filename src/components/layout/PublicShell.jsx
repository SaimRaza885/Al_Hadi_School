import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { PublicFooter } from "@/components/layout/PublicFooter";

export function PublicShell() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-text-primary selection:bg-primary-light selection:text-primary">
      <PublicNavbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <PublicFooter />
    </div>
  );
}
