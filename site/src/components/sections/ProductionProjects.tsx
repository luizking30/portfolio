import Link from "next/link";
import Image from "next/image";
import { Rocket, Lock, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SpotlightCard from "@/components/SpotlightCard";
import ProgressBar from "@/components/ProgressBar";
import ScrambleText from "@/components/ScrambleText";
import SectionHeader from "@/components/SectionHeader";

interface ProductionProject {
  name: string;
  url: string;
  description: string;
  gradient: string;
  image?: string;
  techs: string[];
}

const projects: ProductionProject[] = [
  {
    name: "SharkGestão",
    url: "https://www.sharkgestao.com/",
    description:
      "Automação para afiliados: troca links de ofertas via WhatsApp e Telegram, com link-in-bio e IA integrada.",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    image: "/logopromobot.webp",
    techs: ["SaaS", "Multi-tenant", "WhatsApp API", "IA"],
  },
  {
    name: "SharkGestão ERP",
    url: "https://www.sharkgestao.com/",
    description:
      "ERP SaaS para assistência técnica e lojas de informática: estoque, PDV, OS, clientes, relatórios e etiquetas.",
    gradient: "from-indigo-500 via-blue-500 to-cyan-500",
    techs: ["SaaS", "Multi-tenant", "ERP", "PDV"],
  },
  {
    name: "Shark Fitness",
    url: "https://www.sharkgestao.com/",
    description:
      "SaaS para personais: cadastro de alunos, medidas, % de gordura, agendamento de aulas e acompanhamento com fotos.",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    techs: ["SaaS", "Multi-tenant", "Agendamento", "IA"],
  },
  {
    name: "SharkOfertas",
    url: "https://sharkofertas.vercel.app/",
    description:
      "Plataforma de ofertas e promoções: agregação de produtos, comparativo de preços e avisos de descontos em tempo real.",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    image: "https://sharkofertas.vercel.app/logo%20shark%20ofertas.png",
    techs: ["SaaS", "Ofertas", "Next.js", "Vercel"],
  },
];

export default function ProductionProjects() {
  return (
    <section
      id="producao"
      className="w-full px-4 py-20 sm:px-6 lg:px-8 xl:px-12 2xl:px-16"
    >
      <AnimatedSection className="mx-auto max-w-7xl">
        <SectionHeader
          icon={<Rocket className="h-5 w-5" />}
          comment="// producao"
          title={<ScrambleText text="Projetos em produção" />}
          iconClassName="bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, idx) => {
            const isPlaceholder = !project.url;
            return (
              <SpotlightCard
                key={idx}
                tilt={!isPlaceholder}
                className={`flex flex-col justify-between border border-slate-100 bg-white shadow-sm transition dark:border-slate-800 dark:bg-slate-900 animate-border-gradient ${
                  isPlaceholder ? "opacity-60" : "hover:-translate-y-1 hover:shadow-xl"
                }`}
              >
                <div className={`relative h-40 bg-gradient-to-br ${project.gradient} p-6`}>
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute right-4 top-4 z-10 flex gap-2 opacity-100 transition-opacity duration-300 group-hover:opacity-100 sm:opacity-100">
                    {!isPlaceholder && (
                      <>
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/90 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm">
                          <Rocket className="h-3 w-3" />
                          Em produção
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-700/90 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm">
                          <Lock className="h-3 w-3" />
                          Privado
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <p className="mb-4 line-clamp-2 text-sm text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>

                  {project.techs.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.techs.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {!isPlaceholder ? (
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700 transition group-hover:border-emerald-300 group-hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:group-hover:border-emerald-500 dark:group-hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Acessar
                    </Link>
                  ) : (
                    <div className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 px-4 py-2 text-sm font-semibold text-slate-400 dark:border-slate-700 dark:text-slate-500">
                      Em breve
                    </div>
                  )}
                </div>
              </SpotlightCard>
            );
          })}
        </div>
        <ProgressBar className="mt-8" delay={200} />
      </AnimatedSection>
    </section>
  );
}
