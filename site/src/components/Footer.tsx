import { Heart } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-blue-200/50 bg-blue-100/30 px-4 py-8 dark:border-blue-800/50 dark:bg-blue-900/20 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {year} Luiz Amorim. Todos os direitos reservados.
        </p>
        <p className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
          Feito com <Heart className="h-4 w-4 text-red-500" /> usando Next.js, Tailwind CSS e Vercel
        </p>
        <SocialLinks
          githubUrl="https://github.com/luizking30"
          linkedinUrl="https://www.linkedin.com/in/luiz-amorim-5a0847400/"
          email="luiz.eduardo.amorim@hotmail.com"
          website="https://luizamorimdev.vercel.app/"
          size="md"
        />
      </div>
    </footer>
  );
}
