import { useEffect, useState } from "react";

export function Void() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScroll(Math.min(1, y / window.innerHeight));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="scene flex items-center justify-center relative" id="scene-void">
      <div
        className="text-center px-6 relative z-10"
        style={{ opacity: 1 - scroll * 1.4, transform: `translateY(${scroll * -60}px)` }}
      >
        <p className="font-mono text-xs tracking-[0.4em] text-muted-foreground uppercase mb-12 animate-shimmer">
          [ Transmission · 0001 ]
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extralight max-w-5xl leading-[1.05] mx-auto">
          There are places
          <br />
          <span className="italic gradient-text">beneath reality.</span>
        </h1>
        <p className="mt-16 text-muted-foreground text-sm tracking-widest uppercase animate-shimmer">
          scroll to descend
        </p>
        <div className="mt-6 mx-auto w-px h-24 bg-gradient-to-b from-ether to-transparent" />
      </div>

      {/* opening rift */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: `${2 + scroll * 1200}px`,
          height: `${80 + scroll * 900}px`,
          background: "var(--gradient-rift)",
          filter: `blur(${20 - scroll * 18}px)`,
          opacity: 0.4 + scroll * 0.6,
          transition: "filter 0.3s",
        }}
      />
    </section>
  );
}
