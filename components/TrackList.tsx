"use client";
import React, { useState } from "react";
import { Track } from "../types";
import { TrackItem } from "./TrackItem";
import { motion } from "framer-motion";

const TRACK_DATA: Track[] = [
  {
    id: "1",
    number: "01",
    title: "Respect",
    artist: "Aretha Franklin",
    album: "I Never Loved a Man the Way I Love You",
    year: "1967",
    genre: "Soul / R&B",
    description:
      "Originally written by Otis Redding, Aretha Franklin’s version transformed the song into a global anthem for the Civil Rights and feminist movements. Her powerful delivery and the addition of the 'R-E-S-P-E-C-T' chorus cemented her title as the Queen of Soul.",
    coverImage: "https://picsum.photos/id/1025/800/800",
  },
  {
    id: "2",
    number: "02",
    title: "Like a Rolling Stone",
    artist: "Bob Dylan",
    album: "Highway 61 Revisited",
    year: "1965",
    genre: "Folk Rock",
    description:
      "Widely considered the most influential song in rock history, it shattered the three-minute pop song mold. Dylan’s snarling vocals and poetic, confrontational lyrics bridged the gap between folk earnestness and rock rebellion.",
    coverImage: "https://picsum.photos/id/1031/800/800",
  },
  {
    id: "3",
    number: "03",
    title: "A Change Is Gonna Come",
    artist: "Sam Cooke",
    album: "Ain't That Good News",
    year: "1964",
    genre: "Soul",
    description:
      "Inspired by Bob Dylan’s 'Blowin’ in the Wind' and Cooke’s own experiences with racism, this orchestral masterpiece became the definitive soundtrack of the American Civil Rights Movement, capturing both pain and hope.",
    coverImage: "https://picsum.photos/id/1041/800/800",
  },
  {
    id: "4",
    number: "04",
    title: "Smells Like Teen Spirit",
    artist: "Nirvana",
    album: "Nevermind",
    year: "1991",
    genre: "Grunge / Alternative Rock",
    description:
      "The 'anthem for apathetic kids,' this track brought the Seattle grunge sound to the mainstream. Its quiet-loud dynamic and Kurt Cobain’s raw energy signaled the end of 80s hair metal and the birth of Generation X’s cultural dominance.",
    coverImage: "https://picsum.photos/id/1050/800/800",
  },
  {
    id: "5",
    number: "05",
    title: "What’s Going On",
    artist: "Marvin Gaye",
    album: "What's Going On",
    year: "1971",
    genre: "Soul / Motown",
    description:
      "A sophisticated plea for peace and social justice, this track broke the Motown hit-making formula. Its lush production and Gaye’s multi-layered vocals created a timeless meditation on war, poverty, and ecological issues.",
    coverImage: "https://picsum.photos/id/1062/800/800",
  },

  {
    id: "6",
    number: "06",
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    year: "1975",
    genre: "Progressive Rock / Operatic Pop",
    description:
      "A suite of distinct sections including a ballad, an operatic middle, and a hard rock finale. Freddie Mercury’s masterpiece defied radio conventions and remains one of the most beloved vocal performances in history.",
    coverImage: "https://picsum.photos/id/1081/800/800",
  },
  {
    id: "7",
    number: "07",
    title: "Dreams",
    artist: "Fleetwood Mac",
    album: "Rumours",
    year: "1977",
    genre: "Soft Rock",
    description:
      "Written by Stevie Nicks during the band’s infamous internal turmoil, 'Dreams' is a masterclass in atmospheric songwriting. Its steady groove and ethereal lyrics about moving on have given it a lasting resonance across generations.",
    coverImage: "https://picsum.photos/id/1020/800/800",
  },
  {
    id: "8",
    number: "08",
    title: "Fight the Power",
    artist: "Public Enemy",
    album: "Fear of a Black Planet",
    year: "1989",
    genre: "Hardcore Hip Hop",
    description:
      "Commissioned by Spike Lee for 'Do the Right Thing', this track is a sonic explosion of samples and revolutionary rhetoric. It redefined the political potential of hip hop and remains a cornerstone of protest music.",
    coverImage: "https://picsum.photos/id/1015/800/800",
  },
  {
    id: "9",
    number: "09",
    title: "Billie Jean",
    artist: "Michael Jackson",
    album: "Thriller",
    year: "1982",
    genre: "Pop / Funk",
    description:
      "With its instantly recognizable bassline and innovative production, 'Billie Jean' helped Thriller become the best-selling album of all time. It broke racial barriers on MTV and established Jackson as a global superstar.",
    coverImage: "https://picsum.photos/id/1011/800/800",
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
