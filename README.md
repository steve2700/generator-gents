# Generator Gents — Gauteng Generator Specialists

> **Power. Precision. Professionalism.**
> Expert generator repair, servicing, maintenance and installation across all of Gauteng.

🌐 **Live site:** [www.generatorgents.co.za](https://www.generatorgents.co.za)
📞 **Emergency line:** 076 347 3736

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [SEO Architecture](#seo-architecture)
- [Design System](#design-system)
- [Images](#images)
- [Deployment](#deployment)
- [Contact](#contact)

---

## Tech Stack

| Layer | Technology | Notes |
|---|---|---|
| Framework | Next.js 14 (App Router) | File-based routing, RSC by default |
| Language | TypeScript | Strict mode enabled |
| Styling | Tailwind CSS | Custom design tokens |
| Images | Next.js `<Image>` | Auto WebP, lazy loading, responsive srcset |
| SEO | Metadata API + JSON-LD | Per-page structured data |
| Icons | Inline SVG | No icon library dependency |
| Analytics | Vercel Analytics + Speed Insights | Zero-config, production only |
| Package manager | pnpm | Faster installs, strict hoisting |
| Deployment | Vercel | Auto-deploy on push to `main` |

---

## Project Structure

```
.
├── app/                              # Next.js App Router
│   │
│   ├── layout.tsx                    # Root layout — header, footer, WhatsApp button
│   ├── page.tsx                      # Homepage
│   ├── globals.css                   # Global styles + Tailwind base
│   ├── robots.ts                     # /robots.txt generation
│   ├── sitemap.ts                    # /sitemap.xml — 38 URLs, auto-generated
│   │
│   ├── about/                        # About Generator Gents
│   ├── areas/                        # Service areas overview (18 areas)
│   ├── contact/                      # Contact & quote request form
│   ├── faq/                          # Frequently asked questions
│   ├── gallery/                      # Photo gallery (masonry + lightbox)
│   ├── generator-repair-cost/        # Transparent pricing guide
│   ├── privacy-policy/               # Privacy policy (POPIA compliant)
│   ├── services/                     # All services overview
│   └── terms/                        # Terms & conditions
│   │
│   ├── # ── Service Pages ──────────────────────────────────────────
│   ├── avr-repairs/                  # AVR & voltage regulator repairs
│   ├── control-panel-repairs/        # Control panel & relay repairs
│   ├── emergency-generator-repair/   # Same-day emergency callouts
│   ├── fuel-system-repairs/          # Fuel system, injectors & pumps
│   ├── generator-installation/       # New unit setup & wiring
│   ├── generator-maintenance/        # Scheduled maintenance plans
│   ├── generator-repairs/            # Generator repairs — main service
│   ├── generator-rewinding/          # Alternator rewinding
│   ├── generator-servicing/          # Oil, filters, full inspection
│   └── load-bank-testing/            # Capacity verification & load testing
│   │
│   └── # ── Area Pages (18 Gauteng locations) ──────────────────────
│       ├── generator-repairs-alberton/
│       ├── generator-repairs-benoni/
│       ├── generator-repairs-boksburg/
│       ├── generator-repairs-centurion/
│       ├── generator-repairs-edenvale/
│       ├── generator-repairs-fourways/
│       ├── generator-repairs-germiston/
│       ├── generator-repairs-johannesburg/
│       ├── generator-repairs-kempton-park/
│       ├── generator-repairs-krugersdorp/
│       ├── generator-repairs-midrand/
│       ├── generator-repairs-pretoria/
│       ├── generator-repairs-randburg/
│       ├── generator-repairs-roodepoort/
│       ├── generator-repairs-sandton/
│       ├── generator-repairs-soweto/
│       ├── generator-repairs-springs/
│       └── generator-repairs-vereeniging/
│
├── components/
│   ├── site-header.tsx               # Sticky header — ticker, nav, dropdowns, mobile drawer
│   ├── site-footer.tsx               # Footer — logo, links, socials, emergency banner
│   ├── whatsapp-button.tsx           # Fixed WhatsApp CTA button
│   ├── organization-schema.tsx       # Global JSON-LD Organization schema
│   ├── breadcrumbs.tsx               # Breadcrumb nav (BreadcrumbList schema-ready)
│   ├── gallery-grid.tsx              # Masonry gallery with category filter + lightbox
│   └── hero-slideshow.tsx            # Auto-rotating hero slideshow (client component)
│
└── public/
    ├── generator_gents_logo.svg      # Primary logo — SVG, used in header & footer
    ├── favicon.ico                   # Legacy favicon
    ├── favicon-16x16.png             # Favicon 16px
    ├── favicon-32x32.png             # Favicon 32px
    ├── favicon-48x48.png             # Favicon 48px
    ├── favicon-64x64.png             # Favicon 64px
    ├── apple-touch-icon.png          # iOS home screen icon (180×180)
    ├── android-chrome-192x192.png    # Android / PWA icon
    ├── android-chrome-512x512.png    # Android / PWA splash icon
    ├── mstile-150x150.png            # Windows tile
    ├── og-image.jpg                  # Open Graph share image (1200×630)
    ├── site.webmanifest              # PWA manifest — shortcuts, icons, theme
    └── images/                       # All optimised content images (WebP + JPG)
```

---

## Getting Started

### Prerequisites

- **Node.js** 18+
- **pnpm** — install with `npm i -g pnpm`

### Install dependencies

```bash
pnpm install
```

### Run development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build & preview production

```bash
pnpm build
pnpm start
```

### Lint & type-check

```bash
pnpm lint
pnpm type-check   # tsc --noEmit
```

---

## SEO Architecture

Every page is built with a layered SEO approach targeting Gauteng generator repair searches.

### Per-page Metadata

Every route exports a `generateMetadata` function (or static `metadata` object) containing:

- Unique `title` and `description` (geo-targeted to specific area or service)
- `canonical` URL pointing to the correct `www` origin
- `robots` directives — `index`, `follow`, `max-snippet:-1`, `max-image-preview:large`
- `openGraph` — type, locale (`en_ZA`), image with dimensions and alt text
- `twitter:card` — `summary_large_image`
- Geo-targeted `keywords` per page (city, service, brand combinations)

### Structured Data (JSON-LD)

| Schema Type | Location | Purpose |
|---|---|---|
| `Organization` | Global (`organization-schema.tsx`) | Business identity, contact, social profiles |
| `LocalBusiness` | Services page | NAP, opening hours, geo coordinates, offer catalogue |
| `Service` ×10 | Each service page | Structured service node linked to `LocalBusiness` |
| `ItemList` | Services overview | Links to all 10 service pages |
| `FAQPage` | FAQ page + service pages | Q&As eligible for Google rich results |
| `BreadcrumbList` | All inner pages | Breadcrumb trail for rich results |

### Sitemap

Auto-generated at `/sitemap.xml` via `app/sitemap.ts`:

| Category | Count |
|---|---|
| Main / info pages | 10 |
| Service pages | 10 |
| Area pages | 18 |
| **Total** | **38 URLs** |

All URLs use `changeFrequency` and `priority` hints appropriate to their update cadence.

### Robots

`/robots.txt` via `app/robots.ts`:
- Allows all crawlers on all public routes
- Disallows `/api/`, `/_next/`, `/admin/`
- Points to `/sitemap.xml`

---

## Design System

### Colour Tokens

| Token | Hex | Usage |
|---|---|---|
| Brand black | `#0a0a0a` | Page background, header, footer |
| Dark grey | `#111111` | Cards, dropdowns, ticker bar |
| Surface grey | `#1a1a1a` | Elevated surfaces |
| Gold | `#c8a84b` | Brand accent — links, borders, highlights |
| Emergency red | `#b91c1c` | CTA buttons, emergency banner |
| Off-white | `#f5f4f0` | Light section backgrounds |

### Interaction Patterns

- **Dark surfaces** — elements transition from `white/65` → `white` → `#c8a84b` on hover
- **Light surfaces** — elements transition from `black/60` → `#c8a84b` on hover
- **Active nav items** — gold text + 2px gold underline indicator
- **Focus rings** — `ring-2 ring-[#c8a84b]` for keyboard accessibility

### Header Layers (top → bottom)

1. **Repair cost ticker** — scrolling price marquee, `#111111` background
2. **Top bar** — tagline left, phone number right (desktop only)
3. **Main nav** — logo, nav links with dropdowns, red CTA button
4. **Mobile drawer** — accordion menus for Services and Areas

---

## Images

All content images live in `public/images/` and are served via Next.js `<Image>` for automatic WebP conversion, responsive `srcset`, and lazy loading. Above-the-fold images use the `priority` prop to avoid LCP delay.

| File | Used on |
|---|---|
| `Industrial_Generator_Repair_Team.webp` | Hero slideshow, gallery |
| `2026-06-11_Generator_Preventative_Maintenance.webp` | Hero slideshow, maintenance page, gallery |
| `Technician_Servicing_Generator.webp` | Hero slideshow, servicing page |
| `generator-repair-technician-onsite-midrand.webp` | Hero slideshow, emergency page |
| `compressed_Diesel_Gen_Repair.webp` | Repairs section |
| `compressed_Ryobi_Petrol_Generator_3.5kVA_Maintenance.webp` | Gallery |
| `compressed_Grip_7.5KVA_Petrol_Generator_Repair.jpg` | Gallery |

> **Adding new images:** drop WebP files into `public/images/`, name them descriptively (good for SEO), and reference via `<Image src="/images/your-file.webp" ... />`.

---

## Deployment

The site deploys automatically to **Vercel** on every push to `main`. No environment variables are required — there are no external API keys or third-party services.

### Post-deploy checklist

- [ ] Submit `https://www.generatorgents.co.za/sitemap.xml` to [Google Search Console](https://search.google.com/search-console)
- [ ] Verify the canonical `www` domain in Search Console
- [ ] Test structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Check Core Web Vitals in Vercel Analytics dashboard
- [ ] Confirm WhatsApp button and emergency call links are working on mobile

### Branch strategy

| Branch | Purpose |
|---|---|
| `main` | Production — auto-deploys to Vercel |
| `dev` | Development work — preview deploys |

---

## Social & Review Profiles

| Platform | Link |
|---|---|
| Facebook | [Generator Gents](https://www.facebook.com/p/Generator-Gents-61567461796938/) |
| Instagram | [@generatorgents](https://www.instagram.com/generatorgents/) |
| TikTok | [@generator.gents](https://www.tiktok.com/@generator.gents) |
| Google Business | [View profile](https://share.google/6GGtgPwFvrRNQDzTP) |
| HelloPeter | [generator-gents](https://www.hellopeter.com/generator-gents) |

---

## Contact

**Generator Gents**
📞 076 347 3736
✉️ info@generatorgents.co.za
🌐 [www.generatorgents.co.za](https://www.generatorgents.co.za)
📍 Gauteng, South Africa
