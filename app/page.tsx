"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowRight, Bot, BrainCircuit, Check, GraduationCap, Scale, Sparkles } from "lucide-react";

const profileImage = "https://avatars.githubusercontent.com/u/115511942?v=4";

const meetings = [
  { number: "01", title: "Inteligência Artificial e a nova realidade da educação", text: "Fundamentos, possibilidades, limites e desafios éticos e pedagógicos." },
  { number: "02", title: "IA na prática: aulas, materiais e avaliações", text: "Planejamento, atividades, questões, rubricas e feedbacks com propósito pedagógico." },
  { number: "03", title: "Professor IA: agentes e novas possibilidades", text: "Agentes de IA, automação, personalização da aprendizagem e futuro da docência." }
];

export default function Home() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const origin = useMemo(() => typeof window === "undefined" ? "direto" : new URLSearchParams(window.location.search).get("origem") || "direto", []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step === 1) { setStep(2); return; }
    setStatus("loading");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    const response = await fetch("/api/inscricoes", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...payload, origem: origin }) });
    setStatus(response.ok ? "success" : "error");
    if (response.ok) window.location.href = "/confirmacao";
  }

  return (
    <main className="overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#inicio" className="font-black tracking-tight text-ink">PROFESSOR <span className="text-brand">IA</span></a>
          <a href="#inscricao" className="rounded-full bg-accent px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-200">Participar gratuitamente</a>
        </div>
      </header>

      <section id="inicio" className="relative bg-gradient-to-br from-slate-50 via-white to-indigo-50 pt-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-brand"><Sparkles size={16}/> Jornada online e gratuita</span>
            <h1 className="mt-7 text-5xl font-black leading-[1.05] tracking-tight text-ink md:text-7xl">A IA já chegou à educação.</h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600">Prepare-se para compreender, experimentar e aplicar Inteligência Artificial na criação de aulas, materiais, avaliações e novas experiências de aprendizagem.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#inscricao" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 font-bold text-white shadow-xl shadow-orange-200">Quero participar gratuitamente <ArrowRight size={19}/></a>
              <span className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-600"><Check size={18} className="text-brand"/> 3 encontros para professores de todo o Brasil</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-indigo-300 to-orange-200 opacity-35 blur-2xl"/>
            <img src={profileImage} alt="Sanval Ebert, idealizador do Professor IA" className="relative aspect-square w-full rounded-[2.5rem] object-cover shadow-soft"/>
            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl"><strong>Sanval Ebert</strong><p className="text-sm text-slate-600">Pesquisador em IA aplicada à Educação</p></div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="text-sm font-bold uppercase tracking-[.25em] text-indigo-300">Uma nova realidade</p>
          <h2 className="mt-5 text-3xl font-black md:text-5xl">Seus estudantes já estão usando IA. Como nós, professores, vamos utilizá-la?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">A tecnologia, sozinha, não transforma a educação. São os professores que dão significado ao seu uso.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-3xl"><p className="font-bold text-brand">O que você vai desenvolver</p><h2 className="mt-3 text-4xl font-black tracking-tight">IA como aliada da prática docente</h2></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[[BrainCircuit,"Planejamento","Organize aulas e experiências com mais intencionalidade."],[GraduationCap,"Materiais","Crie atividades e recursos alinhados aos objetivos de aprendizagem."],[Bot,"Avaliação","Elabore questões, rubricas e feedbacks com apoio da IA."],[Scale,"Ética","Discuta autoria, privacidade, regulação e pensamento crítico."]].map(([Icon,title,text]) => { const C=Icon as typeof Bot; return <article key={String(title)} className="rounded-3xl border border-slate-200 p-6 shadow-sm"><C className="text-brand"/><h3 className="mt-5 text-xl font-bold">{String(title)}</h3><p className="mt-2 leading-7 text-slate-600">{String(text)}</p></article>})}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-5"><p className="font-bold text-brand">Jornada Professor IA</p><h2 className="mt-3 text-4xl font-black">Três encontros. Uma transformação prática.</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">{meetings.map(m => <article key={m.number} className="rounded-3xl bg-white p-7 shadow-soft"><span className="text-5xl font-black text-indigo-100">{m.number}</span><h3 className="mt-5 text-2xl font-bold">{m.title}</h3><p className="mt-4 leading-7 text-slate-600">{m.text}</p></article>)}</div>
        </div>
      </section>

      <section className="py-20"><div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2"><img src={profileImage} alt="Sanval Ebert" className="aspect-square w-full rounded-[2rem] object-cover shadow-soft"/><div><p className="font-bold text-brand">Quem conduz</p><h2 className="mt-3 text-4xl font-black">Sanval Ebert</h2><p className="mt-5 text-lg leading-8 text-slate-600">Doutor em Difusão do Conhecimento, professor, coordenador acadêmico e pesquisador em Inteligência Artificial aplicada à Educação. Atua na integração entre tecnologias digitais, inovação educacional e formação docente.</p><p className="mt-4 leading-7 text-slate-600">Depois de dialogar com professores de diferentes regiões do Brasil durante a transformação digital da pandemia, inicia uma nova jornada: preparar docentes para a era da IA.</p></div></div></section>

      <section id="inscricao" className="bg-gradient-to-br from-indigo-950 to-brand py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr]"><div><p className="font-bold text-indigo-200">Inscrição gratuita</p><h2 className="mt-3 text-4xl font-black">Faça parte da primeira Jornada Professor IA.</h2><p className="mt-5 text-lg leading-8 text-indigo-100">Preencha seus dados. As informações de acesso aos encontros serão enviadas por e-mail e WhatsApp.</p></div>
          <form onSubmit={submit} className="rounded-3xl bg-white p-6 text-ink shadow-2xl md:p-8">
            <div className="mb-6 flex gap-2"><span className={`h-2 flex-1 rounded ${step>=1?"bg-brand":"bg-slate-200"}`}/><span className={`h-2 flex-1 rounded ${step>=2?"bg-brand":"bg-slate-200"}`}/></div>
            {step===1 ? <div className="grid gap-4 md:grid-cols-2"><Field name="nome" label="Nome completo"/><Field name="whatsapp" label="WhatsApp"/><Field name="email" label="E-mail" type="email"/><Field name="estado" label="Estado"/></div> : <div className="grid gap-4"><Field name="instituicao" label="Instituição onde atua"/><Select name="area_atuacao" label="Área de atuação" options={["Educação Básica","Ensino Superior","Educação Profissional","Gestão educacional","Outro"]}/><Select name="experiencia_ia" label="Experiência com IA" options={["Nunca utilizei","Já conheço algumas ferramentas","Utilizo ocasionalmente","Já aplico na prática docente"]}/><Field name="desafio" label="Maior desafio que a IA pode ajudar a enfrentar"/><label className="flex items-start gap-3 text-sm text-slate-600"><input required name="consentimento_lgpd" type="checkbox" className="mt-1"/>Autorizo o uso dos dados para comunicações relacionadas à Jornada Professor IA, conforme a política de privacidade.</label></div>}
            <button disabled={status==="loading"} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 font-bold text-white">{step===1?"Continuar":"Garantir minha vaga"}<ArrowRight size={18}/></button>
            {status==="error" && <p className="mt-3 text-sm text-red-600">Não foi possível concluir. Tente novamente.</p>}
          </form>
        </div>
      </section>

      <footer className="bg-ink px-5 py-10 text-center text-sm text-slate-400"><strong className="text-white">PROFESSOR <span className="text-indigo-400">IA</span></strong><p className="mt-3">Uma iniciativa de Sanval Ebert · <a href="/politica-de-privacidade" className="underline">Política de Privacidade</a></p></footer>
      <a href="#inscricao" className="fixed bottom-4 left-4 right-4 z-40 rounded-full bg-accent px-5 py-4 text-center font-bold text-white shadow-2xl md:hidden">Quero participar gratuitamente</a>
    </main>
  );
}

function Field({name,label,type="text"}:{name:string;label:string;type?:string}) { return <label className="grid gap-2 text-sm font-semibold">{label}<input required name={name} type={type} className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand focus:ring-2 focus:ring-indigo-100"/></label> }
function Select({name,label,options}:{name:string;label:string;options:string[]}) { return <label className="grid gap-2 text-sm font-semibold">{label}<select required name={name} defaultValue="" className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand"><option value="" disabled>Selecione</option>{options.map(o=><option key={o}>{o}</option>)}</select></label> }
