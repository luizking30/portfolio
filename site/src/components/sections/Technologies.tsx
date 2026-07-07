import { Code2 } from "lucide-react";
import TechIcon from "@/components/TechIcons";
import AnimatedSection from "@/components/AnimatedSection";

interface TechnologiesProps {
  languages: string[];
}

const extraTechs = ["React", "Next.js", "Node.js", "Spring", "Bootstrap", "Thymeleaf", "MySQL", "Git"];

const techColors: Record<string, string> = {
  JavaScript: "border-yellow-400/50 bg-yellow-50 text-yellow-700 dark:border-yellow-500/30 dark:bg-yellow-900/20 dark:text-yellow-400",
  TypeScript: "border-blue-400/50 bg-blue-50 text-blue-700 dark:border-blue-500/30 dark:bg-blue-900/20 dark:text-blue-400",
  Python: "border-green-400/50 bg-green-50 text-green-700 dark:border-green-500/30 dark:bg-green-900/20 dark:text-green-400",
  Java: "border-orange-400/50 bg-orange-50 text-orange-700 dark:border-orange-500/30 dark:bg-orange-900/20 dark:text-orange-400",
  HTML: "border-red-400/50 bg-red-50 text-red-700 dark:border-red-500/30 dark:bg-red-900/20 dark:text-red-400",
  CSS: "border-sky-400/50 bg-sky-50 text-sky-700 dark:border-sky-500/30 dark:bg-sky-900/20 dark:text-sky-400",
  React: "border-cyan-400/50 bg-cyan-50 text-cyan-700 dark:border-cyan-500/30 dark:bg-cyan-900/20 dark:text-cyan-400",
  "Next.js": "border-slate-400/50 bg-slate-50 text-slate-700 dark:border-slate-500/30 dark:bg-slate-900/20 dark:text-slate-300",
  "Node.js": "border-green-400/50 bg-green-50 text-green-700 dark:border-green-500/30 dark:bg-green-900/20 dark:text-green-400",
  Spring: "border-emerald-400/50 bg-emerald-50 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-900/20 dark:text-emerald-400",
  Bootstrap: "border-purple-400/50 bg-purple-50 text-purple-700 dark:border-purple-500/30 dark:bg-purple-900/20 dark:text-purple-400",
  Thymeleaf: "border-green-600/50 bg-green-50 text-green-700 dark:border-green-600/30 dark:bg-green-900/20 dark:text-green-500",
  MySQL: "border-blue-400/50 bg-blue-50 text-blue-700 dark:border-blue-500/30 dark:bg-blue-900/20 dark:text-blue-400",
  Git: "border-orange-400/50 bg-orange-50 text-orange-700 dark:border-orange-500/30 dark:bg-orange-900/20 dark:text-orange-400",
};

export default function Technologies({ languages }: TechnologiesProps) {
  const combined = Array.from(new Set([...languages, ...extraTechs]));

  return (
    <section
      id="tecnologias"
      className="w-full bg-blue-100/30 px-4 py-20 dark:bg-blue-900/20 sm:px-6 lg:px-8 xl:px-12"
    >
      <AnimatedSection className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            <Code2 className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Tecnologias</h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {combined.map((tech) => (
            <span
              key={tech}
              className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${techColors[tech] || "border-slate-200 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"}`}
            >
              <TechIcon name={tech} className="h-5 w-5" />
              {tech}
            </span>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
