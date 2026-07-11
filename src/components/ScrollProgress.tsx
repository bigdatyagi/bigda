import { useEffect, useState } from "react";

const scenes = [
  { id: "scene-void", label: "I" },
  { id: "scene-arrival", label: "II" },
  { id: "scene-memory", label: "III" },
  { id: "scene-constellation", label: "IV" },
  { id: "scene-experience", label: "V" },
  { id: "scene-projects", label: "VI" },
  { id: "scene-intelligence", label: "VII" },
  { id: "scene-vision", label: "VIII" },
  { id: "scene-gateway", label: "IX" },
];

export function ScrollProgress() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight / 2;
      let idx = 0;
      scenes.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y) idx = i;
      });
      setActive(idx);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4"
      aria-label="Scenes"
    >
      {scenes.map((s, i) => (
        <a key={s.id} href={`#${s.id}`} className="group flex items-center gap-3 justify-end">
          <span className="font-mono text-[10px] tracking-[0.3em] text-ether opacity-0 group-hover:opacity-100 transition-opacity">
            {s.label}
          </span>
          <span
            className="block rounded-full transition-all duration-500"
            style={{
              width: active === i ? 24 : 6,
              height: 2,
              background: active === i ? "oklch(0.92 0.08 200)" : "oklch(0.5 0.05 250 / 0.5)",
              boxShadow: active === i ? "0 0 12px oklch(0.85 0.15 220)" : "none",
            }}
          />
        </a>
      ))}
    </nav>
  );
}
