import { Reveal } from "../Reveal";

const roles = [
  {
    co: "Arclane Global",
    role: "Full Stack Development Intern",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "API Integration",
      "CI/CD",
      "Performance",
      "Full Stack Architecture",
    ],
  },
  {
    co: "NNU EDUCOM",
    role: "Frontend Developer",
    tags: [
      "React Applications",
      "Responsive Design",
      "SEO Optimization",
      "Performance",
      "Reusable Components",
    ],
  },
];

export function Experience() {
  return (
    <section className="scene relative py-40 px-8 md:px-20" id="scene-experience">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.4em] text-ether uppercase mb-6">⟡ Hall 05</p>
        <h2 className="font-display text-5xl md:text-7xl font-extralight max-w-4xl leading-[1.05]">
          Structures
          <br />
          <span className="italic gradient-text">that remember.</span>
        </h2>
      </Reveal>

      <div className="mt-32 space-y-px max-w-6xl">
        {roles.map((r, idx) => (
          <Reveal key={r.co} delay={idx * 150}>
            <div className="relative group bg-abyss/40 backdrop-blur-sm p-10 md:p-14 border border-border/40 hover:border-ether/40 transition-all duration-700">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ether to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="grid md:grid-cols-[1fr_2fr] gap-10">
                <div>
                  <div className="font-mono text-xs text-ether/70 tracking-[0.3em] mb-3">
                    0{idx + 1} · CHRONICLE
                  </div>
                  <h3 className="font-display text-4xl md:text-5xl mb-2">{r.co}</h3>
                  <p className="text-muted-foreground italic">{r.role}</p>
                </div>
                <div className="flex flex-wrap gap-2 self-end">
                  {r.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-[11px] font-mono tracking-wider uppercase border border-border/60 hover:border-ether hover:text-ether transition-colors cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
