"use client";
import React, { useState, useEffect } from "react";
import { Track } from "../types";
import { TrackItem } from "./TrackItem";
import { motion } from "framer-motion";
import { Loader2, Music2 } from "lucide-react";

export const TrackList: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch('/api/songs');
        if (!response.ok) throw new Error('Failed to fetch songs');
        const data = await response.json();
        setTracks(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSongs();
  }, []);

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
              // Community Submissions
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

        {/* Loading State */}
        {isLoading && (
          <div className="py-20 flex flex-col items-center justify-center gap-4">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
            <span className="text-[10px] font-mono uppercase text-primary tracking-widest animate-pulse">
              Retrieving Signals...
            </span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="py-20 text-center">
            <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono uppercase tracking-widest inline-block">
              {error}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && tracks.length === 0 && (
          <div className="py-20 flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
              <Music2 className="w-6 h-6 text-muted-foreground/50" />
            </div>
            <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest text-center">
              No signals in the archive yet.<br/>
              Be the first to submit a track.
            </p>
          </div>
        )}

        {/* Tracks */}
        {!isLoading && !error && tracks.length > 0 && (
          <div className="flex flex-col">
            {tracks.map((track, index) => (
              <TrackItem
                key={track.id}
                track={track}
                isOpen={openId === track.id}
                onToggle={() => handleToggle(track.id)}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
