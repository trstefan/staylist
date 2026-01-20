import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface SongGenre {
  genre: string[]; 
}

export async function GET() {
  try {
    const songs = await prisma.song.findMany({
      select: {
        genre: true,
      },
    });

    // 1. Explicitly type 'song' as SongGenre to fix the 'any' error
    // 2. Flatten the arrays and filter out any potential null/undefined values
    const allGenres = songs.flatMap((song: SongGenre) => song.genre);
    
    // Create a Set to remove duplicates and sort alphabetically
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