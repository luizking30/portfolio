"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-200/50 bg-blue-100/30 backdrop-blur-md dark:border-blue-800/50 dark:bg-blue-900/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#inicio" className="text-xl font-bold text-slate-900 dark:text-white">
          LA
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
          <a
            href="/curriculo-luiz-amorim.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <Download className="h-4 w-4" />
            Currículo
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-6 w-6 text-slate-700 dark:text-slate-300" /> : <Menu className="h-6 w-6 text-slate-700 dark:text-slate-300" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-blue-200/50 bg-blue-100/30 px-4 py-4 dark:border-blue-800/50 dark:bg-blue-900/20 md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                href="/curriculo-luiz-amorim.pdf"
                download
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
              >
                <Download className="h-4 w-4" />
                Currículo
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
