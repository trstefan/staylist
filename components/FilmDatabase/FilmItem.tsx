"use client";

import { Film } from "@/types/film";
import FilmDetails from "./FilmDetails";

interface FilmItemProps {
  film: Film;
  index: number;
  isExpanded: boolean;
  onToggle: (id: number) => void;
}

export default function FilmItem({
  film,
  index,
  isExpanded,
  onToggle,
}: FilmItemProps) {
  return (
    <div className="group">
      <button
        onClick={() => onToggle(film.id)}
        className="flex w-full items-center justify-between py-4 md:py-5 text-left"
      >
        <div className="w-8 shrink-0 text-xs tabular-nums md:w-12 md:text-sm">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="relative flex-1 text-center flex items-center gap-4 justify-center">
          {/* subtle black dot on hover or active */}
          <div
            className={` text-[8px] opacity-0 transition-opacity duration-300 ${
              isExpanded ? "opacity-100" : "group-hover:opacity-100"
            }`}
          >
            ●
          </div>

          <h3
            className={`text-xs uppercase tracking-wide transition-opacity duration-300 md:text-sm ${
              isExpanded ? "opacity-100" : "group-hover:opacity-60"
            }`}
          >
            {film.title}
          </h3>
        </div>

        <div className="w-8 shrink-0 text-right text-xs tabular-nums md:w-12 md:text-sm">
          {film.year}
        </div>
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isExpanded
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <FilmDetails film={film} />
        </div>
      </div>
    </div>
  );
}
