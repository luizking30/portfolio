"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain({ className = "", opacity = 0.06 }: { className?: string; opacity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const visibleRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) return;

    let animationId: number;
    let columns: number;
    let drops: number[];
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ<>{}[]()=+-*/AI01";

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      columns = Math.floor(canvas.width / 14);
      drops = Array(columns).fill(0).map(() => Math.random() * canvas.height);
    };
    resize();

    const observer = new IntersectionObserver(
      (entries) => {
        visibleRef.current = entries[0].isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const draw = () => {
      if (visibleRef.current) {
        ctx.fillStyle = "rgba(10, 20, 36, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#3b82f6";
        ctx.font = "12px monospace";
        for (let i = 0; i < drops.length; i++) {
          const char = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(char, i * 14, drops[i]);
          drops[i] += 14;
          if (drops[i] > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
        }
      }
      animationId = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ opacity }}
    />
  );
}
