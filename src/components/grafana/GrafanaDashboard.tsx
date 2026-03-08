"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import "./grafana.css";
import {
  PROFILE, STATS, SKILLS, PROJECTS, EXPERIENCE,
  TECH_STACK, AVAILABILITY, CONTACT, TIME_RANGES,
} from "./data";

// ══════════════════════════════════════════════════════════════
// ICON SET — matching Grafana's unicons-based SVG icons exactly
// ══════════════════════════════════════════════════════════════
const I = {
  menu:       <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="4.5" width="20" height="2" rx="1"/><rect x="2" y="11" width="20" height="2" rx="1"/><rect x="2" y="17.5" width="20" height="2" rx="1"/></svg>,
  home:       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  dashboards: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  explore:    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>,
  alert:      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>,
  plug:       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  gear:       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
  search:     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  bell:       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>,
  question:   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  star:       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  starFill:   <svg width="14" height="14" viewBox="0 0 24 24" fill="#fade2a" stroke="#fade2a" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  share:      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>,
  settings:   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
  add:        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  clock:      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  chevDown:   <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>,
  chevRight:  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>,
  refresh:    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>,
  rowChev:    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0, transition: "transform 0.15s" }}><polyline points="6 9 12 15 18 9"/></svg>,
  dots:       <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="19" cy="12" r="1.8"/></svg>,
  eye:        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  edit:       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
  inspect:    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  trash:      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>,
  kbd:        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="20" height="12" rx="2"/><line x1="6" y1="10" x2="6" y2="10"/><line x1="10" y1="10" x2="10" y2="10"/><line x1="14" y1="10" x2="14" y2="10"/><line x1="18" y1="10" x2="18" y2="10"/><line x1="8" y1="14" x2="16" y2="14"/></svg>,
};

// ══════════════════════════════════════════════════════════════
// GRAFANA LOGO — exact orange logo SVG
// ══════════════════════════════════════════════════════════════
const GrafanaLogo = () => (
  <svg width="25" height="25" viewBox="0 0 55 55" fill="none">
    <path d="M27.5 0C12.31 0 0 12.31 0 27.5S12.31 55 27.5 55 55 42.69 55 27.5 42.69 0 27.5 0z" fill="#1f2329"/>
    <path d="M38.9 24.1c-.3-1.8-1.1-3.4-2.4-4.7l-5.5-5.5a2.5 2.5 0 00-3 -.3l-9.7 5.6a2.5 2.5 0 00-1.2 2.2v11.2c0 .9.5 1.8 1.2 2.2l9.7 5.6c1 .6 2.2.4 3-.3l5.5-5.5c1.3-1.3 2.1-2.9 2.4-4.7.2-1.9.2-3.8 0-5.8z" fill="#F46800"/>
    <circle cx="27.5" cy="27.5" r="6.5" fill="#1f2329"/>
    <circle cx="27.5" cy="27.5" r="3.5" fill="#F46800"/>
  </svg>
);

// ══════════════════════════════════════════════════════════════
// SPARKLINE — area chart with gradient fill
// ══════════════════════════════════════════════════════════════
function Sparkline({ data, color, id, mode = "default" }: {
  data: number[]; color: string; id: string; mode?: "default" | "fill";
}) {
  const ref = useRef<SVGSVGElement>(null);
  const [w, setW] = useState(200);
  const h = mode === "fill" ? 80 : 28;

  useEffect(() => {
    if (ref.current) setW(ref.current.clientWidth || 200);
  }, []);

  const max = Math.max(...data), min = Math.min(...data);
  const range = max - min || 1;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / range) * (h - 4) - 2;
    return [x, y] as [number, number];
  });
  const polyPts = pts.map(([x, y]) => `${x},${y}`).join(" ");
  const fillPts = `0,${h} ${polyPts} ${w},${h}`;

  return (
    <svg ref={ref} width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id={`g_${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={mode === "fill" ? 0.3 : 0.2}/>
          <stop offset="100%" stopColor={color} stopOpacity={0}/>
        </linearGradient>
      </defs>
      <polygon points={fillPts} fill={`url(#g_${id})`}/>
      <polyline points={polyPts} fill="none" stroke={color}
        strokeWidth={mode === "fill" ? 1.5 : 1.5}
        strokeOpacity={mode === "fill" ? 0.8 : 1}/>
    </svg>
  );
}

// ══════════════════════════════════════════════════════════════
// ANIMATED COUNTER
// ══════════════════════════════════════════════════════════════
function AnimatedValue({ target, suffix = "", color }: {
  target: number; suffix?: string; color: string;
}) {
  const [val, setVal] = useState(0);
  const isFloat = String(target).includes(".");

  useEffect(() => {
    const dur = 1400;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      setVal(ease * target);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  return (
    <span className="gf-stat__value" style={{ color }}>
      {isFloat ? val.toFixed(1) : Math.round(val)}{suffix}
    </span>
  );
}

// ══════════════════════════════════════════════════════════════
// GAUGE ARC — 270° speedometer style matching Grafana exactly
// ══════════════════════════════════════════════════════════════
function GaugeArc({ pct, color, label }: { pct: number; color: string; label: string }) {
  const cx = 60, cy = 48, r = 44;
  const toRad = (d: number) => (d * Math.PI) / 180;

  // Math coords (y-up, CCW positive): gauge from 225° to 315° going CCW (through TOP on screen)
  const START = toRad(225); // lower-left on screen
  const END   = toRad(315); // lower-right on screen
  const SWEEP = toRad(270); // total sweep angle

  const pt = (a: number) => ({
    x: +(cx + r * Math.cos(a)).toFixed(2),
    y: +(cy - r * Math.sin(a)).toFixed(2), // flip y for screen coords
  });

  const s = pt(START);
  const e = pt(END);

  // Track: full 270° arc, CCW on screen = sweep-flag 0, large-arc 1
  const trackD = `M ${s.x} ${s.y} A ${r} ${r} 0 1 0 ${e.x} ${e.y}`;

  // Fill: from START decreasing math angle by pct*270°/100 (CCW on screen)
  const fillAngle = START - (pct / 100) * SWEEP;
  const fp = pt(fillAngle);
  const fillLarge = START - fillAngle > Math.PI ? 1 : 0;
  const fillD = pct > 0
    ? `M ${s.x} ${s.y} A ${r} ${r} 0 ${fillLarge} 0 ${fp.x} ${fp.y}`
    : null;

  // Threshold gradient (Grafana colors at 0/80/100)
  const stops =
    pct >= 90 ? "#f2495c" :
    pct >= 75 ? "#fade2a" :
    color;

  return (
    <svg viewBox="0 0 120 92" style={{ width: "100%", maxWidth: 160, height: "auto", display: "block", margin: "0 auto" }}>
      {/* Track */}
      <path d={trackD} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="10" strokeLinecap="round"/>
      {/* Fill */}
      {fillD && <path d={fillD} fill="none" stroke={stops} strokeWidth="10" strokeLinecap="round"/>}
      {/* Min / Max labels at arc endpoints */}
      <text x={s.x - 2} y="91" fill="rgba(255,255,255,0.38)" fontSize="8" textAnchor="middle" fontFamily="Inter,sans-serif">0</text>
      <text x={e.x + 2} y="91" fill="rgba(255,255,255,0.38)" fontSize="8" textAnchor="middle" fontFamily="Inter,sans-serif">100</text>
      {/* Value */}
      <text x={cx} y={cy + 12} fill={stops} fontSize="19" fontWeight="500" textAnchor="middle" fontFamily="Inter,sans-serif">{pct}</text>
      <text x={cx} y={cy + 25} fill="rgba(255,255,255,0.38)" fontSize="8.5" textAnchor="middle" fontFamily="Inter,sans-serif">{label}</text>
    </svg>
  );
}

// ══════════════════════════════════════════════════════════════
// PANEL CHROME — exact Grafana 11 panel structure
// ══════════════════════════════════════════════════════════════
function Panel({ title, className = "", style, children, menuOpen, onMenuToggle }: {
  title: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  menuOpen?: boolean;
  onMenuToggle?: (e: React.MouseEvent) => void;
}) {
  return (
    <div className={`gf-panel ${className}`} style={style}>
      <div className="gf-panel-header">
        <h2 className="gf-panel-title">{title}</h2>
        <div className="gf-panel-header-actions">
          <button
            className={`gf-panel-menu-btn ${menuOpen ? "gf-panel-menu-btn--active" : ""}`}
            onClick={onMenuToggle}
            title="Panel options"
          >
            {I.dots}
          </button>
        </div>
        {menuOpen && (
          <div className="gf-panel-menu" onClick={e => e.stopPropagation()}>
            <button className="gf-panel-menu__item"><span className="gf-pmenu-icon">{I.eye}</span>View<span className="gf-pmenu-kbd">v</span></button>
            <button className="gf-panel-menu__item"><span className="gf-pmenu-icon">{I.edit}</span>Edit<span className="gf-pmenu-kbd">e</span></button>
            <button className="gf-panel-menu__item"><span className="gf-pmenu-icon">{I.share}</span>Share<span className="gf-pmenu-kbd">p</span></button>
            <button className="gf-panel-menu__item"><span className="gf-pmenu-icon">{I.explore}</span>Explore</button>
            <button className="gf-panel-menu__item"><span className="gf-pmenu-icon">{I.inspect}</span>Inspect<span className="gf-pmenu-kbd">i</span></button>
            <div className="gf-panel-menu__divider"/>
            <button className="gf-panel-menu__item gf-panel-menu__item--danger"><span className="gf-pmenu-icon">{I.trash}</span>Remove</button>
          </div>
        )}
      </div>
      <div className="gf-panel-content">{children}</div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
// ROW HEADER — collapsible section
// ══════════════════════════════════════════════════════════════
function Row({ label, defaultOpen = true, children }: {
  label: string; defaultOpen?: boolean; children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <>
      <div className={`gf-row ${!open ? "gf-row--collapsed" : ""}`} onClick={() => setOpen(o => !o)}>
        <span className="gf-row__chev" style={{ transform: open ? "rotate(0deg)" : "rotate(-90deg)" }}>{I.rowChev}</span>
        <span className="gf-row__label">{label}</span>
        <div className="gf-row__line"/>
      </div>
      {open && <div className="gf-row-content">{children}</div>}
    </>
  );
}

// ══════════════════════════════════════════════════════════════
// SIDEBAR — 56px collapsed with hover popovers
// ══════════════════════════════════════════════════════════════
const SIDEMENU = [
  {
    icon: I.home, label: "Home", href: "/",
    sub: [],
  },
  {
    icon: I.dashboards, label: "Dashboards", href: "/portfolio", active: true,
    sub: ["Browse", "Playlists", "Snapshots", "Library panels"],
  },
  {
    icon: I.explore, label: "Explore", href: undefined,
    sub: [],
  },
  {
    icon: I.alert, label: "Alerting", href: undefined,
    sub: ["Alert rules", "Contact points", "Notification policies", "Silences"],
  },
  {
    icon: I.plug, label: "Connections", href: undefined,
    sub: ["Data sources", "Connect data"],
  },
];

const SIDEMENU_BOTTOM = [
  { icon: I.gear, label: "Administration", sub: ["General", "Plugins", "Users", "Teams", "Service accounts", "API keys"] },
  { icon: <div className="gf-avatar-sm">KA</div>, label: "Kavish Ambani", sub: ["Profile", "Change password", "Sign out"] },
];

function SideMenu() {
  const [hover, setHover] = useState<number | null>(null);
  const [hoverBottom, setHoverBottom] = useState<number | null>(null);

  return (
    <aside className="gf-sidemenu">
      <div className="gf-sidemenu__items">
        {SIDEMENU.map((item, i) => (
          <div key={i} className="gf-sidemenu__item-wrap"
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}>
            {item.href ? (
              <Link href={item.href} className={`gf-sidemenu__item ${item.active ? "gf-sidemenu__item--active" : ""}`}>
                {item.icon}
              </Link>
            ) : (
              <button className="gf-sidemenu__item">{item.icon}</button>
            )}
            {hover === i && (
              <div className="gf-sidemenu__popover">
                <div className="gf-sidemenu__popover-header">
                  {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
                </div>
                {item.sub.length > 0 && (
                  <ul className="gf-sidemenu__popover-list">
                    {item.sub.map(s => <li key={s}><button>{s}</button></li>)}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="gf-sidemenu__bottom">
        {SIDEMENU_BOTTOM.map((item, i) => (
          <div key={i} className="gf-sidemenu__item-wrap"
            onMouseEnter={() => setHoverBottom(i)}
            onMouseLeave={() => setHoverBottom(null)}>
            <button className="gf-sidemenu__item">{item.icon}</button>
            {hoverBottom === i && (
              <div className="gf-sidemenu__popover">
                <div className="gf-sidemenu__popover-header"><span>{item.label}</span></div>
                <ul className="gf-sidemenu__popover-list">
                  {item.sub.map(s => <li key={s}><button>{s}</button></li>)}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}

// ══════════════════════════════════════════════════════════════
// MAIN DASHBOARD
// ══════════════════════════════════════════════════════════════
export default function GrafanaDashboard() {
  const [starred, setStarred] = useState(false);
  const [timeIdx, setTimeIdx] = useState(5); // "Last 6 hours"
  const [timeOpen, setTimeOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const timeRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = () => { setTimeOpen(false); setOpenPanel(null); };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const togglePanel = useCallback((id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenPanel(prev => prev === id ? null : id);
    setTimeOpen(false);
  }, []);

  const toggleTime = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setTimeOpen(prev => !prev);
    setOpenPanel(null);
  }, []);

  const sparkData = [
    [2, 3, 5, 6, 7, 8, 9, 10, 10, 11, 12, 14],
    [3, 5, 8, 10, 13, 15, 17, 19, 21, 23, 25, 28],
    [98.5, 99, 99.2, 99.5, 99.3, 99.7, 99.8, 99.6, 99.9, 99.9, 99.9, 100],
    [5, 10, 15, 20, 25, 28, 32, 38, 42, 47, 50, 55],
  ];

  return (
    <div className="gf-root">

      {/* ══════ TOP NAVIGATION BAR — 40px ══════ */}
      <header className="gf-topbar">
        <button className="gf-topbar__menu-btn" aria-label="Open navigation menu">{I.menu}</button>
        <Link className="gf-topbar__logo" href="/" aria-label="Go to Grafana home"><GrafanaLogo /></Link>

        <nav className="gf-topbar__breadcrumb" aria-label="Breadcrumb">
          <Link href="/" className="gf-bc__link">Home</Link>
          <span className="gf-bc__sep">/</span>
          <a href="#" className="gf-bc__link">Dashboards</a>
          <span className="gf-bc__sep">/</span>
          <span className="gf-bc__current">{PROFILE.dashboardSlug}</span>
          {PROFILE.tags.map(t => (
            <span key={t.text} className={`gf-tag gf-tag--${t.color}`}>{t.text}</span>
          ))}
        </nav>

        <div className="gf-topbar__search">
          <span className="gf-topbar__search-icon">{I.search}</span>
          <span className="gf-topbar__search-text">Search or jump to…</span>
          <kbd className="gf-topbar__search-kbd">⌘K</kbd>
        </div>

        <div className="gf-topbar__right">
          <div className="gf-topbar__notif-wrap">
            <button className="gf-topbar__icon-btn" title="Notifications">{I.bell}<span className="gf-notif-dot"/></button>
          </div>
          <button className="gf-topbar__icon-btn" title="Help">{I.question}</button>
          <button className="gf-topbar__profile-btn" title="Kavish Ambani">
            <span className="gf-avatar">KA</span>
          </button>
        </div>
      </header>

      {/* ══════ LAYOUT ══════ */}
      <div className="gf-layout">
        <SideMenu />

        <main className="gf-page" id="pageContent">

          {/* ══ DASHBOARD TOOLBAR ══ */}
          <div className="gf-page-toolbar">
            <div className="gf-page-toolbar__left">
              <button
                className={`gf-toolbar-btn ${starred ? "gf-toolbar-btn--active" : ""}`}
                title={starred ? "Unmark as favorite" : "Mark as favorite"}
                onClick={e => { e.stopPropagation(); setStarred(s => !s); }}
              >
                {starred ? I.starFill : I.star}
                <span className="gf-toolbar-btn__label">{starred ? "Favorited" : "Favorite"}</span>
              </button>
              <button className="gf-toolbar-btn" title="Share dashboard">
                {I.share}<span className="gf-toolbar-btn__label">Share</span>
              </button>
              <button className="gf-toolbar-btn" title="Dashboard settings">
                {I.settings}<span className="gf-toolbar-btn__label">Settings</span>
              </button>
            </div>

            <div className="gf-page-toolbar__right">
              <button className="gf-toolbar-btn gf-toolbar-btn--add" title="Add panel">
                {I.add}<span>Add</span>{I.chevDown}
              </button>
              <div className="gf-timepicker" ref={timeRef}>
                <button
                  className="gf-timepicker__btn"
                  onClick={toggleTime}
                  aria-expanded={timeOpen}
                >
                  {I.clock}
                  <span className="gf-timepicker__label">{TIME_RANGES[timeIdx]}</span>
                  {I.chevDown}
                </button>
                <button className="gf-timepicker__refresh" title="Sync time range">{I.refresh}</button>
                {timeOpen && (
                  <div className="gf-timepicker__dropdown" onClick={e => e.stopPropagation()}>
                    <div className="gf-timepicker__dropdown-header">Quick ranges</div>
                    {TIME_RANGES.map((r, i) => (
                      <button
                        key={i}
                        className={`gf-timepicker__option ${i === timeIdx ? "gf-timepicker__option--active" : ""}`}
                        onClick={() => { setTimeIdx(i); setTimeOpen(false); }}
                      >{r}</button>
                    ))}
                  </div>
                )}
              </div>
              <button className="gf-toolbar-btn gf-toolbar-btn--zoom" title="Zoom out">
                {I.chevDown}
              </button>
            </div>
          </div>

          {/* ══ TEMPLATE VARIABLE ROW ══ */}
          <div className="gf-varrow">
            <span className="gf-varrow__label">env</span>
            <button className="gf-varrow__select">
              <span>production</span>{I.chevDown}
            </button>
          </div>

          {/* ══════ DASHBOARD CANVAS ══════ */}
          <div className="gf-canvas">

            {/* ═══ ROW 1 — Overview Metrics ═══ */}
            <Row label="Overview Metrics">
              {STATS.map((s, i) => (
                <Panel
                  key={i}
                  title={s.label}
                  className="gf-w-25 gf-h-stat"
                  style={{ animationDelay: `${i * 60}ms` }}
                  menuOpen={openPanel === `stat-${i}`}
                  onMenuToggle={e => togglePanel(`stat-${i}`, e)}
                >
                  {/* Stat panel: sparkline fills background, value overlaid */}
                  <div className="gf-viz-stat">
                    <div className="gf-viz-stat__bg">
                      <Sparkline data={sparkData[i]} color={s.color} id={`sp${i}`} mode="fill"/>
                    </div>
                    <div className="gf-viz-stat__fg">
                      <AnimatedValue target={s.value} suffix={s.suffix} color={s.color}/>
                      <div className="gf-viz-stat__sublabel">{s.sublabel}</div>
                    </div>
                  </div>
                </Panel>
              ))}
            </Row>

            {/* ═══ ROW 2 — Skills Gauges ═══ */}
            <Row label="Skills — Proficiency">
              {SKILLS.map((s, i) => (
                <Panel
                  key={i}
                  title={s.name}
                  className="gf-w-25 gf-h-gauge"
                  style={{ animationDelay: `${i * 50}ms` }}
                  menuOpen={openPanel === `gauge-${i}`}
                  onMenuToggle={e => togglePanel(`gauge-${i}`, e)}
                >
                  <div className="gf-viz-gauge">
                    <GaugeArc pct={s.pct} color={s.color} label="proficiency"/>
                  </div>
                </Panel>
              ))}
            </Row>

            {/* ═══ ROW 3 — Projects / Logs ═══ */}
            <Row label="Projects — Deployment Logs">
              <Panel
                title="deployment.log  •  {job=&quot;ci-pipeline&quot;, env=&quot;production&quot;}"
                className="gf-w-100 gf-h-logs"
                menuOpen={openPanel === "logs"}
                onMenuToggle={e => togglePanel("logs", e)}
              >
                <div className="gf-viz-logs">
                  {/* Log volume histogram */}
                  <div className="gf-log-volume">
                    {PROJECTS.map((p, i) => (
                      <div key={i} className="gf-log-volume__bar-wrap">
                        <div
                          className={`gf-log-volume__bar gf-log-volume__bar--${p.level}`}
                          style={{ height: `${30 + Math.random() * 50}%` }}
                        />
                      </div>
                    ))}
                  </div>
                  {/* Log rows */}
                  <div className="gf-log-rows">
                    {PROJECTS.map((p, i) => (
                      <div key={i} className="gf-log-row">
                        <span className="gf-log-row__ts">{p.ts}</span>
                        <span className={`gf-log-row__lvl gf-log-row__lvl--${p.level}`}>
                          {p.level.toUpperCase()}
                        </span>
                        <span className="gf-log-row__msg">
                          {p.msg}
                          <span className="gf-log-chip">{p.tag}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Panel>
            </Row>

            {/* ═══ ROW 4 — Experience + Tech ═══ */}
            <Row label="Experience & Tech Stack">
              <Panel
                title="Experience — Timeline"
                className="gf-w-50 gf-h-xl"
                menuOpen={openPanel === "timeline"}
                onMenuToggle={e => togglePanel("timeline", e)}
              >
                <div className="gf-viz-timeline">
                  {EXPERIENCE.map((ex, i) => (
                    <div key={i} className="gf-tl-item">
                      <div className={`gf-tl-dot ${ex.status === "active" ? "gf-tl-dot--active" : "gf-tl-dot--done"}`}/>
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

              <Panel
                title="Tech Stack — Inventory Table"
                className="gf-w-50 gf-h-xl"
                menuOpen={openPanel === "table"}
                onMenuToggle={e => togglePanel("table", e)}
              >
                <div className="gf-viz-table">
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
                          <td className="gf-td-muted">{t.category}</td>
                          <td className="gf-td-muted">{t.level}</td>
                          <td>
                            <span className={`gf-status-dot ${t.active ? "gf-status-dot--active" : "gf-status-dot--info"}`}>
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

            {/* ═══ ROW 5 — Availability + Contact ═══ */}
            <Row label="Availability & Contact">
              <Panel
                title="Availability — State History (30 days)"
                className="gf-w-50 gf-h-md"
                menuOpen={openPanel === "avail"}
                onMenuToggle={e => togglePanel("avail", e)}
              >
                <div className="gf-viz-state-history">
                  {AVAILABILITY.map((a, i) => (
                    <div key={i} className="gf-sh-row">
                      <div className="gf-sh-label">{a.name}</div>
                      <div className="gf-sh-bar">
                        {a.segments.map((seg, j) => (
                          <div key={j} className={`gf-sh-seg gf-sh-seg--${seg}`} title={seg}/>
                        ))}
                      </div>
                      <div className="gf-sh-pct">{a.pct}</div>
                    </div>
                  ))}
                </div>
              </Panel>

              <Panel
                title="Contact — Endpoints"
                className="gf-w-50 gf-h-md"
                menuOpen={openPanel === "contact"}
                onMenuToggle={e => togglePanel("contact", e)}
              >
                <div className="gf-viz-contact">
                  <a className="gf-contact-card" href={`mailto:${CONTACT.email}`}>
                    <span className="gf-contact-card__icon gf-contact-card__icon--email">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
                    </span>
                    <div><div className="gf-contact-card__k">Email</div><div className="gf-contact-card__v">{CONTACT.email}</div></div>
                  </a>
                  <a className="gf-contact-card" href={CONTACT.github.url} target="_blank" rel="noopener noreferrer">
                    <span className="gf-contact-card__icon gf-contact-card__icon--github">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    </span>
                    <div><div className="gf-contact-card__k">GitHub</div><div className="gf-contact-card__v">{CONTACT.github.handle}</div></div>
                  </a>
                  <a className="gf-contact-card" href={CONTACT.linkedin.url} target="_blank" rel="noopener noreferrer">
                    <span className="gf-contact-card__icon gf-contact-card__icon--linkedin">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </span>
                    <div><div className="gf-contact-card__k">LinkedIn</div><div className="gf-contact-card__v">{CONTACT.linkedin.handle}</div></div>
                  </a>
                  <div className="gf-contact-card">
                    <span className="gf-contact-card__icon gf-contact-card__icon--location">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </span>
                    <div><div className="gf-contact-card__k">Location</div><div className="gf-contact-card__v">{CONTACT.location}</div></div>
                  </div>
                </div>
              </Panel>
            </Row>

          </div>{/* /gf-canvas */}
        </main>
      </div>
    </div>
  );
}
