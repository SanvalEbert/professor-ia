import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("integra VLibras e botão de retorno ao topo", () => {
  const source = read("components/AccessibilityTools.tsx");
  assert.match(source, /vlibras-plugin\.js/);
  assert.match(source, /Voltar ao topo da página/);
});

test("remove a CTA flutuante legada no mobile", () => {
  const css = read("app/globals.css");
  assert.match(css, /main > a\[href="#inscricao"\]\.fixed \{ display: none !important; \}/);
});

test("usa identidade visual predominantemente azul", () => {
  const config = read("tailwind.config.ts");
  assert.match(config, /brand: "#1d4ed8"/);
  assert.match(config, /accent: "#2563eb"/);
});

test("API exige consentimento LGPD e valida WhatsApp", () => {
  const route = read("app/api/inscricoes/route.ts");
  assert.match(route, /body\.consentimento_lgpd === true/);
  assert.match(route, /whatsappDigits\.length < 10/);
  assert.match(route, /SUPABASE_SERVICE_ROLE_KEY/);
});

test("cadastro repetido é tratado de forma idempotente", () => {
  const route = read("app/api/inscricoes/route.ts");
  assert.match(route, /error\.code === "23505"/);
  assert.match(route, /already_registered: true/);
});
