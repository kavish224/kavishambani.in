# Kavish Ambani Portfolio — Grafana v11 Dashboards

A personal portfolio website meticulously designed as a **pixel-perfect replica of a Grafana dashboard**. Built with **Next.js 15, React 19, and TypeScript**.

🚀 **Live Site**: [kavishambani.in](https://kavishambani.in)

![Kavish Ambani Portfolio Preview](https://kavishambani.in/globe.svg)

## 📊 Project Overview

This project is not just a website—it's an **Observability-themed engineering showcase**. I've rebuilt the entire Grafana v11 design system from scratch using only custom CSS (no external chart libraries like Chart.js or D3). 

### Key Features

- **📱 Fully Responsive Design**: 
  - **Desktop**: Full Grafana sidebar (300px) and breadcrumb pathing.
  - **Tablet**: Sidebar collapses to an **icon-rail system** (56px).
  - **Mobile**: Sidebar becomes a **hamburger-menu toggle** with a slide-in overlay.
- **✨ Grafana Fidelity**: 
  - Identical color palettes (`#111217` canvas, `#181b1f` panels).
  - Precise `cubic-bezier` animation curves for all panel entries.
  - Instant statistic counters (no count-up lag).
- **📈 Custom Logic**:
  - **Availability — State History**: Custom-built timeline visualization for skill learning & project availability.
  - **Projects — Logs**: Deterministic layout for project histories presented as "System Logs".
  - **Skill Gauges**: Pure CSS bar gauges with Grafana-style thresholds.
- **⚡ Performance First**: 
  - Built with Next.js 15 (App Router).
  - Zero heavy third-party dependencies for styling.
  - SEO optimized with proper meta tags and JSON-LD structured data.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Custom Scoped CSS](src/components/grafana/grafana.css)
- **Deployment**: Vercel

## 🚀 Getting Started

1. **Clone and Install**:
   ```bash
   git clone https://github.com/kavish224/kavishambani.in.git
   cd kavishambani.in
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Production Build**:
   ```bash
   npm run build
   npm run start
   ```

## 📂 Project Structure

- `src/app/`: Next.js 15 App Router (layouts and page entry).
- `src/components/grafana/`: The core dashboard module.
  - `GrafanaDashboard.tsx`: Main dashboard component layout.
  - `grafana.css`: The "Grafana Design System" (CSS variables, tokens, and components).
  - `data.ts`: Centralized folder for all portfolio content (easy to update).
- `public/`: Static assets (favicon, site-map).

## 🧑‍💻 Author

**Kavish Ambani**  
DevOps Engineer | Infrastructure as Code | Observability

- [GitHub](https://github.com/kavish224)
- [LinkedIn](https://www.linkedin.com/in/kavish-ambani/)
- [Twitter](https://x.com/KavishAmbani)

---
*Disclaimer: This is a standalone React-based replica project for portfolio purposes and is not affiliated with Grafana Labs.*
