"use client";

import { useEffect, useState } from "react";
import { countdownLabel } from "../lib/countdown";

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
