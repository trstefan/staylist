import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET() {
  try {
    const count = await prisma.song.count();
    return NextResponse.json({ ok: true, count });
  } catch (err) {
    console.error("Database route error:", err);
    return NextResponse.json(
      { ok: false, error: "Database query failed" },
      { status: 500 }
    );
  }
}
