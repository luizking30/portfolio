import Link from "next/link";
import Image from "next/image";
import { Rocket, Lock, ArrowUpRight, ExternalLink, Bot, MessageSquare, Link2, Brain } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface ProductionProject {
  name: string;
  url: string;
  description: string;
  gradient: string;
  image?: string;
  techs: string[];
  features: { icon: typeof Bot; label: string }[];
}

const projects: ProductionProject[] = [
  {
    name: "SharkGestão",
    url: "https://www.sharkgestao.com/",
    description:
      "Sistema para afiliados que escuta mensagens de ofertas recebidas via WhatsApp e Telegram dos grupos do usuário, troca o link de afiliado (Mercado Livre, Shopee, Amazon e outros) pelo link cadastrado no sistema e responde nos grupos selecionados.",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    image: "/logopromobot.webp",
    techs: ["WhatsApp API", "Telegram API", "Evolution API", "IA"],
    features: [
      { icon: MessageSquare, label: "Escuta ofertas via WhatsApp e Telegram" },
      { icon: Link2, label: "Troca automática de links de afiliado" },
      { icon: Bot, label: "Resposta automática em grupos selecionados" },
      { icon: Link2, label: "Link-in-bio com todos os links em uma página" },
      { icon: Brain, label: "IA para auxiliar o usuário" },
    ],
  },
  {
    name: "Em breve",
    url: "",
    description: "Novo projeto em produção em breve.",
    gradient: "from-slate-400 to-slate-600",
    techs: [],
    features: [],
  },
  {
    name: "Em breve",
    url: "",
    description: "Novo projeto em produção em breve.",
    gradient: "from-slate-400 to-slate-600",
    techs: [],
    features: [],
  },
  {
    name: "Em breve",
    url: "",
    description: "Novo projeto em produção em breve.",
    gradient: "from-slate-400 to-slate-600",
    techs: [],
    features: [],
  },
];

export default function ProductionProjects() {
  return (
    <section
      id="producao"
      className="w-full bg-white px-4 py-20 dark:bg-slate-950 sm:px-6 lg:px-8 xl:px-12"
    >
      <AnimatedSection className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
            <Rocket className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
            Projetos em produção
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, idx) => {
            const isPlaceholder = !project.url;
            return (
              <div
                key={idx}
                className={`group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition dark:border-slate-800 dark:bg-slate-900 ${
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
                  <div className="absolute right-4 top-4 z-10 flex gap-2">
                    {!isPlaceholder && (
                      <>
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/90 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
                          <Rocket className="h-3 w-3" />
                          Em produção
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-700/90 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
                          <Lock className="h-3 w-3" />
                          Privado
                        </span>
                      </>
                    )}
                  </div>
                  <h3 className="relative z-10 mt-auto text-xl font-bold text-white drop-shadow-sm">
                    {project.name}
                  </h3>
                  {!isPlaceholder && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-lg bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900">
                        <ArrowUpRight className="h-4 w-4" />
                        Ver projeto
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <p className="mb-4 line-clamp-4 text-sm text-slate-600 dark:text-slate-300">
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

                  {project.features.length > 0 && (
                    <div className="mb-4 space-y-1.5">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                          <feature.icon className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                          <span className="line-clamp-1">{feature.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {!isPlaceholder ? (
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition group-hover:border-emerald-300 group-hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:group-hover:border-emerald-500 dark:group-hover:text-emerald-400"
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
              </div>
            );
          })}
        </div>
      </AnimatedSection>
    </section>
  );
}
