import { Reveal } from "../Reveal";

const lines = [
  "I build interfaces.",
  "I design experiences.",
  "I engineer intelligence.",
  "I create digital worlds.",
];

export function Vision() {
  return (
    <section className="scene relative py-48 px-8 md:px-20 flex items-center" id="scene-vision">
      <div className="max-w-6xl mx-auto w-full">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.4em] text-ether uppercase mb-16 text-center">
            ⟡ Horizon 08
          </p>
        </Reveal>
        <div className="space-y-6 md:space-y-10">
          {lines.map((l, i) => (
            <Reveal key={l} delay={i * 200}>
              <div
                className="font-display text-5xl md:text-8xl lg:text-9xl font-extralight tracking-tighter leading-[0.95] hover:translate-x-6 transition-transform duration-700"
                style={{
                  opacity: 0.4 + i * 0.15,
                  textAlign: i % 2 ? "right" : "left",
                  fontStyle: i % 2 ? "italic" : "normal",
                }}
              >
                {i % 2 ? <span className="gradient-text">{l}</span> : l}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
