import { NextRequest, NextResponse } from "next/server";

const estados = new Set([
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG",
  "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO",
]);
const experiencias = new Set(["Nenhuma", "Iniciante", "Intermediário", "Avançado"]);

const clean = (value: unknown, max = 180) =>
  typeof value === "string" ? value.trim().replace(/\s+/g, " ").slice(0, max) : "";

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Dados de inscrição inválidos." }, { status: 400 });
  }

  const nome_completo = clean(body.nome_completo, 160);
  const whatsapp = clean(body.whatsapp, 30);
  const email = clean(body.email, 180).toLowerCase();
  const cidade = clean(body.cidade, 120);
  const estado = clean(body.estado, 2).toUpperCase();
  const instituicao_ensino = clean(body.instituicao_ensino, 180);
  const experiencia_ia = clean(body.experiencia_ia, 30);
  const consentimento_lgpd = body.consentimento_lgpd === true || body.consentimento_lgpd === "true";

  if (
    nome_completo.length < 3 ||
    whatsapp.length < 8 ||
    !/^\S+@\S+\.\S+$/.test(email) ||
    cidade.length < 2 ||
    !estados.has(estado) ||
    instituicao_ensino.length < 2 ||
    !experiencias.has(experiencia_ia) ||
    !consentimento_lgpd
  ) {
    return NextResponse.json(
      { error: "Revise os campos obrigatórios e tente novamente." },
      { status: 400 },
    );
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error("Banco de inscrições não configurado no ambiente.");
    return NextResponse.json(
      { error: "O serviço de inscrições está em configuração. Tente novamente em breve." },
      { status: 503 },
    );
  }

  const headers: Record<string, string> = {
    apikey: supabaseKey,
    "Content-Type": "application/json",
    Prefer: "return=minimal",
  };

  // Chaves legadas service_role são JWTs e usam também Authorization.
  // As novas sb_secret_* devem ser enviadas apenas no header apikey.
  if (!supabaseKey.startsWith("sb_secret_")) {
    headers.Authorization = `Bearer ${supabaseKey}`;
  }

  const payload = {
    nome_completo,
    whatsapp,
    email,
    cidade,
    estado,
    instituicao_ensino,
    experiencia_ia,
    consentimento_lgpd,
    origem: clean(body.origem, 300) || "direto",
    utm_source: clean(body.utm_source, 120) || null,
    utm_medium: clean(body.utm_medium, 120) || null,
    utm_campaign: clean(body.utm_campaign, 160) || null,
    user_agent: clean(request.headers.get("user-agent"), 500) || null,
  };

  let response: Response;
  try {
    response = await fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/participantes`, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
      cache: "no-store",
    });
  } catch (error) {
    console.error("Falha de conexão com o banco de inscrições:", error);
    return NextResponse.json(
      { error: "Não foi possível concluir sua inscrição agora. Tente novamente em instantes." },
      { status: 502 },
    );
  }

  if (!response.ok) {
    const detail = await response.text();
    const duplicate = response.status === 409 || detail.includes("23505") || detail.toLowerCase().includes("duplicate");

    if (duplicate) {
      return NextResponse.json(
        { error: "Este e-mail já está inscrito na Jornada Professor IA." },
        { status: 409 },
      );
    }

    console.error("Supabase recusou a inscrição:", response.status, detail.slice(0, 500));
    return NextResponse.json(
      { error: "Não foi possível concluir sua inscrição agora. Tente novamente em instantes." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
