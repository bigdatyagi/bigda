import { Reveal } from "../Reveal";
import { Guardian } from "../Guardian";
import { Monoliths } from "../Monoliths";

export function Arrival() {
  return (
    <section className="scene relative flex items-center overflow-hidden" id="scene-arrival">
      <Monoliths seed={1} />
      <div
        className="absolute inset-0 pointer-events-none animate-pulse-glow"
        style={{
          background:
            "radial-gradient(ellipse at 70% 40%, oklch(0.7 0.2 250 / 0.25), transparent 60%)",
        }}
      />
      <Guardian className="absolute right-[5%] top-1/2 -translate-y-1/2 h-[90vh] opacity-60 animate-float pointer-events-none" />

      <div className="relative z-10 px-8 md:px-20 max-w-6xl">
        <Reveal>
          <p className="font-mono text-[10px] md:text-xs tracking-[0.5em] text-ether uppercase mb-8">
            ⟡ The Abyss Receives You
          </p>
        </Reveal>
        <Reveal delay={200}>
          <h1 className="font-display text-7xl md:text-[10rem] lg:text-[13rem] font-extralight leading-[0.85] tracking-tighter">
            VAIBHAV
            <br />
            <span className="italic gradient-text">VATS</span>
          </h1>
        </Reveal>
        <Reveal delay={500}>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground">
            <span>AI Front-End Developer</span>
            <span className="text-ether">·</span>
            <span>Creative Technologist</span>
            <span className="text-ether">·</span>
            <span>Frontend Engineer</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
