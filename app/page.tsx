import Image from "next/image";
import RegistrationForm from "../components/RegistrationForm";
import Countdown from "../components/Countdown";
import {
  ArrowRight,
  BookOpen,
  Bot,
  BrainCircuit,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  FileCheck2,
  GraduationCap,
  Instagram,
  Layers3,
  Linkedin,
  MessageSquareText,
  PackageCheck,
  Rocket,
  Scale,
  Sparkles,
  Sprout,
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
    weekday: "Terça",
    dateTime: "2026-11-17",
    time: "20h às 21h",
    title: "IA na educação: fundamentos e possibilidades",
    text: "Explore usos concretos, limites e cuidados éticos. Esboce uma atividade pedagógica com IA.",
    outcome: "O esboço de uma atividade pedagógica com IA",
  },
  {
    number: "02",
    stage: "Experimentar",
    date: "18/11",
    weekday: "Quarta",
    dateTime: "2026-11-18",
    time: "20h às 21h",
    title: "Oficina: planejar, criar e avaliar com IA",
    text: "Desenvolva materiais, atividades e critérios de avaliação para sua realidade docente.",
    outcome: "Materiais e critérios de avaliação para a sua turma",
  },
  {
    number: "03",
    stage: "Aplicar",
    date: "19/11",
    weekday: "Quinta",
    dateTime: "2026-11-19",
    time: "20h às 21h",
    title: "Da ideia à aplicação: agentes e autoria docente",
    text: "Experimente agentes de IA e finalize uma proposta de aplicação na sua prática docente.",
    outcome: "Uma proposta pronta para aplicar nas suas aulas",
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

const audience = [
  [Sprout, "Nunca usou IA", "Você começa do zero, com exemplos da rotina docente e sem jargão técnico."],
  [Rocket, "Já usa, mas quer ir além", "Saia do uso pontual e passe a planejar, avaliar e criar com intenção pedagógica."],
  [PackageCheck, "Quer algo pronto para a sala", "Cada encontro termina com uma produção que você leva para as suas aulas."],
] as const;

const faq = [
  ["Quanto custa?", "Nada. A imersão é 100% gratuita e online."],
  [
    "Preciso ter experiência com IA?",
    "Não. A imersão acolhe desde quem nunca usou IA até quem já usa no dia a dia. Na inscrição, você informa seu nível para que os exemplos sejam ajustados à turma.",
  ],
  [
    "Quando e em que horário acontece?",
    "Nos dias 17, 18 e 19 de novembro de 2026 (terça, quarta e quinta-feira), das 20h às 21h, horário de Brasília. São três encontros de uma hora, ao vivo.",
  ],
  [
    "Como recebo o link dos encontros?",
    "Depois de se inscrever, você é direcionado ao grupo oficial do WhatsApp. É por lá que chegam os links das mentorias, materiais e avisos.",
  ],
  [
    "Preciso participar dos três dias?",
    "É o recomendado: o percurso foi pensado em sequência (compreender, experimentar e aplicar), e a proposta final é construída ao longo dos três encontros.",
  ],
  [
    "O que eu levo ao final?",
    "Uma proposta de atividade ou recurso pedagógico com IA, adaptada ao seu contexto, pronta para ser aplicada com seus estudantes.",
  ],
  // Para ativar, basta confirmar as respostas e remover o comentário:
  // ["Vou receber certificado?", "…"],
  // ["Os encontros ficam gravados?", "…"],
] as const;

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Professor IA Imersão na Prática Docente, voltar ao início">
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
            <a className="transition hover:text-brand" href="#jornada">Programação</a>
            <a className="transition hover:text-brand" href="#quem-conduz">Quem conduz</a>
            <a className="transition hover:text-brand" href="#duvidas">Dúvidas</a>
          </nav>
          <a href="#inscricao" className="rounded-full bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:shadow-xl">
            <span className="sm:hidden">Inscrever-se</span>
            <span className="hidden sm:inline">Participar gratuitamente</span>
          </a>
        </div>
      </header>

      <section id="inicio" className="relative isolate bg-gradient-to-br from-[#f5f8fd] via-white to-[#e2edff] pt-24 lg:min-h-screen">
        <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
        <div className="animate-pulse-soft pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-blue-300/35 blur-3xl" />
        <div className="animate-pulse-soft pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-sky-200/45 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-10 lg:grid-cols-[1.12fr_.88fr] lg:px-8 lg:pb-24 lg:pt-16">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Countdown />
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-brand shadow-sm backdrop-blur">
                <Sparkles size={16} aria-hidden="true" /> Imersão online e gratuita para professores
              </span>
            </div>
            <h1 className="text-balance mt-7 max-w-4xl text-5xl font-black leading-[.98] tracking-[-.045em] text-ink md:text-7xl lg:text-[5.25rem]">
              Imersão <span className="bg-gradient-to-r from-brand to-sky-500 bg-clip-text text-transparent">IA na Prática Docente.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Em três encontros de uma hora, você <strong className="font-bold text-slate-800">compreende, experimenta e aplica</strong> a IA no seu dia a dia de sala de aula e sai com uma proposta pedagógica pronta, com autoria e intencionalidade.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#inscricao" className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-4 font-extrabold text-white shadow-xl shadow-blue-200 transition hover:-translate-y-1 hover:shadow-2xl">
                Quero participar gratuitamente
                <ArrowRight size={19} className="transition group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-600">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600"><CalendarDays size={18} aria-hidden="true" /></span>
                <span>
                  17, 18 e 19 de novembro de 2026
                  <span className="block font-semibold text-slate-500">
                    <span className="whitespace-nowrap">20h às 21h</span> · horário de Brasília
                  </span>
                </span>
              </div>
            </div>
            <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
              {[["3", "encontros ao vivo"], ["1h", "por encontro"], ["R$ 0", "100% gratuita"]].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/80 bg-white/75 p-4 shadow-sm backdrop-blur">
                  <dt className="sr-only">{label}</dt>
                  <dd>
                    <strong className="block text-2xl font-black text-brand">{value}</strong>
                    <span className="text-xs font-semibold leading-5 text-slate-500 sm:text-sm">{label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[28rem]">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-[#e2b28f]/45 via-blue-300/35 to-blue-800/25 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.75rem] border border-white/70 bg-gradient-to-br from-blue-950 via-blue-800 to-[#c9a188] p-2.5 shadow-[0_30px_90px_rgba(15,35,81,.25)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.15rem] bg-[#b78b70]">
                <Image src="/sanval-imersao.webp" alt="Sanval Ebert, idealizador da Imersão IA na Prática Docente" fill priority sizes="(max-width: 640px) 22rem, 28rem" className="object-cover object-center" />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0d1e41]/90 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <p className="text-sm font-bold uppercase tracking-[.22em] text-blue-200">Quem conduz</p>
                  <p className="mt-2 text-3xl font-black">Sanval Ebert</p>
                  <p className="mt-1 text-sm text-slate-200">Doutor e pesquisador em IA aplicada à Educação</p>
                </div>
              </div>
            </div>
            <div className="animate-float absolute -left-8 top-16 hidden rounded-2xl border border-white bg-white/95 p-4 shadow-xl backdrop-blur sm:block">
              <GraduationCap className="text-brand" size={22} aria-hidden="true" />
              <p className="mt-2 text-sm font-extrabold">Prática docente</p>
            </div>
            <div className="animate-float absolute -right-6 bottom-28 hidden rounded-2xl border border-white bg-white/95 p-4 shadow-xl backdrop-blur sm:block [animation-delay:1.4s]">
              <Bot className="text-accent" size={22} aria-hidden="true" />
              <p className="mt-2 text-sm font-extrabold">Agentes de IA</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-ink py-20 text-white md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,.3),transparent_38%)]" />
        <div className="relative mx-auto max-w-5xl px-5 text-center lg:px-8">
          <p className="text-sm font-black uppercase tracking-[.25em] text-blue-300">Uma provocação necessária</p>
          <h2 className="text-balance mt-5 text-3xl font-black leading-tight md:text-5xl">Seus estudantes já estão usando IA. O desafio é transformar esse uso em aprendizagem.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">A tecnologia, sozinha, não transforma a educação. Professores preparados dão sentido pedagógico, estabelecem limites e criam novas possibilidades.</p>
        </div>
      </section>

      <section id="para-quem" className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-black uppercase tracking-[.18em] text-brand">Para quem é</p>
            <h2 className="text-balance mt-4 text-4xl font-black tracking-tight md:text-5xl">Feita para professores, em qualquer ponto da jornada com IA.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {audience.map(([Icon, title, text]) => (
              <article key={title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand shadow-sm"><Icon size={23} aria-hidden="true" /></span>
                <h3 className="mt-6 text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="beneficios" className="bg-gradient-to-b from-white to-blue-50 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 border-t border-slate-200 pt-20 md:pt-24 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="font-black uppercase tracking-[.18em] text-brand">Da curiosidade à prática</p>
              <h2 className="text-balance mt-4 text-4xl font-black tracking-tight md:text-5xl">IA como aliada do trabalho docente, com propósito, critério e autoria.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">A imersão conecta recursos de IA aos desafios concretos da docência, com experimentação e produção pedagógica.</p>
              <a href="#inscricao" className="mt-8 inline-flex items-center gap-2 font-extrabold text-brand transition hover:gap-3">
                Garantir minha vaga <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map(([Icon, title, text]) => (
                <article key={title} className="group rounded-[1.75rem] border border-blue-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white shadow-lg shadow-blue-200"><Icon size={22} aria-hidden="true" /></span>
                  <h3 className="mt-5 text-xl font-black">{title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="jornada" className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="font-black uppercase tracking-[.18em] text-brand">Programação da Imersão IA na Prática Docente</p>
              <h2 className="text-balance mt-4 text-4xl font-black tracking-tight md:text-5xl">Três encontros. Uma proposta pronta para as suas aulas.</h2>
            </div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 self-start rounded-full border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-bold text-blue-800 shadow-sm lg:self-auto">
              <CalendarDays size={17} className="shrink-0 text-brand" aria-hidden="true" />
              <span>17, 18 e 19/11/2026</span>
              <span className="text-blue-400" aria-hidden="true">·</span>
              <span className="whitespace-nowrap">20h às 21h</span>
            </div>
          </div>
          <ol className="relative mt-14 grid gap-6 lg:grid-cols-3">
            {meetings.map((meeting, index) => (
              <li key={meeting.number} className="relative flex flex-col overflow-hidden rounded-[2rem] border border-blue-800/20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 p-8 text-white shadow-xl shadow-blue-950/10">
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-sky-400/20 blur-3xl" />
                <div className="relative flex items-center justify-between">
                  <span className="text-6xl font-black text-blue-300/35" aria-hidden="true">{meeting.number}</span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.16em] text-blue-100">{meeting.stage}</span>
                </div>
                <div className="relative mt-6 inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-extrabold text-blue-100">
                  <CalendarDays size={16} aria-hidden="true" />
                  <span>{meeting.weekday},</span>
                  <time dateTime={meeting.dateTime}>{meeting.date}</time>
                  <span aria-hidden="true">·</span>
                  <span className="whitespace-nowrap">{meeting.time}</span>
                </div>
                <h3 className="relative mt-5 text-2xl font-black leading-tight">{meeting.title}</h3>
                <p className="relative mt-4 leading-7 text-blue-100">{meeting.text}</p>
                <div className="relative mt-auto pt-7">
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[.16em] text-sky-300">Você sai com</p>
                    <p className="mt-1.5 font-bold leading-6">{meeting.outcome}</p>
                  </div>
                </div>
                {index < meetings.length - 1 && <ChevronRight className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 text-blue-400 lg:block" size={34} aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="quem-conduz" className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div className="relative mx-auto w-full max-w-[24rem]">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-[#e8c0a2]/50 via-blue-200 to-blue-50 blur-2xl" />
            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border-8 border-white bg-slate-200 shadow-[0_30px_80px_rgba(18,48,99,.18)]">
              <Image src="/sanval-perfil.webp" alt="Sanval Ebert, professor e pesquisador em Inteligência Artificial aplicada à Educação" fill sizes="24rem" className="object-cover object-top" />
            </div>
          </div>
          <div>
            <p className="font-black uppercase tracking-[.18em] text-brand">Quem conduz</p>
            <h2 className="mt-4 text-5xl font-black tracking-tight">Sanval Ebert</h2>
            <p className="mt-6 text-xl font-bold leading-8 text-slate-800">Professor, coordenador acadêmico e pesquisador em Inteligência Artificial aplicada à Educação.</p>
            <p className="mt-5 text-lg leading-8 text-slate-600">Doutor em Difusão do Conhecimento, atua na integração entre tecnologias digitais, inovação educacional e formação docente.</p>
            <p className="mt-4 text-lg leading-8 text-slate-600">Durante a transformação digital da pandemia, dialogou e trabalhou com professores de diferentes regiões do Brasil. Nesta imersão, convida professores a explorar a IA e construir aplicações pedagógicas com intencionalidade, critério e autoria.</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Experiência em formação docente", "Pesquisa em IA e educação", "Atuação acadêmica e profissional", "Abordagem prática e ética"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 font-bold text-slate-700"><Check size={18} className="shrink-0 text-emerald-600" aria-hidden="true" />{item}</div>
              ))}
            </div>

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
                    <Icon size={18} className="shrink-0" aria-hidden="true" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="duvidas" className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.8fr_1.2fr] lg:gap-16 lg:px-8">
          <div>
            <p className="font-black uppercase tracking-[.18em] text-brand">Dúvidas frequentes</p>
            <h2 className="text-balance mt-4 text-4xl font-black tracking-tight md:text-5xl">Tudo o que você precisa saber antes de se inscrever.</h2>
          </div>
          <div className="divide-y divide-slate-200 rounded-[2rem] border border-slate-200 bg-white px-6 shadow-sm md:px-8">
            {faq.map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-extrabold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                  {question}
                  <ChevronDown size={20} className="shrink-0 text-brand transition group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="mt-3 leading-7 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="inscricao" className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-brand to-blue-700 py-20 text-white md:py-28">
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.82fr_1.18fr] lg:items-start lg:px-8">
          <div className="lg:sticky lg:top-28">
            <Countdown variant="dark" />
            <p className="mt-6 font-black uppercase tracking-[.18em] text-blue-200">Inscrição gratuita</p>
            <h2 className="text-balance mt-4 text-4xl font-black md:text-5xl">Dê o próximo passo para transformar a IA em uma aliada da sua prática docente.</h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">Garanta sua participação na Imersão IA na Prática Docente, de 17 a 19 de novembro de 2026, das 20h às 21h.</p>
            <div className="mt-8 space-y-4 text-sm font-bold text-blue-50">
              {["Participação gratuita", "Três mentorias de 1h, ao vivo", "Atividades práticas e produção pedagógica", "Links e materiais pelo grupo oficial do WhatsApp"].map((item) => (
                <div key={item} className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-full bg-white/10"><Check size={16} aria-hidden="true" /></span>{item}</div>
              ))}
            </div>
            <p className="mt-8 inline-flex items-center gap-2 text-sm text-blue-200">
              <Clock3 size={16} aria-hidden="true" /> Leva menos de 1 minuto.
            </p>
          </div>
          <RegistrationForm />
        </div>
      </section>

      <footer className="bg-ink px-5 py-12 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center text-sm md:flex-row md:text-left">
          <div>
            <strong className="inline-flex items-center gap-2 text-white">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-brand to-blue-800"><WandSparkles size={15} aria-hidden="true" /></span>
              <span className="text-lg font-black">Professor <span className="text-blue-400">IA</span></span>
            </strong>
            <p className="mt-2">Imersão IA na Prática Docente · formação gratuita para professores.</p>
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
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
          <p>Uma iniciativa de Sanval Ebert · <a href="/politica-de-privacidade" className="underline transition hover:text-white">Política de Privacidade</a></p>
        </div>
      </footer>
    </main>
  );
}
