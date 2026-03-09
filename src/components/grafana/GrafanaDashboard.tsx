"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import "./grafana.css";
import {
  PROFILE, STATS, SKILLS, PROJECTS, EXPERIENCE,
  TECH_STACK, AVAILABILITY, CONTACT, TIME_RANGES,
} from "./data";

// ══════════════════════════════════════════════════════════════
// ICONS — matching Grafana's icon set exactly
// ══════════════════════════════════════════════════════════════
const ic = {
  menu: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="5" width="20" height="2" rx="1" /><rect x="2" y="11" width="20" height="2" rx="1" /><rect x="2" y="17" width="20" height="2" rx="1" /></svg>,
  home: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
  starred: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
  dashboards: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>,
  explore: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></svg>,
  drilldown: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
  alerts: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></svg>,
  ai: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" /><circle cx="12" cy="12" r="3" /></svg>,
  testing: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
  observability: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
  connections: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="6" cy="12" r="3" /><circle cx="18" cy="6" r="3" /><circle cx="18" cy="18" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>,
  admin: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M20 21a8 8 0 10-16 0" /></svg>,
  search: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
  plus: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>,
  bell: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></svg>,
  help: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>,
  info: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>,
  starFill: <svg width="13" height="13" viewBox="0 0 24 24" fill="#fade2a" stroke="#fade2a" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
  starLine: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
  share: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>,
  edit: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>,
  clock: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
  refresh: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" /></svg>,
  chevD: <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9" /></svg>,
  chevR: <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>,
  chevL: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>,
  rowChev: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9" /></svg>,
  dots: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" /></svg>,
  eye: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>,
  inspect: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
  trash: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2" /></svg>,
  zoomOut: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="8" y1="11" x2="14" y2="11" /></svg>,
  times: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>,
  pin: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
};

// ══════════════════════════════════════════════════════════════
// GRAFANA LOGO — exact official SVG
// ══════════════════════════════════════════════════════════════
import Image from 'next/image';

function GrafanaLogo({ size = 24 }: { size?: number }) {
  return (
    <Image src="/grafana.svg" width={size} height={size} alt="Grafana icon" style={{ display: 'block' }} />
  );
}

// ══════════════════════════════════════════════════════════════
// SPARKLINE
// ══════════════════════════════════════════════════════════════
function Sparkline({ data, color, id, areaMode = false }: {
  data: number[]; color: string; id: string; areaMode?: boolean;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [w, setW] = useState(250);
  const h = areaMode ? 80 : 32;

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    setW(el.clientWidth || 250);
    const ro = new ResizeObserver(() => setW(el.clientWidth || 250));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const max = Math.max(...data), min = Math.min(...data);
  const range = max - min || 1;
  const pts = data.map((v, i): [number, number] => [
    (i / (data.length - 1)) * w,
    h - ((v - min) / range) * (h - 4) - 2,
  ]);
  const line = pts.map(p => `${p[0]},${p[1]}`).join(" ");
  const area = `0,${h} ${line} ${w},${h}`;
  const gid = `sg_${id}`;

  return (
    <svg ref={svgRef} width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={areaMode ? 0.2 : 0.12} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <polygon points={area} fill={`url(#${gid})`} />
      <polyline points={line} fill="none" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

// ══════════════════════════════════════════════════════════════
// COUNT-UP
// ══════════════════════════════════════════════════════════════
function Counter({ to, suffix = "", color }: { to: number; suffix?: string; color: string }) {
  const [v, setV] = useState(0);
  const isFloat = String(to).includes(".");
  useEffect(() => {
    const dur = 1200, start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      setV((1 - Math.pow(1 - p, 3)) * to);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return (
    <span className="gf-stat__val" style={{ color }}>
      {isFloat ? v.toFixed(1) : Math.round(v)}{suffix}
    </span>
  );
}

// ══════════════════════════════════════════════════════════════
// PANEL CHROME
// ══════════════════════════════════════════════════════════════
function Panel({ title, cn = "", style, children, open, onToggle }: {
  title: string; cn?: string; style?: React.CSSProperties;
  children: React.ReactNode; open?: boolean; onToggle?: (e: React.MouseEvent) => void;
}) {
  return (
    <div className={`gf-panel ${cn}`} style={style}>
      <div className="gf-panel-hdr">
        <h2 className="gf-panel-title">{title}</h2>
        <div className="gf-panel-actions">
          <button className={`gf-panel-menu-btn${open ? " gf-panel-menu-btn--open" : ""}`} onClick={onToggle} title="Panel menu">
            {ic.dots}
          </button>
        </div>
        {open && (
          <div className="gf-ctx-menu" onClick={e => e.stopPropagation()}>
            <button className="gf-ctx-item"><span className="gf-ctx-icon">{ic.eye}</span>View <span className="gf-ctx-kbd">v</span></button>
            <button className="gf-ctx-item"><span className="gf-ctx-icon">{ic.edit}</span>Edit <span className="gf-ctx-kbd">e</span></button>
            <button className="gf-ctx-item"><span className="gf-ctx-icon">{ic.share}</span>Share <span className="gf-ctx-kbd">p</span></button>
            <button className="gf-ctx-item"><span className="gf-ctx-icon">{ic.explore}</span>Explore</button>
            <button className="gf-ctx-item"><span className="gf-ctx-icon">{ic.inspect}</span>Inspect <span className="gf-ctx-kbd">i</span></button>
            <div className="gf-ctx-div" />
            <button className="gf-ctx-item gf-ctx-item--danger"><span className="gf-ctx-icon">{ic.trash}</span>Remove</button>
          </div>
        )}
      </div>
      <div className="gf-panel-body">{children}</div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
// ROW (collapsible section)
// ══════════════════════════════════════════════════════════════
function Row({ label, open: defaultOpen = true, children }: {
  label: string; open?: boolean; children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <>
      <div className="gf-row" onClick={() => setOpen(o => !o)}>
        <span className="gf-row__chev" style={{ transform: open ? "rotate(0deg)" : "rotate(-90deg)" }}>
          {ic.rowChev}
        </span>
        <span className="gf-row__label">{label}</span>
        <div className="gf-row__line" />
      </div>
      {open && <div className="gf-row-content">{children}</div>}
    </>
  );
}

// ══════════════════════════════════════════════════════════════
// SIDEMENU — Grafana 11 MegaMenu structure (MENU_WIDTH = 300px)
// ══════════════════════════════════════════════════════════════
const NAV = [
  { icon: ic.home, label: "Home", href: "/" },
  { icon: ic.starred, label: "Starred", href: undefined, chev: true },
  { icon: ic.dashboards, label: "Dashboards", href: "/portfolio", active: true },
  { icon: ic.explore, label: "Explore", href: undefined },
  { icon: ic.drilldown, label: "Drilldown", href: undefined },
  { icon: ic.alerts, label: "Alerts & IRM", href: undefined, chev: true },
  { icon: ic.ai, label: "AI & machine learning", href: undefined, isNew: true },
  { icon: ic.testing, label: "Testing & synthetics", href: undefined },
  { icon: ic.observability, label: "Observability", href: undefined },
  { icon: ic.connections, label: "Connections", href: undefined },
];

function SideMenu() {
  return (
    <aside className="gf-sidemenu" aria-label="Navigation">
      {/* MegaMenuHeader — same height as topbar (48px) */}
      <div className="gf-sidemenu__hdr">
        <div className="gf-sidemenu__hdr-brand">
          <GrafanaLogo size={22} />
          <span>Grafana</span>
        </div>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <button className="gf-sidemenu__hdr-close" title="Dock menu">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18" /></svg>
          </button>
          <button className="gf-sidemenu__hdr-close" title="Close menu">{ic.times}</button>
        </div>
      </div>

      {/* Nav list — padding: 8px 8px 16px 4px from MegaMenu source */}
      <ul className="gf-sidemenu__list">
        {NAV.map((item, i) => {
          const cls = `gf-nav-item${item.active ? " gf-nav-item--active" : ""}`;
          const content = (
            <>
              <span className="gf-nav-icon">{item.icon}</span>
              <span className="gf-nav-label">{item.label}</span>
              {item.isNew && <span className="gf-nav-badge">New!</span>}
              {item.chev && <span className="gf-nav-chevron">{ic.chevD}</span>}
            </>
          );
          return (
            <li key={i}>
              {item.href ? (
                <Link href={item.href} className={cls}>{content}</Link>
              ) : (
                <button className={cls}>{content}</button>
              )}
            </li>
          );
        })}
      </ul>

      <div className="gf-sidemenu__bottom">
        <button className="gf-nav-item">
          <span className="gf-nav-icon">{ic.admin}</span>
          <span className="gf-nav-label">Admin</span>
          <span className="gf-nav-chevron">{ic.chevR}</span>
        </button>
      </div>
    </aside>
  );
}

// ══════════════════════════════════════════════════════════════
// MAIN DASHBOARD
// ══════════════════════════════════════════════════════════════
export default function GrafanaDashboard() {
  const [starred, setStarred] = useState(false);
  const [timeIdx, setTimeIdx] = useState(3); // "Last 1 hour"
  const [tpOpen, setTpOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [toastMsg, setToastMsg] = useState("");
  const tpRef = useRef<HTMLDivElement>(null);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(CONTACT.email);
    setToastMsg("Email copied to clipboard");
    setTimeout(() => setToastMsg(""), 3000);
  };

  useEffect(() => {
    const close = () => { setTpOpen(false); setOpenPanel(null); };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const togglePanel = useCallback((id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenPanel(p => p === id ? null : id);
    setTpOpen(false);
  }, []);

  const sparkData = [
    [2, 3, 5, 6, 7, 9, 10, 11, 12, 13, 11, 12],
    [4, 8, 12, 15, 17, 19, 21, 23, 22, 24, 25, 25],
    [98.5, 99, 99.2, 99.5, 99.3, 99.8, 99.7, 99.9, 99.9, 100, 99.9, 100],
    [5, 10, 18, 24, 29, 33, 37, 41, 45, 48, 50, 50],
  ];
  const volH = PROJECTS.map((_, i) => 30 + ((i * 13) % 60));

  return (
    <div className="gf-root">

      {/* ══════ MAIN LAYOUT ══════ */}
      <div className="gf-layout" style={{ display: 'flex', height: '100vh', overflow: 'hidden', width: '100vw' }}>
        <SideMenu />

        <div className="gf-main-container" style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden' }}>
          {/* ══════ TOP BAR — 48px ══════ */}
          <header className="gf-topbar" style={{ paddingLeft: 16 }}>

            {/* Breadcrumb */}
            <nav className="gf-topbar__breadcrumb" aria-label="Breadcrumb">
              <span className="gf-topbar__crumb">Dashboards</span>
              <span className="gf-topbar__sep">{ic.chevR}</span>
              <span className="gf-topbar__current">EC2 Ubuntu Instance Overview</span>
            </nav>

            {/* Search */}
            <div className="gf-topbar__search" role="search" aria-label="Search Grafana">
              <span className="gf-topbar__search-icon">{ic.search}</span>
              <span className="gf-topbar__search-txt">Search...</span>
              <span className="gf-topbar__search-kbd">⌘+k</span>
            </div>

            {/* Right icons */}
            <div className="gf-topbar__right">
              <button className="gf-topbar__icon" title="Add new">{ic.plus}</button>
              <button className="gf-topbar__icon" title="Help">{ic.help}</button>
              <button className="gf-topbar__icon" title="Ask AI">{ic.ai}</button>
              <button className="gf-topbar__invite">
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></svg>
                  Invite
                </span>
              </button>
              <button className="gf-avatar" title={PROFILE.name} aria-label="Profile">KA</button>
            </div>
          </header>

          <main className="gf-page" id="pageContent">

            {/* ── Toolbar row 1: Star / Info / Edit / Export / Share ── */}
            <div className="gf-toolbar">
              <div className="gf-toolbar__left" />
              <div className="gf-toolbar__right">
                <button
                  className={`gf-tbr-icon${starred ? " gf-tbr-icon--starred" : ""}`}
                  onClick={e => { e.stopPropagation(); setStarred(s => !s); }}
                  title={starred ? "Remove from starred" : "Mark as starred"}
                >
                  {starred ? ic.starFill : ic.starLine}
                </button>
                <button className="gf-tbr-icon" title="Dashboard info">{ic.info}</button>
                <div className="gf-toolbar__div" />
                <button className="gf-tbr-btn">Edit</button>
                <button className="gf-tbr-btn">Export <span style={{ marginLeft: 4, display: 'flex' }}>{ic.chevD}</span></button>
                <div style={{ display: 'flex' }}>
                  <button className="gf-tbr-btn gf-tbr-btn--primary" style={{ borderRadius: '32px 0 0 32px', paddingRight: 10, marginRight: -1 }}>Share</button>
                  <button className="gf-tbr-btn gf-tbr-btn--primary" style={{ borderRadius: '0 32px 32px 0', borderLeft: '1px solid rgba(0,0,0,0.2)', paddingLeft: 6, paddingRight: 8 }}><span style={{ display: 'flex' }}>{ic.chevD}</span></button>
                </div>
              </div>
            </div>

            {/* ── Toolbar row 2: Variable chips + time picker ── */}
            <div className="gf-ctrlbar">
              <div className="gf-ctrlbar__left">
                {[
                  { name: "Job", val: "All" },
                  { name: "Instance", val: "All" },
                  { name: "Disk", val: "All" },
                  { name: "Network Device", val: "All" },
                ].map(v => (
                  <button key={v.name} className="gf-var" aria-label={`${v.name} variable`}>
                    <span className="gf-var__name">{v.name}</span>
                    <span className="gf-var__val">{v.val} {ic.chevD}</span>
                  </button>
                ))}
              </div>

              <div className="gf-ctrlbar__right">
                {/* Zoom out */}
                <button className="gf-tp__zoom" title="Zoom out time range">{ic.zoomOut}</button>

                {/* Time picker group */}
                <div className="gf-tp" ref={tpRef}>
                  {/* ‹ back */}
                  <button className="gf-tp__nav gf-tp__nav--l" title="Move time range back" style={{ fontSize: 13 }}>
                    &laquo;
                  </button>

                  {/* Main time range button */}
                  <button
                    className="gf-tp__btn"
                    onClick={e => { e.stopPropagation(); setTpOpen(o => !o); setOpenPanel(null); }}
                    aria-expanded={tpOpen}
                    title="Change time range"
                    style={{ fontWeight: 500 }}
                  >
                    <span className="gf-tp__clock">{ic.clock}</span>
                    <span>{TIME_RANGES[timeIdx]}</span>
                    <span style={{ marginLeft: 6, display: 'flex' }}>{ic.chevD}</span>
                  </button>

                  {/* › forward */}
                  <button className="gf-tp__nav gf-tp__nav--r" title="Move time range forward" style={{ fontSize: 13 }}>
                    &raquo;
                  </button>

                  {/* Dropdown */}
                  {tpOpen && (
                    <div className="gf-tp__dd" onClick={e => e.stopPropagation()}>
                      <div className="gf-tp__dd-head">Quick ranges</div>
                      {TIME_RANGES.map((r, i) => (
                        <button
                          key={i}
                          className={`gf-tp__dd-option${i === timeIdx ? " gf-tp__dd-option--active" : ""}`}
                          onClick={() => { setTimeIdx(i); setTpOpen(false); }}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Refresh */}
                <div style={{ display: 'flex', marginLeft: 8 }}>
                  <button className="gf-tbr-btn" style={{ borderRadius: '32px 0 0 32px', paddingRight: 8, marginRight: -1 }} title="Refresh dashboard">
                    {ic.refresh}
                    <span style={{ marginLeft: 4 }}>Refresh</span>
                  </button>
                  <button className="gf-tbr-btn" style={{ borderRadius: '0 32px 32px 0', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: 8 }} title="Change refresh interval">
                    <span>30s</span>
                    <span style={{ marginLeft: 4, display: 'flex' }}>{ic.chevD}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* ══════ CANVAS ══════ */}
            <div className="gf-canvas">

              {/* Row 1 — Stats */}
              <Row label="Instance Overview">
                {STATS.map((s, i) => (
                  <Panel
                    key={i}
                    title={s.label}
                    cn="gf-w-25 gf-h-stat"
                    style={{ animationDelay: `${i * 50}ms` }}
                    open={openPanel === `s${i}`}
                    onToggle={e => togglePanel(`s${i}`, e)}
                  >
                    <div className="gf-stat">
                      <div className="gf-stat__bg">
                        <Sparkline data={sparkData[i]} color={s.color} id={`sp${i}`} areaMode />
                      </div>
                      <div className="gf-stat__fg">
                        <Counter to={s.value} suffix={s.suffix} color={s.color} />
                        <div className="gf-stat__sub">{s.sublabel}</div>
                      </div>
                    </div>
                  </Panel>
                ))}
              </Row>

              {/* Row 2 — Skills */}
              <Row label="Skills — Proficiency">
                <Panel
                  title="Skill Proficiency — Bar Gauge"
                  cn="gf-w-100 gf-h-gauge"
                  open={openPanel === "gauge"}
                  onToggle={e => togglePanel("gauge", e)}
                >
                  <div className="gf-gauge">
                    {SKILLS.map(s => (
                      <div key={s.name} className="gf-gauge-row">
                        <div className="gf-gauge-row__head">
                          <span className="gf-gauge-row__name">{s.name}</span>
                          <span className="gf-gauge-row__pct" style={{ color: s.color }}>{s.pct}%</span>
                        </div>
                        <div className="gf-gauge-row__track">
                          <div className="gf-gauge-row__fill" style={{ width: `${s.pct}%`, background: s.color }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </Panel>
              </Row>

              {/* Row 3 — Logs */}
              <Row label="Projects — Deployment Logs">
                <Panel
                  title={`deployment.log  •  {job="ci-pipeline", env="production"}`}
                  cn="gf-w-100 gf-h-logs"
                  open={openPanel === "logs"}
                  onToggle={e => togglePanel("logs", e)}
                >
                  <div className="gf-logs">
                    <div className="gf-log-vol">
                      {PROJECTS.map((p, i) => (
                        <div key={i} className="gf-log-vol__wrap">
                          <div className={`gf-log-vol__bar gf-log-vol__bar--${p.level}`} style={{ height: `${volH[i]}%` }} />
                        </div>
                      ))}
                    </div>
                    <div className="gf-log-rows">
                      {PROJECTS.map((p, i) => (
                        <div key={i} className="gf-log-row">
                          <span className="gf-log-ts">{p.ts}</span>
                          <span className={`gf-log-lvl gf-log-lvl--${p.level}`}>{p.level.toUpperCase()}</span>
                          <span className="gf-log-msg">{p.msg}<span className="gf-log-chip">{p.tag}</span></span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Panel>
              </Row>

              {/* Row 4 — Experience + Tech */}
              <Row label="Experience & Tech Stack">
                <Panel title="Experience — Timeline" cn="gf-w-50 gf-h-xl" open={openPanel === "tl"} onToggle={e => togglePanel("tl", e)}>
                  <div className="gf-timeline">
                    {EXPERIENCE.map((ex, i) => (
                      <div key={i} className="gf-tl-item">
                        <div className={`gf-tl-dot gf-tl-dot--${ex.status === "active" ? "active" : "done"}`} />
                        <div className="gf-tl-body">
                          <div className="gf-tl-date">{ex.date}</div>
                          <div className="gf-tl-role">{ex.role}</div>
                          <div className="gf-tl-org">{ex.org}</div>
                          <div className="gf-tl-desc">{ex.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Panel>

                <Panel title="Tech Stack — Inventory Table" cn="gf-w-50 gf-h-xl" open={openPanel === "tbl"} onToggle={e => togglePanel("tbl", e)}>
                  <div className="gf-table-wrap">
                    <table className="gf-table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Category</th>
                          <th>Level</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {TECH_STACK.map((t, i) => (
                          <tr key={i}>
                            <td><span className={`gf-badge gf-badge--${t.badge}`}>{t.name}</span></td>
                            <td className="gf-td-dim">{t.category}</td>
                            <td className="gf-td-dim">{t.level}</td>
                            <td>
                              <span className={t.active ? "gf-status--active" : "gf-status--info"}>
                                ● {t.active ? "Active" : "Learning"}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Panel>
              </Row>

              {/* Row 5 — Availability + Contact */}
              <Row label="Availability & Contact">
                <Panel title="Availability — State History (30 days)" cn="gf-w-50 gf-h-md" open={openPanel === "av"} onToggle={e => togglePanel("av", e)}>
                  <div className="gf-state-hist">
                    {AVAILABILITY.map((a, i) => (
                      <div key={i} className="gf-sh-row">
                        <div className="gf-sh-label">{a.name}</div>
                        <div className="gf-sh-bar">
                          {a.segments.map((seg, j) => (
                            <div key={j} className={`gf-sh-seg gf-sh-seg--${seg}`} title={seg} />
                          ))}
                        </div>
                        <div className="gf-sh-pct" style={a.segments[0] === 'down' ? { color: 'var(--gf-red)' } : undefined}>{a.pct}</div>
                      </div>
                    ))}
                  </div>
                </Panel>

                <Panel title="Contact — Endpoints" cn="gf-w-50 gf-h-md" open={openPanel === "ct"} onToggle={e => togglePanel("ct", e)}>
                  <div className="gf-contact">
                    <button className="gf-contact-card" onClick={handleCopyEmail} style={{ textAlign: "left" }}>
                      <span className="gf-contact-icon gf-contact-icon--email">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" /></svg>
                      </span>
                      <div><div className="gf-contact-k">Email</div><div className="gf-contact-v">{CONTACT.email}</div></div>
                    </button>
                    <a className="gf-contact-card" href={CONTACT.github.url} target="_blank" rel="noopener noreferrer">
                      <span className="gf-contact-icon gf-contact-icon--github">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                      </span>
                      <div><div className="gf-contact-k">GitHub</div><div className="gf-contact-v">{CONTACT.github.handle}</div></div>
                    </a>
                    <a className="gf-contact-card" href={CONTACT.linkedin.url} target="_blank" rel="noopener noreferrer">
                      <span className="gf-contact-icon gf-contact-icon--linkedin">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                      </span>
                      <div><div className="gf-contact-k">LinkedIn</div><div className="gf-contact-v">{CONTACT.linkedin.handle}</div></div>
                    </a>
                    <div className="gf-contact-card">
                      <span className="gf-contact-icon gf-contact-icon--location">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                      </span>
                      <div><div className="gf-contact-k">Location</div><div className="gf-contact-v">{CONTACT.location}</div></div>
                    </div>
                  </div>
                </Panel>
              </Row>

            </div>{/* /gf-canvas */}
          </main>
        </div>
      </div>

      {/* TOAST NOTIFICATION */}
      {toastMsg && (
        <div className="gf-toast">
          <div className="gf-toast-edge" />
          <span className="gf-toast-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
          </span>
          <div className="gf-toast-content">
            <div className="gf-toast-title">Success</div>
            <div className="gf-toast-msg">{toastMsg}</div>
          </div>
        </div>
      )}

    </div>
  );
}
