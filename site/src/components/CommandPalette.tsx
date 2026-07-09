"use client";

import { useState, useEffect, useCallback } from "react";
import { Search, ArrowRight, X } from "lucide-react";

interface CommandItem {
  label: string;
  href: string;
  hint: string;
}

const commands: CommandItem[] = [
  { label: "Início", href: "#inicio", hint: "Topo da página" },
  { label: "Sobre mim", href: "#sobre", hint: "Quem sou eu" },
  { label: "Tecnologias", href: "#tecnologias", hint: "Stack e skills" },
  { label: "Projetos", href: "#projetos", hint: "Repositórios públicos" },
  { label: "Produção", href: "#producao", hint: "Projetos em produção" },
  { label: "Experiência", href: "#experiencia", hint: "Trajetória profissional" },
  { label: "Contribuições", href: "#contribuicoes", hint: "Gráfico de contribuições" },
  { label: "Estatísticas GitHub", href: "#github-stats", hint: "Métricas do GitHub" },
  { label: "Contato", href: "#contato", hint: "Fale comigo" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleKey = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setOpen((o) => !o);
    }
    if (e.key === "Escape") setOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setActive(0);
    }
  }, [open]);

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter" && filtered[active]) {
      window.location.hash = filtered[active].href;
      setOpen(false);
    }
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-[55] flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-500 shadow-lg transition hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:text-blue-400 md:px-3"
        aria-label="Abrir paleta de comandos"
      >
        <Search className="h-3.5 w-3.5" />
        <span className="hidden md:inline">Cmd+K</span>
      </button>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center pt-[20vh] px-4"
      onClick={() => setOpen(false)}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-3 dark:border-slate-800">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onKeyDown}
            placeholder="Buscar seção..."
            className="flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
          />
          <button
            onClick={() => setOpen(false)}
            className="rounded-md p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <ul className="max-h-64 overflow-y-auto py-2">
          {filtered.length === 0 && (
            <li className="px-4 py-6 text-center text-sm text-slate-400">
              Nenhum resultado encontrado
            </li>
          )}
          {filtered.map((cmd, idx) => (
            <li key={cmd.href}>
              <button
                onMouseEnter={() => setActive(idx)}
                onTouchStart={() => setActive(idx)}
                onClick={() => {
                  window.location.hash = cmd.href;
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition ${
                  idx === active
                    ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                    : "text-slate-700 dark:text-slate-300"
                }`}
              >
                <span className="font-medium">{cmd.label}</span>
                <span className="flex items-center gap-2 text-xs text-slate-400">
                  {cmd.hint}
                  <ArrowRight className="h-3 w-3" />
                </span>
              </button>
            </li>
          ))}
        </ul>
        <div className="border-t border-slate-100 px-4 py-2 text-[10px] text-slate-400 dark:border-slate-800">
          <kbd className="rounded bg-slate-100 px-1.5 py-0.5 font-mono dark:bg-slate-800">↑↓</kbd> navegar
          <span className="mx-2">•</span>
          <kbd className="rounded bg-slate-100 px-1.5 py-0.5 font-mono dark:bg-slate-800">↵</kbd> selecionar
          <span className="mx-2">•</span>
          <kbd className="rounded bg-slate-100 px-1.5 py-0.5 font-mono dark:bg-slate-800">esc</kbd> fechar
        </div>
      </div>
    </div>
  );
}
