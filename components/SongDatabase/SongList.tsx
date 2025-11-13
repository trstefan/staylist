"use client";

import { Song } from "@/types/song";
import SongItem from "./SongItem";

interface SongListProps {
  songs: Song[];
  expandedId: number | null;
  onToggle: (id: number) => void;
}

export default function SongList({
  songs,
  expandedId,
  onToggle,
}: SongListProps) {
  return (
    <div className="divide-y divide-black/5">
      {songs.map((song, index) => (
        <SongItem
          key={song.id}
          song={song}
          index={index}
          isExpanded={expandedId === song.id}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
