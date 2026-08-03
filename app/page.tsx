"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CalendarDays,
  Check,
  ChevronRight,
  FileCheck2,
  GraduationCap,
  Layers3,
  MessageSquareText,
  Scale,
  ShieldCheck,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const meetings = [
  {
    number: "01",
    stage: "Compreender",
    title: "Inteligência Artificial e a nova realidade da educação",
    text: "Fundamentos, possibilidades, limites e desafios éticos e pedagógicos.",
  },
  {
    number: "02",
    stage: "Experimentar",
    title: "IA na prática: aulas, materiais e avaliações",
    text: "Planejamento, atividades, questões, rubricas e feedbacks com propósito pedagógico.",
  },
  {
    number: "03",
    stage: "Aplicar",
    title: "Professor IA: agentes e novas possibilidades",
    text: "Agentes de IA, automação, personalização da aprendizagem e futuro da docência.",
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

type FormValues = {
  nome: string;
  whatsapp: string;
  email: string;
  estado: string;
  instituicao: string;
  area_atuacao: string;
  experiencia_ia: string;
  desafio: string;
  consentimento_lgpd: boolean;
};

const initialValues: FormValues = {
  nome: "",
  whatsapp: "",
  email: "",
  estado: "",
  instituicao: "",
  area_atuacao: "",
  experiencia_ia: "",
  desafio: "",
  consentimento_lgpd: false,
};

export default function Home() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [values, setValues] = useState<FormValues>(initialValues);
  const origin = useMemo(
    () =>
      typeof window === "undefined"
        ? "direto"
        : new URLSearchParams(window.location.search).get("origem") || "direto",
    [],
  );

  function updateValue(name: keyof FormValues, value: string | boolean) {
    setValues((current) => ({ ...current, [name]: value }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step === 1) {
      setStep(2);
      document.querySelector("#inscricao")?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch("/api/inscricoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, origem: origin }),
      });
      if (!response.ok) throw new Error("Não foi possível concluir a inscrição.");
      setStatus("success");
      window.location.href = "/confirmacao";
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="overflow-hidden bg-white text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Professor IA - início">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-brand to-indigo-700 text-white shadow-lg shadow-indigo-200">
              <WandSparkles size={19} />
            </span>
            <span className="font-black tracking-tight">PROFESSOR <span className="text-brand">IA</span></span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex" aria-label="Navegação principal">
            <a className="transition hover:text-brand" href="#beneficios">O que você vai aprender</a>
            <a className="transition hover:text-brand" href="#jornada">Jornada</a>
            <a className="transition hover:text-brand" href="#quem-conduz">Quem conduz</a>
          </nav>
          <a href="#inscricao" className="rounded-full bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:shadow-xl">
            Participar gratuitamente
          </a>
        </div>
      </header>

      <section id="inicio" className="relative isolate min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 pt-28">
        <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
        <div className="animate-pulse-soft pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-indigo-300/35 blur-3xl" />
        <div className="animate-pulse-soft pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-orange-200/45 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-14 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:pb-28 lg:pt-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-sm font-bold text-brand shadow-sm backdrop-blur">
              <Sparkles size={16} /> Jornada online e gratuita para professores
            </span>
            <h1 className="text-balance mt-7 max-w-4xl text-5xl font-black leading-[.98] tracking-[-.045em] text-ink md:text-7xl lg:text-[5.25rem]">
              A IA já transforma a educação. <span className="bg-gradient-to-r from-brand to-violet-500 bg-clip-text text-transparent">Prepare-se para conduzir essa mudança.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Compreenda, experimente e aplique Inteligência Artificial na criação de aulas, materiais, avaliações, feedbacks e novas experiências de aprendizagem.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#inscricao" className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-4 font-extrabold text-white shadow-xl shadow-orange-200 transition hover:-translate-y-1 hover:shadow-2xl">
                Quero participar gratuitamente
                <ArrowRight size={19} className="transition group-hover:translate-x-1" />
              </a>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-600">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-50 text-emerald-600"><Check size={18} /></span>
                3 encontros · online · para todo o Brasil
              </div>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
              {[["3", "encontros práticos"], ["100%", "online e gratuito"], ["1", "comunidade docente"]].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/80 bg-white/75 p-4 shadow-sm backdrop-blur">
                  <strong className="block text-2xl font-black text-brand">{value}</strong>
                  <span className="text-xs font-semibold leading-5 text-slate-500 sm:text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[34rem]">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-indigo-300/55 via-violet-200/30 to-orange-200/60 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.75rem] border border-white/80 bg-white p-3 shadow-[0_30px_90px_rgba(30,41,59,.22)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.15rem] bg-slate-100">
                <Image src="/San_10.jpg" alt="Sanval Ebert, idealizador do Professor IA" fill priority sizes="(max-width: 1024px) 90vw, 42vw" className="object-cover object-top" />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/75 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <p className="text-sm font-bold uppercase tracking-[.22em] text-indigo-200">Quem conduz</p>
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,.3),transparent_38%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.7fr_1.3fr] lg:items-center lg:px-8">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/10 text-indigo-300">
            <Sparkles size={34} />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[.25em] text-indigo-300">Uma provocação necessária</p>
            <h2 className="text-balance mt-5 text-3xl font-black leading-tight md:text-5xl">Seus estudantes já estão usando IA. O desafio é transformar esse uso em aprendizagem.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">A tecnologia, sozinha, não transforma a educação. Professores preparados dão sentido pedagógico, estabelecem limites e criam novas possibilidades.</p>
          </div>
        </div>
      </section>

      <section id="beneficios" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-black uppercase tracking-[.18em] text-brand">Da curiosidade à prática</p>
            <h2 className="text-balance mt-4 text-4xl font-black tracking-tight md:text-5xl">IA como aliada do trabalho docente — com propósito, critério e autoria.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">A jornada conecta recursos de IA às situações que fazem parte da rotina de professores.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map(([Icon, title, text], index) => (
              <article key={title} className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl">
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-50 text-brand transition group-hover:bg-brand group-hover:text-white"><Icon size={23} /></span>
                  <span className="text-sm font-black text-slate-300">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-2xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="jornada" className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="font-black uppercase tracking-[.18em] text-brand">Jornada Professor IA</p>
              <h2 className="text-balance mt-4 text-4xl font-black tracking-tight md:text-5xl">Três encontros. Uma progressão pedagógica.</h2>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm">
              <CalendarDays size={17} className="text-brand" /> Datas divulgadas aos inscritos
            </div>
          </div>
          <div className="relative mt-14 grid gap-6 lg:grid-cols-3">
            {meetings.map((meeting, index) => (
              <article key={meeting.number} className="relative rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-6xl font-black text-indigo-100">{meeting.number}</span>
                  <span className="rounded-full bg-indigo-50 px-4 py-2 text-xs font-black uppercase tracking-[.16em] text-brand">{meeting.stage}</span>
                </div>
                <h3 className="mt-7 text-2xl font-black leading-tight">{meeting.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{meeting.text}</p>
                {index < meetings.length - 1 && <ChevronRight className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 text-indigo-300 lg:block" size={34} />}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="quem-conduz" className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-indigo-200 to-orange-100 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl">
              <Image src="/San_10.jpg" alt="Sanval Ebert" fill sizes="(max-width: 1024px) 90vw, 40vw" className="object-cover object-top" />
            </div>
          </div>
          <div>
            <p className="font-black uppercase tracking-[.18em] text-brand">Quem conduz</p>
            <h2 className="mt-4 text-5xl font-black tracking-tight">Sanval Ebert</h2>
            <p className="mt-6 text-xl font-bold leading-8 text-slate-800">Professor, coordenador acadêmico e pesquisador em Inteligência Artificial aplicada à Educação.</p>
            <p className="mt-5 text-lg leading-8 text-slate-600">Doutor em Difusão do Conhecimento, atua na integração entre tecnologias digitais, inovação educacional e formação docente.</p>
            <p className="mt-4 text-lg leading-8 text-slate-600">Durante a transformação digital da pandemia, dialogou e trabalhou com professores de diferentes regiões do Brasil. Agora, retoma essa experiência em uma nova jornada: preparar docentes para compreender e incorporar a IA com intencionalidade pedagógica.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Experiência em formação docente", "Pesquisa em IA e educação", "Atuação acadêmica e profissional", "Abordagem prática e ética"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 font-bold text-slate-700"><Check size={18} className="shrink-0 text-emerald-600" />{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="inscricao" className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-brand to-violet-700 py-20 text-white md:py-28">
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-orange-300/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:px-8">
          <div className="lg:sticky lg:top-28">
            <p className="font-black uppercase tracking-[.18em] text-indigo-200">Inscrição gratuita</p>
            <h2 className="text-balance mt-4 text-4xl font-black md:text-5xl">Faça parte da primeira Jornada Professor IA.</h2>
            <p className="mt-6 text-lg leading-8 text-indigo-100">Preencha seus dados. As informações de acesso serão enviadas por e-mail e WhatsApp.</p>
            <div className="mt-8 space-y-4 text-sm font-bold text-indigo-50">
              {["Participação gratuita", "Encontros online", "Conteúdo voltado à prática docente", "Dados tratados conforme a LGPD"].map((item) => (
                <div key={item} className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-full bg-white/10"><Check size={16} /></span>{item}</div>
              ))}
            </div>
          </div>

          <form onSubmit={submit} className="rounded-[2rem] border border-white/70 bg-white p-6 text-ink shadow-2xl md:p-9" noValidate={false}>
            <div className="mb-8 flex items-center justify-between gap-5">
              <div>
                <p className="text-sm font-black uppercase tracking-[.14em] text-brand">Etapa {step} de 2</p>
                <h3 className="mt-2 text-2xl font-black">{step === 1 ? "Seus dados de contato" : "Conheça um pouco mais sobre você"}</h3>
              </div>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-indigo-50 font-black text-brand">{step}/2</span>
            </div>
            <div className="mb-8 flex gap-2" aria-hidden="true">
              <span className="h-2 flex-1 rounded-full bg-brand" />
              <span className={`h-2 flex-1 rounded-full transition ${step >= 2 ? "bg-brand" : "bg-slate-200"}`} />
            </div>

            {step === 1 ? (
              <div className="grid gap-5 md:grid-cols-2">
                <Field name="nome" label="Nome completo" value={values.nome} onChange={updateValue} autoComplete="name" />
                <Field name="whatsapp" label="WhatsApp" value={values.whatsapp} onChange={updateValue} autoComplete="tel" inputMode="tel" placeholder="(71) 99999-9999" />
                <Field name="email" label="E-mail" type="email" value={values.email} onChange={updateValue} autoComplete="email" />
                <Field name="estado" label="Estado" value={values.estado} onChange={updateValue} autoComplete="address-level1" placeholder="Ex.: Bahia" />
              </div>
            ) : (
              <div className="grid gap-5">
                <Field name="instituicao" label="Instituição onde atua" value={values.instituicao} onChange={updateValue} />
                <Select name="area_atuacao" label="Área de atuação" value={values.area_atuacao} onChange={updateValue} options={["Educação Básica", "Ensino Superior", "Educação Profissional", "Gestão educacional", "Outro"]} />
                <Select name="experiencia_ia" label="Experiência com IA" value={values.experiencia_ia} onChange={updateValue} options={["Nunca utilizei", "Já conheço algumas ferramentas", "Utilizo ocasionalmente", "Já aplico na prática docente"]} />
                <Field name="desafio" label="Maior desafio que a IA pode ajudar a enfrentar" value={values.desafio} onChange={updateValue} />
                <label className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                  <input required name="consentimento_lgpd" type="checkbox" checked={values.consentimento_lgpd} onChange={(event) => updateValue("consentimento_lgpd", event.target.checked)} className="mt-1 h-4 w-4 accent-indigo-600" />
                  <span>Autorizo o uso dos dados para comunicações relacionadas à Jornada Professor IA, conforme a <a href="/politica-de-privacidade" className="font-bold text-brand underline">Política de Privacidade</a>.</span>
                </label>
              </div>
            )}

            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row">
              {step === 2 && <button type="button" onClick={() => setStep(1)} className="rounded-full border border-slate-300 px-6 py-4 font-bold text-slate-700 transition hover:bg-slate-50">Voltar</button>}
              <button disabled={status === "loading"} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 font-extrabold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60">
                {status === "loading" ? "Enviando..." : step === 1 ? "Continuar" : "Garantir minha vaga"}<ArrowRight size={18} />
              </button>
            </div>
            {status === "error" && <p role="alert" className="mt-4 rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700">Não foi possível concluir a inscrição. Verifique os dados e tente novamente.</p>}
            <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-slate-500"><ShieldCheck size={15} /> Seus dados serão utilizados somente para comunicações relacionadas à jornada.</p>
          </form>
        </div>
      </section>

      <footer className="bg-ink px-5 py-12 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center text-sm md:flex-row md:text-left">
          <div><strong className="text-white">PROFESSOR <span className="text-indigo-400">IA</span></strong><p className="mt-2">Formação docente para a era da Inteligência Artificial.</p></div>
          <p>Uma iniciativa de Sanval Ebert · <a href="/politica-de-privacidade" className="underline transition hover:text-white">Política de Privacidade</a></p>
        </div>
      </footer>

      <a href="#inscricao" className="fixed bottom-4 left-4 right-4 z-40 rounded-full bg-accent px-5 py-4 text-center font-extrabold text-white shadow-2xl md:hidden">Quero participar gratuitamente</a>
    </main>
  );
}

type FieldProps = {
  name: keyof FormValues;
  label: string;
  value: string;
  onChange: (name: keyof FormValues, value: string | boolean) => void;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel" | "url" | "numeric" | "decimal" | "search" | "none";
};

function Field({ name, label, value, onChange, type = "text", placeholder, autoComplete, inputMode }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-bold text-slate-700">
      {label}
      <input required name={name} value={value} onChange={(event) => onChange(name, event.target.value)} type={type} placeholder={placeholder} autoComplete={autoComplete} inputMode={inputMode} className="rounded-2xl border border-slate-300 bg-white px-4 py-3.5 font-normal outline-none transition placeholder:text-slate-400 focus:border-brand focus:ring-4 focus:ring-indigo-100" />
    </label>
  );
}

function Select({ name, label, options, value, onChange }: { name: keyof FormValues; label: string; options: string[]; value: string; onChange: (name: keyof FormValues, value: string | boolean) => void }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-slate-700">
      {label}
      <select required name={name} value={value} onChange={(event) => onChange(name, event.target.value)} className="rounded-2xl border border-slate-300 bg-white px-4 py-3.5 font-normal outline-none transition focus:border-brand focus:ring-4 focus:ring-indigo-100">
        <option value="" disabled>Selecione</option>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}
