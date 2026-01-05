"use client";
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
    genre: "Synth-pop / Dream Pop",
    description:
      'A quintessential track that defined the early 2010s indie aesthetic. "Midnight City" captures the feeling of driving through a neon-lit metropolis late at night, blending nostalgia with futuristic synth textures.',
    coverImage: "https://picsum.photos/id/1048/800/800",
  },
];

export const TrackList: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

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
