"use client";

import SongsDatabase from "@/components/songs-database";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Hero } from "@/components/Hero";
import { TrackList } from "@/components/TrackList";
import Link from "next/link";

export default function Home() {
  const songs = useQuery(api.songs.list);

  // Convex queries start as undefined while loading

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-black">
      <Hero />
      <TrackList />
      {/* Call to Action Section */}
      <section className="py-32 border-t border-white/10 bg-linear-to-b from-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-8">
            Do you have a sound <br />
            <span className="text-primary">worth archiving?</span>
          </h3>
          <Link href="/recommend-a-song">
            <button className="inline-flex items-center justify-center px-8 py-4 rounded-none border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-bold">
              Recommend a song
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
