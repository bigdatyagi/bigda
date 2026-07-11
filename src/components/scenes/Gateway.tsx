import { Reveal } from "../Reveal";

const links = [
  { label: "Phone", value: "8979714126", href: "tel:8979714126" },
  { label: "Email", value: "vaibhavvatsh@gmail.com", href: "mailto:vaibhavvatsh@gmail.com" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/vaibhavvats01",
    href: "https://linkedin.com/in/vaibhavvats01",
  },
  { label: "Portfolio", value: "vaibhave.netlify.app", href: "https://vaibhave.netlify.app" },
];

export function Gateway() {
  return (
    <section className="scene relative py-48 px-8 md:px-20 flex items-center" id="scene-gateway">
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] max-w-[120vw] max-h-[120vw] rounded-full opacity-40 animate-pulse-glow pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.7 0.2 250 / 0.4), transparent 60%)" }}
      />
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.4em] text-ether uppercase mb-8">
            ⟡ Final Gateway 09
          </p>
          <h2 className="font-display text-5xl md:text-8xl font-extralight leading-[0.95]">
            Every journey begins
            <br />
            with a <span className="italic gradient-text">conversation.</span>
          </h2>
        </Reveal>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-px bg-border/30 max-w-3xl mx-auto">
          {links.map((l, i) => (
            <Reveal key={l.label} delay={i * 100}>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="block bg-abyss/60 backdrop-blur-sm p-8 group hover:bg-card/80 transition-all duration-500 text-left h-full"
              >
                <div className="font-mono text-[10px] tracking-[0.3em] text-ether/70 uppercase mb-3">
                  {l.label}
                </div>
                <div className="font-display text-xl md:text-2xl group-hover:text-ether transition-colors break-all">
                  {l.value}
                </div>
                <div className="mt-4 w-8 h-px bg-ether group-hover:w-full transition-all duration-700" />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <div className="mt-32 font-mono text-[10px] tracking-[0.4em] text-muted-foreground uppercase">
            ⟡ End of transmission · The abyss remembers ⟡
          </div>
        </Reveal>
      </div>
    </section>
  );
}
