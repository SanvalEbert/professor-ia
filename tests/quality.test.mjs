import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("integra VLibras e botão de retorno ao topo", () => {
  const source = read("components/AccessibilityTools.tsx");
  assert.match(source, /vlibras-plugin\.js/);
  assert.match(source, /Voltar ao topo da página/);
  assert.match(source, /prefers-reduced-motion/);
});

test("evita colisão dos controles flutuantes no mobile", () => {
  const page = read("app/page.tsx");
  const css = read("app/globals.css");

  assert.doesNotMatch(page, /fixed bottom-4 left-4 right-4/);
  assert.match(css, /\.scroll-top-button[\s\S]*left: \.8rem/);
  assert.match(css, /\[vw\]\.enabled \{ z-index: 54 !important; \}/);
});

test("cabeçalho se adapta a telas estreitas mesmo após mudanças de marca", () => {
  const page = read("app/page.tsx");
  const css = read("app/globals.css");
  assert.match(page, /aria-label="IA na Prática Docente - início"/);
  assert.match(css, /@media \(max-width: 420px\)/);
  assert.match(css, /header a\[href="#inicio"\] > span:last-child/);
  assert.doesNotMatch(css, /aria-label="Professor IA - início"/);
});

test("usa identidade visual predominantemente azul", () => {
  const config = read("tailwind.config.ts");
  assert.match(config, /brand: "#1d4ed8"/);
  assert.match(config, /accent: "#2563eb"/);
});

test("usa formulário nativo de inscrição sem Google Forms", () => {
  const page = read("app/page.tsx");
  const form = read("components/RegistrationForm.tsx");

  assert.match(page, /<RegistrationForm \/>/);
  assert.match(page, /href="#inscricao"/);
  assert.doesNotMatch(page, /forms\.gle/);
  assert.doesNotMatch(page, /<iframe/);

  for (const field of [
    "nome_completo",
    "whatsapp",
    "email",
    "cidade",
    "estado",
    "instituicao_ensino",
    "experiencia_ia",
  ]) {
    assert.match(form, new RegExp(`name=\\"${field}\\"`));
  }

  for (const nivel of ["Nenhuma", "Iniciante", "Intermediário", "Avançado"]) {
    assert.match(form, new RegExp(nivel));
  }
});

test("formulário comunica estados e valida melhor no celular", () => {
  const form = read("components/RegistrationForm.tsx");
  assert.match(form, /aria-busy=/);
  assert.match(form, /aria-live="polite"/);
  assert.match(form, /aria-live="assertive"/);
  assert.match(form, /id="registration-feedback"/);
  assert.match(form, /inputMode="tel"/);
  assert.match(form, /pattern="\[0-9\(\)\+\\-\\s\]\{10,20\}"/);
  assert.match(form, /name="website"/);
  assert.match(form, /\/politica-de-privacidade/);
});

test("API grava inscrições no Supabase apenas pelo servidor", () => {
  const api = read("app/api/inscricoes/route.ts");
  const env = read(".env.example");
  const schema = read("database/schema.sql");

  assert.match(api, /SUPABASE_SECRET_KEY/);
  assert.match(api, /SUPABASE_SERVICE_ROLE_KEY/);
  assert.match(api, /\/rest\/v1\/participantes/);
  assert.match(api, /Este e-mail já está inscrito/);
  assert.match(env, /SUPABASE_URL=/);
  assert.match(env, /SUPABASE_SECRET_KEY=/);
  assert.match(schema, /create table if not exists public\.participantes/);
  assert.match(schema, /unique index if not exists participantes_email_unique/);
  assert.match(schema, /revoke all on table public\.participantes from anon, authenticated/);
});

test("API valida telefone, formato, robôs simples e timeout", () => {
  const api = read("app/api/inscricoes/route.ts");
  assert.match(api, /application\/json/);
  assert.match(api, /whatsappDigits\.length < 10/);
  assert.match(api, /whatsappDigits\.length > 13/);
  assert.match(api, /body\.website/);
  assert.match(api, /AbortSignal\.timeout\(8000\)/);
  assert.match(api, /Cache-Control/);
});

test("fluxo de sucesso leva à confirmação com WhatsApp e evita indexação", () => {
  const form = read("components/RegistrationForm.tsx");
  const confirmation = read("app/confirmacao/page.tsx");
  assert.match(form, /window\.location\.assign\("\/confirmacao"\)/);
  assert.match(confirmation, /NEXT_PUBLIC_WHATSAPP_GROUP_URL/);
  assert.match(confirmation, /Entrar no grupo do WhatsApp/);
  assert.match(confirmation, /index: false/);
  assert.match(confirmation, /follow: false/);
});

test("skip link funciona também nas páginas auxiliares", () => {
  const layout = read("app/layout.tsx");
  const confirmation = read("app/confirmacao/page.tsx");
  const privacy = read("app/politica-de-privacidade/page.tsx");
  assert.match(layout, /href="#inicio"/);
  assert.match(confirmation, /<main id="inicio"/);
  assert.match(privacy, /<main id="inicio"/);
});

test("política de privacidade reflete os campos atuais do cadastro", () => {
  const privacy = read("app/politica-de-privacidade/page.tsx");
  for (const item of ["WhatsApp", "cidade", "estado", "instituição de ensino", "experiência com Inteligência Artificial", "parâmetros de campanha"]) {
    assert.match(privacy, new RegExp(item, "i"));
  }
  assert.doesNotMatch(privacy, /Texto inicial para o MVP/);
  assert.doesNotMatch(privacy, /área de atuação/);
  assert.doesNotMatch(privacy, /desafio profissional/);
});

test("metadataBase usa URL pública configurável", () => {
  const layout = read("app/layout.tsx");
  const env = read(".env.example");
  assert.match(layout, /NEXT_PUBLIC_SITE_URL/);
  assert.match(layout, /professor-ia-eosin\.vercel\.app/);
  assert.match(env, /NEXT_PUBLIC_SITE_URL=/);
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

test("exibe LinkedIn, ResearchGate e Instagram sem GitHub", () => {
  const page = read("app/page.tsx");
  assert.match(page, /linkedin\.com\/in\/msc-sanval-ebert/);
  assert.match(page, /researchgate\.net\/profile\/Sanval-Ebert-De-Santos/);
  assert.match(page, /instagram\.com\/sanvalebert/);
  assert.match(page, /Acompanhe e conheça minha trajetória/);
  assert.doesNotMatch(page, /github\.com/);
});

test("não expõe cliente ou chave do Supabase no navegador", () => {
  const pkg = read("package.json");
  const form = read("components/RegistrationForm.tsx");
  assert.doesNotMatch(pkg, /@supabase\/supabase-js/);
  assert.doesNotMatch(form, /SUPABASE_/);
});
