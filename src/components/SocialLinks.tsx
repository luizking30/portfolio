import Link from "next/link";
import { Mail, Globe, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/icons";

interface SocialLinksProps {
  githubUrl: string;
  linkedinUrl: string;
  instagramUrl?: string;
  email: string;
  whatsapp?: string;
  website?: string;
  size?: "sm" | "md";
}

const baseClasses =
  "flex items-center justify-center rounded-lg border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2";

const sizeClasses = {
  sm: "h-11 w-11",
  md: "h-11 w-11",
};

export default function SocialLinks({
  githubUrl,
  linkedinUrl,
  instagramUrl = "https://instagram.com/luizamorim1",
  email,
  whatsapp,
  website,
  size = "md",
}: SocialLinksProps) {
  const sz = sizeClasses[size];

  return (
    <div className="flex items-center gap-3">
      <Link
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className={`${baseClasses} ${sz} border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-white`}
      >
        <GitHubIcon className="h-4 w-4" />
      </Link>
      <Link
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={`${baseClasses} ${sz} border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:text-blue-400`}
      >
        <LinkedInIcon className="h-4 w-4" />
      </Link>
      <Link
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={`${baseClasses} ${sz} border-slate-200 text-slate-600 hover:border-pink-300 hover:text-pink-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-pink-500 dark:hover:text-pink-400`}
      >
        <InstagramIcon className="h-4 w-4" />
      </Link>
      <Link
        href={`mailto:${email}`}
        aria-label="Email"
        className={`${baseClasses} ${sz} border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:text-blue-400`}
      >
        <Mail className="h-4 w-4" />
      </Link>
      {whatsapp && (
        <Link
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className={`${baseClasses} ${sz} border-slate-200 text-slate-600 hover:border-emerald-300 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-emerald-500 dark:hover:text-emerald-400`}
        >
          <Phone className="h-4 w-4" />
        </Link>
      )}
      {website && (
        <Link
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Website"
          className={`${baseClasses} ${sz} border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:text-blue-400`}
        >
          <Globe className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
