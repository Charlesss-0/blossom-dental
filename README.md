# Blossom Dental

A modern, dental clinic website for **Blossom Dental** in Managua, Nicaragua. Built with Next.js and styled with Tailwind CSS v4.

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** (App Router) | Framework |
| **React 19** | UI Library |
| **TypeScript** | Language |
| **Tailwind CSS v4** | Styling |
| **Framer Motion** | Animations |
| **shadcn/ui** (New York) | Component Library |
| **Radix UI** | Headless Primitives |
| **Lucide React** | Icons |
| **date-fns** | Date handling |
| **schema-dts** | Structured data (JSON-LD) |
| **next-sitemap** | Sitemap generation |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout (fonts, metadata, JSON-LD, GTM)
│   ├── page.tsx             # Homepage (single-page landing)
│   └── services/
│       ├── page.tsx         # Services listing grid
│       └── [slug]/page.tsx  # Dynamic service detail (SSG)
├── components/
│   ├── cta/                 # WhatsApp CTA component
│   ├── layout/              # Navbar, Footer
│   ├── sections/            # Hero, About, Services, Team, FAQ, Contact
│   └── ui/                  # shadcn/ui primitives + custom components
└── lib/
    ├── services-data.ts     # Service content and FAQs
    └── utils.ts             # cn() helper + scrollToSection
```

## Pages

- **`/`** — Single-page landing with Navbar, Hero, Location, Services, About, Team, FAQ, Contact, Footer
- **`/services`** — Full services grid with descriptions and links
- **`/services/[slug]`** — Dynamic service detail pages (SSG with 6 services)

## Services

1. Odontología General
2. Ortodoncia
3. Endodoncia
4. Periodoncia
5. Cirugía Oral
6. Implantes Dentales

## Environment Variables

```
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_WHATSAPP_MESSAGE=
```

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start development server (Turbopack) |
| `pnpm build` | Production build + sitemap generation |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint (flat config v9) |

## Features

- **WhatsApp booking** — Appointment CTAs with pre-filled messages and GTM tracking
- **SEO** — Structured data (Dentist schema), Spanish metadata, Open Graph, sitemap
- **Analytics** — Google Tag Manager integration with custom events
- **Responsive** — Mobile-first with collapsible nav drawer (Sheet)
