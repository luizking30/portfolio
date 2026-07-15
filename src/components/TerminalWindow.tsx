"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

interface TerminalWindowProps {
  lines: { type: "command" | "output" | "comment"; text: string }[];
  speed?: number;
  startDelay?: number;
  className?: string;
}

export default function TerminalWindow({ lines, speed = 25, startDelay = 1500, className = "" }: TerminalWindowProps) {
  const [visibleLines, setVisibleLines] = useState<{ type: string; text: string }[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [done, setDone] = useState(false);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const { ref: containerRef, inView } = useInView<HTMLDivElement>({ threshold: 0.2, once: true });

  useEffect(() => {
    if (!inView) return;
    let lineIdx = 0;
    let charIdx = 0;
    let allLines: { type: string; text: string }[] = [];
    let cancelled = false;

    const timeout = setTimeout(() => {
      const tick = () => {
        if (cancelled) return;
        if (lineIdx >= lines.length) {
          setDone(true);
          setCurrentLineIdx(lineIdx);
          return;
        }

        const line = lines[lineIdx];
        setCurrentLineIdx(lineIdx);

        if (charIdx === 0 && line.type === "comment") {
          allLines = [...allLines, line];
          setVisibleLines([...allLines]);
          lineIdx++;
          setTimeout(tick, 200);
          return;
        }

        if (charIdx < line.text.length) {
          charIdx++;
          setCurrentText(line.text.slice(0, charIdx));
          setTimeout(tick, line.type === "command" ? 60 : speed);
        } else {
          allLines = [...allLines, { type: line.type, text: line.text }];
          setVisibleLines([...allLines]);
          setCurrentText("");
          charIdx = 0;
          lineIdx++;
          setTimeout(tick, line.type === "command" ? 300 : 150);
        }
      };
      tick();
    }, startDelay);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [inView, lines, speed, startDelay]);

  const currentLine = !done && currentLineIdx < lines.length ? lines[currentLineIdx] : null;

  return (
    <div ref={containerRef} className={`min-w-0 overflow-hidden rounded-xl border border-slate-300/50 bg-slate-950 shadow-lg dark:border-slate-700 ${className}`}>
      <div className="flex items-center gap-2 border-b border-slate-700/50 bg-slate-900 px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <span className="ml-2 text-xs font-medium text-slate-400">luiz@portfolio: ~/ai-engineer</span>
      </div>
      <div className="overflow-x-auto p-4 font-mono text-sm leading-relaxed">
        {visibleLines.map((line, idx) => (
          <div key={idx} className="mb-1">
            {line.type === "command" && (
              <span>
                <span className="text-green-400">❯ </span>
                <span className="text-slate-200">{line.text}</span>
              </span>
            )}
            {line.type === "output" && (
              <span className="text-cyan-300">{line.text}</span>
            )}
            {line.type === "comment" && (
              <span className="text-slate-500">{line.text}</span>
            )}
          </div>
        ))}
        {currentLine && !done && (
          <div className="mb-1">
            {currentLine.type === "command" && (
              <span>
                <span className="text-green-400">❯ </span>
                <span className="text-slate-200">
                  {currentText}
                  <span className="typewriter-cursor" />
                </span>
              </span>
            )}
            {currentLine.type === "output" && (
              <span className="text-cyan-300">
                {currentText}
                <span className="typewriter-cursor" />
              </span>
            )}
          </div>
        )}
        {done && (
          <div>
            <span className="text-green-400">❯ </span>
            <span className="typewriter-cursor text-slate-200" />
          </div>
        )}
      </div>
    </div>
  );
}
