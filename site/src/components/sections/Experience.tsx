import { Briefcase, GraduationCap, Languages } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
  icon: "work" | "education" | "language";
}

const experiences: ExperienceItem[] = [
  {
    period: "2014 – Atual",
    title: "Proprietário e Técnico Responsável",
    company: "Shark Eletrônicos",
    description:
      "Gestão operacional e técnica de assistência especializada em hardware, smartphones e tablets. Desenvolvimento e implementação de software interno para automatizar o fluxo de ordens de serviço e estoque da loja.",
    icon: "work",
  },
  {
    period: "2025 – 6 meses",
    title: "Curso de Front-end",
    company: "SENAI",
    description:
      "Formação em desenvolvimento front-end moderno, abrangendo HTML, CSS, JavaScript, React e boas práticas de UI/UX.",
    icon: "education",
  },
  {
    period: "2024 – 6 meses",
    title: "Curso de Python",
    company: "SENAI",
    description:
      "Curso focado em programação em Python, incluindo automações, manipulação de dados e desenvolvimento de APIs.",
    icon: "education",
  },
  {
    period: "2024 – 6 meses",
    title: "Curso de Java",
    company: "SENAI",
    description:
      "Formação em desenvolvimento Java, orientação a objetos, Spring Boot e construção de aplicações backend.",
    icon: "education",
  },
  {
    period: "12 meses",
    title: "Auxiliar Administrativo",
    company: "SESI / SENAI",
    description:
      "Suporte em rotinas administrativas, organização documental e atendimento ao público utilizando sistemas de gestão interna.",
    icon: "work",
  },
  {
    period: "2016 – 2020 (4 anos)",
    title: "Língua Inglesa",
    company: "CILT",
    description:
      "Curso completo de inglês com duração de 4 anos, abrangendo leitura, escrita, conversação e compreensão auditiva.",
    icon: "language",
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
            {experiences.map((item, idx) => {
              const Icon = item.icon === "work" ? Briefcase : item.icon === "education" ? GraduationCap : Languages;
              return (
              <div key={idx} className="relative pl-12 sm:pl-14">
                <div className="absolute left-2 top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-blue-500 shadow-sm dark:border-slate-900 sm:left-3"></div>
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-950 sm:p-8">
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                    <Icon className="h-4 w-4" />
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
              );
            })}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
