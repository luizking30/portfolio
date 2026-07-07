import { User, MapPin, Calendar, Briefcase, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import TypewriterOnView from "@/components/TypewriterOnView";
import TerminalPrompt from "@/components/TerminalPrompt";
import ProgressBar from "@/components/ProgressBar";

interface AboutProps {
  text: string;
  location: string;
  experience: string;
  focus: string;
  available: boolean;
}

export default function About({
  text,
  location,
  experience,
  focus,
  available,
}: AboutProps) {
  const cards = [
    { icon: MapPin, label: "Localização", value: location },
    { icon: Calendar, label: "Experiência", value: experience },
    { icon: Briefcase, label: "Foco", value: focus },
    {
      icon: CheckCircle2,
      label: "Disponibilidade",
      value: available ? "Imediata" : "A combinar",
    },
  ];

  return (
    <section id="sobre" className="w-full px-4 py-20 sm:px-6 lg:px-8 xl:px-12">
      <AnimatedSection className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            <User className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
            <span className="font-mono text-sm font-normal text-blue-500 dark:text-blue-400">// sobre_mim</span>
            <br />
            Sobre mim
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
            <TerminalPrompt text="system: describe_yourself()" className="mb-3 text-xs" speed={30} />
            <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
              <TypewriterOnView text={text} speed={15} />
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {cards.map((card) => (
              <div
                key={card.label}
                className="flex items-start gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  <card.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">{card.label}</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">{card.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ProgressBar className="mt-8" delay={300} />
      </AnimatedSection>
    </section>
  );
}
