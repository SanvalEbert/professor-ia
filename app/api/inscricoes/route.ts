import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { error: "As inscrições são realizadas pelo Google Forms incorporado à página." },
    { status: 410 },
  );
}
