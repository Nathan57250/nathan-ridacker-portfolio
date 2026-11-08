const BARS = [0.45, 0.7, 0.55, 0.9, 0.65, 0.8]

// Decorative looping wireframe of a business dashboard (desktop only, see .hero-visual in index.css)
export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <svg viewBox="0 0 320 220" width="100%" fill="none" className="hv-float">
        <rect x="0.5" y="0.5" width="319" height="219" fill="var(--color-bg)" stroke="var(--color-muted)" strokeOpacity="0.35" />
        <line x1="0" y1="24" x2="320" y2="24" stroke="var(--color-muted)" strokeOpacity="0.35" />
        {[14, 24, 34].map(cx => <circle key={cx} cx={cx} cy="12" r="2.5" stroke="var(--color-muted)" strokeOpacity="0.5" />)}
        <rect x="60" y="8" width="120" height="8" fill="var(--color-muted)" fillOpacity="0.15" />
        <circle cx="304" cy="12" r="3" fill="var(--color-accent)" className="hv-pulse" />

        {/* Sidebar */}
        <line x1="70" y1="24" x2="70" y2="220" stroke="var(--color-muted)" strokeOpacity="0.35" />
        {[46, 36, 40, 30, 38].map((w, i) => (
          <rect key={i} x="12" y={40 + i * 16} width={w} height="5" fill="var(--color-muted)" fillOpacity="0.3" />
        ))}
        <rect x="6" y="37" width="2" height="11" fill="var(--color-accent)" className="hv-nav" />

        {/* KPI cards */}
        {[82, 160, 238].map((x, i) => (
          <g key={x}>
            <rect x={x + 0.5} y="36.5" width="70" height="40" stroke="var(--color-muted)" strokeOpacity="0.35" />
            <rect x={x + 8} y="46" width="28" height="4" fill="var(--color-muted)" fillOpacity="0.3" />
            <rect
              x={x + 8} y="58" width="48" height="9"
              fill={i === 0 ? 'var(--color-accent)' : 'var(--color-muted)'}
              fillOpacity={i === 0 ? 1 : 0.5}
              className="hv-kpi"
              style={{ animationDelay: `${i * 0.6}s` }}
            />
          </g>
        ))}

        {/* Bar chart */}
        <rect x="82.5" y="88.5" width="104" height="120" stroke="var(--color-muted)" strokeOpacity="0.35" />
        {BARS.map((h, i) => (
          <rect
            key={i}
            x={92 + i * 15} y={198 - 92 * h} width="9" height={92 * h}
            fill={i === BARS.length - 1 ? 'var(--color-accent)' : 'var(--color-muted)'}
            fillOpacity={i === BARS.length - 1 ? 1 : 0.45}
            className="hv-bar"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}

        {/* Line chart */}
        <rect x="194.5" y="88.5" width="114" height="120" stroke="var(--color-muted)" strokeOpacity="0.35" />
        {[118, 148, 178].map(y => (
          <line key={y} x1="200" y1={y} x2="303" y2={y} stroke="var(--color-muted)" strokeOpacity="0.15" strokeDasharray="2 3" />
        ))}
        <path
          d="M202 190 L218 168 L234 176 L250 140 L266 150 L282 118 L300 104"
          pathLength={1}
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          className="hv-line"
        />
        <circle cx="300" cy="104" r="3" fill="var(--color-accent)" className="hv-dot" />
      </svg>
    </div>
  )
}
