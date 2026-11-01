import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Ícone usado quando a página é salva na tela inicial do celular.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
          color: "white",
          fontSize: 82,
          fontWeight: 900,
          fontFamily: "sans-serif",
        }}
      >
        IA
      </div>
    ),
    size,
  );
}
