# Al-Hadi Public School — Website

Public website for Al-Hadi Public School (Gilgit). A fast, static single-page-app built with React and Vite, styled with Tailwind CSS v4 design tokens. All content is static frontend data — there is no backend, database, or build-time server.

## Tech Stack

- **React 19** + **Vite 6**
- **React Router 7** (`createBrowserRouter`)
- **Tailwind CSS v4** (`@tailwindcss/vite`, design tokens in `src/index.css`)
- **lucide-react** — icons
- **clsx + tailwind-merge** — `cn()` class merging in `src/lib/utils.js`
- **Plus Jakarta Sans** — loaded via `@fontsource-variable/plus-jakarta-sans`

## Getting Started

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
```

If you see a warning about the API key on first run, no environment variables are required — the site runs fully static.

## Scripts

| Command          | Description                              |
| ---------------- | ---------------------------------------- |
| `npm run dev`    | Start the Vite dev server                |
| `npm run build`  | Production build (outputs to `dist/`)    |
| `npm run preview`| Preview the production build locally     |

## Project Structure

```
src/
├── main.jsx                 # App entry (React root + font import)
├── App.jsx                  # RouterProvider
├── index.css                # Tailwind v4 @theme design tokens
├── routes/index.jsx         # All public routes
├── components/
│   ├── layout/              # PublicNavbar, PublicFooter, PublicShell
│   ├── public/              # Page sections (Hero, Stats, Talents, ...)
│   └── shared/              # Reveal, SectionHeading, StaffCard, ...
├── pages/
│   ├── public/              # Individual page components
│   └── AlumuniPage.jsx      # Alumni toppers showcase
├── data/                    # Static content (siteContent, blogs, notices, ...)
└── lib/
    ├── utils.js             # cn() helper
    └── dummyImages.js       # Unsplash CDN image URLs
```

## Routes

| Route           | Page                            |
| --------------- | ------------------------------- |
| `/`             | Home (landing page)             |
| `/about`        | About                           |
| `/curriculum`   | Curriculum                      |
| `/co-curricular`| Co-curricular activities        |
| `/facilities`   | Facilities                      |
| `/activities`   | Activities                      |
| `/gallery`      | Memories / photo gallery        |
| `/blogs`        | Blog listing                    |
| `/blogs/:slug`  | Blog article detail             |
| `/staff`        | Staff information               |
| `/alumuni`      | Alumni toppers                  |
| `/contact`      | Contact                         |
| `/application`  | Application status placeholder  |
| `/login`        | Placeholder                     |
| `*`             | 404                             |

## Adding Content

Content lives in `src/data/` as plain JavaScript arrays/objects:

- `siteContent.data.js` — school info, hero subtitle, principal, stats, programs, leadership, alumni
- `blogs.data.js` — blog articles
- `notices.data.js` — official notices
- `facilities.data.js` — campus facilities
- `activities.data.js` — clubs & activities
- `memories.data.js` — gallery items

Images are referenced from `src/lib/dummyImages.js` (verified Unsplash CDN URLs). To use real photos, replace the URLs there or point data fields at your own hosted images.

## Styling & Design Tokens

All colors, radii, shadows, and fonts are defined as Tailwind v4 tokens in `src/index.css` (see the `@theme` block). Components use token utilities only (`bg-primary`, `text-text-secondary`, `rounded-xl`, ...) — never raw hex values or Tailwind's default color scale.

Key brand values:

- Primary brand blue: `#1C74BD`
- Font: Plus Jakarta Sans
- Radius scale: 8 / 10 / 12 / 16 px

## Deploying

This is a standard Vite SPA — deploy the `dist/` folder to any static host.

**Vercel** (recommended): the repo includes `vercel.json`, which rewrites all routes to `index.html` for SPA routing.

```bash
npm run build
vercel --prod
```

## License

Proprietary — © 2026 Al-Hadi Public School. All rights reserved.