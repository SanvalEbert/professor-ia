// Testes de comportamento: executam a lógica real (contagem regressiva e API de inscrição),
// em vez de apenas procurar textos no código-fonte.
import test, { describe, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import { countdownLabel, EVENT_START, EVENT_END } from "../lib/countdown.ts";
import { POST } from "../app/api/inscricoes/route.ts";

const at = (iso) => Date.parse(iso);

describe("contagem regressiva (horário de Brasília)", () => {
  test("conta dias corridos até o primeiro encontro", () => {
    assert.equal(countdownLabel(at("2026-11-01T16:00:00-03:00")).text, "Começa em 16 dias · inscrições abertas");
    assert.equal(countdownLabel(at("2026-11-01T16:00:00-03:00")).tone, "open");
    assert.equal(countdownLabel(at("2026-11-12T09:00:00-03:00")).tone, "soon");
  });

  test("vira o dia à meia-noite de Brasília, não à meia-noite UTC", () => {
    // 22h30 do dia 15 em Brasília já é dia 16 em UTC; ainda faltam 2 dias.
    assert.equal(countdownLabel(at("2026-11-15T22:30:00-03:00")).text, "Começa em 2 dias · inscrições abertas");
    assert.equal(countdownLabel(at("2026-11-16T00:05:00-03:00")).text, "Começa amanhã, às 20h");
    assert.equal(countdownLabel(at("2026-11-17T08:00:00-03:00")).text, "Começa hoje, às 20h");
  });

  test("indica andamento durante a imersão e encerramento depois", () => {
    assert.equal(countdownLabel(EVENT_START).tone, "live");
    assert.equal(countdownLabel(at("2026-11-18T12:00:00-03:00")).tone, "live");
    assert.equal(countdownLabel(EVENT_END).tone, "ended");
    assert.equal(countdownLabel(at("2027-01-10T12:00:00-03:00")).text, "Esta edição foi encerrada");
  });
});

describe("API de inscrição", () => {
  const valid = {
    nome_completo: "Maria  da   Silva",
    whatsapp: "(71) 99999-9999",
    email: "Maria@Exemplo.com",
    cidade: "Salvador",
    estado: "ba",
    instituicao_ensino: "Escola Estadual X",
    experiencia_ia: "Iniciante",
    consentimento_lgpd: "true",
  };

  const request = (body, contentType = "application/json") =>
    new Request("http://localhost/api/inscricoes", {
      method: "POST",
      headers: { "content-type": contentType, "user-agent": "teste" },
      body: typeof body === "string" ? body : JSON.stringify(body),
    });

  let originalFetch;
  let calls;
  let supabaseResponse;

  beforeEach(() => {
    process.env.SUPABASE_URL = "https://exemplo.supabase.co/";
    process.env.SUPABASE_SECRET_KEY = "sb_secret_teste";
    originalFetch = globalThis.fetch;
    calls = [];
    supabaseResponse = () => new Response(null, { status: 201 });
    globalThis.fetch = async (url, init) => {
      calls.push({ url: String(url), init });
      return supabaseResponse();
    };
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
    delete process.env.SUPABASE_URL;
    delete process.env.SUPABASE_SECRET_KEY;
  });

  test("grava inscrição válida com dados normalizados", async () => {
    const res = await POST(request(valid));
    assert.equal(res.status, 201);
    assert.equal(res.headers.get("cache-control"), "no-store");
    assert.equal(calls.length, 1);
    assert.equal(calls[0].url, "https://exemplo.supabase.co/rest/v1/participantes");
    const saved = JSON.parse(calls[0].init.body);
    assert.equal(saved.nome_completo, "Maria da Silva");
    assert.equal(saved.whatsapp, "71999999999");
    assert.equal(saved.email, "maria@exemplo.com");
    assert.equal(saved.estado, "BA");
    assert.equal(saved.consentimento_lgpd, true);
    // Chaves sb_secret_* vão só no header apikey.
    assert.equal(calls[0].init.headers.apikey, "sb_secret_teste");
    assert.equal(calls[0].init.headers.Authorization, undefined);
  });

  test("recusa dados inválidos sem tocar no banco", async () => {
    for (const patch of [
      { email: "sem-arroba" },
      { whatsapp: "123" },
      { estado: "XX" },
      { experiencia_ia: "Expert" },
      { consentimento_lgpd: false },
      { nome_completo: "A" },
    ]) {
      const res = await POST(request({ ...valid, ...patch }));
      assert.equal(res.status, 400, `deveria recusar ${JSON.stringify(patch)}`);
    }
    assert.equal(calls.length, 0);
  });

  test("recusa formato que não é JSON e JSON quebrado", async () => {
    assert.equal((await POST(request("a=1", "application/x-www-form-urlencoded"))).status, 415);
    assert.equal((await POST(request("{quebrado"))).status, 400);
  });

  test("finge sucesso para robôs que preenchem o campo oculto", async () => {
    const res = await POST(request({ ...valid, website: "http://spam" }));
    assert.equal(res.status, 201);
    assert.equal(calls.length, 0);
  });

  test("avisa quando o e-mail já está inscrito", async () => {
    supabaseResponse = () => new Response('{"code":"23505"}', { status: 409 });
    const res = await POST(request(valid));
    assert.equal(res.status, 409);
    assert.match((await res.json()).error, /já está inscrito/);
  });

  test("responde 503 se o banco não estiver configurado", async () => {
    delete process.env.SUPABASE_URL;
    const res = await POST(request(valid));
    assert.equal(res.status, 503);
  });

  test("responde 502 se o banco estiver fora do ar", async () => {
    globalThis.fetch = async () => {
      throw new Error("timeout");
    };
    const original = console.error;
    console.error = () => {};
    try {
      assert.equal((await POST(request(valid))).status, 502);
    } finally {
      console.error = original;
    }
  });
});
