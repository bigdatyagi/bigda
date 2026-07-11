import { Reveal } from "../Reveal";
import { Monoliths } from "../Monoliths";

const projects = [
  {
    n: "01",
    name: "Tyremall",
    world: "Premium Automotive Ecosystem",
    hue: "20 80% 60%",
    tech: ["React", "Node.js", "Tailwind"],
  },
  {
    n: "02",
    name: "Fizzy Products",
    world: "Modern Ecommerce Dimension",
    hue: "280 70% 65%",
    tech: ["React", "Vite", "Stripe"],
  },
  {
    n: "03",
    name: "Taskoma",
    world: "Professional Hiring Universe",
    hue: "200 80% 60%",
    tech: ["React", "Express", "AI"],
  },
  {
    n: "04",
    name: "Portfolio",
    world: "Creative Showcase Realm",
    hue: "150 60% 55%",
    tech: ["React", "Motion", "Framer"],
  },
];

export function Projects() {
  return (
    <section className="scene relative py-40" id="scene-projects">
      <div className="px-8 md:px-20 mb-32">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.4em] text-ether uppercase mb-6">
            ⟡ Dimensions 06
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-extralight max-w-4xl leading-[1.05]">
            Four worlds.
            <br />
            <span className="italic gradient-text">Enter any of them.</span>
          </h2>
        </Reveal>
      </div>

      <div className="space-y-px">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 100}>
            <div
              className="relative group overflow-hidden border-y border-border/40 hover:border-ether/40 transition-all duration-1000 cursor-pointer"
              style={{
                background: `radial-gradient(ellipse at ${i % 2 ? "80%" : "20%"} 50%, hsla(${p.hue}, 0.18), transparent 60%)`,
              }}
            >
              <Monoliths seed={i + 10} />
              <div className="relative px-8 md:px-20 py-24 md:py-32 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                <div>
                  <div className="font-mono text-xs tracking-[0.3em] text-ether/70 mb-4">
                    DIMENSION · {p.n}
                  </div>
                  <h3 className="font-display text-6xl md:text-8xl font-extralight tracking-tighter group-hover:translate-x-4 transition-transform duration-700">
                    {p.name}
                  </h3>
                  <p className="mt-4 text-muted-foreground italic text-lg">{p.world}</p>
                </div>
                <div className="flex flex-col items-end gap-4">
                  <div className="flex gap-2 flex-wrap justify-end">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-[10px] font-mono tracking-wider uppercase border border-border/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="font-mono text-xs tracking-[0.3em] text-ether opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center gap-2">
                    ENTER WORLD{" "}
                    <span className="inline-block group-hover:translate-x-2 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
