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
