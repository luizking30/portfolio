"use client";

import { useEffect, useRef, useState } from "react";

interface ScrambleTextProps {
  text: string;
  className?: string;
  speed?: number;
  scrambleChars?: string;
}

export default function ScrambleText({
  text,
  className = "",
  speed = 40,
  scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!<>-_\\/[]{}=+*^?#",
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const [started, setStarted] = useState(false);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);
  const reduced = useRef(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    reduced.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced.current) {
      setDisplay(text);
      setStarted(true);
      return;
    }

    const el = containerRef.current;
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
  }, [text]);

  useEffect(() => {
    if (!started || reduced.current) return;

    let frame: number;
    const duration = text.length * speed;
    const chars = scrambleChars.split("");

    function animate(ts: number) {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(elapsed / duration, 1);

      let out = "";
      for (let i = 0; i < text.length; i++) {
        const charProgress = progress * text.length - i;
        if (charProgress > 0) {
          out += text[i];
        } else if (text[i] === " ") {
          out += " ";
        } else {
          out += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      setDisplay(out);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setDisplay(text);
      }
    }

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, text, speed, scrambleChars]);

  return (
    <span ref={containerRef} className={className} aria-label={text}>
      {display}
    </span>
  );
}
