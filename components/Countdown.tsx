"use client";

import { useEffect, useState } from "react";

// 17/11/2026 às 20h e 19/11/2026 às 21h, horário de Brasília (UTC-3).
export const EVENT_START = Date.parse("2026-11-17T20:00:00-03:00");
export const EVENT_END = Date.parse("2026-11-19T21:00:00-03:00");

const DAY = 24 * 60 * 60 * 1000;

function brasiliaDay(timestamp: number) {
  return Math.floor((timestamp - 3 * 60 * 60 * 1000) / DAY);
}

export function countdownLabel(now: number) {
  if (now >= EVENT_END) return { tone: "ended", text: "Esta edição foi encerrada" } as const;
  if (now >= EVENT_START) return { tone: "live", text: "Imersão em andamento · hoje às 20h" } as const;

  const days = brasiliaDay(EVENT_START) - brasiliaDay(now);
  if (days <= 0) return { tone: "soon", text: "Começa hoje, às 20h" } as const;
  if (days === 1) return { tone: "soon", text: "Começa amanhã, às 20h" } as const;
  return { tone: days <= 7 ? "soon" : "open", text: `Começa em ${days} dias · inscrições abertas` } as const;
}

export default function Countdown({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 60 * 1000);
    return () => window.clearInterval(id);
  }, []);

  // Evita divergência entre servidor e navegador: o texto só aparece após a hidratação.
  if (now === null) return <span className="inline-block h-9" aria-hidden="true" />;

  const { tone, text } = countdownLabel(now);
  const dot = tone === "ended" ? "bg-slate-400" : tone === "open" ? "bg-emerald-500" : "bg-amber-500";
  const styles =
    variant === "dark"
      ? "border-white/20 bg-white/10 text-white"
      : "border-slate-200 bg-white text-slate-800 shadow-sm";

  return (
    <span role="status" className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm font-extrabold ${styles}`}>
      <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
        {tone !== "ended" && <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${dot}`} />}
        <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${dot}`} />
      </span>
      {text}
    </span>
  );
}
