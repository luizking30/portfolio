import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://luizamorimdev.vercel.app/"),
  title: "Luiz Amorim | Desenvolvedor Full Stack",
  description:
    "Portfólio de Luiz Eduardo Mendonça Amorim, desenvolvedor Full Stack com foco em Java, Python, Spring Boot, React e Next.js. Veja projetos reais e estatísticas do GitHub.",
  keywords: ["desenvolvedor full stack", "Java", "Python", "Spring Boot", "React", "Next.js", "portfolio"],
  authors: [{ name: "Luiz Amorim" }],
  creator: "Luiz Amorim",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://luizamorimdev.vercel.app/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Luiz Amorim | Desenvolvedor Full Stack",
    description: "Portfólio de Luiz Amorim com projetos reais e integração com GitHub.",
    type: "website",
    locale: "pt_BR",
    url: "https://luizamorimdev.vercel.app/",
    siteName: "Luiz Amorim | Portfolio",
    images: [
      {
        url: "/foto.jpeg",
        width: 360,
        height: 360,
        alt: "Luiz Amorim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luiz Amorim | Desenvolvedor Full Stack",
    description: "Portfólio de Luiz Amorim com projetos reais e integração com GitHub.",
    images: ["/foto.jpeg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f0f7ff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1424" },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Luiz Eduardo Mendonça Amorim",
              jobTitle: "Desenvolvedor Full Stack",
              url: "https://luizamorimdev.vercel.app/",
              image: "https://luizamorimdev.vercel.app/foto.jpeg",
              sameAs: [
                "https://github.com/luizking30",
                "https://www.linkedin.com/in/luiz-amorim-5a0847400/",
                "https://instagram.com/luizamorim1",
              ],
              knowsAbout: ["Java", "Python", "Spring Boot", "React", "Next.js", "AI"],
            }),
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
