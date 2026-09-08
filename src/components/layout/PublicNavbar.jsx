import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Building2,
  BookOpen,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Compass,
  FileText,
  FlaskConical,
  GraduationCap,
  LogIn,
  Menu,
  Sparkles,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { siteContent } from "@/data/siteContent.data";
import { cn } from "@/lib/utils";

const navIconMap = {
  Building2,
  BookOpen,
  CalendarDays,
  ClipboardList,
  Compass,
  FlaskConical,
  GraduationCap,
  Sparkles,
  Trophy,
  Users,
};

export function PublicNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

const navItems = [
  { name: "HOME", path: "/" },
  {
    name: "ABOUT US",
    path: "/about",
    dropdown: [
      { name: "Overview", path: "/about", icon: "Compass" },
      { name: "Facilities", path: "/facilities", icon: "Building2" },
      { name: "Faculty", path: "/faculty", icon: "Users" },
      { name: "Alumni & Topers", path: "/alumuni", icon: "GraduationCap" },
    ],
  },
  {
    name: "ACADEMICS",
    path: "/curriculum",
    dropdown: [
      { name: "Curriculum", path: "/curriculum", icon: "BookOpen" },
      { name: "Academic Calendar", path: "/academic-calendar", icon: "CalendarDays" },
      { name: "Examinations", path: "/examinations", icon: "ClipboardList" },
    ],
  },
  {
    name: "ACTIVITIES",
    path: "/co-curricular",
    dropdown: [
      { name: "Co-curricular ", path: "/co-curricular", icon: "Sparkles" },
      { name: "Extra-Curricular  ", path: "/activities/extra-curricular", icon: "Trophy" },
    ],
  },
  { name: "BLOGS", path: "/blogs" },
  { name: "GALLERY", path: "/gallery" },
  { name: "CONTACT", path: "/contact" },
];


  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const desktopNavRef = useRef(null);
  const hoverTimerRef = useRef(null);

  const getBasePath = (path) => path.split("#")[0];

  const isActive = (path) => {
    const basePath = getBasePath(path);
    if (basePath === "/") return location.pathname === "/";
    return location.pathname.startsWith(basePath);
  };

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
  }, [location.pathname, location.hash]);

  // Outside click closes desktop dropdown
  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!desktopNavRef.current?.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  // Escape closes any open menu
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setOpenMobileDropdown(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Collapse mobile drawer on desktop resize
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

  // Hover-intent: open 120ms after entering, close 180ms after leaving the block
  const handleDropdownEnter = (name) => {
    clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = setTimeout(() => setOpenDropdown(name), 120);
  };

  const handleDropdownLeave = (name) => {
    clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = setTimeout(() => {
      setOpenDropdown((current) => (current === name ? null : current));
    }, 180);
  };

  const DropdownMenuItems = ({ items }) =>
    items.map((child) => {
      const Icon = navIconMap[child.icon] || Compass;
      return (
        <Link
          key={child.path}
          to={child.path}
          className="group/item flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-surface-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
        >
          <span className="size-9 rounded-md bg-primary-light text-primary flex items-center justify-center shrink-0 transition-colors group-hover/item:bg-primary group-hover/item:text-primary-foreground">
            <Icon className="size-4" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-semibold text-text-primary leading-snug">
              {child.name}
            </span>
          </span>
          <ChevronRight className="size-4 text-text-subtle shrink-0 -translate-x-1 opacity-0 transition-all group-hover/item:translate-x-0 group-hover/item:opacity-100" />
        </Link>
      );
    });

  return (
    <header className="sticky top-0 z-50 w-full bg-surface backdrop-blur-md border-b border-border-light shadow-xs py-2">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo & School Name */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="size-12 sm:size-14 lg:size-20 rounded-xl flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
              <img
                src={siteContent.schoolLogo}
                alt={siteContent.schoolName}
                width={433}
                height={447}
                className="size-full object-contain p-0.5"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-text-primary group-hover:text-primary transition-colors line-clamp-1">
                {siteContent.schoolTag || siteContent.schoolName}
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-widest text-text-muted">
                 Gilgit Danyore
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
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(item.name)}
                  onMouseLeave={() => handleDropdownLeave(item.name)}
                >
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
                    <div className="absolute left-0 top-full mt-2 w-72 rounded-xl border border-border bg-surface/95 backdrop-blur-md shadow-lg p-2 animate-dropdown-in">
                      <span
                        className="absolute -top-1 left-8 size-2.5 rotate-45 rounded-[2px] border-l border-t border-border bg-surface"
                        aria-hidden="true"
                      />
                      <div className="flex flex-col gap-0.5">
                        <DropdownMenuItems items={item.dropdown} />
                      </div>
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
        <div className="lg:hidden border-t border-border bg-surface px-4 pt-3 pb-6 space-y-4 shadow-xl">
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
                      {item.dropdown.map((child) => {
                        const Icon = navIconMap[child.icon] || Compass;
                        return (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-surface-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
                          >
                            <span className="size-8 rounded-md bg-primary-light text-primary flex items-center justify-center shrink-0 mt-0.5">
                              <Icon className="size-3.5" />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block text-sm font-medium text-text-secondary leading-snug">
                                {child.name}
                              </span>
                            </span>
                          </Link>
                        );
                      })}
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