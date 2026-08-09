"use client";

import Script from "next/script";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    VLibras?: {
      Widget: new (url: string) => unknown;
    };
    __professorIaVLibrasLoaded?: boolean;
  }
}

export default function AccessibilityTools() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function initializeVLibras() {
    if (!window.VLibras || window.__professorIaVLibrasLoaded) return;
    new window.VLibras.Widget("https://vlibras.gov.br/app");
    window.__professorIaVLibrasLoaded = true;
  }

  return (
    <>
      <Script
        id="vlibras-plugin"
        src="https://vlibras.gov.br/app/vlibras-plugin.js"
        strategy="afterInteractive"
        onLoad={initializeVLibras}
      />

      <div {...({ vw: "" } as Record<string, string>)} className="enabled" aria-label="Acessibilidade em Libras">
        <div {...({ "vw-access-button": "" } as Record<string, string>)} className="active" />
        <div {...({ "vw-plugin-wrapper": "" } as Record<string, string>)}>
          <div className="vw-plugin-top-wrapper" />
        </div>
      </div>

      <button
        type="button"
        className={`scroll-top-button ${showTop ? "scroll-top-button--visible" : ""}`}
        aria-label="Voltar ao topo da página"
        title="Voltar ao topo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp aria-hidden="true" size={21} strokeWidth={2.4} />
      </button>
    </>
  );
}
