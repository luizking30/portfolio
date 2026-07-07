import { Code2 } from "lucide-react";
import TechIcon from "@/components/TechIcons";
import AnimatedSection from "@/components/AnimatedSection";

interface TechnologiesProps {
  languages: string[];
}

const extraTechs = ["React", "Next.js", "Node.js", "Spring", "Bootstrap", "Thymeleaf", "MySQL", "Git"];

export default function Technologies({ languages }: TechnologiesProps) {
  const combined = Array.from(new Set([...languages, ...extraTechs]));

  return (
    <section
      id="tecnologias"
      className="w-full bg-slate-50 px-4 py-20 dark:bg-slate-900 sm:px-6 lg:px-8 xl:px-12"
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
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
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
