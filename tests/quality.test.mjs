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

test("incorpora Google Forms com alternativa de abertura direta", () => {
  const page = read("app/page.tsx");
  assert.match(page, /forms\.gle\/2wqf6Y5S5UG2mYPA6/);
  assert.match(page, /embedded=true/);
  assert.match(page, /Formulário de inscrição da Jornada Professor IA/);
  assert.match(page, /Abrir formulário em nova aba/);
});

test("não mantém dependência ou prebuild do Supabase", () => {
  const pkg = read("package.json");
  assert.doesNotMatch(pkg, /@supabase\/supabase-js/);
  assert.doesNotMatch(pkg, /check-supabase-persistence/);
});
