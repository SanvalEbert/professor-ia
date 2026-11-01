import type { Metadata } from "next";
import { CalendarPlus, Download } from "lucide-react";

const encontros = [
  { dia: "Ter, 17/11", titulo: "Encontro 1 · Compreender", dates: "20261117T230000Z/20261118T000000Z" },
  { dia: "Qua, 18/11", titulo: "Encontro 2 · Experimentar", dates: "20261118T230000Z/20261119T000000Z" },
  { dia: "Qui, 19/11", titulo: "Encontro 3 · Aplicar", dates: "20261119T230000Z/20261120T000000Z" },
];

const googleAgenda = (titulo: string, dates: string) =>
  `https://calendar.google.com/calendar/render?${new URLSearchParams({
    action: "TEMPLATE",
    text: `Imersão IA na Prática Docente · ${titulo}`,
    dates,
    details: "O link da mentoria é enviado no grupo oficial do WhatsApp.",
    location: "Online",
  })}`;

export const metadata: Metadata = {
  title: "Inscrição confirmada | Imersão IA na Prática Docente",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Confirmacao() {
  const whatsapp =
    process.env.NEXT_PUBLIC_WHATSAPP_GROUP_URL ||
    "https://chat.whatsapp.com/FLHy7jnIBoTIf3cewk6zTW";

  return (
    <main id="inicio" className="grid min-h-screen place-items-center bg-gradient-to-br from-blue-950 to-blue-700 px-5 py-10 text-white">
      <section className="w-full max-w-2xl rounded-3xl bg-white p-8 text-center text-ink shadow-2xl md:p-12">
        <div aria-hidden="true" className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green-100 text-3xl">✓</div>
        <h1 className="mt-6 text-4xl font-black">Inscrição realizada!</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Sua inscrição na <strong>Imersão IA na Prática Docente</strong>, nos dias 17, 18 e 19 de novembro de 2026, das 20h às 21h (horário de Brasília), foi realizada.
        </p>
        <p className="mt-3 leading-7 text-slate-600">
          Agora entre no grupo oficial do WhatsApp para receber os links das mentorias, materiais e avisos importantes do projeto.
        </p>
        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-green-600 px-7 py-4 font-bold text-white transition hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-600"
        >
          Entrar no grupo do WhatsApp
        </a>
        <p className="mt-4 text-xs leading-5 text-slate-500">
          O grupo será utilizado para comunicações relacionadas à imersão.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left">
          <p className="flex items-center gap-2 font-black text-ink">
            <CalendarPlus size={20} className="text-brand" aria-hidden="true" /> Reserve os horários na sua agenda
          </p>
          <p className="mt-1 text-sm leading-6 text-slate-600">Três encontros, sempre das 20h às 21h (horário de Brasília).</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-3">
            {encontros.map((e) => (
              <li key={e.dates}>
                <a
                  href={googleAgenda(e.titulo, e.dates)}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl border border-blue-100 bg-white px-3 py-2.5 text-sm transition hover:border-brand hover:shadow-md"
                >
                  <span className="block font-black text-brand">{e.dia}</span>
                  <span className="block text-slate-600">Google Agenda</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/imersao-ia-pratica-docente.ics"
            download
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand underline underline-offset-4"
          >
            <Download size={16} aria-hidden="true" /> Baixar os 3 encontros (Apple, Outlook e outros)
          </a>
        </div>
        <p className="mt-8 text-sm text-slate-500">
          <a href="/" className="underline">Voltar para a página inicial</a>
        </p>
      </section>
    </main>
  );
}
