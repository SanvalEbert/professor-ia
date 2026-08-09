import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number) {
  return String(value ?? "").trim().slice(0, maxLength);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const payload = {
      nome: clean(body.nome, 160),
      whatsapp: clean(body.whatsapp, 32),
      email: clean(body.email, 180).toLowerCase(),
      estado: clean(body.estado, 80),
      instituicao: clean(body.instituicao, 180),
      area_atuacao: clean(body.area_atuacao, 100),
      experiencia_ia: clean(body.experiencia_ia, 100),
      desafio: clean(body.desafio, 1000),
      origem: clean(body.origem || "direto", 120),
      consentimento_lgpd: body.consentimento_lgpd === true,
    };

    const required = [
      payload.nome,
      payload.whatsapp,
      payload.email,
      payload.estado,
      payload.instituicao,
      payload.area_atuacao,
      payload.experiencia_ia,
      payload.desafio,
    ];

    if (required.some((value) => !value)) {
      return NextResponse.json({ error: "Preencha todos os campos obrigatórios." }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(payload.email)) {
      return NextResponse.json({ error: "Informe um e-mail válido." }, { status: 400 });
    }

    const whatsappDigits = payload.whatsapp.replace(/\D/g, "");
    if (whatsappDigits.length < 10 || whatsappDigits.length > 13) {
      return NextResponse.json({ error: "Informe um WhatsApp válido, com DDD." }, { status: 400 });
    }

    if (!payload.consentimento_lgpd) {
      return NextResponse.json({ error: "É necessário autorizar o tratamento dos dados para concluir a inscrição." }, { status: 400 });
    }

    const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !key) {
      console.error("registration_database_not_configured");
      return NextResponse.json({ error: "Serviço de inscrições temporariamente indisponível." }, { status: 503 });
    }

    const supabase = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { error } = await supabase.from("participantes").insert({
      ...payload,
      whatsapp: whatsappDigits,
      user_agent: request.headers.get("user-agent"),
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({ success: true, already_registered: true }, { status: 200 });
      }

      console.error("registration_insert_failed", { code: error.code });
      return NextResponse.json({ error: "Não foi possível registrar sua inscrição agora." }, { status: 500 });
    }

    return NextResponse.json(
      { success: true },
      {
        status: 201,
        headers: { "Cache-Control": "no-store" },
      },
    );
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }
}
