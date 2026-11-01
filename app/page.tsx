import Image from "next/image";
import RegistrationForm from "../components/RegistrationForm";
import {
  ArrowRight,
  BookOpen,
  Bot,
  BrainCircuit,
  CalendarDays,
  Check,
  ChevronRight,
  FileCheck2,
  GraduationCap,
  Instagram,
  Layers3,
  Linkedin,
  MessageSquareText,
  Scale,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/msc-sanval-ebert/",
    Icon: Linkedin,
  },
  {
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Sanval-Ebert-De-Santos?ev=hdr_xprf",
    Icon: BookOpen,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sanvalebert/",
    Icon: Instagram,
  },
] as const;

const meetings = [
  {
    number: "01",
    stage: "Compreender",
    date: "17/11",
    dateTime: "2026-11-17",
    time: "20h às 21h",
    title: "IA na educação: fundamentos e possibilidades",
    text: "Explore usos concretos, limites e cuidados éticos. Esboce uma atividade pedagógica com IA.",
  },
  {
    number: "02",
    stage: "Experimentar",
    date: "18/11",
    dateTime: "2026-11-18",
    time: "20h às 21h",
    title: "Oficina: planejar, criar e avaliar com IA",
    text: "Desenvolva materiais, atividades e critérios de avaliação para sua realidade docente.",
  },
  {
    number: "03",
    stage: "Aplicar",
    date: "19/11",
    dateTime: "2026-11-19",
    time: "20h às 21h",
    title: "Da ideia à aplicação: agentes e autoria docente",
    text: "Experimente agentes de IA e finalize uma proposta de aplicação na sua prática docente.",
  },
];

const benefits = [
  [BrainCircuit, "Planejar", "Estruture aulas e sequências didáticas com objetivos claros."],
  [Layers3, "Produzir", "Crie materiais, atividades e experiências alinhadas à aprendizagem."],
  [FileCheck2, "Avaliar", "Elabore questões, rubricas e critérios de avaliação consistentes."],
  [MessageSquareText, "Dar feedback", "Apoie correções e devolutivas sem perder o olhar docente."],
  [Bot, "Criar agentes", "Conheça possibilidades de automação e apoio personalizado."],
  [Scale, "Agir com ética", "Discuta autoria, privacidade, regulação e pensamento crítico."],
] as const;

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Professor IA - início">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-brand to-blue-800 text-white shadow-lg shadow-blue-200">
              <WandSparkles size={19} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-lg font-black tracking-tight text-ink">Professor <span className="text-brand">IA</span></span>
              <span className="mt-1 text-[10px] font-extrabold uppercase tracking-[.12em] text-slate-700 sm:text-xs">Imersão na Prática Docente</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex" aria-label="Navegação principal">
            <a className="transition hover:text-brand" href="#beneficios">O que você vai aprender</a>
            <a className="transition hover:text-brand" href="#jornada">Imersão</a>
            <a className="transition hover:text-brand" href="#quem-conduz">Quem conduz</a>
          </nav>
          <a href="#inscricao" className="rounded-full bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:shadow-xl">
            Participar gratuitamente
          </a>
        </div>
      </header>

      <section id="inicio" className="relative isolate min-h-screen bg-gradient-to-br from-[#f5f8fd] via-white to-[#e2edff] pt-28">
        <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
        <div className="animate-pulse-soft pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-blue-300/35 blur-3xl" />
        <div className="animate-pulse-soft pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-sky-200/45 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-14 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:pb-28 lg:pt-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-brand shadow-sm backdrop-blur">
              <Sparkles size={16} /> Imersão online e gratuita para professores
            </span>
            <h1 className="text-balance mt-7 max-w-4xl text-5xl font-black leading-[.98] tracking-[-.045em] text-ink md:text-7xl lg:text-[5.25rem]">
              Imersão <span className="bg-gradient-to-r from-brand to-sky-500 bg-clip-text text-transparent">IA na Prática Docente.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Três dias consecutivos para compreender, experimentar e aplicar a IA em mentorias de uma hora. Explore ferramentas e desenvolva uma proposta para suas aulas, com autoria e intencionalidade pedagógica.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#inscricao" className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-4 font-extrabold text-white shadow-xl shadow-blue-200 transition hover:-translate-y-1 hover:shadow-2xl">
                Quero participar gratuitamente
                <ArrowRight size={19} className="transition group-hover:translate-x-1" />
              </a>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-600">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600"><CalendarDays size={18} /></span>
                <span>17, 18 e 19 de novembro de 2026 · 20h às 21h</span>
              </div>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
              {[["3", "mentorias práticas"], ["100%", "online e gratuito"], ["1", "comunidade docente"]].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/80 bg-white/75 p-4 shadow-sm backdrop-blur">
                  <strong className="block text-2xl font-black text-brand">{value}</strong>
                  <span className="text-xs font-semibold leading-5 text-slate-500 sm:text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[34rem]">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-[#e2b28f]/45 via-blue-300/35 to-blue-800/25 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.75rem] border border-white/70 bg-gradient-to-br from-blue-950 via-blue-800 to-[#c9a188] p-2.5 shadow-[0_30px_90px_rgba(15,35,81,.25)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.15rem] bg-[#b78b70]">
                <Image src="/sanval-imersao.webp" alt="Sanval Ebert, idealizador da Imersão IA na Prática Docente" fill priority sizes="(max-width: 1024px) 90vw, 42vw" className="object-cover object-center" />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0d1e41]/90 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <p className="text-sm font-bold uppercase tracking-[.22em] text-blue-200">Quem conduz</p>
                  <h2 className="mt-2 text-3xl font-black">Sanval Ebert</h2>
                  <p className="mt-1 text-sm text-slate-200">Doutor e pesquisador em IA aplicada à Educação</p>
                </div>
              </div>
            </div>
            <div className="animate-float absolute -left-6 top-16 hidden rounded-2xl border border-white bg-white/95 p-4 shadow-xl backdrop-blur sm:block">
              <GraduationCap className="text-brand" size={22} />
              <p className="mt-2 text-sm font-extrabold">Prática docente</p>
            </div>
            <div className="animate-float absolute -right-5 bottom-24 hidden rounded-2xl border border-white bg-white/95 p-4 shadow-xl backdrop-blur sm:block [animation-delay:1.4s]">
              <Bot className="text-accent" size={22} />
              <p className="mt-2 text-sm font-extrabold">Agentes de IA</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-ink py-20 text-white md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,.3),transparent_38%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.7fr_1.3fr] lg:items-center lg:px-8">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/10 text-blue-300">
            <Sparkles size={34} />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[.25em] text-blue-300">Uma provocação necessária</p>
            <h2 className="text-balance mt-5 text-3xl font-black leading-tight md:text-5xl">Seus estudantes já estão usando IA. O desafio é transformar esse uso em aprendizagem.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">A tecnologia, sozinha, não transforma a educação. Professores preparados dão sentido pedagógico, estabelecem limites e criam novas possibilidades.</p>
          </div>
        </div>
      </section>

      <section id="beneficios" className="bg-gradient-to-b from-white to-blue-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-black uppercase tracking-[.18em] text-brand">Da curiosidade à prática</p>
            <h2 className="text-balance mt-4 text-4xl font-black tracking-tight md:text-5xl">IA como aliada do trabalho docente, com propósito, critério e autoria.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">A imersão conecta recursos de IA aos desafios concretos da docência, com experimentação e produção pedagógica.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map(([Icon, title, text], index) => (
              <article key={title} className="group relative overflow-hidden rounded-[2rem] border border-blue-500/20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-7 text-white shadow-lg shadow-blue-900/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                <div className="relative flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-white/10 text-white transition group-hover:bg-white group-hover:text-brand"><Icon size={23} /></span>
                  <span className="text-sm font-black text-blue-200">0{index + 1}</span>
                </div>
                <h3 className="relative mt-6 text-2xl font-black">{title}</h3>
                <p className="relative mt-3 leading-7 text-blue-100">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="jornada" className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="font-black uppercase tracking-[.18em] text-brand">Imersão IA na Prática Docente</p>
              <h2 className="text-balance mt-4 text-4xl font-black tracking-tight md:text-5xl">Três mentorias. Novas possibilidades para sua prática docente.</h2>
            </div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-bold text-blue-800 shadow-sm sm:rounded-full">
              <CalendarDays size={17} className="shrink-0 text-brand" />
              <span>17, 18 e 19/11/2026</span>
              <span className="text-blue-400" aria-hidden="true">·</span>
              <span>20h às 21h</span>
            </div>
          </div>
          <div className="relative mt-14 grid gap-6 lg:grid-cols-3">
            {meetings.map((meeting, index) => (
              <article key={meeting.number} className="relative overflow-hidden rounded-[2rem] border border-blue-800/20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 p-8 text-white shadow-xl shadow-blue-950/10">
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-sky-400/20 blur-3xl" />
                <div className="relative flex items-center justify-between">
                  <span className="text-6xl font-black text-blue-300/35">{meeting.number}</span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.16em] text-blue-100">{meeting.stage}</span>
                </div>
                <div className="relative mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-extrabold text-blue-100">
                  <CalendarDays size={16} aria-hidden="true" />
                  <time dateTime={meeting.dateTime}>{meeting.date}</time>
                  <span aria-hidden="true">·</span>
                  <span>{meeting.time}</span>
                </div>
                <h3 className="relative mt-5 text-2xl font-black leading-tight">{meeting.title}</h3>
                <p className="relative mt-4 leading-7 text-blue-100">{meeting.text}</p>
                {index < meetings.length - 1 && <ChevronRight className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 text-blue-400 lg:block" size={34} />}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="quem-conduz" className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-[#e8c0a2]/50 via-blue-200 to-blue-50 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-8 border-white bg-[#b78b70] shadow-[0_30px_80px_rgba(18,48,99,.18)]">
              <Image src="/sanval-imersao.webp" alt="Sanval Ebert, professor e pesquisador em Inteligência Artificial aplicada à Educação" fill sizes="(max-width: 1024px) 90vw, 40vw" className="object-cover object-center" />
            </div>
          </div>
          <div>
            <p className="font-black uppercase tracking-[.18em] text-brand">Quem conduz</p>
            <h2 className="mt-4 text-5xl font-black tracking-tight">Sanval Ebert</h2>
            <p className="mt-6 text-xl font-bold leading-8 text-slate-800">Professor, coordenador acadêmico e pesquisador em Inteligência Artificial aplicada à Educação.</p>
            <p className="mt-5 text-lg leading-8 text-slate-600">Doutor em Difusão do Conhecimento, atua na integração entre tecnologias digitais, inovação educacional e formação docente.</p>
            <p className="mt-4 text-lg leading-8 text-slate-600">Durante a transformação digital da pandemia, dialogou e trabalhou com professores de diferentes regiões do Brasil. Nesta imersão, convida professores a explorar a IA e construir aplicações pedagógicas com intencionalidade, critério e autoria.</p>

            <div className="mt-8">
              <p className="text-sm font-black uppercase tracking-[.14em] text-slate-500">Acompanhe e conheça minha trajetória</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Abrir ${label} de Sanval Ebert`}
                    className="group inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-extrabold text-blue-800 transition hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white hover:shadow-lg hover:shadow-blue-100"
                  >
                    <Icon size={18} className="shrink-0" />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Experiência em formação docente", "Pesquisa em IA e educação", "Atuação acadêmica e profissional", "Abordagem prática e ética"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 font-bold text-slate-700"><Check size={18} className="shrink-0 text-emerald-600" />{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="inscricao" className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-brand to-blue-700 py-20 text-white md:py-28">
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.82fr_1.18fr] lg:items-start lg:px-8">
          <div className="lg:sticky lg:top-28">
            <p className="font-black uppercase tracking-[.18em] text-blue-200">Inscrição gratuita</p>
            <h2 className="text-balance mt-4 text-4xl font-black md:text-5xl">Dê o próximo passo para transformar a IA em uma aliada da sua prática docente.</h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">Garanta sua participação na Imersão IA na Prática Docente, de 17 a 19 de novembro de 2026, das 20h às 21h.</p>
            <div className="mt-8 space-y-4 text-sm font-bold text-blue-50">
              {["Participação gratuita", "Três mentorias de 1h, ao vivo", "Atividades práticas e produção pedagógica", "Cadastro pelo site com confirmação após a inscrição"].map((item) => (
                <div key={item} className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-full bg-white/10"><Check size={16} /></span>{item}</div>
              ))}
            </div>
          </div>
          <RegistrationForm />
        </div>
      </section>

      <footer className="bg-ink px-5 py-12 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center text-sm md:flex-row md:text-left">
          <div>
            <strong className="inline-flex items-baseline gap-1 text-white">
              <span className="text-lg font-black text-blue-400">IA</span>
              <span className="font-extrabold">na Prática Docente</span>
            </strong>
            <p className="mt-2">Imersão prática para professores na era da Inteligência Artificial.</p>
          </div>
          <div className="flex items-center gap-2" aria-label="Redes sociais de Sanval Ebert">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Abrir ${label} de Sanval Ebert`}
                title={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-blue-500/15 hover:text-white"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <p>Uma iniciativa de Sanval Ebert · <a href="/politica-de-privacidade" className="underline transition hover:text-white">Política de Privacidade</a></p>
        </div>
      </footer>
    </main>
  );
}