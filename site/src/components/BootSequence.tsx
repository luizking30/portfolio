"use client";

import { useEffect, useState } from "react";

const bootLines = [
  { text: "> initializing portfolio system...", delay: 0 },
  { text: "> loading AI modules............ ✓", delay: 150 },
  { text: "> mounting /components........... ✓", delay: 300 },
  { text: "> connecting to GitHub API....... ✓", delay: 450 },
  { text: "> compiling neural pathways...... ✓", delay: 600 },
  { text: "> system ready ▸", delay: 800 },
];

export default function BootSequence({ onDone, className = "" }: { onDone: () => void; className?: string }) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [fadeout, setFadeout] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    bootLines.forEach((_, idx) => {
      timers.push(setTimeout(() => setVisibleLines(idx + 1), bootLines[idx].delay));
    });
    timers.push(setTimeout(() => setFadeout(true), 1000));
    timers.push(setTimeout(() => onDone(), 1200));
    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-950 transition-opacity duration-500 ${
        fadeout ? "opacity-0 pointer-events-none" : "opacity-100"
      } ${className}`}
    >
      <div className="w-full max-w-md px-8 font-mono text-sm">
        {bootLines.slice(0, visibleLines).map((line, idx) => (
          <div key={idx} className="mb-1">
            <span className={line.text.includes("✓") ? "text-green-400" : line.text.includes("ready") ? "text-cyan-300" : "text-slate-300"}>
              {line.text}
            </span>
          </div>
        ))}
        {visibleLines < bootLines.length && (
          <span className="typewriter-cursor text-slate-300" />
        )}
      </div>
      <button
        onClick={() => onDone()}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-lg border border-slate-700 px-4 py-2.5 font-mono text-xs text-slate-400 transition hover:border-slate-500 hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:left-auto sm:right-8 sm:translate-x-0"
      >
        Pular ▸
      </button>
    </div>
  );
}
