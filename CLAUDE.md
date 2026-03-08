# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production (also runs next-sitemap postbuild)
npm run start      # Start production server
npm run lint       # Run ESLint
```

# Context for Claude Code — Grafana Portfolio Dashboard Integration

## Project Overview
Kavish Ambani is a DevOps intern building a portfolio website at `kavishambani.in`. Instead of a regular portfolio, the concept is to **clone the Grafana 11 dashboard UI exactly** and use it as a portfolio — panels display skills, projects, experience, etc. This immediately demonstrates DevOps expertise since Grafana is a core tool in the monitoring stack.

## Tech Stack
- **Framework**: Next.js 15.1.4 (App Router)
- **React**: 19
- **Styling**: Tailwind CSS 3.4 + custom CSS (Grafana theme)
- **TypeScript**
- **No additional UI libraries** — all Grafana UI is hand-built with CSS

## What Has Been Done
We created a pixel-perfect Grafana 11 dark theme clone as React components integrated into the existing Next.js project. Here's what was built:

### Files Created
1. **`src/components/grafana/GrafanaDashboard.tsx`** — Main `"use client"` component containing:
   - Grafana navbar (40px height, hamburger menu, logo SVG, breadcrumbs, time picker + refresh button combo)
   - Grafana sidebar (56px collapsed mega-menu with icon tooltips, orange active indicator bar)
   - Dashboard controls bar (title, tags, template variable display)
   - Collapsible row headers
   - Panel wrapper component with exact Grafana chrome (2px border-radius, 26px header, hover-reveal three-dot menu)
   - Stat panels with animated counters + sparkline SVGs
   - Gauge panels with half-arc SVG visualization
   - Logs panel (Loki-style with colored level badges and label chips)
   - Table panel (tech stack inventory with sticky headers)
   - Timeline panel (experience/career)
   - Status History bars (availability visualization)
   - Contact panel

2. **`src/components/grafana/grafana.css`** — All styles scoped under `.gf-root` class so they don't bleed into other pages. Uses CSS custom properties matching Grafana 11's actual dark theme colors:
   - Canvas: `#111217`, Primary: `#181b1f`, Secondary: `#1f2229`
   - Borders: `#2c3235`, `#34393e`
   - Text: `rgba(255,255,255,0.87)`, `rgba(255,255,255,0.54)`, `rgba(255,255,255,0.38)`
   - Viz palette: green `#73bf69`, blue `#5794f2`, yellow `#fade2a`, red `#f2495c`, purple `#b877d9`, cyan `#8ab8ff`
   - Brand orange: `#ff6600`
   - Font: Inter (Grafana switched from Roboto to Inter in v10+)

3. **`src/components/grafana/data.ts`** — All portfolio content in one place for easy editing:
   - `PROFILE` — name, title, dashboard slug, tags
   - `STATS` — overview metrics (projects deployed, pipelines, uptime, containers)
   - `SKILLS` — gauge data (Docker, K8s, Grafana, GitLab CI/CD, AWS, Linux, Prometheus, Bash/Python)
   - `PROJECTS` — log entries for each project with timestamps, levels, descriptions, tags
   - `EXPERIENCE` — timeline items
   - `TECH_STACK` — table rows
   - `AVAILABILITY` — status bar segments
   - `CONTACT` — email, GitHub (kavish224), LinkedIn (kavish-ambani), location (Gujarat, India)
   - `TIME_RANGES` — easter egg time picker options

4. **`src/components/grafana/index.ts`** — Barrel export

### Files Modified
5. **`src/app/(app)/portfolio/page.tsx`** — Replaced old list-based portfolio with:
   ```tsx
   import type { Metadata } from "next";
   import GrafanaDashboard from "@/components/grafana/GrafanaDashboard";
   export const metadata: Metadata = { ... };
   export default function PortfolioPage() {
     return <GrafanaDashboard />;
   }
   ```

6. **`src/app/globals.css`** — Added:
   - Google Fonts import for Inter + Roboto Mono
   - `body:has(.gf-root)` rule to override body background when Grafana dashboard is active

## Existing Project Structure
```
kavishambani.in/
├── src/
│   ├── app/
│   │   ├── (app)/
│   │   │   ├── about/page.tsx        # About page (unchanged)
│   │   │   ├── blog/page.tsx         # Blog page (unchanged)
│   │   │   ├── contact/page.tsx      # Contact page (unchanged)
│   │   │   └── portfolio/page.tsx    # ← MODIFIED: Now renders GrafanaDashboard
│   │   ├── globals.css               # ← MODIFIED: Added fonts + .gf-root body override
│   │   ├── layout.tsx                # Root layout (unchanged, uses next/head)
│   │   ├── page.tsx                  # Homepage (unchanged)
│   │   └── favicon.ico
│   └── components/
│       └── grafana/                  # ← NEW: All Grafana components
│           ├── GrafanaDashboard.tsx
│           ├── grafana.css
│           ├── data.ts
│           └── index.ts
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Key Design Decisions
1. **Scoped styles**: All Grafana CSS is under `.gf-root` to avoid conflicts with Tailwind and other pages
2. **No extra dependencies**: Everything is built with React + CSS, no charting libraries
3. **Client component**: `GrafanaDashboard.tsx` is `"use client"` because it uses `useState`, `useEffect`, `useRef` for animations and interactivity
4. **Server metadata**: The portfolio `page.tsx` is a server component that exports `Metadata` and renders the client component
5. **Responsive**: Panels reflow at 1024px and 640px breakpoints; sidebar hides on mobile

## Kavish's Real Info
- **Name**: Kavish Ambani
- **Education**: B.Tech CS at Parul University, Gujarat (2022-2026)
- **Role**: DevOps Intern
- **GitHub**: https://github.com/kavish224
- **LinkedIn**: https://www.linkedin.com/in/kavish-ambani
- **Twitter/X**: https://x.com/KavishAmbani
- **Instagram**: https://www.instagram.com/kavish_ambani_22/
- **Website**: https://kavishambani.in
- **Skills focus**: Docker, Kubernetes, Grafana stack (Prometheus, Loki), GitLab CI/CD, AWS
- **Existing projects**: Financial Tools, Videotube, Wallet, TrueFeedback, Giftcrafters, Password Generator, ToDo

## What Might Need To Be Done Next
- Run `npm run dev` and test — fix any TypeScript or rendering issues
- Fine-tune content in `data.ts` to match Kavish's actual experience
- The homepage `page.tsx` still links to `/portfolio` — this should work with the (app) route group
- The `layout.tsx` uses `next/head` which doesn't work in App Router — it should be migrated to use `metadata` export (this is a pre-existing issue, not introduced by us)
- Add real project URLs to the log panel entries
- Consider making the sidebar "Home" link navigate back to `/` (currently set up)
- Consider adding more interactivity (panel click to expand, tooltip on gauges, etc.)
- The Grafana logo in navbar links to `/` (homepage) — this is intentional