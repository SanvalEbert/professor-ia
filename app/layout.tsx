import type { Metadata } from "next";
import AccessibilityTools from "@/components/AccessibilityTools";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://professor-ia-eosin.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Professor IA | Imersão IA na Prática Docente",
  description: "Imersão online e gratuita em 17, 18 e 19 de novembro de 2026, das 8h30 às 10h, para explorar e aplicar Inteligência Artificial na prática docente.",
  keywords: ["Inteligência Artificial", "formação docente", "IA na educação", "professores", "IA generativa"],
  authors: [{ name: "Sanval Ebert" }],
  openGraph: {
    title: "Imersão IA na Prática Docente",
    description: "Três dias de atividades práticas com IA: 17, 18 e 19 de novembro de 2026.",
    type: "website",
    locale: "pt_BR",
    siteName: "Professor IA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imersão IA na Prática Docente",
    description: "Imersão gratuita e online para professores, de 17 a 19 de novembro de 2026.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a href="#inicio" className="skip-link">Pular para o conteúdo principal</a>
        {children}
        <AccessibilityTools />
      </body>
    </html>
  );
}
