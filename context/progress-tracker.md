# Progress Tracker

Update this file after every completed feature. Any AI agent reading this should immediately know what is done, what is in progress, and what is next. Feature numbers match build-plan.md.

---

## Current Status

**Phase:** Phase 1 — Public Website & Pages (Static Frontend)
**Last completed:** 06 Public Static Blog & Notices (static listing and article detail UI)
**Next:** 02 Database Schema & RLS Foundation

---

## Progress

### Phase 0 — Foundation & Setup

- [x] 01 Project Scaffold & Design Tokens
- [ ] 02 Database Schema & RLS Foundation
- [ ] 03 Auth & Role-Based Routing

### Phase 1 — Public Website & Pages (Static Frontend)

- [x] 04 Public Shell & Homepage
- [x] 05 Public Informational Pages
- [x] 06 Public Static Blog & Notices
- [x] Alumni page upgraded to a full public section: polished hero copy, `StatsBar`-style alumni metrics strip, `SectionHeading`-led spotlight grid with improved `AlumuniCard` (hover lift, Matric marks badge, curly-quote review), and a primary featured-quote band — data typos/duplicates in `siteContent.about.alumuni` cleaned (distinct alumni, mark % only).
- [x] Reveal animation applied to the shared public route shell so all public pages inherit the same fade-in effect instead of only the home page.

Homepage includes a static blog highlights section, `/blogs` listing, and slug-driven `/blogs/:slug` article detail pages. Content remains static until a future content-management scope is approved.

Public navbar dropdown enhancement completed: About Us includes Facilities and Staff Information, Academics includes Curriculum and Co-curricular Activities, and Activities includes Sports, Creative Arts, Clubs, and Leadership & Community Service. Section anchors were added to the existing public pages.

Added dedicated public routes for `/curriculum`, `/co-curricular`, and `/staff`. Academics and Staff dropdown items now use these pages; Activities keeps its category dropdown because each category remains a useful direct entry point.

Simplified the shared public `PageHero`: removed the eyebrow prop and badge, and changed public page heroes to use short direct titles. Restored the `/co-curricular` page route target after build verification found the file missing.

### Phase 2 — App Shells & Dashboards

- [ ] 07 App Shells & Dashboards (UI, mock data)

### Phase 3 — Academic Structure

- [ ] 08 Academic Sessions
- [ ] 09 Classes & Sections
- [ ] 10 Subjects & Class-Subject Mapping
- [ ] 11 School Settings & Grade Rules

### Phase 4 — People

- [ ] 12 Teachers
- [ ] 13 Class-Teacher Assignments
- [ ] 14 Students
- [ ] 15 Student Promotion

### Phase 5 — Examinations

- [ ] 16 Exam Creation Wizard
- [ ] 17 Exam List & Management

### Phase 6 — Marks Entry (Teacher)

- [ ] 18 Teacher Class View
- [ ] 19 Marks Focus Card

### Phase 7 — Approval & Results

- [ ] 20 Marks Approval Queue
- [ ] 21 Result Calculation & Review
- [ ] 22 Result Publishing & Countdown Scheduling

### Phase 8 — Public Result Portal

- [ ] 23 Results Portal — Countdown & Lookup
- [ ] 24 Result Card & Bulk Print

### Phase 9 — Timetable

- [ ] 25 Timetable Builder (Admin)
- [ ] 26 Timetable Views (Teacher/Class)

### Phase 10 — Admissions

- [ ] 27 Admissions Settings & Public Form
- [ ] 28 Admission Review → Create Student

### Phase 11 — Wiring, Hardening & Deploy

- [ ] 29 Dashboards & Exports — Real Data
- [ ] 30 RLS & Storage Policy Hardening
- [ ] 31 Responsive, Print QA & Vercel Deploy

---

## Decisions Made During Build

- **Shared subpage header:** new `PageHero` component (`components/public/PageHero.jsx`) — brand-gradient band with breadcrumb, eyebrow pill, title, subtitle. Used by every informational page so subpage design stays constant.
- **Memories gallery images:** replaced missing `/assets/gallery-*.jpg` refs with brand-palette SVG dummy images (`gallerySports`, `galleryScience`, etc. in `dummyImages.js`) so the gallery renders without network dependency.
- **Memories lightbox:** built with plain `useState` (no third-party lib) — prev/next nav, close, `role="dialog"` for accessibility.
- **Contact form:** static frontend-only for now (success state on submit); will wire to a service later if scoped.
- **Facilities/Activities data:** `facilities.data.js` extended with per-facility feature lists + stats; new `activities.data.js` created for co-curricular & extra-curricular content.
- **Notices page:** built (06 notices half). Notice cards carry `id={slug}` so the homepage "Read Full Notice" anchor links work; full text is expandable via native `<details>`. Feature 06 (blogs) still pending.
- **Admissions form (dummy):** built a static `/admissions` application form page (27 public-form half, UI only — no Supabase, no RLS hookup yet). No nav link added; the existing navbar "Online Admission" button already routes there.
- **Academics page:** built `/academics` with learning-approach grid, filterable program cards (subjects + highlights added to `siteContent.academicPrograms`), and an LSA callout strip.
- **Real school imagery:** `dummyImages.js` rewritten to use verified Unsplash CDN URLs (no more inline SVG data URIs); new `heroSlides` array (4 w=1920 campus backgrounds) added for the hero slider.
- **Hero auto slider:** homepage hero now crossfades `dummyImages.heroSlides` every 5s (interval stops under `prefers-reduced-motion`), with clickable dot indicators. Overlay gradient unchanged.
- **Navbar scroll-state:** `PublicNavbar` is transparent over the hero (`bg-transparent`, white text/links) and switches to the solid `bg-surface/95 backdrop-blur-md` bar once `window.scrollY > 24`. Top blue announcement bar removed (per user request); mobile drawer unchanged.
- **Navbar reverted to solid:** scroll-state transparency removed on 2026-08-18 (white text over transparent bg was invisible). Navbar is now always `bg-surface/95 backdrop-blur-md border-b border-border-light shadow-xs` with dark text and `sticky top-0`.
- **Hero overlay removed:** the dark-blue gradient overlay (`from-[#0B132B]/95 … to-primary/40`) was removed from both `HeroSection` and `PageHero` per user request — hero/subpage images now render clean with no blue shade.
- **Hero redesign (2026-08-18):** headline set in the default Plus Jakarta Sans (`font-extrabold`, matching the `WelcomeSection` principal heading) with light-blue accent; depth gradient scrim `bg-gradient-to-t from-black/80 via-black/55 to-black/20` on both `HeroSection` and `PageHero`; Fraunces serif display font was trialed then removed entirely (uninstalled, `--font-display` token dropped). Watch-Video-Tour ghost button removed earlier; single "Apply for Admission" CTA remains.
- **School scope = Grades 6–10 (2026-08-18):** Al-Hadi offers classes 6 to 10 only. Removed the "Primary Wing" program (Grades 1–5) from `academicPrograms` (data + homepage `AcademicPrograms` grid now `lg:grid-cols-3` + "Primary" tab on AcademicsPage); STEM Wings retagged `Grades 6 – 10`; admissions form dropdown restricted to Grade 6–10; notices + about-story/milestone copy updated from "grades 1–10" to "grades 6–10"; `primaryProgram` removed from `dummyImages`; `academicsPage.heroSubtitle` reworded to "middle school foundations to board exam preparation".
- **School branding:** school name/tag updated to Al-Hadi Public School, real logo (`https://alhadihostel.com/images/AHHlogo.png`) now used in navbar, footer, and as favicon; "Greenwood" placeholder copy replaced.
- **SMS scope dropped → production-cleanup pass (2026-09-02):** original SMS/admin plan cancelled; ship the public site only. Removed 8 never-imported deps (`@supabase/supabase-js`, `@tanstack/react-query`, `react-hook-form`, `@hookform/resolvers`, `zod`, `xlsx`, `browser-image-compression`, `date-fns`), deleted unused `src/lib/supabase.js`, `src/lib/queryClient.js`, `src/lib/constants.js`, and `components.json`, removed the empty `QueryClientProvider` from `App.jsx`, stripped dead `VITE_SUPABASE_*` lines from the gitignored `.env` files, and dropped the unused `quickActions` data + its commented-out hero quick-links block (+ unused `formatPercentage`).
- **Dead-link fixes (2026-09-02):** routes for `/academics` and `/admissions` never existed — footer "Admission Process" and `CtaBanner` "Start Application Now" now point to `/application`; footer "Academic Programs" and `AcademicPrograms` cards now point to `/curriculum`; navbar ACADEMICS item path updated to `/curriculum`; removed footer `/results` (Student Portal) and `/privacy` + `/terms` links; **added the missing `/notices` route** → existing `NoticesPage` (fixes homepage "View All Notices" + read-full anchors) — this route was later removed with the notices feature (see below).
- **Notices removed entirely (2026-09-02):** all notices-related code deleted per user request — `src/components/public/NoticeBoardSection.jsx` (unused, never imported), `src/pages/public/NoticesPage.jsx`, `src/data/notices.data.js`, and the `/notices` route + import. No notices content remains anywhere in the site.
- **Mobile blank-page bug fixed (2026-09-02):** on narrow viewports every routed page was invisible except the fixed navbar. Cause: `PublicShell` wrapped the entire `<Outlet />` in `Reveal`, whose `IntersectionObserver` used `threshold: 0.12` — the whole page must be >8× viewport height on phones, so the ratio never hit 12% and the page stayed `opacity-0`. Fix: removed the shell-level `Reveal` wrapper (per-section `Reveal`s remain and are unaffected).

---

## Notes

_Add notes here as the build progresses — workarounds, patterns, anything that differs from the context files._
