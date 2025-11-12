"use client";

import { useState } from "react";
import { Film } from "@/types/film";
import FilmList from "@/components/FilmDatabase/FilmList";
import films from "@/data/films";

export default function FilmDatabase() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] font-mono text-black">
      <header className="relative px-4 pb-8 pt-12 md:px-8 md:pb-12 md:pt-16">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4">
          <h1 className="text-center text-[15vw] font-black leading-[0.85] tracking-tighter sm:text-[12vw] md:text-[10vw] lg:text-[140px]">
            Staylist
          </h1>
          <p>Very good music that stays with you.</p>
        </div>
      </header>

      <main className=" ">
        <FilmList
          films={films}
          expandedId={expandedId}
          onToggle={toggleExpand}
        />
      </main>

      <footer className="border-t border-black/10 px-4 py-8 text-center md:px-8">
        <p className="text-xs tracking-wider text-black/40">©2025</p>
      </footer>
    </div>
  );
}

// you can move the film array to a separate file if needed
