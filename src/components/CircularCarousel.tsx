import { useEffect, useRef, useState } from "react";
import lash1 from "@/assets/lash-1.jpg";
import lash2 from "@/assets/lash-2.jpg";
import lash3 from "@/assets/lash-3.jpg";
import lash4 from "@/assets/lash-4.jpg";
import lash5 from "@/assets/lash-5.jpg";
import lash6 from "@/assets/lash-6.jpg";

const images = [
  { src: lash1, label: "Russian Volume" },
  { src: lash2, label: "Mega Volume" },
  { src: lash3, label: "Brow Extensions" },
  { src: lash4, label: "Hybrid Set" },
  { src: lash5, label: "Glam Volume" },
  { src: lash6, label: "Classic Set" },
];

// Duplicate set for seamless infinite scroll
const items = [...images, ...images];

export function CircularCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const offsetRef = useRef(0);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (t: number) => {
      const dt = t - last;
      last = t;
      if (!paused && trackRef.current) {
        offsetRef.current -= dt * 0.04; // px per ms
        const half = trackRef.current.scrollWidth / 2;
        if (-offsetRef.current >= half) offsetRef.current += half;
        trackRef.current.style.transform = `translate3d(${offsetRef.current}px,0,0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  return (
    <div
      className="relative w-full max-w-[100vw] overflow-x-hidden overflow-y-hidden py-8 md:py-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* edge fades — narrower on mobile so less crop */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24 md:w-64" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24 md:w-64" />
      {/* radial gold glow */}
      <div className="pointer-events-none absolute inset-0 -z-0" style={{ background: "var(--gradient-radial-gold)" }} />

      <div ref={trackRef} className="flex gap-4 pl-2 will-change-transform sm:gap-6 md:gap-10 md:pl-0">
        {items.map((item, i) => {
          const sizes = [
            "h-[13.5rem] w-[13.5rem] sm:h-64 sm:w-64 md:h-96 md:w-96",
            "h-52 w-52 sm:h-56 sm:w-56 md:h-72 md:w-72 mt-6 sm:mt-10 md:mt-12",
            "h-56 w-56 sm:h-60 sm:w-60 md:h-80 md:w-80 -mt-3 sm:-mt-4 md:-mt-6",
          ];
          const sizeClass = sizes[i % 3];
          return (
            <div
              key={i}
              className={`group relative shrink-0 ${sizeClass}`}
            >
              <div className="absolute inset-0 rounded-full ring-gold transition-all duration-700 group-hover:scale-105">
                <div className="absolute -inset-2 rounded-full opacity-60 blur-2xl"
                     style={{ background: "radial-gradient(circle, oklch(0.82 0.13 85 / 0.4), transparent 70%)" }} />
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  width={400}
                  height={400}
                  className="relative h-full w-full rounded-full object-cover"
                />
                <div className="absolute inset-0 rounded-full ring-1 ring-inset"
                     style={{ boxShadow: "inset 0 0 0 1px oklch(0.82 0.13 85 / 0.4)" }} />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[var(--gold)]/30 bg-background/80 px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-gold backdrop-blur">
                  {item.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
