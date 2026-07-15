"use client";

import { useEffect, useState } from "react";
import { Cpu, MemoryStick, HardDrive, Activity } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface Metric {
  icon: typeof Cpu;
  label: string;
  value: number;
  max: number;
  unit: string;
  color: string;
}

export default function SystemStatus() {
  const [metrics, setMetrics] = useState<Metric[]>([
    { icon: Cpu, label: "CPU", value: 42, max: 100, unit: "%", color: "bg-blue-500" },
    { icon: MemoryStick, label: "MEM", value: 68, max: 100, unit: "%", color: "bg-cyan-500" },
    { icon: HardDrive, label: "DISK", value: 35, max: 100, unit: "%", color: "bg-emerald-500" },
    { icon: Activity, label: "NET", value: 72, max: 100, unit: "ms", color: "bg-amber-500" },
  ]);
  const [uptime, setUptime] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;

    let interval: ReturnType<typeof setInterval>;

    const start = () => {
      interval = setInterval(() => {
        setMetrics((prev) =>
          prev.map((m) => ({
            ...m,
            value: Math.max(
              10,
              Math.min(95, m.value + (Math.random() - 0.5) * 15)
            ),
          }))
        );
        setUptime((u) => u + 1);
      }, 2000);
    };

    const onVisibility = () => {
      if (document.hidden) {
        clearInterval(interval);
      } else {
        start();
      }
    };

    start();
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced]);

  const hours = Math.floor(uptime / 3600);
  const mins = Math.floor((uptime % 3600) / 60);
  const secs = uptime % 60;
  const uptimeStr = `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  return (
    <div className="fixed bottom-6 left-6 z-[55] hidden w-56 rounded-xl border border-slate-200 bg-white/90 p-3 shadow-lg backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/90 lg:block">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400">
          SYSTEM_STATUS
        </span>
        <span className="flex items-center gap-1 font-mono text-xs text-emerald-500">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          ONLINE
        </span>
      </div>
      <div className="space-y-1.5">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-center gap-2">
            <m.icon className="h-3 w-3 shrink-0 text-slate-400" />
            <span className="w-7 shrink-0 font-mono text-[9px] text-slate-500 dark:text-slate-400">
              {m.label}
            </span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div
                className={`h-full rounded-full ${m.color} transition-all duration-1000 ease-out`}
                style={{ width: `${m.value}%` }}
              />
            </div>
            <span className="w-8 shrink-0 text-right font-mono text-[9px] text-slate-500 dark:text-slate-400">
              {Math.round(m.value)}{m.unit}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-2 dark:border-slate-800">
        <span className="font-mono text-[9px] text-slate-400">UPTIME</span>
        <span className="font-mono text-[9px] text-slate-600 dark:text-slate-300">{uptimeStr}</span>
      </div>
    </div>
  );
}
