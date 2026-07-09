"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface BinaryDecodeTextProps {
  text: string;
  className?: string;
  speed?: number;
  stagger?: number;
  startDelay?: number;
}

type Phase = "binary" | "hex" | "text";

function charToBinary(char: string): string {
  return char.charCodeAt(0).toString(2).padStart(8, "0");
}

function charToHex(char: string): string {
  return char.charCodeAt(0).toString(16).padStart(2, "0").toUpperCase();
}

interface CharState {
  phase: Phase;
  display: string;
}

export default function BinaryDecodeText({
  text,
  className = "",
  speed = 300,
  stagger = 60,
  startDelay = 0,
}: BinaryDecodeTextProps) {
  const [chars, setChars] = useState<CharState[]>(() =>
    text.split("").map((c) => ({
      phase: "binary" as Phase,
      display: "",
    }))
  );
  const [started, setStarted] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) {
      setChars(text.split("").map((c) => ({ phase: "text" as Phase, display: c })));
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setChars(text.split("").map((c) => ({
            phase: "binary" as Phase,
            display: c === " " ? " " : charToBinary(c),
          })));
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [text, reduced]);

  useEffect(() => {
    if (!started) return;

    if (reduced) return;

    const phases: Phase[] = ["binary", "hex", "text"];
    const timers: ReturnType<typeof setTimeout>[] = [];

    text.split("").forEach((char, i) => {
      if (char === " ") return;

      const baseDelay = startDelay + i * stagger;

      phases.forEach((phase, phaseIdx) => {
        if (phaseIdx === 0) return;

        const t = setTimeout(() => {
          setChars((prev) => {
            const next = [...prev];
            next[i] = {
              phase,
              display:
                phase === "hex"
                  ? charToHex(char)
                  : char,
            };
            return next;
          });
        }, baseDelay + phaseIdx * speed);

        timers.push(t);
      });
    });

    return () => timers.forEach(clearTimeout);
  }, [started, text, speed, stagger, startDelay, reduced]);

  return (
    <span
      ref={containerRef}
      className={`font-mono ${className}`}
      aria-label={text}
    >
      {chars.map((c, i) => {
        const isSpace = text[i] === " ";
        const isDecoded = c.phase === "text";

        if (isSpace) return <span key={i}>&nbsp;</span>;

        return (
          <span
            key={i}
            className="inline-block transition-all duration-200 ease-out"
            style={{
              opacity: isDecoded ? 1 : 0.7,
              color: isDecoded ? undefined : "var(--decode-color, rgb(59 130 246))",
              fontSize: isDecoded ? "1em" : "0.7em",
              letterSpacing: isDecoded ? "normal" : "0.05em",
            }}
          >
            {c.display}
          </span>
        );
      })}
    </span>
  );
}
