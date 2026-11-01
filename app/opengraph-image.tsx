import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Imersão IA na Prática Docente — 17, 18 e 19 de novembro de 2026, das 20h às 21h, online e gratuita";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Cartão exibido quando o link é compartilhado no WhatsApp, LinkedIn, Instagram etc.
export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/San_10.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #0b1a3f 0%, #1d4ed8 62%, #2563eb 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 0 64px 72px", width: 760 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 56, height: 56, borderRadius: 16, background: "white", color: "#1d4ed8", fontSize: 26, fontWeight: 900 }}>IA</div>
            <div style={{ display: "flex", fontSize: 30, fontWeight: 800 }}>Professor IA</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 24, fontWeight: 700, color: "#bfdbfe", letterSpacing: 3, textTransform: "uppercase" }}>
              Online e gratuita para professores
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginTop: 18, fontSize: 76, fontWeight: 900, lineHeight: 1.02, letterSpacing: -2 }}>
              <span>Imersão IA na</span>
              <span>Prática Docente</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ display: "flex", padding: "14px 26px", borderRadius: 999, background: "white", color: "#1d4ed8", fontSize: 28, fontWeight: 800 }}>
              17, 18 e 19 de novembro
            </div>
            <div style={{ display: "flex", fontSize: 28, fontWeight: 700, color: "#dbeafe" }}>20h às 21h · ao vivo</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", flex: 1, padding: "0 56px 64px 0" }}>
          <img src={photoSrc} width={340} height={340} style={{ borderRadius: 40, border: "8px solid rgba(255,255,255,.9)", objectFit: "cover" }} alt="" />
          <div style={{ display: "flex", marginTop: 18, fontSize: 26, fontWeight: 800 }}>com Sanval Ebert</div>
        </div>
      </div>
    ),
    size,
  );
}
