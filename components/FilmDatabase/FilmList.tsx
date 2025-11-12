"use client";

import { Film } from "@/types/film";
import FilmItem from "./FilmItem";

interface FilmListProps {
  films: Film[];
  expandedId: number | null;
  onToggle: (id: number) => void;
}

export default function FilmList({
  films,
  expandedId,
  onToggle,
}: FilmListProps) {
  return (
    <div className="divide-y divide-black/5">
      {films.map((film, index) => (
        <FilmItem
          key={film.id}
          film={film}
          index={index}
          isExpanded={expandedId === film.id}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
