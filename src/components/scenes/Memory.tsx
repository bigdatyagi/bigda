import { Reveal } from "../Reveal";

const memories = [
  { i: "I.", t: "Frontend Development", d: "Crafting interfaces that feel inevitable." },
  {
    i: "II.",
    t: "React Engineering",
    d: "Composable systems built to scale beyond their authors.",
  },
  { i: "III.", t: "Product Building", d: "From signal to shipped experience." },
  { i: "IV.", t: "AI Exploration", d: "Teaching machines to collaborate, not replace." },
  { i: "V.", t: "Problem Solving", d: "Reducing complexity into elegance." },
  { i: "VI.", t: "Continuous Learning", d: "Every commit a sharpened edge." },
];

export function Memory() {
  return (
    <section className="scene relative py-40 px-8 md:px-20" id="scene-memory">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.4em] text-ether uppercase mb-6">
          ⟡ Corridor 02
        </p>
        <h2 className="font-display text-5xl md:text-7xl font-extralight max-w-3xl leading-[1.05]">
          Memories drift through
          <br />
          <span className="italic gradient-text">the architecture.</span>
        </h2>
      </Reveal>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30 max-w-7xl">
        {memories.map((m, i) => (
          <Reveal key={m.i} delay={i * 100}>
            <div className="bg-abyss/60 backdrop-blur-sm p-10 h-full group hover:bg-card/60 transition-all duration-700 border border-transparent hover:border-ether/30">
              <div className="font-mono text-xs text-ether/60 mb-6 tracking-widest">{m.i}</div>
              <h3 className="font-display text-3xl mb-4 group-hover:text-ether transition-colors duration-500">
                {m.t}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">{m.d}</p>
              <div className="mt-8 w-12 h-px bg-gradient-to-r from-ether to-transparent group-hover:w-full transition-all duration-1000" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
