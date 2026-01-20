"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrackItem } from "@/components/TrackItem";
import { Track } from "@/types";
import { Loader2, Search, SlidersHorizontal, Music2 } from "lucide-react";

export const Catalogue = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [availableGenres, setAvailableGenres] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortBy, setSortBy] = useState("createdAt");
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const ALL_GENRES = ["All", ...availableGenres];
  const observerTarget = useRef<HTMLDivElement>(null);

  // Fetch genres on mount
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch("/api/genres");
        const data = await response.json();
        if (Array.isArray(data)) {
          setAvailableGenres(data);
        }
      } catch (error) {
        console.error("Failed to fetch genres:", error);
      }
    };
    fetchGenres();
  }, []);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const fetchTracks = useCallback(
    async (isInitial = false) => {
      if (loading || (!hasMore && !isInitial)) return;

      setLoading(true);
      const currentPage = isInitial ? 1 : page;

      try {
        const params = new URLSearchParams({
          page: currentPage.toString(),
          limit: "10",
          sortBy,
          order,
        });

        if (debouncedSearch) params.append("q", debouncedSearch);
        if (selectedGenre !== "All") params.append("genre", selectedGenre);

        const response = await fetch(`/api/songs?${params.toString()}`);
        const data = await response.json();

        if (Array.isArray(data)) {
          if (isInitial) {
            setTracks(data);
          } else {
            setTracks((prev) => [...prev, ...data]);
          }
          setHasMore(data.length === 10);
          setPage(currentPage + 1);
        }
      } catch (error) {
        console.error("Failed to fetch tracks:", error);
      } finally {
        setLoading(false);
      }
    },
    [loading, hasMore, page, debouncedSearch, selectedGenre, sortBy, order],
  );

  // Initial load and dependency changes
  useEffect(() => {
    setPage(1);
    setHasMore(true);
    fetchTracks(true);
  }, [debouncedSearch, selectedGenre, sortBy, order]);

  // Infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && hasMore) {
          fetchTracks();
        }
      },
      { threshold: 0.1, rootMargin: "100px" },
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [fetchTracks, loading, hasMore]);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

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
                placeholder="SEARCH ARCHIVE BY ARTIST, TITLE, OR ALBUM..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black/40 border border-white/5 text-white pl-12 pr-4 py-3 text-xs font-mono uppercase tracking-widest outline-none transition-all placeholder:text-white/20"
              />
            </div>

            <div className="flex gap-2 w-full md:w-auto">
              <select
                value={`${sortBy}-${order}`}
                onChange={(e) => {
                  const [newSort, newOrder] = e.target.value.split("-");
                  setSortBy(newSort);
                  setOrder(newOrder as "asc" | "desc");
                }}
                className="bg-black/40 border border-white/10 text-white px-4 py-3 text-xs font-mono uppercase tracking-widest outline-none transition-all cursor-pointer focus:border-primary/50 grow md:grow-0"
              >
                <option value="createdAt-desc">Newest First</option>
                <option value="createdAt-asc">Oldest First</option>
                <option value="title-asc">Name (A-Z)</option>
                <option value="title-desc">Name (Z-A)</option>
                <option value="year-desc">Year (New-Old)</option>
                <option value="year-asc">Year (Old-New)</option>
              </select>

              <motion.button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderColor: "rgba(45, 212, 191, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-6 py-3 border transition-colors md:w-auto justify-center text-xs font-mono uppercase tracking-widest ${isFilterOpen ? "border-primary text-primary bg-primary/5" : "border-white/10 text-muted-foreground"}`}
              >
                <SlidersHorizontal size={14} /> Filter
              </motion.button>
            </div>
          </motion.div>

          {/* Filter Panel */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden bg-white/2 border-x border-b border-white/10"
              >
                <div className="p-6">
                  <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-4">
                    Genre Selection
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {ALL_GENRES.map((genre) => (
                      <button
                        key={genre}
                        onClick={() => setSelectedGenre(genre)}
                        className={`px-4 py-2 text-[10px] font-mono uppercase tracking-widest border transition-all ${selectedGenre === genre ? "border-primary text-primary bg-primary/10" : "border-white/5 text-muted-foreground hover:border-white/20 hover:text-white"}`}
                      >
                        {genre}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
          {tracks.map((track, index) => (
            <TrackItem
              key={track.id}
              track={track}
              number={(index + 1).toString().padStart(2, "0")}
              isOpen={openId === track.id}
              onToggle={() => handleToggle(track.id)}
              index={index}
            />
          ))}

          {tracks.length === 0 && !loading && (
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
