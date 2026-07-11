import { useEffect, useRef } from "react";
import { Reveal } from "../Reveal";

const intel = [
  "Prompt Engineering",
  "AI Development",
  "LLM Workflows",
  "AI Automation",
  "Intelligent Interfaces",
  "AI Assisted Development",
];

export function Intelligence() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d")!;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      c.width = c.clientWidth * dpr;
      c.height = c.clientHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // neural net
    const nodes = Array.from({ length: 60 }, () => ({
      x: Math.random() * c.clientWidth,
      y: Math.random() * c.clientHeight,
      vx: 0,
      vy: 0,
      phase: Math.random() * Math.PI * 2,
    }));
    let t = 0;
    const tick = () => {
      t += 0.016;
      ctx.fillStyle = "rgba(3,4,10,0.25)";
      ctx.fillRect(0, 0, c.clientWidth, c.clientHeight);
      for (const n of nodes) {
        n.x += Math.sin(t + n.phase) * 0.3;
        n.y += Math.cos(t * 0.7 + n.phase) * 0.3;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i],
            b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 160) {
            ctx.strokeStyle = `oklch(0.75 0.18 ${220 + Math.sin(t + i) * 40} / ${(1 - d / 160) * 0.4})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = `oklch(0.92 0.08 220 / ${0.5 + Math.sin(t + n.phase) * 0.3})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = "oklch(0.7 0.2 250)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="scene relative py-40 overflow-hidden" id="scene-intelligence">
      <canvas ref={ref} className="absolute inset-0 w-full h-full opacity-70" aria-hidden />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 30%, oklch(0.03 0.01 260) 80%)",
        }}
      />
      <div className="relative z-10 px-8 md:px-20 max-w-6xl mx-auto text-center">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.4em] text-ether uppercase mb-6">⟡ Core 07</p>
          <h2 className="font-display text-5xl md:text-8xl font-extralight leading-[0.95]">
            The Intelligence
            <br />
            <span className="italic gradient-text">Chamber.</span>
          </h2>
        </Reveal>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {intel.map((s, i) => (
            <Reveal key={s} delay={i * 80}>
              <div className="font-display text-xl md:text-2xl font-light hover:text-ether transition-colors cursor-default">
                {s}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
