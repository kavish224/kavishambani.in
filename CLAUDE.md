# CLAUDE.md

This file provides guidance to coding agents working in this repository.

## Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production (also runs next-sitemap postbuild)
npm run start      # Start production server
npm run lint       # Run ESLint
```

## Project Context — Grafana Portfolio

### Goal
Kavish Ambani's portfolio (`kavishambani.in`) is intentionally built as a **Grafana-style dashboard clone**.
The UI should feel like Grafana dashboard chrome, while the **content remains portfolio data** (skills, projects, experience, availability, contact).

### Stack
- Next.js 15.1.11 (App Router)
- React 19
- TypeScript
- Tailwind CSS 3.4 (project-wide)
- Custom scoped CSS for Grafana UI (`src/components/grafana/grafana.css`)
- No additional UI/chart libraries for dashboard visuals

## Current Implementation State (Important)

### Main entry
- `src/app/(app)/portfolio/page.tsx` renders `GrafanaDashboard`.

### Grafana module
- `src/components/grafana/GrafanaDashboard.tsx`
- `src/components/grafana/grafana.css`
- `src/components/grafana/data.ts`
- `src/components/grafana/index.ts`

### Current UI architecture
`GrafanaDashboard.tsx` currently has:
- Top bar with:
  - left brand area (`Grafana` logo/text + menu/close icons)
  - breadcrumb (`Dashboards > <slug>`)
  - search input (`Search…` + `⌘+K` hint)
  - right action icons + invite + profile
- Left navigation (expanded, not 56px icon rail) with active dashboard item and admin section at bottom.
- Two dashboard control rows:
  - header actions row (star/info/edit/export/share)
  - variable/time controls row (Job/Instance/Disk/Network Device + time picker)
- Variable row (`env = production`)
- Collapsible content rows:
  - Overview stats (4 stat panels with sparklines)
  - Skills (single **bar gauge summary** panel)
  - Projects logs panel (deterministic volume bars + log rows)
  - Experience timeline + Tech stack table
  - Availability state history + Contact panel

### Data source
All editable portfolio content is centralized in `src/components/grafana/data.ts`:
- `PROFILE`, `STATS`, `SKILLS`, `PROJECTS`, `EXPERIENCE`, `TECH_STACK`, `AVAILABILITY`, `CONTACT`, `TIME_RANGES`

## Styling Notes

- All styles are scoped under `.gf-root` to avoid bleeding to other pages.
- Theme tokens in `grafana.css` are tuned toward Grafana dark values:
  - Canvas/body around `#111217`
  - Panel background around `#181b1f`
  - Border/text alpha values use Grafana-like dark theme contrast
- Navbar/sidebar sizing and control dimensions were iteratively tuned for Grafana-like proportions.

## Known Caveats

- This is still a hand-built clone, not embedded Grafana frontend code.
- Pixel-perfect parity is sensitive to:
  - browser zoom
  - OS font rendering
  - viewport size
- `npm run build` updates `public/sitemap-0.xml` via `next-sitemap` postbuild.

## Guidance for Future Edits

1. Preserve the portfolio-data-driven approach (`data.ts`) — do not hardcode demo metrics in JSX.
2. Keep Grafana look-and-feel changes centralized in `grafana.css` tokens first.
3. Avoid introducing external chart/UI packages.
4. Prefer incremental visual adjustments with screenshot comparison rather than structural rewrites.
5. Keep existing routes/pages outside `/portfolio` untouched unless explicitly requested.

## Personal / Profile Info
- Name: Kavish Ambani
- Education: B.Tech CS, Parul University (2022–2026)
- Role: DevOps Intern
- GitHub: https://github.com/kavish224
- LinkedIn: https://www.linkedin.com/in/kavish-ambani
- Website: https://kavishambani.in
- Focus: Docker, Kubernetes, Grafana stack, Prometheus/Loki, GitLab CI/CD, AWS
