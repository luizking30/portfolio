"use client";

import { useEffect, useState } from "react";

export default function ProgressBar({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
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
  }, [delay]);

  const filled = Math.round(progress / 10);
  const empty = 10 - filled;

  return (
    <div className={`font-mono text-xs text-blue-500/60 dark:text-blue-400/60 ${className}`}>
      <span className="text-green-400">[</span>
      {"█".repeat(filled)}
      {"░".repeat(empty)}
      <span className="text-green-400">]</span>
      <span className="ml-1">{Math.round(progress)}%</span>
    </div>
  );
}
