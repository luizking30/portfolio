"use client";

import { useRef, ReactNode, MouseEvent } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = "",
  href,
  target,
  rel,
  download,
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  };

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      download={download}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-flex transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </a>
  );
}
