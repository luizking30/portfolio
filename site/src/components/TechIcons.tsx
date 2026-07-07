import type { ReactNode } from "react";

interface TechIconProps {
  name: string;
  className?: string;
}

const icons: Record<string, (props: { className?: string }) => ReactNode> = {
  JavaScript: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path d="M12.39 18.18V13.5h1.42v4.68c0 2.16 1.09 2.88 2.52 2.88 1.46 0 2.34-.78 2.34-2.88V13.5h1.42v4.68c0 2.97-1.69 4.14-3.78 4.14-2.06 0-3.92-1.14-3.92-4.14z" fill="#323330" />
      <path d="M5.5 22.5l4.08-13.5h1.64l-4.08 13.5H5.5z" fill="#323330" />
    </svg>
  ),
  TypeScript: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path d="M12.39 18.18V13.5h1.42v4.68c0 2.16 1.09 2.88 2.52 2.88 1.46 0 2.34-.78 2.34-2.88V13.5h1.42v4.68c0 2.97-1.69 4.14-3.78 4.14-2.06 0-3.92-1.14-3.92-4.14z" fill="#fff" />
      <path d="M5.5 22.5l4.08-13.5h1.64l-4.08 13.5H5.5z" fill="#fff" />
    </svg>
  ),
  Python: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M11.9 1.5c-4.5 0-4.2 1.95-4.2 1.95l.01 2.03h4.28v.61H6.15s-2.83-.32-2.83 4.15c0 4.47 2.46 4.31 2.46 4.31h1.47V12.4s-.08-2.46 2.42-2.46h4.16s2.34.04 2.34-2.26V3.74s.36-2.24-3.97-2.24zM9.04 2.87c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75z" fill="#FFD845" />
      <path d="M12.1 22.5c4.5 0 4.2-1.95 4.2-1.95l-.01-2.03h-4.28v-.61h5.94s2.83.32 2.83-4.15c0-4.47-2.46-4.31-2.46-4.31h-1.47v2.25s.08 2.46-2.42 2.46H9.87s-2.34-.04-2.34 2.26v2.98s-.36 2.24 3.97 2.24zm2.86-1.37c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75z" fill="#3776AB" />
    </svg>
  ),
  Java: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M8.85 18.9s-.94.55.66.74c1.95.22 2.95.19 5.1-.21 0 0 .57.35 1.36.66-4.84 2.08-10.97-.12-7.12-1.19z" fill="#E76F00" />
      <path d="M8.5 16.5s-1.05.78.55.94c2.07.21 3.7.23 6.52-.31 0 0 .4.4 1.02.62-5.79 1.69-12.24.13-8.09-1.25z" fill="#E76F00" />
      <path d="M13.64 11.55c1.17 1.35-.31 2.56-.31 2.56s2.97-1.53 1.61-3.44c-1.26-1.78-2.23-2.66 3.01-5.71 0 0-8.22 2.05-4.31 6.59z" fill="#5382A1" />
      <path d="M18.35 20.75s.69.56-.76.75c-2.76.42-11.45.54-13.86.02-.87-.19.76-.89 1.28-.99.52-.11.82-.09.82-.09-.94-.66-6.07 1.3-2.61 1.86 9.45 1.53 17.22-.7 14.13-1.55z" fill="#5382A1" />
    </svg>
  ),
  HTML: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3.5 2.5l1.5 17.5L12 22.5l6.5-2.5 1.5-17.5H3.5z" fill="#E34F26" />
      <path d="M12 20.5l5-1.9L18 4.5H6l.1 1.5h11l-.3 3.5H7.8l.1 1.5h10.6l-.4 4.5-3.1 1.1-3.1-1.1-.2-2.5H6.6l.3 3.9L12 20.5z" fill="#EF652A" />
      <path d="M12 14.5v-1.5h4.7l-.2 2.5-3.1 1.1-3.1-1.1-.2-2.5H9.5l.1 1.5 2.4.8 2.4-.8V14.5h-2.4z" fill="#fff" />
    </svg>
  ),
  CSS: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3.5 2.5l1.5 17.5L12 22.5l6.5-2.5 1.5-17.5H3.5z" fill="#1572B6" />
      <path d="M12 20.5l5-1.9L18 4.5H6l.1 1.5h11l-.3 3.5H7.8l.1 1.5h10.6l-.4 4.5-3.1 1.1-3.1-1.1-.2-2.5H6.6l.3 3.9L12 20.5z" fill="#33A9DC" />
      <path d="M12 14.5v-1.5h4.7l-.2 2.5-3.1 1.1-3.1-1.1-.2-2.5H9.5l.1 1.5 2.4.8 2.4-.8V14.5h-2.4z" fill="#fff" />
    </svg>
  ),
  React: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
    </svg>
  ),
  "Next.js": ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="4" fill="#000" className="dark:fill-white" />
      <path d="M17.3 17.3L9.6 7H7.5v10h2.1v-7.2l6.6 8.5h1.6V7h-2.1v10.3z" fill="#fff" className="dark:fill-black" />
      <path d="M15.8 17.5h1.8V7h-1.8v10.5z" fill="#fff" className="dark:fill-black" />
    </svg>
  ),
  "Node.js": ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 1.5l9.5 5.5v10L12 22.5 2.5 17V7L12 1.5z" fill="#339933" />
      <path d="M12 4.5l6.5 3.75v6.5L12 18.5 5.5 14.75V8.25L12 4.5z" fill="#fff" />
      <path d="M12 7.5v-3L6.5 8.25v6.5l2.5 1.45V11.4L12 9.5v-2z" fill="#339933" />
    </svg>
  ),
  Spring: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" fill="#6DB33F" />
      <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm3.5 5.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S14 10.83 14 10s.67-1.5 1.5-1.5zM12 18c-3.31 0-6-2.69-6-6 0-1.66.67-3.16 1.76-4.24l1.06 1.06C8.12 9.52 7.5 10.7 7.5 12c0 2.48 2.02 4.5 4.5 4.5 1.3 0 2.48-.62 3.18-1.62l1.06 1.06C15.16 17.33 13.66 18 12 18z" fill="#fff" />
    </svg>
  ),
  Bootstrap: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="4" fill="#7952B3" />
      <path d="M6.5 5.5h8c2.5 0 4.5 1.5 4.5 4s-1.5 3.5-3 3.5c2 0 3.5 1.5 3.5 3.5 0 2.8-2.2 4-5 4h-8v-15zm1.5 1.5v4.5h6c1.5 0 2.5-.8 2.5-2.2 0-1.5-1-2.3-2.5-2.3H8zm0 6v5.5h6.5c1.7 0 2.8-1 2.8-2.8 0-1.7-1.1-2.7-2.8-2.7H8z" fill="#fff" />
    </svg>
  ),
  Thymeleaf: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" fill="#005F0F" />
      <path d="M12 5l1.5 4.5H18l-3.5 2.5 1.5 4.5L12 14l-3.5 2.5 1.5-4.5L6 9.5h4.5L12 5z" fill="#fff" />
    </svg>
  ),
  MySQL: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3.5 18.5c0-2.5 2-4.5 4.5-4.5h.5c.5-2 2-3.5 4-3.5 1.5 0 2.8.8 3.5 2 .5-.3 1-.5 1.5-.5 2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5H8c-2.5 0-4.5-2-4.5-4.5z" fill="#4479A1" />
      <path d="M9 8c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3z" fill="#4479A1" />
    </svg>
  ),
  Git: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" fill="#F05032" />
      <path d="M12 7a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM8.5 12.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM15.5 12.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill="#fff" />
      <path d="M12 9.5v3M10.2 14.5l-1.7 1.7M13.8 14.5l1.7 1.7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Docker: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="10" width="4" height="4" rx=".5" fill="#2496ED" />
      <rect x="7" y="10" width="4" height="4" rx=".5" fill="#2496ED" />
      <rect x="12" y="10" width="4" height="4" rx=".5" fill="#2496ED" />
      <rect x="17" y="10" width="4" height="4" rx=".5" fill="#2496ED" />
      <rect x="7" y="5" width="4" height="4" rx=".5" fill="#2496ED" />
      <rect x="12" y="5" width="4" height="4" rx=".5" fill="#2496ED" />
      <path d="M22 14.5c0 2.5-2 4.5-4.5 4.5H4c-2.5 0-4.5-2-4.5-4.5" stroke="#2496ED" strokeWidth="2" fill="none" />
      <path d="M21 9.5c1.5 0 2.5 1.2 2 2.7-.3 1-1.2 1.6-2.2 1.6H19v-4.3h2z" fill="#2496ED" />
    </svg>
  ),
  default: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" fill="#64748b" />
      <path d="M12 7v5l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

export default function TechIcon({ name, className = "h-6 w-6" }: TechIconProps) {
  const Icon = icons[name] || icons.default;
  return <Icon className={className} />;
}

export function getKnownTechNames(): string[] {
  return Object.keys(icons).filter((name) => name !== "default");
}
