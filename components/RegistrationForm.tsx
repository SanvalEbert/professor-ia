"use client";

import { FormEvent, useState } from "react";

const initialState = {
  nome: "",
  whatsapp: "",
  email: "",
  estado: "",
  instituicao: "",
  areaAtuacao: "",
  experienciaIa: "",
  motivacao: "",
  desafio: "",
};

export default function RegistrationForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const origem = new URLSearchParams(window.location.search).get("origem") ?? "direto";
    const response = await fetch("/api/inscricoes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, origem }),
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setForm(initialState);
  }

  if (status === "success") {
    return (
      <div className="card p-8 text-center">
        <div className="text-4xl">🎉</div>
        <h3 className="mt-3 text-2xl font-bold">Inscrição realizada!</h3>
        <p className="mt-3 text-slate-600">
          Você já faz parte da Jornada Professor IA. As orientações dos encontros serão enviadas para seu e-mail e WhatsApp.
        </p>
      </div>
    );
  }

  const update = (field: keyof typeof form, value: string) => setForm((current) => ({ ...current, [field]: value }));

  return (
    <form onSubmit={handleSubmit} className="card grid gap-4 p-6 md:grid-cols-2 md:p-8">
      <Field label="Nome completo" value={form.nome} onChange={(value) => update("nome", value)} required />
      <Field label="WhatsApp" value={form.whatsapp} onChange={(value) => update("whatsapp", value)} required />
      <Field label="E-mail" type="email" value={form.email} onChange={(value) => update("email", value)} required />
      <Field label="Estado" value={form.estado} onChange={(value) => update("estado", value)} required />
      <Field label="Instituição de ensino" value={form.instituicao} onChange={(value) => update("instituicao", value)} />

      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        Área de atuação
        <select className="rounded-xl border border-slate-300 bg-white p-3" value={form.areaAtuacao} onChange={(e) => update("areaAtuacao", e.target.value)} required>
          <option value="">Selecione</option>
          <option>Educação Básica</option>
          <option>Ensino Superior</option>
          <option>Educação Profissional</option>
          <option>Gestão Educacional</option>
          <option>Outra</option>
        </select>
      </label>

      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        Experiência atual com IA
        <select className="rounded-xl border border-slate-300 bg-white p-3" value={form.experienciaIa} onChange={(e) => update("experienciaIa", e.target.value)} required>
          <option value="">Selecione</option>
          <option>Nunca utilizei</option>
          <option>Já testei algumas ferramentas</option>
          <option>Utilizo ocasionalmente</option>
          <option>Já aplico na prática docente</option>
        </select>
      </label>

      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        Principal interesse
        <select className="rounded-xl border border-slate-300 bg-white p-3" value={form.motivacao} onChange={(e) => update("motivacao", e.target.value)} required>
          <option value="">Selecione</option>
          <option>Criar aulas e materiais</option>
          <option>Elaborar avaliações</option>
          <option>Produzir feedbacks</option>
          <option>Economizar tempo no planejamento</option>
          <option>Ética e desafios da IA</option>
          <option>Personalizar a aprendizagem</option>
        </select>
      </label>

      <label className="grid gap-2 text-sm font-semibold text-slate-700 md:col-span-2">
        Qual desafio da prática docente você gostaria de enfrentar com apoio da IA?
        <textarea className="min-h-28 rounded-xl border border-slate-300 p-3" value={form.desafio} onChange={(e) => update("desafio", e.target.value)} />
      </label>

      <label className="flex items-start gap-3 text-sm text-slate-600 md:col-span-2">
        <input type="checkbox" className="mt-1" required />
        Concordo com o uso dos dados para minha inscrição e para receber informações relacionadas à Jornada Professor IA.
      </label>

      <div className="md:col-span-2">
        <button className="cta w-full" disabled={status === "loading"}>
          {status === "loading" ? "Enviando..." : "Quero participar gratuitamente"}
        </button>
        {status === "error" && <p className="mt-3 text-center text-sm text-red-700">Não foi possível concluir agora. Verifique os dados e tente novamente.</p>}
      </div>
    </form>
  );
}

function Field({ label, value, onChange, type = "text", required = false }: { label: string; value: string; onChange: (value: string) => void; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-700">
      {label}
      <input className="rounded-xl border border-slate-300 p-3" type={type} value={value} onChange={(e) => onChange(e.target.value)} required={required} />
    </label>
  );
}
