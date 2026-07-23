import { useState, useRef, MouseEvent as ReactMouseEvent, FormEvent } from "react";
import { Reveal } from "../Reveal";

const socialLinks = [
  { label: "Phone", value: "8979714126", href: "tel:8979714126" },
  { label: "Email", value: "vaibhavvatsh@gmail.com", href: "mailto:vaibhavvatsh@gmail.com" },
  { label: "LinkedIn", value: "in/vaibhavvats01", href: "https://linkedin.com/in/vaibhavvats01" },
  { label: "Portfolio", value: "vaibhave.netlify.app", href: "https://vaibhave.netlify.app" },
];

export function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // 3D Tilt Effect State
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -5; // max 5deg tilt
    const rotateY = ((x - centerX) / centerX) * 5;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format the message for WhatsApp
    const text = `Hi Vaibhav,\n\nI am ${formState.name} (${formState.email}).\n\n${formState.message}`;
    const whatsappUrl = `https://wa.me/918979714126?text=${encodeURIComponent(text)}`;
    
    // Simulate slight delay for the button animation, then open WhatsApp
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(whatsappUrl, "_blank");
      
      setTimeout(() => setSubmitted(false), 5000);
      setFormState({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <section className="scene relative py-48 px-8 md:px-20 flex items-center min-h-screen" id="scene-contact">
      {/* Background intense glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30 animate-pulse-glow pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.7 0.2 250 / 0.5), transparent 70%)" }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Copy & Socials */}
        <div>
          <Reveal>
            <p className="font-mono text-xs tracking-[0.4em] text-ether uppercase mb-8 flex items-center gap-4">
              <span className="w-12 h-px bg-ether/50 inline-block"></span>
              Final Gateway 09
            </p>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-extralight leading-[0.95] mb-8">
              Let's build something <br />
              <span className="italic gradient-text glow-shadow-intense mix-blend-screen">extraordinary.</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl font-light max-w-md mb-16 leading-relaxed">
              Open for opportunities, collaborations, and exploring the boundaries of creative technology.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-8">
            {socialLinks.map((l, i) => (
              <Reveal key={l.label} delay={200 + i * 100}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex flex-col gap-2"
                >
                  <span className="font-mono text-[10px] tracking-[0.3em] text-ether/70 uppercase">
                    {l.label}
                  </span>
                  <span className="font-display text-xl group-hover:text-ether transition-colors break-all">
                    {l.value}
                  </span>
                  <div className="w-0 h-px bg-ether group-hover:w-full transition-all duration-700 mt-2" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right Side: Interactive Form */}
        <Reveal delay={400}>
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={handleMouseLeave}
            className="perspective-1000 w-full"
            style={{ perspective: "1000px" }}
          >
            <div
              className="glass-panel p-8 md:p-12 rounded-2xl transition-all duration-300 ease-out relative overflow-hidden"
              style={{
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovering ? 1.02 : 1})`,
                boxShadow: isHovering 
                  ? "0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.2), 0 0 40px oklch(0.7 0.2 250 / 0.3)" 
                  : undefined
              }}
            >
              {/* Form animated border glow effect */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent,oklch(0.7_0.2_250/0.1),transparent)] animate-border-flow pointer-events-none opacity-50" />
              
              <form onSubmit={handleSubmit} className="relative flex flex-col gap-8 z-10">
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="glass-input w-full bg-transparent border-b border-border/50 py-4 px-2 text-lg focus:border-ether transition-colors outline-none peer placeholder-transparent"
                    placeholder="Your Name"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-2 top-4 text-muted-foreground font-mono text-sm tracking-wider transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-ether peer-valid:-top-4 peer-valid:text-xs peer-valid:text-ether/70 cursor-text pointer-events-none"
                  >
                    IDENTIFIER [Name]
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="glass-input w-full bg-transparent border-b border-border/50 py-4 px-2 text-lg focus:border-ether transition-colors outline-none peer placeholder-transparent"
                    placeholder="Your Email"
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-2 top-4 text-muted-foreground font-mono text-sm tracking-wider transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-ether peer-valid:-top-4 peer-valid:text-xs peer-valid:text-ether/70 cursor-text pointer-events-none"
                  >
                    COMM-LINK [Email]
                  </label>
                </div>

                <div className="relative group">
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="glass-input w-full bg-transparent border-b border-border/50 py-4 px-2 text-lg focus:border-ether transition-colors outline-none peer placeholder-transparent resize-none"
                    placeholder="Your Message"
                  />
                  <label 
                    htmlFor="message" 
                    className="absolute left-2 top-4 text-muted-foreground font-mono text-sm tracking-wider transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-ether peer-valid:-top-4 peer-valid:text-xs peer-valid:text-ether/70 cursor-text pointer-events-none"
                  >
                    TRANSMISSION [Message]
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="magnetic-btn mt-6 w-full py-5 px-8 bg-white/5 border border-white/10 rounded-lg font-mono text-sm tracking-[0.3em] uppercase hover:bg-ether/20 hover:border-ether/50 hover:text-white transition-all duration-500 disabled:opacity-50 group flex items-center justify-center gap-4"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Transmitting...</span>
                  ) : submitted ? (
                    <span className="text-green-400">Transmission Received</span>
                  ) : (
                    <>
                      <span>Initiate Sequence</span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Footer text */}
      <Reveal delay={800}>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.4em] text-muted-foreground/50 uppercase w-full text-center">
          ⟡ End of transmission · The abyss remembers ⟡
        </div>
      </Reveal>
    </section>
  );
}
