import { createClient } from "@supabase/supabase-js";

if (process.env.VERCEL_ENV !== "production") {
  console.log("supabase-persistence-check: skipped outside Vercel production");
  process.exit(0);
}

const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  throw new Error("supabase-persistence-check: missing SUPABASE_URL/NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
}

const supabase = createClient(url, key, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const testEmail = `healthcheck-${Date.now()}@professor-ia.invalid`;

const { data, error: insertError } = await supabase
  .from("participantes")
  .insert({
    nome: "Professor IA Healthcheck",
    email: testEmail,
    whatsapp: "71999999999",
    estado: "BA",
    instituicao: "Healthcheck automatizado",
    area_atuacao: "Teste automatizado",
    experiencia_ia: "Teste automatizado",
    desafio: "Validação automatizada da persistência no deploy",
    origem: "vercel-production-healthcheck",
    consentimento_lgpd: true,
    user_agent: "vercel-build-healthcheck",
  })
  .select("id")
  .single();

if (insertError || !data?.id) {
  throw new Error(`supabase-persistence-check: insert failed (${insertError?.code || "unknown"})`);
}

const { error: deleteError } = await supabase
  .from("participantes")
  .delete()
  .eq("id", data.id);

if (deleteError) {
  throw new Error(`supabase-persistence-check: cleanup failed (${deleteError.code || "unknown"})`);
}

console.log("supabase-persistence-check: write/read/cleanup ok");
