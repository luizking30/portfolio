import Link from "next/link";
import { Heart } from "lucide-react";
import { GitHubIcon } from "@/components/icons";

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
        <Link
          href="https://github.com/luizking30"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
        >
          <GitHubIcon className="h-4 w-4" />
          github.com/luizking30
        </Link>
      </div>
    </footer>
  );
}
