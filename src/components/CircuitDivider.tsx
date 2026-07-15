"use client";

import { useEffect, useRef } from "react";
import { useInView } from "@/hooks/useInView";

export default function CircuitDivider() {
  const svgRef = useRef<SVGSVGElement>(null);
  const { ref: containerRef, inView } = useInView<HTMLDivElement>({ threshold: 0.1, once: true });

  useEffect(() => {
    if (!inView) return;
    const svg = svgRef.current;
    if (!svg) return;
    const paths = svg.querySelectorAll<SVGPathElement>(".circuit-path");
    paths.forEach((path, idx) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      path.style.animation = `circuit-draw 1.5s ease-out ${idx * 0.15}s forwards`;
    });
  }, [inView]);

  return (
    <div ref={containerRef} className="relative h-12 w-full overflow-hidden" aria-hidden="true">
      <svg
        ref={svgRef}
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 48"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          className="circuit-path text-blue-300 dark:text-blue-700"
          d="M0,24 H200 L220,8 H400 L420,40 H600 L620,16 H800 L820,32 H1000 L1020,12 H1200"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          className="circuit-path text-cyan-300 dark:text-cyan-700"
          d="M0,32 H150 L170,16 H350 L370,40 H550 L570,8 H750 L770,24 H950 L970,40 H1200"
          stroke="currentColor"
          strokeWidth="1"
          style={{ opacity: 0.5 }}
        />
        <circle cx="220" cy="8" r="2" className="fill-blue-400 dark:fill-blue-500" />
        <circle cx="620" cy="16" r="2" className="fill-blue-400 dark:fill-blue-500" />
        <circle cx="1020" cy="12" r="2" className="fill-blue-400 dark:fill-blue-500" />
        <circle cx="420" cy="40" r="2" className="fill-cyan-400 dark:fill-cyan-500" />
        <circle cx="820" cy="32" r="2" className="fill-cyan-400 dark:fill-cyan-500" />
      </svg>
    </div>
  );
}
