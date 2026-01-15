"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { TrackItem } from "@/components/TrackItem";
import { Track } from "@/types";
import { Loader2, Search, SlidersHorizontal, Music2 } from "lucide-react";

// Mock data generator for infinite scroll simulation
const GENRES = [
  "IDM",
  "Ambient",
  "Techno",
  "Deep House",
  "Future Garage",
  "Synthwave",
  "Experimental",
  "Drone",
];
const ARTISTS = [
  "Burial",
  "Aphex Twin",
  "Boards of Canada",
  "Four Tet",
  "Jon Hopkins",
  "Floating Points",
  "Caribou",
  "Moderat",
  "Bicep",
  "Jamie xx",
  "Nicolas Jaar",
  "Bonobo",
  "Tycho",
  "Rival Consoles",
];
const ADJECTIVES = [
  "Ethereal",
  "Dusty",
  "Analog",
  "Sublime",
  "Glitchy",
  "Hypnotic",
  "Kinetic",
  "Nocturnal",
  "Hazed",
  "Liquid",
];
const NOUNS = [
  "Echo",
  "Signal",
  "Memory",
  "Drift",
  "Pulse",
  "Loop",
  "Artifact",
  "Phase",
  "Transmission",
  "State",
];

const generateTracks = (count: number, startId: number): Track[] => {
  return Array.from({ length: count }).map((_, i) => {
    const id = startId + i;
    const artist = ARTISTS[Math.floor(Math.random() * ARTISTS.length)];
    const genre = GENRES[Math.floor(Math.random() * GENRES.length)];
    const title = `${
      ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)]
    } ${NOUNS[Math.floor(Math.random() * NOUNS.length)]}`;

    return {
      id: `cat-${id}`,
      number: (id + 1).toString().padStart(2, "0"),
      title,
      artist,
      album: `Archive Vol. ${Math.floor(id / 10) + 1}`,
      year: (2000 + Math.floor(Math.random() * 24)).toString(),
      duration: `${3 + Math.floor(Math.random() * 4)}:${
        10 + Math.floor(Math.random() * 50)
      }`,
      genre,
      bpm: 90 + Math.floor(Math.random() * 50),
      description: `A procedurally recovered entry from the permanent record. This track exemplifies the ${genre.toLowerCase()} aesthetic with ${ADJECTIVES[
        Math.floor(Math.random() * ADJECTIVES.length)
      ].toLowerCase()} textures and high-fidelity transients.`,
      coverImage: `https://picsum.photos/seed/${id * 123}/800/800`,
      credits: [artist, "Staylist Archive"],
    };
  });
};

export const Catalogue = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const observerTarget = useRef<HTMLDivElement>(null);

  // Initial load
  useEffect(() => {
    // Generate initial 10 tracks
    setTracks(generateTracks(10, 0));
  }, []);

  const loadMore = useCallback(() => {
    if (loading) return;
    setLoading(true);

    // Simulate network delay for "loading" effect
    setTimeout(() => {
      setTracks((prev) => [...prev, ...generateTracks(5, prev.length)]);
      setLoading(false);
    }, 1200);
  }, [loading]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [loadMore]);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredTracks = tracks.filter(
    (t) =>
      t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-background pt-32 pb-20 relative overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[60px_60px] pointer-events-none" />
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header Area */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8 border-b border-white/10 pb-8"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Music2 size={16} className="text-primary" />
                <span className="text-xs font-semibold font-mono uppercase text-primary tracking-[0.3em]">
                  Full Archive
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
                Catalogue
              </h1>
            </div>

            <div className="flex flex-col items-end gap-2">
              <div className="text-right">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-1">
                  Total Records
                </span>
                <span className="text-3xl font-bold text-white neon-text">
                  {tracks.length}+
                </span>
              </div>
            </div>
          </motion.div>

          {/* Toolbar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row gap-4 items-center bg-white/2 p-4 border border-white/10"
          >
            <div className="relative grow w-full md:w-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <motion.input
                whileFocus={{
                  scale: 1.01,
                  borderColor: "rgba(45, 212, 191, 0.5)",
                  boxShadow: "0 0 20px rgba(45, 212, 191, 0.1)",
                }}
                transition={{ duration: 0.2 }}
                type="text"
                placeholder="SEARCH ARCHIVE BY ARTIST OR TITLE..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black/40 border border-white/5 text-white pl-12 pr-4 py-3 text-xs font-mono uppercase tracking-widest outline-none transition-all placeholder:text-white/20"
              />
            </div>
            <motion.button
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(45, 212, 191, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 border border-white/10 text-xs font-mono uppercase tracking-widest text-muted-foreground transition-colors w-full md:w-auto justify-center"
            >
              <SlidersHorizontal size={14} /> Filter
            </motion.button>
          </motion.div>
        </div>

        {/* List Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-8 pb-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-mono">
          <div className="col-span-1">No.</div>
          <div className="col-span-5">Title / Artist</div>
          <div className="col-span-2">Album</div>
          <div className="col-span-2">Year</div>
          <div className="col-span-2 text-right">Expand</div>
        </div>

        {/* Tracks */}
        <div className="flex flex-col min-h-[50vh]">
          {filteredTracks.map((track, index) => (
            <TrackItem
              key={track.id}
              track={track}
              isOpen={openId === track.id}
              onToggle={() => handleToggle(track.id)}
              index={index}
            />
          ))}

          {filteredTracks.length === 0 && (
            <div className="py-20 text-center text-muted-foreground font-mono text-sm uppercase tracking-widest">
              No records found matching query.
            </div>
          )}
        </div>

        {/* Infinite Scroll Loader */}
        <div
          ref={observerTarget}
          className="py-12 flex flex-col items-center justify-center gap-4"
        >
          {loading && (
            <>
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
              <span className="text-[10px] font-mono uppercase text-primary tracking-widest animate-pulse">
                Retrieving Archived Data...
              </span>
            </>
          )}
        </div>

        <div className="fixed bottom-8 right-8 z-50 pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: loading ? 1 : 0 }}
            className="bg-black/80 backdrop-blur-md border border-primary/20 text-primary px-4 py-2 text-[10px] font-mono uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(45,212,191,0.2)]"
          >
            Syncing...
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
