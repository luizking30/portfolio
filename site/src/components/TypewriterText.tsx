"use client";

import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
}

export default function TypewriterText({ text, className, speed = 80, startDelay = 0 }: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
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
  }, [text, speed, startDelay]);

  return (
    <span className={`${className} ${!done ? "typewriter-cursor" : ""}`}>
      {displayed}
    </span>
  );
}
