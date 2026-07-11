import { useEffect, useRef, useState } from "react";
import { Reveal } from "../Reveal";

const skills = [
  "React.js",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Vite",
  "Node.js",
  "Express.js",
  "Prompt Engineering",
  "AI Workflows",
  "Git",
  "GitHub",
  "Figma",
  "VS Code",
  "Postman",
];

export function Constellation() {
  const ref = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);
  const [hover, setHover] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const layout = () => {
      const w = el.clientWidth,
        h = el.clientHeight;
      const cx = w / 2,
        cy = h / 2;
      setPositions(
        skills.map((_, i) => {
          const ring = i < 5 ? 0 : i < 11 ? 1 : 2;
          const ringSkills = ring === 0 ? 5 : ring === 1 ? 6 : 4;
          const ringStart = ring === 0 ? 0 : ring === 1 ? 5 : 11;
          const idx = i - ringStart;
          const angle = (idx / ringSkills) * Math.PI * 2 + ring * 0.4;
          const radius = (ring + 1) * Math.min(w, h) * 0.13;
          return { x: cx + Math.cos(angle) * radius, y: cy + Math.sin(angle) * radius };
        }),
      );
    };
    layout();
    window.addEventListener("resize", layout);
    return () => window.removeEventListener("resize", layout);
  }, []);

  return (
    <section className="scene relative py-40 px-8 overflow-hidden" id="scene-constellation">
      <Reveal>
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="font-mono text-xs tracking-[0.4em] text-ether uppercase mb-6">
            ⟡ Constellation 04
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-extralight">
            A galaxy of <span className="italic gradient-text">instruments.</span>
          </h2>
        </div>
      </Reveal>

      <div ref={ref} className="relative w-full h-[700px] max-w-6xl mx-auto">
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {positions.map((p, i) =>
            positions.slice(i + 1).map((q, j) => {
              const idx = i + j + 1;
              const dist = Math.hypot(p.x - q.x, p.y - q.y);
              if (dist > 240) return null;
              const active = hover === i || hover === idx;
              return (
                <line
                  key={`${i}-${idx}`}
                  x1={p.x}
                  y1={p.y}
                  x2={q.x}
                  y2={q.y}
                  stroke={active ? "oklch(0.92 0.08 200)" : "oklch(0.7 0.15 230)"}
                  strokeWidth={active ? 1 : 0.4}
                  opacity={active ? 0.8 : 0.25 - dist / 1200}
                  style={{ transition: "all 0.4s" }}
                />
              );
            }),
          )}
        </svg>

        {positions.map((p, i) => (
          <div
            key={skills[i]}
            className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-default"
            style={{ left: p.x, top: p.y }}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
          >
            <div
              className="w-2 h-2 rounded-full bg-ether transition-all duration-500 group-hover:scale-[3]"
              style={{
                boxShadow:
                  hover === i
                    ? "0 0 40px oklch(0.92 0.08 200), 0 0 80px oklch(0.7 0.2 250)"
                    : "0 0 12px oklch(0.85 0.15 220 / 0.6)",
              }}
            />
            <div
              className="absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-500"
              style={{
                opacity: hover === i ? 1 : 0.55,
                color: hover === i ? "oklch(0.95 0.05 220)" : "oklch(0.6 0.03 250)",
              }}
            >
              {skills[i]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
