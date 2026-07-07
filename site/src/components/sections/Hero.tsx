import Image from "next/image";
import Link from "next/link";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  CheckCircle2,
  GitCommit,
  GitFork,
  Users,
  Folder,
  Code2,
} from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons";

interface HeroProps {
  name: string;
  title: string;
  description: string;
  location: string;
  experience: string;
  focus: string;
  available: boolean;
  publicRepos: number;
  totalCommits: number;
  followers: number;
  languages: string[];
  avatarUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
  whatsapp: string;
  lastCommitRepo?: string;
  lastCommitTime?: string;
}

export default function Hero({
  name,
  title,
  description,
  location,
  experience,
  focus,
  available,
  publicRepos,
  totalCommits,
  followers,
  languages,
  avatarUrl,
  githubUrl,
  linkedinUrl,
  email,
  whatsapp,
  lastCommitRepo,
  lastCommitTime,
}: HeroProps) {
  const githubStats = [
    { label: "Repositórios", value: publicRepos, icon: Folder },
    { label: "Commits", value: `${totalCommits}+`, icon: GitCommit },
    { label: "Seguidores", value: followers, icon: Users },
    { label: "Linguagens", value: languages.length, icon: Code2 },
  ];

  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 sm:px-6 lg:px-8 xl:px-12"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="order-2 flex flex-col gap-6 lg:order-1">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-900/20 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            DISPONÍVEL PARA CONTRATAÇÃO
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            {name}
          </h1>
          <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 sm:text-2xl">
            {title}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            {description}
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-500" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-blue-500" />
              <span>{experience}</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-blue-500" />
              <span>{focus}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>{available ? "Disponibilidade Imediata" : "Disponibilidade a combinar"}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/curriculo-luiz-amorim.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              <Download className="h-4 w-4" />
              Baixar Currículo
            </a>
            <Link
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-400"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </Link>
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-400"
            >
              <Mail className="h-4 w-4" />
              Email
            </Link>
            <Link
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
            >
              <Phone className="h-4 w-4" />
              WhatsApp
            </Link>
          </div>
        </div>

        <div className="order-1 flex flex-col items-center justify-center gap-6 lg:order-2">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-500/20"></div>
            <Image
              src={avatarUrl}
              alt={name}
              width={420}
              height={420}
              priority
              className="rounded-2xl object-cover shadow-2xl ring-4 ring-white/80 dark:ring-slate-700/80"
            />
          </div>

          <div className="w-full max-w-md rounded-2xl border border-slate-100 bg-white p-5 shadow-lg dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                <GitHubIcon className="h-4 w-4" />
                GitHub em tempo real
              </div>
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Ver perfil
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {githubStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-700/50"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <stat.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">{stat.value}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {lastCommitRepo && lastCommitTime && (
              <div className="mt-4 rounded-lg bg-slate-50 p-3 text-xs dark:bg-slate-700/50">
                <span className="text-slate-500 dark:text-slate-400">Último commit:</span>{" "}
                <span className="font-medium text-slate-900 dark:text-white">{lastCommitTime}</span>
                {" "}em{" "}
                <span className="font-medium text-blue-600 dark:text-blue-400">{lastCommitRepo}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
