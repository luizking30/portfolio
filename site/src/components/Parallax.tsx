"use client";

import { useRef, useEffect, ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export default function Parallax({ children, className = "", speed = 0.3 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const isTouch = useIsTouchDevice();

  useEffect(() => {
    if (reduced || isTouch) return;

    const handleScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const center = rect.top + rect.height / 2 - windowHeight / 2;
      el.style.transform = `translateY(${center * speed * -0.1}px)`;
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, reduced, isTouch]);

  return (
    <div ref={ref} className={`transition-transform duration-100 ease-out ${className}`}>
      {children}
    </div>
  );
}
