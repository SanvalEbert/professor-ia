import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !key) {
      return NextResponse.json({ error: "Banco de dados ainda não configurado." }, { status: 503 });
    }

    const supabase = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { error } = await supabase.from("participantes").insert({
      nome: body.nome,
      whatsapp: body.whatsapp,
      email: body.email,
      estado: body.estado,
      instituicao: body.instituicao || null,
      area_atuacao: body.areaAtuacao,
      experiencia_ia: body.experienciaIa,
      motivacao: body.motivacao,
      desafio: body.desafio || null,
      origem: body.origem || "direto",
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }
}
