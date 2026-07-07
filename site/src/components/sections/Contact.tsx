import Link from "next/link";
import { Mail, MapPin, Globe, Phone, CheckCircle2 } from "lucide-react";
import { LinkedInIcon, GitHubIcon, InstagramIcon } from "@/components/icons";
import AnimatedSection from "@/components/AnimatedSection";

interface ContactProps {
  email: string;
  location: string;
  website: string;
  linkedinUrl: string;
  githubUrl: string;
  whatsapp: string;
  available: boolean;
}

export default function Contact({
  email,
  location,
  website,
  linkedinUrl,
  githubUrl,
  whatsapp,
  available,
}: ContactProps) {
  return (
    <section id="contato" className="w-full px-4 py-20 sm:px-6 lg:px-8 xl:px-12">
      <AnimatedSection className="mx-auto max-w-7xl">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Vamos conversar?</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Estou sempre aberto para novas oportunidades e projetos interessantes.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-wrap gap-2">
            <Link
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
            >
              <LinkedInIcon className="h-3.5 w-3.5" />
              LinkedIn
            </Link>
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700"
            >
              <GitHubIcon className="h-3.5 w-3.5" />
              GitHub
            </Link>
            <Link
              href="https://instagram.com/luizamorim1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 px-3 py-2 text-xs font-semibold text-white transition hover:from-pink-600 hover:to-purple-600"
            >
              <InstagramIcon className="h-3.5 w-3.5" />
              Instagram
            </Link>
            <Link
              href={`mailto:${email}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-400"
            >
              <Mail className="h-3.5 w-3.5" />
              Email
            </Link>
            <Link
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-emerald-600"
            >
              <Phone className="h-3.5 w-3.5" />
              WhatsApp
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400">Email</div>
                <div className="text-xs font-semibold text-slate-900 dark:text-white">{email}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400">Localização</div>
                <div className="text-xs font-semibold text-slate-900 dark:text-white">{location}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <Globe className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400">Website</div>
                <div className="text-xs font-semibold text-slate-900 dark:text-white">{website}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400">Disponibilidade</div>
                <div className="text-xs font-semibold text-slate-900 dark:text-white">
                  {available ? "Imediata" : "A combinar"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
