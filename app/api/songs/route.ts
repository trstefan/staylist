import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/songs - Fetch songs with search, filter, and sort
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q");
    const genre = searchParams.get("genre");
    const sortBy = searchParams.get("sortBy") || "createdAt";
    const order = (searchParams.get("order") || "desc") as "asc" | "desc";
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const skip = (page - 1) * limit;

    const where: any = {};

    if (q) {
      where.OR = [
        { title: { contains: q, mode: "insensitive" } },
        { artist: { contains: q, mode: "insensitive" } },
        { album: { contains: q, mode: "insensitive" } },
      ];
    }

    if (genre && genre !== "All") {
      where.genre = { has: genre };
    }

    const songs = await prisma.song.findMany({
      where,
      orderBy: { [sortBy]: order },
      skip,
      take: limit,
    });

    // Transform to Track-compatible format for frontend
    const tracks = songs.map((song) => ({
      id: song.id,
      title: song.title,
      artist: song.artist,
      url: song.url,
      description: song.description || "Awaiting curator review.",
      genre: song.genre,
      year: song.year,
      album: song.album,
      cover: song.cover,
      createdAt: song.createdAt.toISOString(),
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
    const { title, artist, url, description, genre } = body;

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
        genre: Array.isArray(genre) ? genre : [],
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
