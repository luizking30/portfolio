import { Briefcase } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    period: "2014 – Atual",
    title: "Proprietário e Técnico Responsável",
    company: "Shark Eletrônicos",
    description:
      "Gestão operacional e técnica de assistência especializada em hardware, smartphones e tablets. Desenvolvimento e implementação de software interno para automatizar o fluxo de ordens de serviço e estoque da loja.",
  },
  {
    period: "Período de 2 anos",
    title: "Auxiliar Administrativo",
    company: "SESI / SENAI",
    description:
      "Suporte em rotinas administrativas, organização documental e atendimento ao público utilizando sistemas de gestão interna.",
  },
];

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="w-full bg-slate-50 px-4 py-20 dark:bg-slate-900 sm:px-6 lg:px-8 xl:px-12"
    >
      <AnimatedSection className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            <Briefcase className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
            Experiência
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-slate-200 dark:bg-slate-700 sm:left-5"></div>
          <div className="space-y-8">
            {experiences.map((item) => (
              <div key={item.title} className="relative pl-12 sm:pl-14">
                <div className="absolute left-2 top-1 h-4 w-4 rounded-full border-2 border-white bg-blue-500 shadow-sm dark:border-slate-900 sm:left-3"></div>
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-950 sm:p-8">
                  <div className="mb-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {item.period}
                  </div>
                  <h3 className="mb-1 text-lg font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <div className="mb-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                    {item.company}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
