import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const required = ["nome", "whatsapp", "email", "estado", "instituicao", "area_atuacao", "experiencia_ia", "desafio"];
    const missing = required.filter((field) => !body[field]);

    if (missing.length) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes", fields: missing }, { status: 400 });
    }

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) {
      return NextResponse.json({ error: "Banco de dados não configurado" }, { status: 503 });
    }

    const supabase = createClient(url, key, { auth: { persistSession: false } });
    const { error } = await supabase.from("participantes").insert({
      nome: String(body.nome).trim(),
      whatsapp: String(body.whatsapp).trim(),
      email: String(body.email).trim().toLowerCase(),
      estado: String(body.estado).trim(),
      instituicao: String(body.instituicao).trim(),
      area_atuacao: String(body.area_atuacao),
      experiencia_ia: String(body.experiencia_ia),
      desafio: String(body.desafio).trim(),
      origem: String(body.origem || "direto"),
      consentimento_lgpd: Boolean(body.consentimento_lgpd),
      user_agent: request.headers.get("user-agent")
    });

    if (error) {
      console.error(error);
      return NextResponse.json({ error: "Erro ao registrar inscrição" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Requisição inválida" }, { status: 400 });
  }
}
