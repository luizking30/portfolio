"use client";

import { useEffect, useRef, useState } from "react";

interface TerminalPromptProps {
  text: string;
  className?: string;
  speed?: number;
  showCursor?: boolean;
  prefix?: string;
}

export default function TerminalPrompt({
  text,
  className = "",
  speed = 40,
  showCursor = true,
  prefix = "❯",
}: TerminalPromptProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <div ref={ref} className={`font-mono text-sm ${className}`}>
      <span className="text-green-400">{prefix} </span>
      <span className="text-slate-600 dark:text-slate-300">
        {displayed}
        {showCursor && !done && <span className="typewriter-cursor" />}
      </span>
    </div>
  );
}
