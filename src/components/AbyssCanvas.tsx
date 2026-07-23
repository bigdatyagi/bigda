import { useEffect, useRef } from "react";

export function AbyssCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0, vx: 0, vy: 0 });
  const scrollY = useRef(0);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    let w = 0,
      h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      r: number;
      hue: number;
      baseVx: number;
      baseVy: number;
    };
    let particles: P[] = [];

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(300, Math.floor((w * h) / 7000)); // More particles
      particles = Array.from({ length: count }, () => {
        const baseVx = (Math.random() - 0.5) * 0.2;
        const baseVy = (Math.random() - 0.5) * 0.2;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          z: Math.random() * 1.5 + 0.1, // more depth
          vx: baseVx,
          vy: baseVy,
          baseVx,
          baseVy,
          r: Math.random() * 2 + 0.5,
          hue: Math.random() > 0.8 ? 280 + Math.random() * 40 : 200 + Math.random() * 60, // Some purple/pink accents
        };
      });
    };

    let lastMouse = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      mouse.current.vx = e.clientX - lastMouse.x;
      mouse.current.vy = e.clientY - lastMouse.y;
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      lastMouse = { x: e.clientX, y: e.clientY };
    };

    const onScroll = () => {
      scrollY.current = window.scrollY;
    };

    const tick = () => {
      // Lower alpha for longer, smoother trails
      ctx.fillStyle = "rgba(5, 6, 14, 0.12)";
      ctx.fillRect(0, 0, w, h);

      // Dampen mouse velocity
      mouse.current.vx *= 0.9;
      mouse.current.vy *= 0.9;

      for (const p of particles) {
        // Advanced mouse attraction and fluid displacement
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const d2 = dx * dx + dy * dy;

        if (d2 < 60000) {
          // Larger interaction radius
          const f = (1 - d2 / 60000) * 0.08;
          // Pull towards mouse
          p.vx += (dx / Math.sqrt(d2 + 1)) * f;
          p.vy += (dy / Math.sqrt(d2 + 1)) * f;
          // Add some mouse velocity influence (swirl)
          p.vx += mouse.current.vx * 0.005 * p.z;
          p.vy += mouse.current.vy * 0.005 * p.z;
        }

        // Return to base velocity gently
        p.vx += (p.baseVx - p.vx) * 0.02;
        p.vy += (p.baseVy - p.vy) * 0.02;

        // Slight dampening
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Apply velocities with parallax (z factor)
        p.x += p.vx * p.z;
        p.y += p.vy * p.z;

        // Wrap around
        if (p.x < -50) p.x = w + 50;
        if (p.x > w + 50) p.x = -50;
        if (p.y < -50) p.y = h + 50;
        if (p.y > h + 50) p.y = -50;

        // Draw particle
        const alpha = 0.3 + p.z * 0.6;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, ${alpha})`;
        ctx.shadowBlur = 15 * p.z;
        ctx.shadowColor = `hsla(${p.hue}, 100%, 60%, 0.9)`;
        ctx.arc(p.x, p.y, p.r * p.z, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      // Connecting lines for a web effect
      ctx.lineWidth = 0.4;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i],
            b = particles[j];
          const dx = a.x - b.x,
            dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 12000) {
            // Mix hues for the line
            const mixHue = (a.hue + b.hue) / 2;
            ctx.strokeStyle = `hsla(${mixHue}, 80%, 70%, ${(1 - d2 / 12000) * 0.15})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll);
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 w-full h-full pointer-events-none transition-transform duration-1000 ease-out"
      style={{
        zIndex: 1,
        // Optional subtle CSS parallax
        transform: `translateY(${scrollY.current * 0.05}px)`,
      }}
      aria-hidden
    />
  );
}
