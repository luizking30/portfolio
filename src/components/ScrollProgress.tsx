"use client";

import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [percent, setPercent] = useState(0);
  const [color, setColor] = useState("rgb(239 68 68)");

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const pct = Math.round(v * 100);
    setPercent(pct);

    const r = Math.round(239 + (34 - 239) * v);
    const g = Math.round(68 + (197 - 68) * v);
    const b = Math.round(68 + (94 - 68) * v);
    setColor(`rgb(${r} ${g} ${b})`);
  });

  return (
    <>
      <motion.div
        style={{ scaleX, backgroundColor: color }}
        className="fixed left-0 top-0 z-[60] h-1 w-full origin-left"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed right-4 top-3 z-[60] font-mono text-xs font-bold tabular-nums"
        style={{ color }}
        aria-hidden="true"
      >
        {percent}%
      </div>
    </>
  );
}
