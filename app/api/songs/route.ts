import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/songs - Fetch all songs
export async function GET() {
  try {
    const songs = await prisma.song.findMany({
      orderBy: { createdAt: "desc" },
    });

    // Transform to Track-compatible format for frontend
    const tracks = songs.map((song, index) => ({
      id: song.id,
      number: (index + 1).toString().padStart(2, "0"),
      title: song.title,
      artist: song.artist,
      album: "User Submission",
      year: new Date(song.createdAt).getFullYear().toString(),
      genre: "Curated",
      description: song.description || "Awaiting curator review.",
      coverImage: `https://picsum.photos/seed/${song.id}/800/800`,
      url: song.url,
    }));

    return NextResponse.json(tracks);
  } catch (error) {
    console.error("Failed to fetch songs:", error);
    return NextResponse.json(
      { error: "Failed to fetch songs" },
      { status: 500 }
    );
  }
}

// POST /api/songs - Create a new song submission
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, artist, url, description } = body;

    // Validate required fields
    if (!title || !artist) {
      return NextResponse.json(
        { error: "Title and artist are required" },
        { status: 400 }
      );
    }

    const song = await prisma.song.create({
      data: {
        title: title.trim(),
        artist: artist.trim(),
        url: url?.trim() || null,
        description: description?.trim() || null,
      },
    });

    return NextResponse.json(song, { status: 201 });
  } catch (error) {
    console.error("Failed to create song:", error);
    return NextResponse.json(
      { error: "Failed to create song" },
      { status: 500 }
    );
  }
}
