# Progress Tracker

Update this file after every completed feature. Any AI agent reading this should immediately know what is done, what is in progress, and what is next. Feature numbers match build-plan.md.

---

## Current Status

**Phase:** Phase 1 — Public Website & Pages (Static Frontend)
**Last completed:** Lighthouse site-health pass (2026-09-08): performance + accessibility fixes for the ~72/81/100/100 report. ① Primary token darkened `#149b84 → #0d806b` (hover `#0a6b5a`, active `#085a4b`) so white-on-primary (and primary-on-light) meets AA — fixes the hero "Explore Our Programs" button. ② Footer moved off raw hex/slate to tokens: `--color-footer-*` palette (bg `#0b132b`, text `#cbd5e1`, muted `#94a3b8`, subtle `#7b8aa1` ≥4.5:1, heading white, border `#1e293b`); "Closed" now `text-warning`. ③ Hero: generated `hero_*_m.jpg` 480w mobile JPEGs (~30-45KB vs 281-501KB), `heroSlides` now objects with `src/srcSet/width/height`; first slide eager + `fetchPriority=high`, others `loading=lazy`, all `decoding=async` + explicit dims; slider dots got 24px touch targets + `aria-current`. ④ Vite plugin `lcp-image-preload` injects a build-time `<link rel="preload" as="image" imagesrcset=… imagesizes=100vw fetchpriority=high>` for the hero LCP into `dist/index.html`. ⑤ A11y: `StatsBar` `<dl>` restructured to proper `<dt>`→`<dd>` order (visual via `flex-col-reverse`), `WelcomeSection` h4→h3 (heading order), navbar/footer/principal images got explicit `width`/`height` + `decoding="async"`. `npm run build` green. New Relic fields in the Lighthouse trace (`in.requestmetrics.com`, `bam.eu01.nr-data.net`) are Vercel Speed Insights instrumentation, not repo code — no source change.
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
- [x] `AlumuniCard` badge replaced with a custom vector SVG/CSS honor medal badge: replaced image dependency (`badge.jpg`) with a pure vector badge featuring a gold starburst outer seal (`#F59E0B`), brand primary gradient disc (`#1C74BD`), gold dashed inner ring (`#FDE047`), dual ribbon tails, and bold score typography (`text-xl font-black` to `text-3xl font-black`). Vector-sharp and 100% responsive across every screen resolution.
- [x] Homepage Alumni Toppers section added (2026-09-08): new `AlumniHomeSection` component (`src/components/public/AlumniHomeSection.jsx`) placed right after the `StatsBar` on the homepage. Center-aligned `SectionHeading` + grid of top 6 `AlumuniCard`s and a "View All Alumni" CTA linking to `/alumuni`.
- [x] Alumni toppers updated from the real Grade 10 result sheet (2026-09-08): `siteContent.about.alumuni` now holds the 12 actual Matric toppers in rank order (Mukaram Ali Shah 90.27% → Muhammad Mujtaba 74.18%) with `name`/`fatherName`/`rollNo`/`Matric`/`review`/`image`. Reviews kept only where the student clearly matches a previous entry; students without a confirmed portrait use `image: undefined` (card icon fallback).
- [x] Faculty portraits added (2026-09-08): three new photos picked from `src/assets/faculty/` — `amjad.jpg`, `sajjad.jpg`, `yaadgar.jpg` — renamed to clean importable names, resized to the 800px faculty rule (re-encoded), imported in `images.js` as `staffAmjad`/`staffSajjad`/`staffYaadgar`, and added to `siteContent.about.leadership` (ranked list now: Hassan Abbas – Principal, Amjad – MS Chemistry, Sajjad Ali – MA English, Yaadgar – Master Biology). Faculty page grid (`/faculty`) renders the real photos.
- [x] Gallery images reconciled with the user's file cleanup (2026-09-08): the repo's tracked `gallary_4/8/9/10/11/17/18/21.jpg` were deleted on disk, so `images.js` dropped their imports/exports/gallery entries and re-pointed the `arts` and `galleryScience` aliases to surviving photos; the new `src/assets/gallery/GALLERY.jpg` was wired in as `gallery_main` (last grid slot, "Campus Memories"). `npm run build` green.
- [x] New program/activity banners wired in (2026-09-08): renamed the user's uploaded shots to `middle_program.jpg`, `high_school.jpg`, `art.jpg` (all 1280x575), optimized, and imported in `images.js`. `AcademicPrograms` (`/` and curriculum) now shows `Middle school.jpg` on the Middle School card (Grades 6-8 → `images.middleProgram`) and `high school optional.jpeg` on the Secondary School card (Grades 9-10 → `images.secondaryProgram`); `TalentsSection` Creative Arts card now uses `ART.jpg` (`images.arts`, also used by `/co-curricular`). Build green.
- [x] Banner images restored to full quality (2026-09-08): user asked not to compress `middle_program.jpg`/`high_school.jpg`/`art.jpg`. Replaced the q62-encoded versions with the originals copied from `AGA IMAGES/Done/` (`Middle school.jpeg` 186KB, `high school.jpeg` 207KB, `ART.jpeg` 171KB — all native 1280x575). Added a `banner-skip` rule to `scripts/optimize-images.mjs` so `npm run images` never re-encodes those three (prints "protected by rule"). Build green.
- [x] Hero overlays lightened/rebalanced (2026-09-08): `HeroSection` scrim was `black/30→40→50` top-heavy and `PageHero` had a near-black `black/80` band across the bottom. Re-tuned so darkness concentrates where the text sits and images show through elsewhere — HomeHero now `bg-gradient-to-t from-black/15 via-black/50 to-black/25` (darkest at the centered headline), PageHero now `bg-gradient-to-b from-black/55 via-black/40 to-black/30` (darkest under the title block, light at the bottom). White text keeps good contrast (≈3.5-4:1) while banners look brighter. Build green.
- [x] Hero slider replaced with the two new images (2026-09-08): per user, the hero is now `hero_1.jpg` (new, 1280x575) + `hero_111.jpg` (1280x960, the old hero_1 preserved under the new name). Removed `hero_2` and `hero_5` entirely (imports, exports, slider, and the `hero_2.jpg`/`hero_2_m.jpg`/`hero_5*` files deleted; `hero_3` kept only for the `sports` alias). Regenerated mobile variants via `gen-mobile-hero.mjs` (list now `["hero_1.jpg", "hero_111.jpg"]`) → `hero_1_m.jpg` 480x216 + new `hero_111_m.jpg` 480x360. `heroSlides` is now the two new slides with correct `width`/`height` (1280x575, 1280x960); `pageHeroBg` stays `hero_1`; Vite LCP preload verified in `dist/index.html` pointing at the new hero. Build green; stale `hero_6`/`hero_7` dist files gone after clean build.
- [x] Added Arif Hussain faculty photo (2026-09-08): user dropped `sir Arif pic.png` (1086x1448, 1.75MB) into `faculty/`; renamed to `arif.jpg`, resized to the 800px faculty rule (bright 600x800, 81.5KB), imported in `images.js` as `staffArif`, and pointed the existing "Arif Hussain – Masters in Chemistry" leadership entry at it (also corrected the pre-existing duplicate Yaadgar row in the list by removing it). Build green.
- [x] Reveal animation applied to the shared public route shell so all public pages inherit the same fade-in effect instead of only the home page.

Homepage includes a static blog highlights section, `/blogs` listing, and slug-driven `/blogs/:slug` article detail pages. Content remains static until a future content-management scope is approved.

Public navbar dropdown enhancement completed: About Us includes Facilities and Faculty, Academics includes Curriculum and Co-curricular Activities, and Activities includes Sports, Creative Arts, Clubs, and Leadership & Community Service. Section anchors were added to the existing public pages.

Added dedicated public routes for `/curriculum`, `/co-curricular`, and `/faculty`. Academics and Faculty dropdown items now use these pages; `/staff` remains a compatibility redirect, and Activities keeps its category dropdown because each category remains a useful direct entry point.

Added the dedicated `/activities/enrichment` page with eight responsive activity categories from the school enrichment programme. The Activities navigation now links to both the existing overview and the new Enrichment Programs page.

Simplified the shared public `PageHero`: removed the eyebrow prop and badge, and changed public page heroes to use short direct titles. Restored the `/co-curricular` page route target after build verification found the file missing.

Hero images no longer sliced by navbar (2026-09-07): in both `PageHero.jsx` and `HeroSection.jsx` the background image layer changed from `absolute inset-0` to `absolute inset-x-0 top-16 lg:top-20 bottom-0`. Image now starts below the fixed navbar (4rem mobile / 5rem desktop) instead of being hidden behind it — navbar remains the solid bar, and the hero photo is fully visible top-to-bottom. Also confirmed the auto-image pipeline picked up the newly dropped `hero-5.jpg` with zero code changes.

Fonts fully localized (2026-09-07): Manrope (700) added via `@fontsource/manrope` and imported in `main.jsx`; the Google Fonts `@import url(...)` line was removed from `index.css`. Fonts are now 100% bundled and offline — Plus Jakarta Sans (variable) + Manrope 700 both emit local `.woff2` in `dist/assets/`. No `fonts.googleapis.com` / `fonts.gstatic.com` references remain in `src/`. Web fonts + images are now fully self-hosted.
- **Font weights expanded, lighter headings (2026-09-08):** Manrope 400/500/600 added alongside 700 in `main.jsx`; restored `--font-display: "Manrope", ...` in `@theme` (was dropped during the hero redesign, leaving `font-display` a dead utility in `HeroSection`). Headings now render Manrope across weights instead of only 700 — Tailwind `font-medium`/`font-bold`/`font-extrabold` utilities take effect because the `.public-shell :where(h1-h6)` base rule uses `:where` (0 specificity). Hero `<h1>` keeps `font-medium` (Manrope 500) so the lighter hero text now actually renders lighter. Build green — Manrope 400/500/600/700 all emit local `.woff2`.

Blogs rewritten for the school (2026-09-07): `blogs.data.js` rewritten with two new school-centric stories — "Annual Sports Week 2026" (slug `annual-sports-week-2026`, house rivalry, sportsmanship, closing ceremony) and "Milad-un-Nabi: Honouring Rabi-ul-Awwal at Al-Hadi" (slug `milad-un-nabi-17-rabi-ul-awwal`, naat recitations, character lessons, community service drive). The original STEM blog (slug `nurturing-curiosity-science-education`) was retained as the third entry. All `coverImage`s no longer point to nonexistent `/assets/blog-*.jpg`; they now use real local photos (`dummyImages.sports`, `dummyImages.galleryQirat`, `dummyImages.stemProgram`).

About page "Our Story" (2026-09-07): the right-column Milestones timeline card was removed and replaced with a responsive real-photo image (`dummyImages.gallery[0]`, `h-72 lg:h-full rounded-2xl object-cover` with a subtle bottom gradient); the story grid now uses `items-stretch` so the image column matches the text column height on desktop and stacks below on mobile.

Internet images removed (2026-09-07): all Unsplash CDN URLs deleted from `dummyImages.js` (the `u()` helper is gone). The site is now fully offline-friendly for images — logo, hero slider, inner-page hero bg, gallery, and all landscape "card" images cycle through local `src/data/asserts/` photos via `localImages`. Staff/alumni portraits are `undefined`, so cards show their built-in icon fallback until real portraits are added to the assets folder. Final check: `grep unsplash src` → zero matches; only functional (non-image) external links remain (WhatsApp, Google Maps).

Real/local image pipeline (2026-09-07): new `src/lib/localImages.js` auto-loads school imagery with Vite `import.meta.glob` — logo (first image in `src/data/asserts/` root, rename-proof), hero slider (`website image/hero-*.jpg`), inner-page hero bg (`pageHeroBg` = first hero), and gallery (every `*.jpg` in `website image/gallery/`). `dummyImages.js` merges locals over Unsplash fallbacks so navbar/footer logo, home hero slider, and all PageHero backgrounds now use real school photos. Gallery page rebuilt from the fake 9-card "Memories" editorial grid (made-up event titles/dates on stock photos) + category pills into a live photo grid (27 real photos) with full-screen keyboard-accessible lightbox; `memories.data.js` deleted. Workflow going forward: drop/replace/delete files in `src/data/asserts/` — they appear/update automatically, zero code edits.

Image system SIMPLIFIED (2026-09-07): the `import.meta.glob` pipeline (`localImages.js`) + `dummyImages.js` layer were replaced by ONE explicit static-import file: `src/assets/images.js`, matching the repo owner's simple per-file format (plain `import hero_1 from "./hero_1.jpg"` etc. + a grouped `export const images = {...}`). Physical assets reorganized: `src/data/asserts/` (misspelled, spacey paths) deleted, files moved into a clean `src/assets/` tree → `logo.jpg`, `hero_1/2/3/5.jpg`, and `gallery/gallary_1…gallary_22.jpg` (alphabetical order). All `dummyImages.*` / `localImages` references across siteContent/activities/blogs/hero/page-hero/blog pages/gallery/about were rewritten to `images.*`, and `dummyImages.js`/`localImages.js`/`data/asserts` removed. `images.js` also exports the site aliases (heroSlides, pageHeroBg, gallery array, galleryNames, principal/sports/arts/clubs/…/STEM aliases, staff `undefined`). Vite dedups two byte-identical pairs (gallary_9≡gallary_21, hero_5≡gallary_7 — the same photo uploaded twice), so the 27 source files emit 25 in `dist/`; gallery intentionally shows them as-is. Build green, `grep dummyImages|localImages|asserts|unsplash src` → 0 matches. Junior-dev workflow: add a photo = drop file + add an import + a line in the export inside `src/assets/images.js`.

WhatsApp float removed (2026-09-07): the floating WhatsApp chat button (`WhatsAppFloat.jsx`, briefly added to `PublicShell`) was removed completely at the owner's request — component deleted, import + render removed from `PublicShell.jsx`. Existing WhatsApp contact form links on the Contact page are untouched. Build green.

Hiking top card (2026-09-07): on the Activities page (and the Co-curricular page's shared `coCurricular` data), the top flagship card was changed from "Athletics & Sports" to "Hiking & Mountain Adventure" — Gilgit valley trails, camping/navigation/survival training, inter-house mountain trekking, and leave-no-trace stewardship (id `act-hiking`, anchor `#hiking` on `/activities`). Image stays `images.sports` (a real local photo) — owner can swap by editing the alias in `src/assets/images.js` or pointing this entry at any `gallary_*`. Build green.

Navbar dropdowns enriched and modernized (2026-09-07): ABOUT US dropdown now lists Overview, Facilities, Staff Information, and Alumni & Topers; ACADEMICS now adds Facilities & Labs and School Activities alongside Curriculum and Co-curricular Activities. Every dropdown item renders as a two-line row (lucide icon tile from an in-component `navIconMap` + one-line caption). Desktop panel upgraded to a `w-72 rounded-xl` floating card with top caret, backdrop blur, and a `.animate-dropdown-in` entrance keyframe in `index.css`; menus open on hover-intent (120ms open / 180ms leave grace) in addition to click, close on outside click and on Escape. Mobile drawer submenus match the two-line/icon style.

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

- **Real faculty photos wired (2026-09-08):** replaced placeholder portraits with actual photos: `amjad.jpg`, `sajjad.jpg`, `yaadgar.jpg`, `arif.jpg` (600x800), `naqi.jpg` (606x800); `leadership` now lists 7 real staff (Hassan Abbas, Amjad, Sajjad Ali, Yaadgar, Kumail Abbas, Arif Hussain, Muhammad Naqi) with standardized qualifications (BS `<Subject>` / MS `<Subject>`). All faculty images run through the `faculty` optimizer rule (max 800px).
- **Program banners restored to full quality (2026-09-08):** `middle_program.jpg`, `high_school.jpg`, `art.jpg` kept at native 1280x575 (no q62 recompression); `optimize-images.mjs` gained a `banner-skip` rule (`art|middle_program|high_school\.jpg`).
- **Gallery updated (2026-09-08):** added `GALLERY.jpg` as `gallery_main` ("Campus Memories"), 4 new WhatsApp photos as `gallary_23`-`gallary_26`, stale `gallary_14/15/16/19` references removed from `images.js`.
- **Hero slider removed, single static image (2026-09-08):** auto-rotating hero replaced per user request. `HeroSection` renders one static full-bleed image with `loading="eager"` + `fetchPriority="high"`; `images.js` exposes a single `heroImage` object (srcSet `hero_1_m 480w` / `hero_1 1280w`) instead of the `heroSlides` array. Dot indicators, interval timer, and `prefers-reduced-motion` logic deleted. Deleted unused hero files `hero_2`, `hero_3`, `hero_5`, `hero_111` (+ their `_m` variants) and `high_school.jpg`; `images.sports` repointed to `gallary_3`, `images.secondaryProgram` to `gallary_2`. Vercel LCP preload regex still matches the single `hero_1`/`hero_1_m` pair.
- **Shahid, Financial Manager added (2026-09-08):** new faculty portrait dropped in as `Gemini_Generated_Image_w0zhnkw0zhnkw0zh.jpg` renamed to `shahid.jpg`, optimized by the `faculty` rule (800px, q62, 615KB -> 46KB); `staffShahid` alias exported and a `leadership` entry added (role "Financial Manager"). Build green. Note: the optimizer pass also resized `naqi.jpg` (1024x1024 -> 800x800) and `gallary_24.jpg` (was 4800x2156, the pageHeroBg image, cut to 1200x539) and processed a new untracked `gallery/gal.jpg` (960x1280 -> 900x1200) that is NOT yet wired into `images.js`.
- **alumni_9 for Imtiyaz Ali (2026-09-08):** `alumuni_9.jpg` (604KB drop) optimized by the `alumni` rule (640px, q62, 604KB -> 32KB), imported/exported as `alumuni_9`, and assigned to the existing Matric 78 alumni entry "Imtiyaz Ali" (was `image: undefined`). Build green.
- **Sardar, Chief Coordinator of Moral Values (2026-09-08):** `sardar.jpg` (436KB drop) optimized by the `faculty` rule (800px, q62, 436KB -> 25KB), `staffSardar` alias exported, `leadership` entry added with role "Chief Coordinator of Moral Values (Gilgit Region)". Build green. Also present but unwired: `faculty/sajid.jpg` (42KB, pre-sized).
- **Asif Hussain (2026-09-08):** `asif.jpg` (578KB drop) optimized by the `faculty` rule (578KB -> 40KB), `staffAsif` alias exported, `leadership` entry added — role "International Relations", bio as provided (BA + MA in International Relations, pursuing MPhil at KIU Gilgit; teaches History, Pakistan Studies, Social Studies). Build green. Note: user also re-tuned `leadership` themselves (Sardar Ali, Shahid Hussain, Amjad Hussain, Yaadghar Hussain, Sajid Ali wired to `staffSajid`) and `sardar.jpg` was replaced/re-optimized (131KB -> 37KB).
- **gallery_121 added (2026-09-08):** new `gallery/gallery_121.jpg` (48KB, already optimized — no re-encode) added as the 15th gallery photo ("Photo 15", after `gallary_26`, before `Campus Memories`/`gallery_main`). Build green. Unwired still: `gallery/gal.jpg`.
- **Hero now the 4032x3024 original, uncompressed (2026-09-08):** user dropped a new 2.4MB `hero_1.jpg` and asked for it "as is" — NOT run through the optimizer (which would q62-recompress at max 1920px). `heroImage` now `{ src: hero_1, width: 4032, height: 3024 }`; `srcSet` + the `hero_1_m` mobile variant removed (file deleted by user); `vite.config.js` LCP preload simplified to a single `href` preload (`/assets/hero_1-<hash>.jpg`, fetchpriority high). Build green; dist hero is 2,497KB original. Note: `pageHeroBg` (subpage banner) still `gallary_24` — only the homepage `HeroSection` uses the new image.

---

## Notes

_Add notes here as the build progresses — workarounds, patterns, anything that differs from the context files._
