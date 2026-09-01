import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  FileText,
  LogIn,
  Menu,
  X,
} from "lucide-react";
import { siteContent } from "@/data/siteContent.data";
import { cn } from "@/lib/utils";

export function PublicNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "HOME", path: "/" },
    {
      name: "ABOUT US",
      path: "/about",
      dropdown: [
        { name: "Overview", path: "/about" },
        { name: "Facilities", path: "/facilities" },
        { name: "Staff Information", path: "/staff" },
        { name: "Alumuni", path: "/alumuni" },
      ],
    },
    {
      name: "ACADEMICS",
      path: "/curriculum",
      dropdown: [
        { name: "Curriculum", path: "/curriculum" },
        { name: "Co-curricular Activities", path: "/co-curricular" },
      ],
    },
    { name: "ACTIVITIES", path: "/activities" },
    { name: "BLOGS", path: "/blogs" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTACT", path: "/contact" },
  ];

  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const desktopNavRef = useRef(null);

  const getBasePath = (path) => path.split("#")[0];

  const isActive = (path) => {
    const basePath = getBasePath(path);
    if (basePath === "/") return location.pathname === "/";
    return location.pathname.startsWith(basePath);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!desktopNavRef.current?.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setOpenMobileDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileDropdown = (name) => {
    setOpenMobileDropdown((current) => (current === name ? null : name));
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-surface/95 backdrop-blur-md border-b border-border-light shadow-xs">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo & School Name */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="size-9 sm:size-11 rounded-xl bg-white flex items-center justify-center overflow-hidden shadow-sm ring-1 ring-black/5 group-hover:scale-105 transition-transform">
              <img
                src={siteContent.schoolLogo}
                alt={siteContent.schoolName}
                className="size-full object-contain p-0.5"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-text-primary group-hover:text-primary transition-colors line-clamp-1">
                {siteContent.schoolTag || siteContent.schoolName}
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-widest text-text-muted">
                Excellence in Education
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav ref={desktopNavRef} className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Primary navigation">
            {navItems.map((item) => {
              const active = isActive(item.path);

              if (!item.dropdown) {
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "relative px-3 xl:px-3.5 py-2 text-xs font-bold tracking-wider transition-all duration-200 rounded-md group",
                      active
                        ? "text-primary"
                        : "text-text-secondary hover:text-primary hover:bg-surface-tertiary/60"
                    )}
                  >
                    <span>{item.name}</span>
                    <span
                      className={cn(
                        "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-primary transition-all duration-300",
                        active ? "w-4/5" : "w-0 group-hover:w-1/2 opacity-0 group-hover:opacity-100"
                      )}
                    />
                  </Link>
                );
              }

              const isOpen = openDropdown === item.name;
              return (
                <div key={item.path} className="relative">
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(isOpen ? null : item.name)}
                    className={cn(
                      "relative inline-flex items-center gap-1 px-3 xl:px-3.5 py-2 text-xs font-bold tracking-wider transition-all duration-200 rounded-md",
                      active || isOpen
                        ? "text-primary"
                        : "text-text-secondary hover:text-primary hover:bg-surface-tertiary/60"
                    )}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={cn("size-3.5 transition-transform", isOpen && "rotate-180")} />
                    <span
                      className={cn(
                        "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-primary transition-all duration-300",
                        active ? "w-4/5" : "w-0"
                      )}
                    />
                  </button>

                  {isOpen && (
                    <div className="absolute left-0 top-full mt-2 min-w-56 rounded-lg border border-border bg-surface p-2 shadow-lg">
                      {item.dropdown.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block rounded-md px-3 py-2.5 text-xs font-semibold text-text-secondary hover:bg-surface-tertiary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
            to="/application"
              className="inline-flex items-center justify-center px-4 xl:px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-xs xl:text-sm font-semibold hover:bg-primary-hover active:bg-primary-active transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Online Application
            </Link>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
           
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-tertiary focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-surface px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const active = isActive(item.path);

              if (!item.dropdown) {
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "px-4 py-3 text-sm font-semibold rounded-lg transition-colors flex items-center justify-between",
                      active
                        ? "bg-primary-light text-primary font-bold"
                        : "text-text-secondary hover:bg-surface-tertiary hover:text-text-primary"
                    )}
                  >
                    <span>{item.name}</span>
                    {active && <div className="size-1.5 rounded-full bg-primary" />}
                  </Link>
                );
              }

              const isOpen = openMobileDropdown === item.name;
              const submenuId = `${item.name.toLowerCase().replaceAll(" ", "-")}-submenu`;
              return (
                <div key={item.path}>
                  <button
                    type="button"
                    onClick={() => toggleMobileDropdown(item.name)}
                    className={cn(
                      "w-full px-4 py-3 text-sm font-semibold rounded-lg transition-colors flex items-center justify-between",
                      active || isOpen
                        ? "bg-primary-light text-primary font-bold"
                        : "text-text-secondary hover:bg-surface-tertiary hover:text-text-primary"
                    )}
                    aria-expanded={isOpen}
                    aria-controls={submenuId}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={cn("size-4 transition-transform", isOpen && "rotate-180")} />
                  </button>
                  {isOpen && (
                    <div id={submenuId} className="mt-1 ml-4 border-l-2 border-primary-light pl-3 space-y-1">
                      {item.dropdown.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block rounded-md px-3 py-2.5 text-sm font-medium text-text-secondary hover:bg-surface-tertiary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-border-light flex flex-col gap-2.5">
            <Link
              to="/application"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg border border-border text-sm font-semibold text-text-primary hover:bg-surface-tertiary transition-colors"
            >
              <FileText className="size-4 text-primary" />
              <span>online application</span>
            </Link>
            <Link
              to="/login"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-surface-tertiary text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors"
            >
              <LogIn className="size-4" />
              <span>Staff Portal Login</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}