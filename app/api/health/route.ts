import { NextResponse } from "next/server";

export async function GET() {
  // Também confirma se o deployment atual recebeu as variáveis privadas do banco.
  const databaseConfigured = Boolean(
    process.env.SUPABASE_URL &&
      (process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY),
  );

  return NextResponse.json(
    {
      ok: true,
      registration: "native-form",
      database: databaseConfigured ? "configured" : "pending-configuration",
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
