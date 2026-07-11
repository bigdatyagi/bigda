// Original abyssal guardian silhouette — pure SVG, no copyrighted assets
export function Guardian({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 600" className={className} aria-hidden>
      <defs>
        <linearGradient id="hair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.98 0.02 240)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="oklch(0.7 0.15 250)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="cloak" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.2 0.06 270)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="oklch(0.05 0.02 260)" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="aura" cx="0.5" cy="0.4" r="0.6">
          <stop offset="0%" stopColor="oklch(0.85 0.18 250)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="oklch(0.85 0.18 250)" stopOpacity="0" />
        </radialGradient>
        <filter id="blur">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>
      <ellipse cx="150" cy="280" rx="160" ry="280" fill="url(#aura)" />
      {/* flowing hair */}
      <path
        d="M110 120 Q80 200 70 320 Q65 420 90 520 L100 520 Q95 400 110 300 Q120 200 130 130 Z"
        fill="url(#hair)"
        filter="url(#blur)"
      />
      <path
        d="M190 120 Q220 200 230 320 Q235 420 210 520 L200 520 Q205 400 190 300 Q180 200 170 130 Z"
        fill="url(#hair)"
        filter="url(#blur)"
      />
      {/* silhouette */}
      <ellipse cx="150" cy="110" rx="28" ry="34" fill="oklch(0.12 0.03 265)" />
      <path
        d="M122 140 Q150 155 178 140 L195 240 Q200 320 195 420 L180 580 L120 580 L105 420 Q100 320 105 240 Z"
        fill="oklch(0.1 0.02 260)"
      />
      <path
        d="M80 160 Q60 280 70 460 L100 560 L120 580 L115 420 Q110 280 125 180 Z"
        fill="url(#cloak)"
      />
      <path
        d="M220 160 Q240 280 230 460 L200 560 L180 580 L185 420 Q190 280 175 180 Z"
        fill="url(#cloak)"
      />
      {/* weapon — celestial spear */}
      <line
        x1="240"
        y1="80"
        x2="60"
        y2="560"
        stroke="oklch(0.95 0.05 220)"
        strokeWidth="1.2"
        opacity="0.7"
      />
      <line
        x1="240"
        y1="80"
        x2="60"
        y2="560"
        stroke="oklch(0.7 0.2 250)"
        strokeWidth="3"
        opacity="0.3"
        filter="url(#blur)"
      />
      <circle cx="240" cy="80" r="4" fill="oklch(0.98 0.05 220)" />
      <circle cx="240" cy="80" r="10" fill="oklch(0.7 0.2 250)" opacity="0.4" filter="url(#blur)" />
    </svg>
  );
}
