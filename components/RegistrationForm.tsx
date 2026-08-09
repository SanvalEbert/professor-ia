"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const estados = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG",
  "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO",
];

const experiencias = ["Nenhuma", "Iniciante", "Intermediário", "Avançado"];

const fieldClass =
  "mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

export default function RegistrationForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const utm = useMemo(() => {
    if (typeof window === "undefined") return {};
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      origem: params.get("utm_source") || document.referrer || "direto",
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch("/api/inscricoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, ...utm }),
      });

      const result = await response.json();
      if (!response.ok) {
        setStatus("error");
        setMessage(result.error || "Não foi possível concluir sua inscrição. Tente novamente.");
        return;
      }

      setStatus("success");
      setMessage("Inscrição realizada com sucesso. Em breve você receberá as próximas orientações.");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
      setMessage("Não foi possível conectar ao serviço de inscrição. Tente novamente em instantes.");
    }
  }

  return (
    <div className="rounded-[2rem] border border-white/30 bg-white p-5 text-left text-ink shadow-2xl sm:p-7 md:p-9">
      <div className="mb-7">
        <p className="text-sm font-black uppercase tracking-[.14em] text-brand">Inscrição</p>
        <h3 className="mt-2 text-2xl font-black md:text-3xl">Professor IA: transforme sua prática docente com Inteligência Artificial</h3>
        <p className="mt-3 leading-7 text-slate-600">Por favor, preencha o formulário abaixo e logo confirmaremos a sua inscrição.</p>
      </div>

      {status === "success" ? (
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-center">
          <CheckCircle2 className="mx-auto text-emerald-600" size={38} />
          <p className="mt-3 font-black text-emerald-900">Inscrição confirmada!</p>
          <p className="mt-2 text-sm leading-6 text-emerald-800">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-5">
          <label className="font-bold text-slate-700">
            Nome completo <span className="text-red-500">*</span>
            <input name="nome_completo" type="text" required minLength={3} autoComplete="name" className={fieldClass} />
          </label>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="font-bold text-slate-700">
              WhatsApp <span className="text-red-500">*</span>
              <input name="whatsapp" type="tel" required minLength={8} autoComplete="tel" placeholder="(71) 99999-9999" className={fieldClass} />
            </label>
            <label className="font-bold text-slate-700">
              E-mail <span className="text-red-500">*</span>
              <input name="email" type="email" required autoComplete="email" placeholder="voce@exemplo.com" className={fieldClass} />
            </label>
          </div>

          <div className="grid gap-5 md:grid-cols-[1fr_.45fr]">
            <label className="font-bold text-slate-700">
              Cidade <span className="text-red-500">*</span>
              <input name="cidade" type="text" required minLength={2} autoComplete="address-level2" className={fieldClass} />
            </label>
            <label className="font-bold text-slate-700">
              Estado <span className="text-red-500">*</span>
              <select name="estado" required defaultValue="" autoComplete="address-level1" className={fieldClass}>
                <option value="" disabled>UF</option>
                {estados.map((uf) => <option key={uf} value={uf}>{uf}</option>)}
              </select>
            </label>
          </div>

          <label className="font-bold text-slate-700">
            Instituição de Ensino <span className="text-red-500">*</span>
            <input name="instituicao_ensino" type="text" required minLength={2} className={fieldClass} />
          </label>

          <fieldset>
            <legend className="font-bold text-slate-700">Experiência com IA <span className="text-red-500">*</span></legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {experiencias.map((nivel) => (
                <label key={nivel} className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50">
                  <input type="radio" name="experiencia_ia" value={nivel} required className="h-4 w-4 accent-blue-600" />
                  {nivel}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
            <input name="consentimento_lgpd" type="checkbox" value="true" required className="mt-1 h-4 w-4 shrink-0 accent-blue-600" />
            <span>Concordo com o uso dos meus dados para fins de inscrição e comunicação relacionados à Jornada Professor IA, conforme a Política de Privacidade.</span>
          </label>

          {status === "error" && (
            <p role="alert" className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{message}</p>
          )}

          <button type="submit" disabled={status === "sending"} className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-4 font-black text-white shadow-xl shadow-blue-200 transition hover:-translate-y-0.5 hover:shadow-2xl disabled:cursor-wait disabled:opacity-60">
            {status === "sending" ? "Enviando inscrição..." : "Confirmar minha inscrição gratuita"}
            {status !== "sending" && <ArrowRight size={19} className="transition group-hover:translate-x-1" />}
          </button>
        </form>
      )}
    </div>
  );
}
