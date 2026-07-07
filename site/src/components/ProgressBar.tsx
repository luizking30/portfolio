"use client";

import { useEffect, useRef, useState } from "react";

export default function ProgressBar({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  const [progress, setProgress] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const timeout = setTimeout(() => {
      let current = 0;
      const interval = setInterval(() => {
        if (current >= 100) {
          clearInterval(interval);
          return;
        }
        current += Math.random() * 15 + 5;
        if (current > 100) current = 100;
        setProgress(current);
      }, 80);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [started, delay]);

  const filled = Math.round(progress / 10);
  const empty = 10 - filled;

  return (
    <div ref={ref} className={`font-mono text-xs text-blue-500/60 dark:text-blue-400/60 ${className}`}>
      <span className="text-green-400">[</span>
      {"█".repeat(filled)}
      {"░".repeat(empty)}
      <span className="text-green-400">]</span>
      <span className="ml-1">{Math.round(progress)}%</span>
    </div>
  );
}
