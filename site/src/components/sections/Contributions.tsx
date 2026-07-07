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

const monthNames = [
  "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
  "Jul", "Ago", "Set", "Out", "Nov", "Dez",
];

const dayLabels = ["", "Seg", "", "Qua", "", "Sex", ""];

interface Cell {
  date: string | null;
  count: number;
  level: number;
}

function buildGrid(contributions: Contribution[]): Cell[][] {
  if (contributions.length === 0) return [];

  const firstDate = new Date(contributions[0].date + "T00:00:00");
  const firstDayOfWeek = firstDate.getDay();

  const padded: Cell[] = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    padded.push({ date: null, count: 0, level: 0 });
  }
  for (const c of contributions) {
    padded.push({ date: c.date, count: c.count, level: c.level });
  }
  while (padded.length % 7 !== 0) {
    padded.push({ date: null, count: 0, level: 0 });
  }

  const weeks: Cell[][] = [];
  for (let i = 0; i < padded.length; i += 7) {
    weeks.push(padded.slice(i, i + 7));
  }
  return weeks;
}

function getMonthLabels(weeks: Cell[][]): { label: string; col: number }[] {
  const labels: { label: string; col: number }[] = [];
  let lastMonth = -1;

  weeks.forEach((week, col) => {
    for (const cell of week) {
      if (!cell.date) continue;
      const d = new Date(cell.date + "T00:00:00");
      const m = d.getMonth();
      if (m !== lastMonth) {
        labels.push({ label: monthNames[m], col });
        lastMonth = m;
      }
    }
  });

  return labels;
}

export default function Contributions({ contributions }: ContributionsProps) {
  const total = contributions.reduce((sum, day) => sum + day.count, 0);
  const weeks = buildGrid(contributions);
  const monthLabels = getMonthLabels(weeks);

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
                {total} contribuições no último ano
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-100 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
          {weeks.length > 0 ? (
            <div className="inline-block">
              <div className="flex">
                <div className="w-8 shrink-0" />
                <div className="flex gap-1">
                  {monthLabels.map((m, i) => (
                    <div
                      key={i}
                      className="text-[10px] text-slate-500 dark:text-slate-400"
                      style={{
                        position: "absolute",
                        left: `calc(2rem + ${m.col * 16}px)`,
                      }}
                    >
                      {m.label}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex gap-1">
                <div className="flex w-8 shrink-0 flex-col gap-1">
                  {dayLabels.map((label, i) => (
                    <div key={i} className="h-3 text-[9px] leading-3 text-slate-400 dark:text-slate-500">
                      {label}
                    </div>
                  ))}
                </div>
                <div className="flex gap-1">
                  {weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-1">
                      {week.map((cell, dayIndex) => (
                        <div
                          key={dayIndex}
                          className={`h-3 w-3 rounded-sm ${levelClasses[cell.level] ?? levelClasses[0]}`}
                          title={
                            cell.date
                              ? `${cell.date}: ${cell.count} contribuição${cell.count !== 1 ? "ões" : ""}`
                              : undefined
                          }
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="py-8 text-center text-sm text-slate-500 dark:text-slate-400">
              Não foi possível carregar as contribuições.
            </div>
          )}

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
