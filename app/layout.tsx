import type { Metadata } from "next";
import AccessibilityTools from "@/components/AccessibilityTools";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://professor-ia-eosin.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Inteligência Artificial na Prática Docente | Imersão para Professores",
  description: "Imersão online e gratuita em 17, 18 e 19 de novembro de 2026, das 20h às 21h (horário de Brasília), para explorar e aplicar Inteligência Artificial na prática docente.",
  keywords: ["Inteligência Artificial", "formação docente", "IA na educação", "professores", "IA generativa"],
  authors: [{ name: "Sanval Ebert" }],
  icons: { icon: "/logo-ia-pratica-icon.svg" },
  openGraph: {
    title: "Inteligência Artificial na Prática Docente",
    description: "Três mentorias online com IA: 17, 18 e 19 de novembro de 2026, das 20h às 21h.",
    type: "website",
    locale: "pt_BR",
    siteName: "Inteligência Artificial na Prática Docente",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inteligência Artificial na Prática Docente",
    description: "Imersão gratuita para professores: três mentorias de uma hora, das 20h às 21h, de 17 a 19 de novembro de 2026.",
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
