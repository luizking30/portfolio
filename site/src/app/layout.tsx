import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luiz Amorim | Desenvolvedor Full Stack",
  description:
    "Portfólio de Luiz Eduardo Mendonça Amorim, desenvolvedor Full Stack com foco em Java, Python, Spring Boot, React e Next.js. Veja projetos reais e estatísticas do GitHub.",
  keywords: ["desenvolvedor full stack", "Java", "Python", "Spring Boot", "React", "Next.js", "portfolio"],
  authors: [{ name: "Luiz Amorim" }],
  openGraph: {
    title: "Luiz Amorim | Desenvolvedor Full Stack",
    description: "Portfólio de Luiz Amorim com projetos reais e integração com GitHub.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
