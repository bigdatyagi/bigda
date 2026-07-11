// Floating monoliths / cosmic architecture — parallax SVG
export function Monoliths({ seed = 0 }: { seed?: number }) {
  const rand = (i: number) => {
    const x = Math.sin(seed * 9301 + i * 49297) * 233280;
    return x - Math.floor(x);
  };
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {Array.from({ length: 7 }).map((_, i) => {
        const left = rand(i) * 100;
        const top = rand(i + 10) * 100;
        const scale = 0.4 + rand(i + 20) * 1.1;
        const rot = (rand(i + 30) - 0.5) * 20;
        const delay = rand(i + 40) * 6;
        return (
          <svg
            key={i}
            viewBox="0 0 100 300"
            className="absolute animate-float"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${60 * scale}px`,
              transform: `rotate(${rot}deg)`,
              animationDelay: `${delay}s`,
              opacity: 0.25 + rand(i + 50) * 0.4,
              filter: `blur(${rand(i + 60) * 2}px)`,
            }}
          >
            <defs>
              <linearGradient id={`mono${seed}-${i}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.8 0.12 220)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="oklch(0.15 0.04 270)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <polygon
              points="50,0 80,40 80,260 50,300 20,260 20,40"
              fill={`url(#mono${seed}-${i})`}
              stroke="oklch(0.7 0.15 230 / 0.4)"
              strokeWidth="0.5"
            />
            <line
              x1="50"
              y1="20"
              x2="50"
              y2="280"
              stroke="oklch(0.95 0.1 220)"
              strokeWidth="0.3"
              opacity="0.6"
            />
          </svg>
        );
      })}
    </div>
  );
}
