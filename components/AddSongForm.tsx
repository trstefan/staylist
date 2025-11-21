// components/AddSongForm.tsx
"use client";

import { useMutation } from "convex/react";
import { useState } from "react";
import { api } from "@/convex/_generated/api";

export default function AddSongForm() {
  const addSong = useMutation(api.songs.add);
  const [title, setTitle] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    await addSong({
      song: {
        id: Date.now(),
        title,
        year: 2025,
        artist: "Unknown",
        country: "Unknown",
        genre: "Unknown",
      },
    });
    setTitle("");
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <button type="submit">Add Song</button>
    </form>
  );
}
