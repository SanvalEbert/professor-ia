import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { ok: true, registration: "google-forms" },
    { headers: { "Cache-Control": "no-store" } },
  );
}
