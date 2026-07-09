"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

export default function ProgressBar({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  const [progress, setProgress] = useState(0);
  const [started, setStarted] = useState(false);
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3, once: true });

  useEffect(() => {
    if (inView) setStarted(true);
  }, [inView]);

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
    <div ref={ref} className={`font-mono text-xs text-blue-500/80 dark:text-blue-400/80 ${className}`}>
      <span className="text-green-400">[</span>
      {"█".repeat(filled)}
      {"░".repeat(empty)}
      <span className="text-green-400">]</span>
      <span className="ml-1">{Math.round(progress)}%</span>
    </div>
  );
}
