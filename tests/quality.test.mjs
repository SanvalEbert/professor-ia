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
  const page = read("app/page.tsx");
  assert.doesNotMatch(page, /fixed bottom-4 left-4 right-4/);
});

test("usa identidade visual predominantemente azul", () => {
  const config = read("tailwind.config.ts");
  assert.match(config, /brand: "#1d4ed8"/);
  assert.match(config, /accent: "#2563eb"/);
});

test("direciona inscrição ao Google Forms sem iframe", () => {
  const page = read("app/page.tsx");
  assert.match(page, /forms\.gle\/2wqf6Y5S5UG2mYPA6/);
  assert.doesNotMatch(page, /<iframe/);
  assert.doesNotMatch(page, /FORM_EMBED_URL/);
  assert.match(page, /Fazer minha inscrição gratuita/);
  assert.match(page, /target="_blank"/);
});

test("usa cards azuis nas áreas de aprendizagem e jornada", () => {
  const page = read("app/page.tsx");
  assert.match(page, /from-blue-600 via-blue-700 to-blue-900/);
  assert.match(page, /from-blue-950 via-blue-900 to-blue-700/);
});

test("usa vírgula no título sobre IA como aliada", () => {
  const page = read("app/page.tsx");
  assert.match(page, /IA como aliada do trabalho docente, com propósito, critério e autoria\./);
  assert.doesNotMatch(page, /IA como aliada do trabalho docente —/);
});

test("não mantém dependência ou prebuild do Supabase", () => {
  const pkg = read("package.json");
  assert.doesNotMatch(pkg, /@supabase\/supabase-js/);
  assert.doesNotMatch(pkg, /check-supabase-persistence/);
});
