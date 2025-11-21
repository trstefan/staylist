import React, { useState } from "react";
import { Track } from "../types";
import { TrackItem } from "./TrackItem";
import { motion } from "framer-motion";

const TRACK_DATA: Track[] = [
  {
    id: "1",
    number: "01",
    title: "Midnight City",
    artist: "M83",
    album: "Hurry Up, We're Dreaming",
    year: "2011",
    duration: "4:03",
    genre: "Synth-pop / Dream Pop",
    bpm: 105,
    description:
      'A quintessential track that defined the early 2010s indie aesthetic. "Midnight City" captures the feeling of driving through a neon-lit metropolis late at night, blending nostalgia with futuristic synth textures.',
    coverImage: "https://picsum.photos/id/1048/800/800",
    credits: ["Anthony Gonzalez", "Justin Meldal-Johnsen", "Morgan Kibby"],
  },
  {
    id: "2",
    number: "02",
    title: "Instant Crush",
    artist: "Daft Punk",
    album: "Random Access Memories",
    year: "2013",
    duration: "5:37",
    genre: "Synth-pop",
    bpm: 110,
    description:
      "Featuring Julian Casablancas of The Strokes, this track tells a melancholic story of unrequited love wrapped in warm analog synthesizers and vocoded vocals. A masterclass in emotional electronic music.",
    coverImage: "https://picsum.photos/id/342/800/800",
    credits: [
      "Thomas Bangalter",
      "Guy-Manuel de Homem-Christo",
      "Julian Casablancas",
    ],
  },
  {
    id: "3",
    number: "03",
    title: "Gosh",
    artist: "Jamie xx",
    album: "In Colour",
    year: "2015",
    duration: "4:51",
    genre: "UK Garage / House",
    bpm: 128,
    description:
      "A building, brutalist anthem that pays homage to UK pirate radio culture while pushing forward into expansive sound design. The drop is legendary for its deep, resonating bass and vocal chops.",
    coverImage: "https://picsum.photos/id/234/800/800",
    credits: ["Jamie Smith"],
  },
  {
    id: "4",
    number: "04",
    title: "New Person",
    artist: "Tame Impala",
    album: "Currents",
    year: "2015",
    duration: "6:02",
    genre: "Neo-Psychedelia",
    bpm: 108,
    description:
      'Kevin Parker explores the anxiety of change and self-improvement. "New Person, Same Old Mistakes" features a thick, driving bassline and hazy production that feels like sinking into quicksand.',
    coverImage: "https://picsum.photos/id/453/800/800",
    credits: ["Kevin Parker"],
  },
  {
    id: "5",
    number: "05",
    title: "After Hours",
    artist: "The Weeknd",
    album: "After Hours",
    year: "2020",
    duration: "6:01",
    genre: "R&B / New Wave",
    bpm: 109,
    description:
      "A dark, atmospheric descent into the late-night psyche. The production evolves from a minimalist beat into a chaotic, driving rhythm, perfectly mirroring the lyrical themes of relapse and regret.",
    coverImage: "https://picsum.photos/id/56/800/800",
    credits: ["Abel Tesfaye", "Illangelo", "DaHeala"],
  },
];

export const TrackList: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(TRACK_DATA[0].id);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-background relative z-20" id="catalogue">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-12 gap-4 mb-12 border-b border-white/20 pb-4 items-end">
          <div className="col-span-12 md:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-mono text-primary uppercase tracking-widest"
            >
              // Selected Works
            </motion.h2>
          </div>
          <div className="hidden md:block md:col-span-6 text-right">
            <span className="text-[10px] uppercase text-muted-foreground tracking-widest">
              Index 01 — 05
            </span>
          </div>
        </div>

        {/* List Header (Desktop Only) */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-8 pb-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-mono">
          <div className="col-span-1">No.</div>
          <div className="col-span-5">Title / Artist</div>
          <div className="col-span-2">Album</div>
          <div className="col-span-2">Year</div>
          <div className="col-span-2 text-right">Expand</div>
        </div>

        {/* Tracks */}
        <div className="flex flex-col">
          {TRACK_DATA.map((track, index) => (
            <TrackItem
              key={track.id}
              track={track}
              isOpen={openId === track.id}
              onToggle={() => handleToggle(track.id)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
