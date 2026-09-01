# UI Registry

Living document. Updated after every component is built. Read this before building any new component — match existing patterns exactly before inventing new ones.

This is the School Management System component registry. Components are React `.jsx` (JavaScript, no TypeScript), built on shadcn/ui (JS mode) primitives in `src/components/ui/` and styled with the tokens in ui-tokens.md.

---

## How to Use

Before building any component:

1. Check if a similar component already exists here.
2. If yes — match its exact classes and structure.
3. If no — check whether a shadcn/ui primitive covers it (add via `npx shadcn@latest add ...` into `src/components/ui/`). Then build the feature component following ui-rules.md and ui-tokens.md, and add it here.

After building any component — update this file with the component name, file path, and the exact classes/tokens used (and which shadcn primitive it wraps, if any).

---

## Conventions

- **Location:** shadcn primitives in `src/components/ui/`; shared building blocks in `src/components/shared/`; feature components in `src/components/<domain>/` (e.g. `marks/`, `results/`, `students/`).
- **Naming:** PascalCase files, named exports, one component per file.
- **Styling:** Tailwind classes using project tokens only — no hex values, no raw color scales, no inline styles.

---

## Components

### Layout Components

#### `PublicNavbar`
- **Path:** `src/components/layout/PublicNavbar.jsx`
- **Last updated:** 2026-09-02
- **Tokens/Classes:** `fixed top-0 z-50 w-full bg-surface/95 backdrop-blur-md border-b border-border-light shadow-xs`, logo tile `size-9 sm:size-11 rounded-xl bg-white ring-1 ring-black/5`, nav links `text-text-secondary hover:text-primary hover:bg-surface-tertiary/60`, active/open state `text-primary` with `bg-primary` underline, desktop dropdown `rounded-lg border border-border bg-surface p-2 shadow-lg`, mobile drawer `bg-surface`, mobile submenu `border-l-2 border-primary-light`.
- **Purpose:** Public website header with About Us, Academics, and Activities dropdowns, click-away closing, route-change closing, accessible expanded states, and expandable mobile navigation.
- **2026-09-02:** ACADEMICS nav item `path` changed `/academics` → `/curriculum` (the `/academics` route never existed).

#### `PublicFooter`
- **Path:** `src/components/layout/PublicFooter.jsx`
- **Last updated:** 2026-09-02
- **Tokens/Classes:** `bg-[#0B132B] text-slate-300 border-t border-slate-800`, newsletter input `bg-slate-900 border border-slate-700 text-white`, submit icon button `bg-primary hover:bg-primary-hover text-white rounded-md`, brand logo tile `size-10 rounded-lg bg-white ring-1 ring-black/5` with `img` logo (`siteContent.schoolLogo`).
- **Purpose:** 4-column public site footer with contact details, quick links, portal links, newsletter form, and copyright.
- **2026-09-02:** "Admission Process" `/admissions` → `/application`, "Academic Programs" `/academics` → `/curriculum`; removed dead `/results` (Student Portal), `/privacy`, and `/terms` links.

#### `PublicShell`
- **Path:** `src/components/layout/PublicShell.jsx`
- **Tokens/Classes:** `min-h-screen flex flex-col bg-background text-text-primary`, `Reveal` wrapper `w-full` with `transition-all duration-700 ease-out`, `visible` state `opacity-100 translate-y-0`, hidden state `opacity-0 translate-y-5`.
- **Purpose:** Outer layout wrapper for all public pages mounting `PublicNavbar`, `Reveal`-wrapped `<Outlet />`, and `PublicFooter`. The reveal now applies at the route shell so every public page shares the same fade-in animation as the homepage.

### Public Homepage Components

#### `HeroSection`
- **Path:** `src/components/public/HeroSection.jsx`
- **Last updated:** 2026-08-18
- **Tokens/Classes:** full-bleed auto slider background — images from `dummyImages.heroSlides` (4 verified Unsplash campus scenes at w=1920), crossfade via `opacity` + `transition-opacity duration-1000`, active `opacity-100` / inactive `opacity-0`, autoplay `setInterval` 5000ms (respects `prefers-reduced-motion`), depth scrim `bg-gradient-to-t from-black/80 via-black/55 to-black/20`, dot indicators `h-1.5 rounded-full` active `w-8 bg-white` / inactive `w-3 bg-white/40 hover:bg-white/70`, headline `text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight` (matches `WelcomeSection` principal heading — Plus Jakarta Sans) with light-blue accent `text-primary-light`, subtitle `text-white/95`, CTA `bg-primary text-primary-foreground rounded-sm px-7 py-3.5`, quick-links strip `bg-surface border-b border-border-light` with icon tiles `size-10 rounded-lg bg-primary-light text-primary group-hover:bg-primary group-hover:text-primary-foreground`.
- **Purpose:** Main hero with auto-rotating campus background slider, eyebrow pill, serif headline, trust stats, single admission CTA, and a 4-item quick-links strip below.

#### `WelcomeSection`
- **Path:** `src/components/public/WelcomeSection.jsx`
- **Tokens/Classes:** `bg-surface py-20 border-b border-border-light`, quote icon `size-12 rounded-xl bg-primary-light text-primary`, LSA highlight card `bg-primary-muted border-l-4 border-primary rounded-r-xl p-4`.
- **Purpose:** Principal welcome message, institutional philosophy, and LSA framework highlight.

#### `StatsBar`
- **Path:** `src/components/public/StatsBar.jsx`
- **Tokens/Classes:** `bg-surface-secondary py-12 border-b border-border`, stat values `text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary`, labels `text-xs sm:text-sm font-semibold tracking-wider uppercase text-text-muted`.
- **Purpose:** Key institutional metrics grid.

#### `TalentsSection`
- **Path:** `src/components/public/TalentsSection.jsx`
- **Tokens/Classes:** `bg-background py-20`, cards `bg-surface border border-border rounded-xl overflow-hidden shadow-card hover:shadow-md`.
- **Purpose:** Beyond Academics co-curricular activities showcase (Athletics, Creative Arts, Leadership).

#### `AcademicPrograms`
- **Path:** `src/components/public/AcademicPrograms.jsx`
- **Last updated:** 2026-08-18
- **Tokens/Classes:** `bg-surface py-20`, cards `bg-surface border border-border rounded-xl overflow-hidden shadow-card hover:shadow-md`, grid `lg:grid-cols-3` (3 programs: Middle, Secondary, STEM Wings), grade badge `bg-surface/90 backdrop-blur-sm rounded-full`.
- **Purpose:** Curriculum overview — three programs for Grades 6–10 (Primary Wing removed 2026-08-18 per school scope).

#### `BlogHighlightsSection`
- **Path:** `src/components/public/BlogHighlightsSection.jsx`
- **Tokens/Classes:** `bg-surface py-20`, two-column story cards `bg-background border border-border rounded-xl overflow-hidden shadow-card`, image panel with `object-cover` and hover scale, category badge `bg-surface/90 rounded-full`, metadata icons `text-text-muted`.
- **Purpose:** Homepage teaser for the latest school-life and academic stories, linking to the public blog listing.

#### `BlogDetailPage`
- **Path:** `src/pages/public/BlogDetailPage.jsx`
- **Tokens/Classes:** shared `PageHero`, article area `bg-background py-16 sm:py-20`, responsive cover image `rounded-xl overflow-hidden shadow-card`, article headings `text-xl sm:text-2xl font-bold`, body `text-base leading-8 text-text-secondary`, navigation links `text-primary`.
- **Purpose:** Slug-driven public article view with author metadata, full static content, fallback image handling, and previous/list navigation.

#### `AdmissionsGuide`
- **Path:** `src/components/public/AdmissionsGuide.jsx`
- **Tokens/Classes:** `bg-surface py-20`, numbered step circles `size-14 rounded-full bg-surface border-2 border-primary text-primary font-bold`.
- **Purpose:** 4-step progressive admissions timeline.

#### `CtaBanner`
- **Path:** `src/components/public/CtaBanner.jsx`
- **Tokens/Classes:** `rounded-3xl bg-gradient-to-r from-primary to-[#165a94] px-8 py-16 text-white shadow-lg`, button `bg-white text-primary rounded-sm px-6 py-3.5 font-bold`.
- **Purpose:** High-conversion admissions call to action banner.

#### `PageHero`
- **Path:** `src/components/public/PageHero.jsx`
- **Last updated:** 2026-08-18
- **Last updated:** 2026-08-27
- **Tokens/Classes:** background image `dummyImages.pageHeroBg` (wide campus scene) with depth scrim `bg-gradient-to-t from-black/80 via-black/55 to-black/20`, text `text-white`, breadcrumb `text-white/70 hover:text-white`, title `text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight drop-shadow-sm`, subtitle `text-white/85 drop-shadow-sm`, container `pt-24 sm:pt-32` (clears fixed navbar).
- **Purpose:** Shared page header for all public subpages, using a short direct title instead of a separate eyebrow badge.
- **Pattern note:** Depth scrim (bottom-weighted black gradient) matches the homepage hero exactly (`from-black/80 via-black/55 to-black/20`) for consistent legibility.

### Public Subpage Components

#### `AboutPage`
- **Path:** `src/pages/public/AboutPage.jsx`
- **Tokens/Classes:** mission card `bg-primary-muted rounded-xl border-border`, vision card `bg-surface-tertiary`, story `bg-background` + milestone timeline card `bg-surface border-border rounded-xl shadow-card`, milestone dot `bg-primary ring-4 ring-primary-light`, values cards `bg-surface rounded-xl shadow-card hover:shadow-md hover:-translate-y-1`, leadership cards `text-center` with `rounded-full bg-primary-light` avatar circles.
- **Purpose:** Mission/vision, story + milestone timeline, values grid, leadership team.

#### `CurriculumPage`
- **Path:** `src/pages/public/CurriculumPage.jsx`
- **Tokens/Classes:** shared `PageHero`, page section `bg-background py-20`, program cards `bg-surface border border-border rounded-xl overflow-hidden shadow-card`, program imagery `object-cover`, subject checks `rounded-full bg-primary-light`.
- **Purpose:** Dedicated curriculum page showing the three academic programs, grades, descriptions, subjects, and enquiry link.

#### `CoCurricularPage`
- **Path:** `src/pages/public/CoCurricularPage.jsx`
- **Tokens/Classes:** shared `PageHero`, activity cards `bg-surface border border-border rounded-xl overflow-hidden shadow-card`, activity imagery `object-cover`, highlight checks `rounded-full bg-primary-light`.
- **Purpose:** Dedicated co-curricular activities page for coached sports, creative arts, and leadership programs.

#### `StaffPage`
- **Path:** `src/pages/public/StaffPage.jsx`
- **Tokens/Classes:** shared `PageHero`, staff cards `bg-surface border border-border rounded-xl p-6 shadow-card`, portrait `size-24 rounded-full object-cover ring-4 ring-primary-muted`, fallback icon `text-primary`, role label `text-primary`.
- **Purpose:** Dedicated staff information page using the existing leadership card pattern and contact CTA.

#### `FacilitiesPage`
- **Path:** `src/pages/public/FacilitiesPage.jsx`
- **Tokens/Classes:** stats strip `bg-surface-secondary` (matches `StatsBar`), facility cards `bg-surface border-border rounded-xl p-6 sm:p-8 shadow-card`, icon tile `size-14 rounded-xl bg-primary-light`, feature check pills `rounded-full bg-success-light` + `text-success-foreground`, tour CTA strip `bg-primary-muted rounded-2xl border-border`.
- **Purpose:** Facilities grid with per-facility feature lists, stats bar, book-a-tour CTA.

#### `ActivitiesPage`
- **Path:** `src/pages/public/ActivitiesPage.jsx`
- **Tokens/Classes:** program cards `bg-surface rounded-xl overflow-hidden shadow-card` with `h-48` images, highlight checks `rounded-full bg-primary-light` + `text-primary`, club cards `bg-background border-border rounded-xl shadow-card hover:-translate-y-1` with `size-12 rounded-xl bg-primary-light` icon tiles.
- **Purpose:** Co-curricular flagship programs + extra-curricular clubs grid.

#### `MemoriesPage`
- **Path:** `src/pages/public/MemoriesPage.jsx`
- **Tokens/Classes:** filter pills `rounded-full px-5 py-2` (active `bg-text-primary text-text-inverse`), gallery cards `rounded-xl overflow-hidden` with `h-56` image + `bg-gradient-to-t from-slate-950/80` overlay, category badge `bg-primary text-primary-foreground`, lightbox `fixed inset-0 z-[100] bg-slate-950/90` with round nav buttons `bg-white/10 hover:bg-white/20`.
- **Purpose:** Photo gallery with category filter pills and a full lightbox (prev/next, close, keyboard-accessible dialog).

#### `AdmissionsPage`
- **Path:** `src/pages/public/AdmissionsPage.jsx`
- **Tokens/Classes:** step guide cards with `size-14 rounded-full bg-surface border-2 border-primary` step circles (hover `bg-primary text-primary-foreground`), form fields `rounded-md border-border` + `focus:ring-2 ring-primary`, success state `bg-success-light border-success/20`, "What You'll Need" checklist card `bg-primary-muted` with `rounded-full bg-primary-light` check pills, admissions office card `bg-surface rounded-xl shadow-card`.
- **Purpose:** Dummy static admission application form (no backend yet) — step guide, application form with success state, document checklist, and admissions office contact. Route already reachable via the existing navbar "Online Admission" button; no new nav link added.

#### `AcademicsPage`
- **Path:** `src/pages/public/AcademicsPage.jsx`
- **Tokens/Classes:** approach cards `bg-surface border-border rounded-xl p-6 shadow-card hover:-translate-y-1` with `size-12 rounded-xl bg-primary-light` icon tiles, program filter pills `rounded-full p-1 bg-surface-tertiary` (active `bg-text-primary text-text-inverse`), program cards `bg-surface rounded-xl overflow-hidden shadow-card` with `h-52` image + grades badge `bg-surface/90 rounded-full`, subject checks `rounded-full bg-primary-light` + `text-primary`, highlight checks `rounded-full bg-success-light` + `text-success-foreground`, LSA strip `bg-primary-muted rounded-2xl`.
- **Purpose:** Learning approach grid, filterable academic programs with subjects + highlights, LSA callout linking to Activities page.

#### `AlumuniPage`
- **Path:** `src/pages/AlumuniPage.jsx`
- **Tokens/Classes:** shared `PageHero` (title "Our Alumni", crumb "Alumni / Topers"), stats strip `bg-surface-secondary border-b border-border-light` matching `StatsBar` (`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary` values + uppercase `text-text-muted` labels), spotlight grid `bg-background py-20` using `SectionHeading` (`align="center"`, eyebrow "Alumni Spotlight"), cards `AlumuniCard`, featured quote band `rounded-2xl bg-primary` with `Quote` icon `text-white/70`, blurred `bg-white/10` orb decorations matching `CtaBanner`, attribution `text-white/85 uppercase`.
- **Purpose:** Alumni toppers showcase — stats strip, spotlight card grid, featured testimonial band, facilities CTA, shared `CtaBanner`.

#### `AlumuniCard`
- **Path:** `src/components/shared/AlumuniCard.jsx`
- **Tokens/Classes:** `bg-surface border border-border rounded-xl p-6 shadow-card hover:shadow-md hover:-translate-y-1 h-full text-center`, corner quote mark `text-primary-light group-hover:text-primary/30`, portrait circle `size-24 rounded-full bg-primary-light ring-4 ring-primary-muted` (fallback `UserRound text-primary`), name `text-base font-bold text-text-primary`, Matric badge pill `rounded-full bg-primary-light text-primary px-3 py-1` with `Award` icon, review `text-sm text-text-muted leading-relaxed` wrapped in curly quotes.
- **Purpose:** Alumni profile card — portrait, name, Matric marks badge, short review.

#### `ContactPage`
- **Path:** `src/pages/public/ContactPage.jsx`
- **Tokens/Classes:** contact cards `bg-surface rounded-xl shadow-card text-center` with `size-12 rounded-xl bg-primary-light` icon tiles, form fields `rounded-md border-border` + `focus:ring-2 ring-primary`, success state `bg-success-light border-success/20`, department contacts card `bg-surface rounded-xl shadow-card`, office hours card `bg-primary-muted`, map link `bg-background border-border rounded-xl hover:border-primary`.
- **Purpose:** Contact info cards, message form (static success state), department contacts, office hours, map link.
