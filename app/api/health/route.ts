import { NextResponse } from "next/server";

export async function GET() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json(
      {
        ok: true,
        registration: "google-forms",
        database: "pending-configuration",
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  }

  const headers: Record<string, string> = { apikey: supabaseKey };
  if (!supabaseKey.startsWith("sb_secret_")) {
    headers.Authorization = `Bearer ${supabaseKey}`;
  }

  try {
    const response = await fetch(
      `${supabaseUrl.replace(/\/$/, "")}/rest/v1/participantes?select=id&limit=1`,
      { headers, cache: "no-store" },
    );

    return NextResponse.json(
      {
        ok: response.ok,
        registration: "google-forms",
        database: response.ok ? "connected" : "connection-error",
        databaseStatus: response.status,
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        registration: "google-forms",
        database: "connection-error",
      },
      {
        status: 503,
        headers: { "Cache-Control": "no-store" },
      },
    );
  }
}
