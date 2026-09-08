# UI Tokens

Design tokens for the School Management System. All colors, typography, radius, and component values are anchored on the UI/UX specification (doc 06): **primary teal `#0D806B`** (darkened from the original logo-teal `#149B84` and doc-06 brand blue `#1C74BD` so white text passes AA contrast), a clean neutral surface palette, a modern sans-serif, and a radius scale of **8 / 10 / 12 / 16**. Use these tokens throughout the codebase — never hardcode a hex value or use a raw Tailwind color class in a component.

---

## How to Use

This project uses **Tailwind CSS v4** with Vite (the `@tailwindcss/vite` plugin). All design tokens are defined with the `@theme` directive in **`src/index.css`** (the CSS entry imported once in `src/main.jsx`). There is **no `tailwind.config.js`** for colors or tokens.

Tailwind v4 generates utility classes automatically from every `@theme` variable:

- `--color-primary` → `bg-primary`, `text-primary`, `border-primary`
- `--color-surface` → `bg-surface`, `text-surface`, `border-surface`
- `--radius-lg` → `rounded-lg`

```jsx
// Correct — generated utility classes
className="bg-surface text-text-primary border-border rounded-lg"

// Also correct — reference the CSS variable directly when needed
style={{ color: "var(--color-text-primary)" }}

// Never — hardcoded hex
className="bg-[#1C74BD] text-[#111827]"

// Never — raw Tailwind color scale
className="bg-blue-600 text-gray-500"
```

> **shadcn/ui note:** we run shadcn/ui in **JS mode** (`components.json` → `"tsx": false`, so components are `.jsx`). shadcn components read semantic CSS variables. Map its expected names (`--background`, `--foreground`, `--primary`, `--border`, `--ring`, `--radius`, etc.) to our tokens in the same `@theme`/`:root` block so shadcn components inherit our palette automatically. Keep our project tokens as the source of truth.

---

## src/index.css — Complete Token Definition

```css
@import "tailwindcss";

@theme {
  /* ---- Font ---- */
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;

  /* ---- Page & surfaces (neutral, cool gray) ---- */
  --color-background: #f7f8fa;         /* app canvas */
  --color-surface: #ffffff;            /* cards, panels, modals */
  --color-surface-secondary: #f9fafb;  /* table header, subtle fills */
  --color-surface-tertiary: #f3f4f6;   /* hover fills, chips */
  --color-sidebar: #ffffff;            /* admin sidebar */
  --color-sidebar-active: #e8f1fa;     /* active nav item bg (primary-light) */

  /* ---- Borders ---- */
  --color-border: #e5e7eb;             /* default border */
  --color-border-light: #eef0f3;       /* subtle dividers */
  --color-border-strong: #d1d5db;      /* emphasized border, inputs on focus-within */

  /* ---- Text ---- */
  --color-text-primary: #111827;       /* headings, key values */
  --color-text-secondary: #4b5563;     /* body, labels */
  --color-text-muted: #6b7280;         /* captions, secondary labels */
  --color-text-subtle: #9ca3af;        /* placeholders, disabled */
  --color-text-inverse: #ffffff;       /* text on primary / dark */

  /* ---- Primary — logo teal (#0D806B, AA-contrast pass) ---- */
  --color-primary: #0d806b;
  --color-primary-hover: #0a6b5a;      /* button hover */
  --color-primary-active: #085a4b;     /* button pressed */
  --color-primary-light: #e4f6f1;      /* tint bg (active nav, info chips) */
  --color-primary-muted: #f1fbf8;      /* very subtle tint */
  --color-primary-foreground: #ffffff; /* text/icon on primary */

  /* ---- Footer (dark navy surface) ---- */
  --color-footer-bg: #0b132b;
  --color-footer-border: #1e293b;      /* footer dividers */
  --color-footer-heading: #ffffff;     /* footer headings */
  --color-footer-text: #cbd5e1;        /* footer body text (AA on footer-bg) */
  --color-footer-muted: #94a3b8;       /* footer secondary text */
  --color-footer-subtle: #7b8aa1;      /* footer copyright (AA on footer-bg) */

  /* ---- Success — approved / pass / published-ok (green) ---- */
  --color-success: #16a34a;
  --color-success-light: #dcfce7;
  --color-success-foreground: #15803d;

  /* ---- Warning — pending / attention (amber) ---- */
  --color-warning: #d97706;
  --color-warning-light: #fef3c7;
  --color-warning-foreground: #b45309;

  /* ---- Error — rejected / fail / destructive (red) ---- */
  --color-error: #dc2626;
  --color-error-light: #fee2e2;
  --color-error-foreground: #b91c1c;

  /* ---- Info / neutral state (uses primary family) ---- */
  --color-info: #2563eb;
  --color-info-light: #dbeafe;
  --color-info-foreground: #1d4ed8;

  /* ---- Draft / neutral badge (gray) ---- */
  --color-neutral: #6b7280;
  --color-neutral-light: #f3f4f6;
  --color-neutral-foreground: #374151;

  /* ---- Border radius (per doc 06) ---- */
  --radius-sm: 8px;    /* small controls: buttons, badges, small chips */
  --radius-md: 10px;   /* inputs, selects, textareas */
  --radius-lg: 12px;   /* cards, table containers, popovers */
  --radius-xl: 16px;   /* large sections, modals, hero panels */
  --radius-full: 9999px; /* pills, avatars, status dots */

  /* ---- Elevation ---- */
  --shadow-card: 0 1px 2px rgba(16, 24, 40, 0.04), 0 1px 3px rgba(16, 24, 40, 0.06);
  --shadow-md: 0 4px 8px -2px rgba(16, 24, 40, 0.08), 0 2px 4px -2px rgba(16, 24, 40, 0.04);
  --shadow-lg: 0 12px 24px -6px rgba(16, 24, 40, 0.12);
}

/* Map shadcn/ui semantic variables onto our tokens so shadcn
   components (Button, Dialog, Input, Table, ...) inherit the palette. */
:root {
  --background: var(--color-background);
  --foreground: var(--color-text-primary);
  --card: var(--color-surface);
  --card-foreground: var(--color-text-primary);
  --popover: var(--color-surface);
  --popover-foreground: var(--color-text-primary);
  --primary: var(--color-primary);
  --primary-foreground: var(--color-primary-foreground);
  --secondary: var(--color-surface-secondary);
  --secondary-foreground: var(--color-text-primary);
  --muted: var(--color-surface-tertiary);
  --muted-foreground: var(--color-text-muted);
  --accent: var(--color-primary-light);
  --accent-foreground: var(--color-primary-active);
  --destructive: var(--color-error);
  --destructive-foreground: var(--color-error-foreground);
  --border: var(--color-border);
  --input: var(--color-border);
  --ring: var(--color-primary);
  --radius: 0.625rem; /* 10px — shadcn base; components derive sm/lg from it */
}
```

Tailwind v4 generates utilities from every `--color-*` and `--radius-*` token above (`bg-primary`, `text-success-foreground`, `border-border-light`, `rounded-xl`, etc.).

**Font loading (Vite, not Next):** install `@fontsource-variable/inter` and import it once at the top of `src/main.jsx` (`import "@fontsource-variable/inter";`). The `--font-sans` token then applies via Tailwind's `font-sans`. (A Google Fonts `<link>` in `index.html` is an acceptable alternative — but never fall back to a raw system font as the primary face.)

---

## Color Usage Guide

### Page layout

| Element | Token |
| --- | --- |
| App canvas background | `bg-background` |
| Card / panel / modal | `bg-surface` |
| Table header / subtle fill | `bg-surface-secondary` |
| Hover fill / chip | `bg-surface-tertiary` |
| Sidebar background | `bg-sidebar` |
| Active sidebar item | `bg-sidebar-active` |
| Default border | `border-border` |
| Subtle divider | `border-border-light` |

### Typography

| Element | Token |
| --- | --- |
| Headings, key values | `text-text-primary` (#111827) |
| Body, form labels | `text-text-secondary` (#4B5563) |
| Captions, meta | `text-text-muted` (#6B7280) |
| Placeholder, disabled | `text-text-subtle` (#9CA3AF) |
| Text on primary/dark | `text-text-inverse` |

### Primary (brand teal)

Used for: primary buttons, active nav, links, focus rings, key stats, selected states, the results countdown accent.

| Element | Token |
| --- | --- |
| Button background | `bg-primary` (hover `bg-primary-hover`) |
| Button text | `text-primary-foreground` |
| Active nav / selected row tint | `bg-primary-light` |
| Very subtle tint | `bg-primary-muted` |
| Focus ring | `ring-primary` |

### Status badges

Status is communicated with **text + color + (optional) icon** — never color alone (accessibility). Badges are pill-shaped.

| Domain status | Background | Text |
| --- | --- | --- |
| **Draft** (marks/result/content) | `bg-neutral-light` | `text-neutral-foreground` |
| **Pending** (awaiting approval) | `bg-warning-light` | `text-warning-foreground` |
| **Approved** (marks) | `bg-success-light` | `text-success-foreground` |
| **Rejected** (marks) | `bg-error-light` | `text-error-foreground` |
| **Published** (result/notice/blog) | `bg-primary-light` | `text-primary-active` |
| **Unpublished / Hidden** | `bg-neutral-light` | `text-neutral-foreground` |

### Result & pass/fail

| Element | Background | Text |
| --- | --- | --- |
| Pass | `bg-success-light` | `text-success-foreground` |
| Fail | `bg-error-light` | `text-error-foreground` |
| Failed subject row highlight | `bg-error-light` | `text-error-foreground` |
| LSA section accent | `bg-primary-muted` | `text-text-secondary` |
| Grade chip (A/B/…) | `bg-surface-tertiary` | `text-text-primary` |

### Admissions status

| Status | Background | Text |
| --- | --- | --- |
| Submitted / New | `bg-info-light` | `text-info-foreground` |
| Under review | `bg-warning-light` | `text-warning-foreground` |
| Accepted | `bg-success-light` | `text-success-foreground` |
| Rejected | `bg-error-light` | `text-error-foreground` |

---

## Typography Scale

Font family: **Inter** (`--font-sans`). Weights used: 400 (body), 500 (labels/UI), 600 (headings), 700 (page titles / big stats).

| Element | Size | Weight | Line height | Color token |
| --- | --- | --- | --- | --- |
| Page title | 24px | 700 | 32px | `text-text-primary` |
| Section / card heading | 16px | 600 | 24px | `text-text-primary` |
| Stat number (dashboard) | 28px | 700 | 36px | `text-text-primary` |
| Nav item (active) | 14px | 600 | 20px | `text-primary` |
| Nav item (inactive) | 14px | 500 | 20px | `text-text-secondary` |
| Form label | 14px | 500 | 20px | `text-text-secondary` |
| Body / cell text | 14px | 400 | 20px | `text-text-primary` |
| Table header | 12px | 500 | 16px | `text-text-muted` (uppercase, tracking-wide) |
| Caption / meta / timestamp | 12px | 400 | 16px | `text-text-muted` |
| Badge text | 12px | 500 | 16px | per badge |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `gap-1` | 4px | Tight inline gaps |
| `gap-2` | 8px | Badge/tag gaps, icon+label |
| `gap-3` | 12px | Form field gaps |
| `gap-4` | 16px | Card internal gaps |
| `gap-6` | 24px | Between sections |
| `gap-8` | 32px | Page section spacing |
| `p-4` | 16px | Default card padding |
| `p-6` | 24px | Large card / section padding |
| `px-4 py-2` | 16/8px | Button padding |
| `px-2.5 py-0.5` | 10/2px | Badge padding |

Admin content area padding: **24px** (`p-6`). Gap between page sections: **24px** (`gap-6`).

---

## Component Tokens

### Cards

```
background: bg-surface
border: 1px solid var(--color-border)
border-radius: 12px            (rounded-lg → --radius-lg)
padding: 24px                  (p-6)
box-shadow: var(--shadow-card)
```

Large sections / modals use **16px** (`rounded-xl` → `--radius-xl`). Never use a colored card surface — color lives inside the card (badges, chips, text).

### Buttons

**Primary**
```
background: bg-primary  (hover bg-primary-hover, active bg-primary-active)
text: text-primary-foreground
border-radius: 8px      (rounded-sm → --radius-sm)
padding: 8px 16px
font: 14px / 500
focus: ring-2 ring-primary ring-offset-2
```

**Secondary**
```
background: bg-surface
border: 1px solid var(--color-border)
text: text-text-primary  (hover bg-surface-tertiary)
border-radius: 8px
padding: 8px 16px
```

**Destructive** (delete, reject)
```
background: bg-error
text: text-text-inverse (hover: darken)
border-radius: 8px
```

**Ghost**
```
background: transparent
text: text-text-secondary  (hover bg-surface-tertiary)
border-radius: 8px
```

### Inputs / Selects / Textareas

```
background: bg-surface
border: 1px solid var(--color-border)
border-radius: 10px     (rounded-md → --radius-md)
padding: 8px 12px
text: text-text-primary   placeholder: text-text-subtle
focus: ring-2 ring-primary border-primary
disabled: bg-surface-secondary text-text-subtle
error: border-error  + helper text in text-error-foreground
```

### Badges / Status pills

```
border-radius: 9999px   (rounded-full)
padding: 2px 10px
font: 12px / 500
display: inline-flex items-center gap-1   (icon optional)
```

### Tables

```
container: bg-surface, border 1px solid border, rounded-lg, overflow-hidden
header row: bg-surface-secondary, 12px uppercase text-text-muted
row: 14px text-text-primary, border-bottom 1px solid border-light
row hover: bg-surface-tertiary
no zebra striping — separate rows by border only
```

### Marks Focus Card (per-student marks entry)

```
container: bg-surface, rounded-xl (16px), p-6, shadow-md
student header: name + roll + class, primary-tinted strip (bg-primary-muted)
subject rows: label + max-marks hint + numeric input (rounded-md)
LSA block: visually separated, bg-primary-muted, own subtotal
live subtotals: text-text-secondary; final % preview: text-text-primary 600
invalid mark (> max / negative): input border-error + helper text
status pill: Draft / Pending, top-right
```

### Result Card (public, printable)

```
page: A4, white, no app chrome
header band: school logo + name (primary), exam + session
student block: name, roll, class, session
subject table: subject | max | obtained | (grade)   — failed rows bg-error-light
LSA table: separate, below academics
summary: Academic %, LSA %, Final %, Grade, Result (Pass/Fail)
footer: principal signature, school stamp/seal, date
print: colors preserved via print-color-adjust: exact
```

---

## Invariants

- Never put a raw hex value in a component — always use a token (Tailwind utility or `var(--color-*)`).
- Never use a raw Tailwind color scale (`bg-blue-600`, `text-gray-500`) — use project tokens only.
- **`#0D806B` is the only brand primary.** Never use Tailwind's built-in `blue-*`/`teal-*` scale for the primary.
- Font is **Inter**, loaded via `@fontsource-variable/inter` (or a Google Fonts `<link>`) — never fall back to a bare system font as the primary.
- All radii come from the scale **8 / 10 / 12 / 16** (`--radius-sm/md/lg/xl`) — no arbitrary radii.
- Radius intent is fixed: **buttons/badges 8**, **inputs 10**, **cards 12**, **modals/large sections 16**.
- Status is never conveyed by color alone — always pair color with a label (and, where used, an icon).
- All borders default to `--color-border` (#E5E7EB) — never `border-gray-*`.
- shadcn/ui semantic variables must map to these tokens (see the `:root` block) — do not let shadcn ship its default palette.
- Result cards must print with colors intact (`print-color-adjust: exact`) — never rely on default browser print stripping.
