import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Professor IA | Inteligência Artificial para professores",
  description: "Jornada gratuita para professores aprenderem a usar Inteligência Artificial na prática docente.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
