import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://professor-ia.vercel.app"),
  title: "Professor IA | Formação docente para a era da Inteligência Artificial",
  description: "Jornada online e gratuita para professores compreenderem e aplicarem Inteligência Artificial no planejamento, na produção de materiais, na avaliação e na aprendizagem.",
  keywords: ["Inteligência Artificial", "formação docente", "IA na educação", "professores", "IA generativa"],
  authors: [{ name: "Sanval Ebert" }],
  openGraph: {
    title: "Professor IA",
    description: "A IA já transforma a educação. Prepare-se para conduzir essa mudança.",
    type: "website",
    locale: "pt_BR",
    siteName: "Professor IA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professor IA",
    description: "Formação docente para a era da Inteligência Artificial.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
