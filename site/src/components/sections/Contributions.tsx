import { Calendar } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface Contribution {
  date: string;
  count: number;
  level: number;
}

interface ContributionsProps {
  contributions: Contribution[];
}

const levelClasses = [
  "bg-slate-100 dark:bg-slate-800",
  "bg-emerald-200 dark:bg-emerald-900/40",
  "bg-emerald-300 dark:bg-emerald-700/60",
  "bg-emerald-400 dark:bg-emerald-600",
  "bg-emerald-500 dark:bg-emerald-500",
];

export default function Contributions({ contributions }: ContributionsProps) {
  const total = contributions.reduce((sum, day) => sum + day.count, 0);

  return (
    <section className="w-full bg-white px-4 py-20 dark:bg-slate-950 sm:px-6 lg:px-8 xl:px-12">
      <AnimatedSection className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                Contribuições
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {total} contribuições nos últimos 12 meses
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-100 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex gap-1">
            {Array.from({ length: 52 }).map((_, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {Array.from({ length: 7 }).map((_, dayIndex) => {
                  const contributionIndex = weekIndex * 7 + dayIndex;
                  const contribution = contributions[contributionIndex];
                  const level = contribution?.level ?? 0;
                  return (
                    <div
                      key={dayIndex}
                      className={`h-3 w-3 rounded-sm ${levelClasses[level] ?? levelClasses[0]}`}
                      title={
                        contribution
                          ? `${contribution.date}: ${contribution.count} contribuições`
                          : undefined
                      }
                    />
                  );
                })}
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-end gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span>Menos</span>
            {levelClasses.map((cls, index) => (
              <div key={index} className={`h-3 w-3 rounded-sm ${cls}`} />
            ))}
            <span>Mais</span>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
