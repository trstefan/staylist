import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const songs = await prisma.song.findMany({
      select: {
        genre: true,
      },
    });

    // Flatten all genre arrays and get unique values
    const allGenres = songs.flatMap((song) => song.genre);
    const uniqueGenres = Array.from(new Set(allGenres)).sort();

    return NextResponse.json(uniqueGenres);
  } catch (error) {
    console.error("Failed to fetch genres:", error);
    return NextResponse.json(
      { error: "Failed to fetch genres" },
      { status: 500 }
    );
  }
}
