import Link from "next/link";
import { Folder, Star, GitFork, ExternalLink, Clock, Code2, ArrowUpRight } from "lucide-react";
import TechIcon from "@/components/TechIcons";
import AnimatedSection from "@/components/AnimatedSection";
import type { GitHubRepo } from "@/lib/github";
import { getTimeAgo } from "@/lib/github";

interface ProjectsProps {
  repos: GitHubRepo[];
  githubUrl: string;
}

const languageGradients: Record<string, string> = {
  JavaScript: "from-yellow-400 to-amber-500",
  TypeScript: "from-blue-400 to-blue-600",
  Python: "from-green-400 to-emerald-600",
  Java: "from-orange-400 to-red-500",
  HTML: "from-red-400 to-orange-500",
  CSS: "from-sky-400 to-blue-500",
  default: "from-slate-400 to-slate-600",
};

export default function Projects({ repos, githubUrl }: ProjectsProps) {
  return (
    <section
      id="projetos"
      className="w-full bg-white px-4 py-20 dark:bg-slate-950 sm:px-6 lg:px-8 xl:px-12"
    >
      <AnimatedSection className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <Folder className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              Projetos públicos no GitHub
            </h2>
          </div>
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 sm:inline-flex"
          >
            Ver todos no GitHub
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {repos.map((repo) => {
            const gradient = languageGradients[repo.language || "default"] || languageGradients.default;
            return (
              <div
                key={repo.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div className={`relative h-40 bg-gradient-to-br ${gradient} p-6`}>
                  <div className="absolute right-4 top-4 rounded-lg bg-white/20 p-2 backdrop-blur-sm dark:bg-black/20">
                    {repo.language ? (
                      <TechIcon name={repo.language} className="h-8 w-8 text-white" />
                    ) : (
                      <Code2 className="h-8 w-8 text-white" />
                    )}
                  </div>
                  <h3 className="mt-auto text-xl font-bold text-white drop-shadow-sm">{repo.name}</h3>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-lg bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900">
                      <ArrowUpRight className="h-4 w-4" />
                      Ver projeto
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <p className="mb-4 line-clamp-3 text-sm text-slate-600 dark:text-slate-300">
                    {repo.description || "Sem descrição disponível."}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {repo.language && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                        <TechIcon name={repo.language} className="h-3.5 w-3.5" />
                        {repo.language}
                      </span>
                    )}
                  </div>

                  <div className="mb-4 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="h-3.5 w-3.5" />
                      {repo.forks_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {getTimeAgo(repo.pushed_at)}
                    </span>
                  </div>

                  <Link
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition group-hover:border-blue-300 group-hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:group-hover:border-blue-500 dark:group-hover:text-blue-400"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Ver repositório
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Ver todos no GitHub
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
}
