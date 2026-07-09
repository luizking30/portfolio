"use client";

import { useInView } from "@/hooks/useInView";

const commits = [
  "a3f2c1 feat: add autonomous agent pipeline",
  "b7e8d2 fix: optimize neural inference layer",
  "c1a9f3 refactor: migrate to microservices",
  "d4e5a6 feat: integrate OpenAI API",
  "e2b3c8 chore: update dependencies",
  "f8a1d4 feat: deploy SaaS multi-tenant",
  "a9c2e1 fix: patch security vulnerability",
  "b3d4f5 feat: add WhatsApp automation",
  "c7e8a9 docs: update API documentation",
  "d1f2b3 feat: implement agent orchestration",
  "e5a6c7 fix: resolve memory leak in workers",
  "f2b3d4 feat: add real-time monitoring",
  "a8c1e2 chore: cleanup unused imports",
  "b4d5f6 feat: add Spring Boot integration",
  "c9e1a2 fix: correct timezone handling",
  "d3f4b5 feat: add React 19 support",
];

export default function GitLog({ className = "" }: { className?: string }) {
  const { ref, inView: visible } = useInView<HTMLDivElement>({ threshold: 0 });

  return (
    <div ref={ref} className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className={visible ? "animate-git-log" : ""} style={visible ? undefined : { animationPlayState: "paused" }}>
        {[...commits, ...commits].map((commit, idx) => (
          <div key={idx} className="whitespace-nowrap py-0.5 font-mono text-[10px] text-blue-500/15 dark:text-blue-400/15">
            <span className="text-green-400/15">commit </span>
            {commit}
          </div>
        ))}
      </div>
    </div>
  );
}
