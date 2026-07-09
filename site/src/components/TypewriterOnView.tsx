"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

interface TypewriterOnViewProps {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
}

export default function TypewriterOnView({ text, className = "", speed = 25, startDelay = 200 }: TypewriterOnViewProps) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.3 });
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (inView && !started) {
      setStarted(true);
    }
  }, [inView, started]);

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
