"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterOnViewProps {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
}

export default function TypewriterOnView({ text, className = "", speed = 25, startDelay = 200 }: TypewriterOnViewProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const timeout = setTimeout(() => {
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
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [started, text, speed, startDelay]);

  return (
    <span ref={ref} className={`${className} ${!done && started ? "typewriter-cursor" : ""}`}>
      {displayed}
    </span>
  );
}
