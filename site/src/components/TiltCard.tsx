"use client";

import { useRef, useState, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 8,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const isTouchDevice = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

  function handleMouseMove(e: React.MouseEvent) {
    if (isTouchDevice) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
    );
  }

  function handleMouseLeave() {
    if (isTouchDevice) return;
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: transform === "" ? "none" : "transform 0.15s ease-out",
      }}
      className={className}
    >
      {children}
    </div>
  );
}
