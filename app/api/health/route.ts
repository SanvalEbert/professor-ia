import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function GET() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    return NextResponse.json(
      { ok: false, database: { configured: false, reachable: false } },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  const supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { error } = await supabase
    .from("participantes")
    .select("id", { head: true, count: "exact" });

  if (error) {
    console.error("database_healthcheck_failed", { code: error.code });
    return NextResponse.json(
      { ok: false, database: { configured: true, reachable: false } },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  return NextResponse.json(
    { ok: true, database: { configured: true, reachable: true } },
    { headers: { "Cache-Control": "no-store" } },
  );
}
