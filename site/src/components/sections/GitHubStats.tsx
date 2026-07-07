import { GitCommit, GitFork, Users, Folder } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";

interface GitHubStatsProps {
  publicRepos: number;
  followers: number;
  totalCommits: number;
  recentProjects: number;
  githubUrl: string;
  lastCommitRepo?: string;
  lastCommitTime?: string;
}

export default function GitHubStats({
  publicRepos,
  followers,
  totalCommits,
  recentProjects,
  githubUrl,
  lastCommitRepo,
  lastCommitTime,
}: GitHubStatsProps) {
  const stats = [
    { label: "Repositórios", value: publicRepos, icon: Folder },
    { label: "Commits", value: `${totalCommits}+`, icon: GitCommit },
    { label: "Seguidores", value: followers, icon: Users },
    { label: "Projetos Recentes", value: recentProjects, icon: GitFork },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-slate-900 px-4 py-20 text-white dark:bg-slate-900 sm:px-6 lg:px-8 xl:px-12">
      <AnimatedSection className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
            <GitHubIcon className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold sm:text-3xl">Estatísticas do GitHub</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition hover:border-white/20 hover:bg-white/10 dark:border-slate-700 dark:bg-slate-800/50"
            >
              <div className="mb-2 flex justify-center text-blue-400">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold">
                {typeof stat.value === "number" ? (
                  <CountUp value={stat.value} />
                ) : (
                  stat.value
                )}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {lastCommitRepo && lastCommitTime && (
          <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm text-slate-400">Último commit</div>
            <div className="text-base font-medium text-white">
              {lastCommitTime} em <span className="text-blue-400">{lastCommitRepo}</span>
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            <GitHubIcon className="h-4 w-4" />
            Ver perfil no GitHub
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}
