import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Translates children on the Y axis based on their position in the viewport.
 * speed > 0 moves slower than scroll (background feel).
 * speed < 0 moves against scroll (foreground pop).
 */
export function Parallax({
  children,
  speed = 0.15,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // distance of element center from viewport center, normalized
      const center = rect.top + rect.height / 2 - vh / 2;
      setOffset(-center * speed);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(0, ${offset.toFixed(2)}px, 0)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
