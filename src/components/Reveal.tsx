import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0) scale(1)" : "translateY(50px) scale(0.98)",
        filter: shown ? "blur(0)" : "blur(12px)",
        transition: `opacity 1.4s cubic-bezier(0.2,0.8,0.2,1) ${delay}ms, transform 1.4s cubic-bezier(0.2,0.8,0.2,1) ${delay}ms, filter 1.4s ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
