"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Pause, Play, RotateCcw, X } from "lucide-react";

const AUDIO_SOURCE = "/audio/bia-imersao.wav";

const transcript = [
  "Seus alunos já estão usando Inteligência Artificial. E você? Já está usando essa tecnologia em suas aulas? Ensinar nunca foi tão empolgante!",
  "Eu sou Mia, assistente virtual do professor Sanval Ebert, especialista em Inteligência Artificial e Educação. E tenho um convite especial para você: Imersão IA para Professores!",
  "Serão três encontros online e gratuitos, nos dias 17, 18 e 19 de novembro, às 20 horas.",
  "Você vai descobrir como usar a IA para planejar aulas, produzir conteúdos, criar atividades, avaliar a aprendizagem e até desenvolver agentes inteligentes!",
  "Transforme sua prática docente com Inteligência Artificial! Garanta sua participação! Clique em Fazer inscrição gratuita aqui no site.",
  "A educação está mudando. Transforme também a sua prática docente! Clique em Fazer inscrição gratuita!",
];

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const total = Math.floor(seconds);
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
}

/**
 * Mensagem de boas-vindas. O painel aparece sozinho, mas o áudio só começa
 * depois de uma interação real, respeitando as políticas de autoplay.
 */
export default function MiaAssistant() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [finished, setFinished] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(true);
      // A mensagem de boas-vindas abre automaticamente; o áudio exige um clique.
      setOpen(true);
    }, 1700);
    return () => window.clearTimeout(timer);
  }, []);

  const close = () => {
    audioRef.current?.pause();
    setPlaying(false);
    setOpen(false);
    try {
      window.sessionStorage.setItem("mia-assistente-fechada", "sim");
    } catch {
      // O componente continua funcionando se o armazenamento estiver desativado.
    }
  };

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) {
      audio.pause();
      return;
    }

    if (finished) {
      audio.currentTime = 0;
      setFinished(false);
    }

    try {
      setError("");
      await audio.play();
    } catch {
      setError("O áudio não pôde ser reproduzido. Você pode ler a mensagem logo abaixo.");
    }
  };

  return (
    <aside className={`bia-widget fixed left-3 z-[56] w-[min(19rem,calc(100vw-1.5rem))] sm:left-5 ${visible ? "opacity-100" : "pointer-events-none opacity-0"}`} aria-label="Mia, assistente virtual da imersão">
      <audio
        ref={audioRef}
        src={AUDIO_SOURCE}
        preload="metadata"
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          setPlaying(false);
          setFinished(true);
        }}
        onError={() => setError("Não foi possível carregar o áudio. Leia a mensagem abaixo.")}
      />

      {open && (
        <div id="mia-painel" className="bia-panel mb-2 overflow-hidden rounded-[1.25rem] border border-blue-100 bg-white shadow-[0_18px_68px_rgba(11,31,76,.30)]" role="region" aria-label="Mensagem de boas-vindas da Mia">
          <div className="relative overflow-hidden bg-gradient-to-r from-[#0b2051] via-[#1245af] to-[#2563eb] px-3 pb-3 pt-3 text-white">
            <div className="pointer-events-none absolute -right-10 -top-20 h-40 w-40 rounded-full bg-sky-300/20 blur-2xl" />
            <div className="relative flex items-start gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-blue-50 ring-2 ring-white/40">
                <Image src="/mia-seal.svg" width={48} height={48} alt="" aria-hidden="true" className="h-12 w-12" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-[.16em] text-blue-200">Assistente virtual</p>
                <h2 className="text-lg font-black">Oi, eu sou a Mia!</h2>
                <p className="mt-1 text-xs leading-5 text-blue-50">Tenho um convite especial para você, professor(a).</p>
              </div>
              <button type="button" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 transition hover:bg-white/25 focus-visible:outline-white" onClick={close} aria-label="Fechar mensagem da Mia">
                <X size={18} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="max-h-[min(58dvh,25rem)] space-y-2.5 overflow-y-auto px-3 py-3 text-slate-800">
            <p className="text-base font-extrabold leading-snug text-[#0b2051]">Seus alunos já estão usando IA. E você?</p>
            <p className="text-xs leading-5 text-slate-600">Ouça o recado da Mia sobre a Imersão IA para Professores, gratuita e online.</p>

            <div className="flex items-center gap-3">
              <button type="button" onClick={togglePlayback} className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700" aria-label={playing ? "Pausar mensagem da Mia" : finished ? "Ouvir a mensagem da Mia novamente" : "Ouvir mensagem da Mia"}>
                {playing ? <Pause size={18} aria-hidden="true" /> : finished ? <RotateCcw size={17} aria-hidden="true" /> : <Play size={17} aria-hidden="true" />}
                {playing ? "Pausar" : finished ? "Ouvir novamente" : "Ouvir a Mia"}
              </button>
              <span className="shrink-0 text-xs font-semibold tabular-nums text-slate-500">{formatTime(currentTime)} / {formatTime(duration)}</span>
            </div>

            <div role="progressbar" aria-label="Progresso da mensagem da Mia" aria-valuemin={0} aria-valuemax={100} aria-valuenow={duration ? Math.min(100, Math.round(currentTime / duration * 100)) : 0} className="h-1.5 overflow-hidden rounded-full bg-blue-100">
              <div className="h-full rounded-full bg-blue-600 transition-[width]" style={{ width: `${duration ? Math.min(100, currentTime / duration * 100) : 0}%` }} />
            </div>
            {error && <p className="rounded-lg bg-amber-50 p-2 text-xs text-amber-900" role="alert">{error}</p>}
            <p className="text-xs font-medium text-slate-500" aria-live="polite">{finished ? "Mensagem concluída. Você pode ouvi-la novamente." : playing ? "Mia está falando…" : "A reprodução começa quando você tocar em Ouvir a Mia."}</p>

            <a href="#inscricao" onClick={close} className="flex min-h-11 items-center justify-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-2.5 text-sm font-bold text-blue-800 transition hover:bg-blue-100">
              Fazer inscrição gratuita <ArrowRight size={16} aria-hidden="true" />
            </a>

            <details className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
              <summary className="cursor-pointer text-xs font-bold text-slate-700">Ler a mensagem completa</summary>
              <div className="mt-2 space-y-2 text-xs leading-5 text-slate-600">
                {transcript.map((line, index) => <p key={index}>{line}</p>)}
                <p className="font-semibold text-blue-700">Você já está no site: use o botão de inscrição acima.</p>
              </div>
            </details>
          </div>
        </div>
      )}

      <button
        type="button"
        aria-expanded={open}
        aria-controls="mia-painel"
        aria-label={open ? "Recolher a mensagem da Mia" : "Abrir a mensagem de áudio da Mia"}
        onClick={() => { if (open) close(); else setOpen(true); }}
        className="bia-launcher mia-launcher group relative inline-flex min-h-[4.25rem] max-w-full items-center gap-2.5 rounded-full border border-blue-200 bg-white px-2 py-1.5 pr-4 text-left shadow-[0_10px_34px_rgba(13,49,119,.20)] transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-[0_14px_38px_rgba(13,49,119,.27)]"
      >
        <span className="mia-avatar relative grid h-12 w-12 shrink-0 place-items-center rounded-full bg-blue-50 ring-2 ring-blue-100" aria-hidden="true">
          <Image src="/mia-seal.svg" width={48} height={48} alt="" className="h-12 w-12" />
        </span>
        <span className="min-w-0 leading-tight">
          <span className="block whitespace-nowrap text-sm font-extrabold tracking-tight text-blue-800">Fale com a Mia</span>
          <span className="mt-0.5 block whitespace-nowrap text-[11px] font-semibold text-slate-500">Assistente educacional</span>
        </span>
        <span className="mia-sparkle pointer-events-none absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full bg-sky-400 ring-[3px] ring-white" aria-hidden="true" />
      </button>
    </aside>
  );
}
