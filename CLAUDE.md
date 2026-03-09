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
Kavish Ambani's portfolio (`kavishambani.in`) is a **pixel-perfect Grafana 11 dashboard replica**.
The UI follows the exact color scheme, spacing, and animation patterns of official Grafana dashboards, while the content showcases portfolio data (skills, projects, experience, availability, contact).

### Stack
- **Next.js 15 (App Router)**
- **React 19**
- **TypeScript**
- **Tailwind CSS 3.4** (global layout)
- **Custom scoped CSS** for Grafana UI (`src/components/grafana/grafana.css`)
- **No external UI libraries** for the dashboard (custom implemented stat panels, bar gauges, charts)

## Current Implementation State

### Main Entry Points
- `src/app/page.tsx` renders the `GrafanaDashboard`.
- `src/app/layout.tsx` handles document-level resets and meta tags.

### Grafana Module Structure
- `src/components/grafana/GrafanaDashboard.tsx`: Main dashboard logic and JSX structure.
- `src/components/grafana/grafana.css`: The "Design System" containing all Grafana-specific styling.
- `src/components/grafana/data.ts`: Centralized portfolio content.
- `src/components/grafana/index.ts`: Public export.

### Responsive Architecture
The dashboard uses a multi-breakpoint system:
- **Desktop (>1024px)**: Standard Grafana sidebar (300px width), full search bar, breadcrumb with full path.
- **Tablet (768px - 1024px)**: Sidebar collapses to an **icon-only rail**.
- **Mobile (<768px)**: Sidebar is hidden by default and accessible via a **hamburger menu** in the topbar. Topbar breadcrumb collapses to show only the current dashboard title.

### Scroll Chain
Scroll is managed by a strict flexbox chain to prevent clipping:
1. `html, body, main` are `height: 100%`, `overflow: hidden`.
2. `.gf-root` and `.gf-layout` consume the full height.
3. `.gf-page` is the **sole vertical scroll owner** (`overflow-y: auto`).
4. `min-height: 0` is required on all flex parents to enforce the scroll boundary.

## Styling Tokens
- **Canvas/Body**: `#111217`
- **Panel BG**: `#181b1f`
- **Primary Accent**: `#3274d9` (Grafana blue)
- **Animations**: Replicates Grafana's `cubic-bezier(0.4, 0, 0.2, 1)` easing.

## Known Caveats
- `reactStrictMode` is set to `false` in `next.config.ts` for visual consistency.
- `npm run build` generates a sitemap via `next-sitemap.config.js`.
- The dashboard is a custom implementation, not the official Grafana frontend source.

## Guidance for Future Edits
1. **Never use count-up animations**; counters should display values instantly as per Grafana standards.
2. **Keep logic in `GrafanaDashboard.tsx` and styles in `grafana.css`**. Avoid inline `style` props unless dynamic.
3. **Preserve data/visual separation**: Update content via `data.ts`.
4. **Desktop parity first**: Always verify that the desktop layout remains pixel-perfect when adjusting mobile responsiveness.

## Profile Summary
- **Owner**: Kavish Ambani (DevOps Engineer)
- **Focus**: Observability, Infrastructure as Code, CI/CD, Containerization.
- **Stack**: Docker, K8s, Grafana, Prometheus, GitLab CI, AWS, Terraform, Ansible.
