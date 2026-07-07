import Link from "next/link";
import { Heart, Mail, Globe } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-100 bg-white px-4 py-8 dark:border-slate-800 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {year} Luiz Amorim. Todos os direitos reservados.
        </p>
        <p className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
          Feito com <Heart className="h-4 w-4 text-red-500" /> usando Next.js, Tailwind CSS e Vercel
        </p>
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/luizking30"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-white"
          >
            <GitHubIcon className="h-4 w-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/luiz-amorim-5a0847400/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:text-blue-400"
          >
            <LinkedInIcon className="h-4 w-4" />
          </Link>
          <Link
            href="mailto:luiz.eduardo.amorim@hotmail.com"
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:text-blue-400"
          >
            <Mail className="h-4 w-4" />
          </Link>
          <Link
            href="https://luizamorim.dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Website"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:text-blue-400"
          >
            <Globe className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
