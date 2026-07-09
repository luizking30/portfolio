import { User, MapPin, Calendar, Briefcase, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import TypewriterOnView from "@/components/TypewriterOnView";
import TerminalPrompt from "@/components/TerminalPrompt";
import ProgressBar from "@/components/ProgressBar";
import ScrambleText from "@/components/ScrambleText";
import BinaryDecodeText from "@/components/BinaryDecodeText";
import CodeTyping from "@/components/CodeTyping";
import SectionHeader from "@/components/SectionHeader";

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
    <section id="sobre" className="w-full px-4 py-20 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <AnimatedSection className="mx-auto max-w-7xl">
        <SectionHeader
          icon={<User className="h-5 w-5" />}
          comment="// sobre_mim"
          title={<><ScrambleText text="Sobre" /> <BinaryDecodeText text="mim" speed={200} stagger={50} /></>}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
            <TerminalPrompt text="system: describe_yourself()" className="mb-3 text-xs" speed={30} />
            <p className="max-w-prose text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
              <TypewriterOnView text={text} speed={15} />
            </p>
            <CodeTyping
              language="python"
              speed={20}
              className="mt-6"
              code={`def build_ai_agent(task: str) -> Agent:
    agent = Agent(
        model="gpt-4",
        tools=[search, code_exec],
        memory=LongTermMemory()
    )
    return agent.run(task)`}
            />
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
