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
- **Last updated:** 2026-09-08
- **Tokens/Classes:** `sticky top-0 z-50 w-full bg-surface/95 backdrop-blur-md border-b border-border-light shadow-xs`, logo tile `size-12 sm:size-14 lg:size-20`, nav links `text-text-secondary hover:text-primary hover:bg-surface-tertiary/60`, active/open state `text-primary` with `bg-primary` underline, desktop dropdown panel `absolute left-0 top-full mt-2 w-72 rounded-xl border border-border bg-surface/95 backdrop-blur-md shadow-lg p-2` with top caret (`size-2.5 rotate-45 border-l border-t`) and `.animate-dropdown-in` keyframe (opacity 0→1 + -6px→0 translateY, 0.18s ease-out), item entry `group/item` two-line: icon tile `size-9 rounded-md bg-primary-light text-primary` flipping to `bg-primary text-primary-foreground` on hover + label `text-sm font-semibold` + caption `text-xs text-text-muted` + `ChevronRight` slide-in on hover (`-translate-x-1 opacity-0` → active), mobile drawer `bg-surface`, mobile submenu `border-l-2 border-primary-light` with same icon tiles (`size-8`).
- **Purpose:** Public website header with About Us and Academics dropdowns, hover-intent opening (120ms in / 180ms leave grace), click-away closing, Escape closing, route-change closing, accessible expanded states (`aria-expanded`/`aria-haspopup`), and expandable mobile navigation.
- **2026-09-07:** Dropdowns enriched + modernized. ABOUT US now: Overview, Facilities, Staff Information, Alumni & Topers. ACADEMICS now: Curriculum, Co-curricular Activities, Facilities & Labs, School Activities. Every dropdown item gained an icon (`navIconMap` in-component) + one-line caption; desktop panel got caret, blur, entrance animation; hover opens in addition to click with a 180ms grace timer so the panel doesn't close while moving the cursor into it.
- **2026-09-08:** `fixed top-0` → `sticky top-0`. The navbar now lives in-flow at the top of the page (no longer overlays the hero image top), and still pins to the top when scrolling — no overlap, no JS. ACADEMICS dropdown gained "Academic Calendar" (`/academic-calendar`, `CalendarDays` icon) and "Examinations" (`/examinations`, `ClipboardList` icon) next to Curriculum.

#### `PublicFooter`
- **Path:** `src/components/layout/PublicFooter.jsx`
- **Last updated:** 2026-09-02
- **Tokens/Classes:** `bg-[#0B132B] text-slate-300 border-t border-slate-800`, newsletter input `bg-slate-900 border border-slate-700 text-white`, submit icon button `bg-primary hover:bg-primary-hover text-white rounded-md`, brand logo tile `size-10 rounded-lg bg-white ring-1 ring-black/5` with `img` logo (`siteContent.schoolLogo`).
- **Purpose:** 4-column public site footer with contact details, quick links, portal links, newsletter form, and copyright.
- **2026-09-02:** "Admission Process" `/admissions` → `/application`, "Academic Programs" `/academics` → `/curriculum`; removed dead `/results` (Student Portal), `/privacy`, and `/terms` links.

#### `PublicShell`
- **Path:** `src/components/layout/PublicShell.jsx`
- **Last updated:** 2026-09-02
- **Tokens/Classes:** `min-h-screen flex flex-col bg-background text-text-primary`.
- **Purpose:** Outer layout wrapper for all public pages mounting `PublicNavbar`, `<Outlet />`, and `PublicFooter`. The whole-page `Reveal` wrapper was removed (2026-09-02) — its `threshold: 0.12` IntersectionObserver required 12% of the entire page to be visible, leaving all content `opacity-0` on narrow/mobile viewports (only the fixed navbar rendered). Page content now renders immediately; per-section `Reveal`s inside pages still handle scroll animations.

### Public Homepage Components

#### `HeroSection`
- **Path:** `src/components/public/HeroSection.jsx`
- **Last updated:** 2026-08-18
- **Tokens/Classes:** full-bleed auto slider — images from `images.heroSlides` (`src/assets/images.js` → `src/assets/hero_1/2/3/5.jpg`), crossfade via `opacity` + `transition-opacity duration-1000`, active `opacity-100` / inactive `opacity-0`, autoplay `setInterval` 5000ms (respects `prefers-reduced-motion`), depth scrim `bg-gradient-to-t from-black/80 via-black/55 to-black/20`, dot indicators `h-1.5 rounded-full` active `w-8 bg-white` / inactive `w-3 bg-white/40 hover:bg-white/70`, headline `text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight` (matches `WelcomeSection` principal heading — Plus Jakarta Sans) with light-blue accent `text-primary-light`, subtitle `text-white/95`, CTA `bg-primary text-primary-foreground rounded-sm px-7 py-3.5`, quick-links strip `bg-surface border-b border-border-light` with icon tiles `size-10 rounded-lg bg-primary-light text-primary group-hover:bg-primary group-hover:text-primary-foreground`.
- **Purpose:** Main hero with auto-rotating campus background slider, eyebrow pill, serif headline, trust stats, single admission CTA, and a 4-item quick-links strip below.
- **2026-09-08:** navbar is `sticky` (in-flow) so the hero no longer needs to duck under it — background slider layer changed back to `absolute inset-0` (full-bleed from the top of the hero) and section height changed from `min-h-screen` to `min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)]` so the section ends exactly at the fold below the 80px/96px navbar.

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
- **Last updated:** 2026-09-08
- **Tokens/Classes:** background image `images.pageHeroBg` (= `src/assets/images.js` → `hero_1.jpg`) with depth scrim `bg-gradient-to-t from-black/80 via-black/55 to-black/20`, text `text-white`, breadcrumb `text-white/70 hover:text-white`, title `text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight drop-shadow-sm`, subtitle `text-white/85 drop-shadow-sm`, container `pt-24 sm:pt-32` (clears navbar).
- **Purpose:** Shared page header for all public subpages, using a short direct title instead of a separate eyebrow badge.
- **2026-09-08:** navbar is now `sticky` (in-flow) so the background image layer changed back from `absolute inset-x-0 top-16 lg:top-20 bottom-0` to `absolute inset-0` — the image is full-bleed from the hero's top, directly below the navbar (no 64–80px blank gap).

### Public Subpage Components

#### `AboutPage`
- **Path:** `src/pages/public/AboutPage.jsx`
- **Tokens/Classes:** mission card `bg-primary-muted rounded-xl border-border`, vision card `bg-surface-tertiary`, story `bg-background` + story image `relative h-72 lg:h-full overflow-hidden rounded-2xl border border-border shadow-card` (real photo from `images.heroSlides[0]` or `images.pageHeroBg`, `object-cover`, bottom gradient `from-black/35`), story grid `lg:grid-cols-12 items-stretch`, values cards `bg-surface rounded-xl shadow-card hover:shadow-md hover:-translate-y-1`, leadership cards `text-center` with `rounded-full bg-primary-light` avatar circles.
- **Purpose:** Mission/vision, story + milestone timeline, values grid, leadership team.

#### `CurriculumPage`
- **Path:** `src/pages/public/CurriculumPage.jsx`
- **Last updated:** 2026-09-08
- **Tokens/Classes:** shared `PageHero`, then six sections driven by new `src/data/curriculum.data.js` (content from `Al_Hadi_Academy_Curriculum_Booklet.md`): Philosophy (`bg-background py-20`), Levels (`bg-surface border-b border-border-light`), Assessment (`bg-background`), Methodology (`bg-surface border-b`), Calendar (`bg-background`), Co-curricular (`bg-surface border-b`), closing `CtaBanner`. Philosophy/Methodology cards `bg-surface border border-border rounded-xl p-6 shadow-card hover:-translate-y-1 hover:shadow-md` with `size-12 rounded-xl bg-primary-light` icon tiles; Level cards `border rounded-xl overflow-hidden shadow-card` with `bg-primary-muted` header strip + `rounded-full bg-primary-light` grades pill (`Award` icon) + subject chips `rounded-md bg-surface-tertiary` with `Check`; Assessment uses a stacked bar (`h-4 rounded-full`, `w-[40%] bg-primary` / `w-[60%] bg-primary-active`) plus two cards with `text-3xl font-extrabold text-primary` weights and `rounded-full bg-primary-light` check items; Calendar cards have a `absolute left-0 w-1 bg-primary-light` accent bar + `rounded-full bg-primary-light` session-chip; Co-curricular band `rounded-2xl bg-primary-muted border border-border` with `size-12 rounded-xl bg-surface` icon tiles.
- **Purpose:** Dedicated `/curriculum` page presenting the school's official 2026–27 curriculum plan — philosophy, Middle (6–8) & Secondary (9–10) levels with subjects/approach, Formative 40% / Summative 60% assessment, and teaching methodology. Icon names are stored as strings in the data file and resolved by an in-component `iconMap` (matches `PublicNavbar` pattern).
- **2026-09-08:** Academic Calendar Flow and Co-Curricular sections removed from the page (per owner); `calendar` and `coCurricular` arrays removed from `curriculum.data.js` and the now-unused `Microscope`/`Trophy`/`HeartHandshake` icons dropped from the map. Page closes with `CtaBanner` after Methodology.

#### `CoCurricularPage`
- **Path:** `src/pages/public/CoCurricularPage.jsx`
- **Tokens/Classes:** shared `PageHero`, activity cards `bg-surface border border-border rounded-xl overflow-hidden shadow-card`, activity imagery `object-cover`, highlight checks `rounded-full bg-primary-light`.
- **Purpose:** Dedicated co-curricular activities page for coached sports, creative arts, and leadership programs.

#### `FacultyPage`
- **Path:** `src/pages/public/FacultyPage.jsx`
- **Tokens/Classes:** shared `PageHero`, responsive faculty grid `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`, shared `FacultyCard` landscape profile cards, and staggered `Reveal` animation.
- **Purpose:** Dedicated `/faculty` page presenting the school's faculty and leadership team. The legacy `/staff` URL redirects here.

#### `FacilitiesPage`
- **Path:** `src/pages/public/FacilitiesPage.jsx`
- **Tokens/Classes:** stats strip `bg-surface-secondary` (matches `StatsBar`), facility cards `bg-surface border-border rounded-xl p-6 sm:p-8 shadow-card`, icon tile `size-14 rounded-xl bg-primary-light`, feature check pills `rounded-full bg-success-light` + `text-success-foreground`, tour CTA strip `bg-primary-muted rounded-2xl border-border`.
- **Purpose:** Facilities grid with per-facility feature lists, stats bar, book-a-tour CTA.

#### `ActivitiesPage`
- **Path:** `src/pages/public/ActivitiesPage.jsx`
- **Tokens/Classes:** program cards `bg-surface rounded-xl overflow-hidden shadow-card` with `h-48` images, highlight checks `rounded-full bg-primary-light` + `text-primary`, club cards `bg-background border-border rounded-xl shadow-card hover:-translate-y-1` with `size-12 rounded-xl bg-primary-light` icon tiles.
- **Purpose:** Co-curricular flagship programs + extra-curricular clubs grid.

#### `GalleryPage`
- **Path:** `src/pages/public/GalleryPage.jsx`
- **Last updated:** 2026-09-07
- **Tokens/Classes:** header stats pill `rounded-full bg-surface border border-border` with `Camera` icon, grid `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`, tiles `rounded-xl bg-surface border border-border shadow-card hover:shadow-md` with `aspect-[4/3] object-cover` image + `group-hover:scale-105`, hover caption `bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent` (filename label), lightbox `fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-sm` with round nav buttons `bg-white/10 hover:bg-white/20` and filename + counter caption.
- **Purpose:** Photo gallery — renders every photo listed in the `gallery` array of `src/assets/images.js`, with keyboard-accessible full-screen lightbox (Close, ArrowLeft/Right, Escape, scroll-lock via `document.body.style.overflow`). Formerly `MemoriesPage` with 9 hardcoded editorial cards + category filter pills — removed with the made-up titles/dates (posed stock photos) once real school photos arrived. `memories.data.js` deleted.
- **2026-09-07:** Removed `memoriesData` import + category filter (All/Sports/Academic/Culture/Events); grid + lightbox now run off `dummyImages.gallery`.
- **2026-09-07 (simplified):** now runs off `src/assets/images.js` — `const photos = images.gallery`, captions/alts from `images.galleryNames[idx]` (replaces old `galleryFileName()` helper). Gallery grid + lightbox use `images.galleryNames[idx] ?? "campus photo"` for `alt`, `aria-label`, and hover caption. Copy updated to point juniors at `src/assets/images.js`.

#### `images` (asset module)
- **Path:** `src/assets/images.js`
- **Last updated:** 2026-09-07
- **Purpose:** The single, simple, explicit image manifest replacing the old `localImages.js` (`import.meta.glob` pipeline) and `dummyImages.js` layers. Follows the owner's plain per-file format: one `import x from "./file.jpg"` per photo + a grouped `export const images = {...}`. Assets live in `src/assets/` → `logo.jpg`, `hero_1/2/3/5.jpg`, `gallery/gallary_1…gallary_22.jpg` (alphabetical). Exports: raw photos (`hero_1`, `logo`, `gallary_1`…), site aliases (`heroSlides`, `pageHeroBg`, `gallery`, `galleryNames`, and semantic `principal`/`sports`/`arts`/`clubs`/`middleProgram`/`secondaryProgram`/`stemProgram`/`galleryScience`/`galleryQirat`), plus staff portrait keys as `undefined` so `ProfileCard`/`StaffCard`/`AlumuniCard` render their built-in `UserRound` icon fallback.
- **Junior workflow:** add a photo = drop the file into `src/assets/` (or `gallery/`), add one `import`, add one line in the export. No magic, no `import.meta.glob`.
- **2026-09-07:** all `dummyImages.*`/`localImages` references across data + components/pages rewritten to `images.*`; `dummyImages.js`, `localImages.js`, and `src/data/asserts/` deleted. Vite dedups two byte-identical pairs (`gallary_9≡gallary_21`, `hero_5≡gallary_7` — same photo uploaded twice), so 27 source files emit 25 in `dist/`. Zero remaining fake/remote images.

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
- **Last updated:** 2026-09-08
- **Tokens/Classes:** `group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-card hover:-translate-y-1 hover:border-border-strong hover:shadow-lg transition-all`, photo container `relative aspect-[4/3] w-full overflow-hidden bg-surface-secondary` with bottom depth scrim `bg-gradient-to-t from-black/60 via-transparent to-black/20`, vector SVG/CSS honor medal badge `absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10` (`h-24 w-20 sm:h-28 sm:w-24 md:h-32 md:w-26`) with reddish starburst outer ring (`#DC2626`), crimson gradient disc (`#DC2626` → `#991B1B`), dual ribbon tails (`#991B1B`/`#7F1D1D`), centered white score text (`text-xl sm:text-2xl md:text-3xl font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]`), and golden `Matric` subtitle, card body `p-4 sm:p-5 md:p-6` with name `text-lg sm:text-xl md:text-2xl font-extrabold text-text-primary group-hover:text-primary`, animated blue underline `h-0.5 w-12 bg-primary-light group-hover:w-16 group-hover:bg-primary`, and italic quote review `text-sm sm:text-base font-medium text-text-muted`.
- **Purpose:** Alumni topper profile card — portrait photo featuring a custom vector SVG/CSS honor medal badge with crisp score text, student name, and testimonial quote.
- **2026-09-08:** Replaced external image asset with a pure vector SVG/CSS honor medal badge. 100% responsive, zero resolution degradation on high-DPI screens, vector crisp on all device sizes. Removed reliance on `badge.jpg`.
- **2026-09-08:** Badge recoloured to a reddish/crimson honor seal per owner — outer starburst ring `#DC2626`, badge disc gradient `#DC2626 → #991B1B`, ribbon tails `#991B1B`/`#7F1D1D`, white stroke retained, and the `%` + `Matric` label kept in gold (`amber-300`/`amber-200`) for contrast.

#### `AcademicCalendarPage`
- **Path:** `src/pages/public/AcademicCalendarPage.jsx`
- **Last updated:** 2026-09-08
- **Tokens/Classes:** shared `PageHero`, then sections driven by `src/data/academicCalendar.data.js` (content from `Academic Calender 26-27.md`): Key Dates (`bg-background py-20`) with month-chip cards `bg-surface border border-border rounded-xl p-6 shadow-card` + `absolute left-0 w-1 bg-primary` accent bar, `CalendarDays` in `rounded-full bg-primary-light` month pill; Term Schedule (`bg-surface border-b`) three term cards with `bg-primary-muted` header strip + `GraduationCap` period pill + `Check` lists; Working Days (`bg-background py-16`) `grid-cols-4 sm:grid-cols-6 lg:grid-cols-12` cells with `text-xl font-extrabold` counts; Holidays (`bg-surface`) `Landmark` icon-tile rows; Co-curricular (`bg-background`) `Trophy` icon-tile cards; closing `CtaBanner`.
- **Purpose:** Dedicated `/academic-calendar` page for session 2026–27 — key dates/milestones, three-term structure with monthly tests + summative exams, working-day counts (224), public holidays & breaks, and co-curricular events. Linked from the ACADEMICS navbar dropdown ("Academic Calendar", `CalendarDays` icon).
- **2026-09-08:** "Examination Policies" section removed from this page (moved to the new dedicated `/examinations` page, `ExaminationPage`); the `Award`/`ClipboardList` imports and `policies` data usage dropped.

#### `ExaminationPage`
- **Path:** `src/pages/public/ExaminationPage.jsx`
- **Last updated:** 2026-09-08
- **Tokens/Classes:** shared `PageHero`, then data-driven sections from new `src/data/examination.data.js`. Session snapshot strip `bg-background py-16 border-b border-border` with stat numbers `text-4xl sm:text-5xl font-extrabold text-primary` + uppercase `text-text-muted` labels (matches `StatsBar` voice). Signature **marks-distribution comparison**: two cards `bg-surface border rounded-xl p-6 sm:p-8 shadow-card` each with a segmented stacked bar `flex h-4 rounded-full overflow-hidden bg-surface-tertiary` — widths from a static percent→class map (`w-[30%]` / `w-[40%]` / `w-[25%]` / `w-[35%]`) so Tailwind v4 sees them, segment fill `bg-primary` → `bg-primary-hover` → `bg-primary-active`, and a legend of `size-3 rounded-sm` swatches. Policy cards `ClipboardList` icon tiles + `Check` lists. Passing-marks tiles `text-4xl font-extrabold text-primary` + promotion callout `rounded-2xl bg-primary-muted border-border p-6 sm:p-8` with `BadgeCheck`/`RefreshCcw`. Closing `CtaBanner`.
- **Purpose:** Dedicated `/examinations` page — session snapshot, Monthly-vs-Summative marks distribution with durations and coverage, examination policies (monthly/summative/general), passing marks by grade (70/75/80), and re-exam + promotion criteria. Linked from the ACADEMICS navbar dropdown ("Examinations", `ClipboardList` icon).

#### `ContactPage`
- **Path:** `src/pages/public/ContactPage.jsx`
- **Tokens/Classes:** contact cards `bg-surface rounded-xl shadow-card text-center` with `size-12 rounded-xl bg-primary-light` icon tiles, form fields `rounded-md border-border` + `focus:ring-2 ring-primary`, success state `bg-success-light border-success/20`, department contacts card `bg-surface rounded-xl shadow-card`, office hours card `bg-primary-muted`, map link `bg-background border-border rounded-xl hover:border-primary`.
- **Purpose:** Contact info cards, message form (static success state), department contacts, office hours, map link.

#### `EnrichmentPage`
- **Path:** `src/pages/public/EnrichmentPage.jsx`
- **Tokens/Classes:** shared `PageHero`, responsive category grid `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`, cards `bg-surface border border-border rounded-xl p-6 shadow-card`, icon tiles `size-12 rounded-xl bg-primary-light`, and scroll reveals with staggered delays.
- **Purpose:** Dedicated `/activities/enrichment` page covering academic enrichment, science and technology, arts, sports, research, leadership, excursions, and character/community development.

#### `ProfileCard`
- **Path:** `src/components/shared/ProfileCard.jsx`
- **Tokens/Classes:** responsive landscape image `aspect-[4/3]`, `rounded-2xl`, white content panel `bg-surface`, `shadow-card`, `text-brand-accent` details, and responsive grids using `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`.
- **2026-09-07:** restyled on root text tokens — card now `border border-border` + hover `hover:border-border-strong hover:shadow-lg hover:-translate-y-1`; image gains an on-hover gradient veil `bg-gradient-to-t from-black/45 via-black/10 to-transparent`; decorative `DetailMarker` (primary/success/warning squares) kept; body uses `text-text-primary` name, an animated divider `h-px w-10 bg-primary-light` → `group-hover:w-14 group-hover:bg-primary`, `text-text-secondary` primary detail, and `text-text-muted` secondary detail (no more blue `text-brand-accent` on details).
- **2026-09-08:** `ProfileCard` superseded by `FacultyCard` for the faculty directory page.

### SEO / Metadata Components (non-visual)

#### `AlumniHomeSection`
- **Path:** `src/components/public/AlumniHomeSection.jsx`
- **Tokens/Classes:** `section` `py-20 sm:py-24 bg-background border-b border-border-light`, center-aligned `SectionHeading` (eyebrow `text-primary`), responsive alumni grid `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`, CTA link `bg-primary text-primary-foreground hover:bg-primary-hover focus:ring-primary`.
- **Purpose:** Featured Matric toppers promo on the homepage (after StatsBar), reusing `AlumuniCard` per person with a "View All Alumni" link to `/alumuni`. Renders top N (`count` prop, default 6) alumni; returns null if none.
- **2026-09-08:** Added and wired into `HomePage` right after `<StatsBar />`.

#### `SEOHead`
- **Path:** `src/components/SEOHead.jsx`
- **Dependency:** `react-helmet-async`
- **Purpose:** Central `<Helmet>` manager rendering per-page `<title>`, meta description, canonical URL, Open Graph + Twitter/X card tags, and optional `noindex`. Reads site identity + production domain from `src/config/seo.js`. Used on every public page with unique metadata; login & 404 pages pass `noindex`.
- **2026-09-08:** Added to all ~15 public routes + dynamic blog slugs (`type="article"`).

#### `SchemaData` (`OrganizationSchema` / `WebSiteSchema`)
- **Path:** `src/components/SchemaData.jsx`
- **Purpose:** Injects JSON-LD structured data via Helmet — `EducationalOrganization` (real name, description, url, email, phone, address, logo) and `WebSite` (publisher). Rendered on the homepage. No invented data; uses only `siteContent`/`seo` values.
