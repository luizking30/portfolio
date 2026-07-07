"use client";

import { useRef, ReactNode, MouseEvent } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
}

export default function SpotlightCard({ children, className = "", tilt = true }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isTouchDevice = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mouse-x", `${x}px`);
    el.style.setProperty("--mouse-y", `${y}px`);

    if (tilt && !isTouchDevice) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      el.style.setProperty("--rotate-x", `${rotateX}deg`);
      el.style.setProperty("--rotate-y", `${rotateY}deg`);
    }
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rotate-x", "0deg");
    el.style.setProperty("--rotate-y", "0deg");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-2xl transition-transform duration-200 ease-out glitch-hover ${tilt && !isTouchDevice ? "perspective-1000" : ""} ${className}`}
      style={{
        transform: tilt && !isTouchDevice ? "rotateX(var(--rotate-x, 0)) rotateY(var(--rotate-y, 0))" : undefined,
        transformStyle: tilt && !isTouchDevice ? "preserve-3d" : undefined,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.15), transparent 40%)",
        }}
      />
      <div className="pointer-events-none absolute left-0 right-0 z-20 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 group-hover:opacity-100 scan-line" />
      {children}
    </div>
  );
}
