import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Play, Disc, ExternalLink } from "lucide-react";
import { Track } from "../types";

interface TrackItemProps {
  track: Track;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

export const TrackItem: React.FC<TrackItemProps> = ({
  track,
  isOpen,
  onToggle,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
      className={`group border-t border-white/5 transition-all duration-500 relative ${isOpen ? "bg-white/5 shadow-[inset_0_0_100px_rgba(45,212,191,0.05)]" : ""}`}
    >
      {/* Gradient Neon Glow Line on Hover - Teal to Purple */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-primary to-accent transition-all duration-300 ${isOpen ? "opacity-100 shadow-[0_0_15px_rgba(45,212,191,0.8)]" : "opacity-0 group-hover:opacity-100"}`}
      />

      {/* Main Row */}
      <motion.div
        onClick={onToggle}
        whileHover={{
          backgroundColor: isOpen
            ? "rgba(255,255,255,0.05)"
            : "rgba(255,255,255,0.02)",
        }}
        className="grid grid-cols-12 gap-4 py-8 px-4 md:px-8 cursor-pointer items-center relative z-10"
      >
        {/* Number */}
        <div className="col-span-2 md:col-span-1 text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors duration-300 group-hover:neon-text">
          {track.number}
        </div>

        {/* Title & Artist */}
        <div className="col-span-8 md:col-span-5 flex flex-col md:flex-row md:items-baseline gap-2">
          <h3
            className={`text-xl md:text-3xl font-bold uppercase tracking-tight transition-all duration-300 ${isOpen ? "text-transparent bg-clip-text bg-linear-to-r from-primary to-accent neon-text" : "text-white group-hover:text-white"}`}
          >
            {track.title}
          </h3>
          <span className="hidden md:inline-block text-muted-foreground/40 mx-2">
            —
          </span>
          <span className="text-sm md:text-lg text-muted-foreground uppercase tracking-widest font-medium group-hover:text-gray-300 transition-colors">
            {track.artist}
          </span>
        </div>

        {/* Metadata */}
        <div className="hidden md:col-span-2 md:flex items-center text-xs font-mono text-muted-foreground uppercase opacity-60 group-hover:opacity-100 transition-opacity">
          {track.album}
        </div>

        <div className="hidden md:col-span-2 md:flex items-center text-xs font-mono text-muted-foreground uppercase opacity-60 group-hover:opacity-100 transition-opacity">
          {track.year}
        </div>

        {/* Action Icon */}
        <div className="col-span-2 md:col-span-2 flex justify-end items-center">
          <motion.button
            whileHover={{ scale: 1.1, rotate: isOpen ? 180 : 90 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? "border-primary text-primary bg-primary/10 shadow-[0_0_20px_rgba(45,212,191,0.3)]" : "border-white/10 text-white group-hover:border-primary group-hover:text-primary"}`}
          >
            {isOpen ? <Minus size={18} /> : <Plus size={18} />}
          </motion.button>
        </div>
      </motion.div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden bg-black/20 backdrop-blur-md relative"
          >
            {/* Subtle ambient gradient in expanded view */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 blur-[80px] rounded-full pointer-events-none" />

            <div className="px-4 md:px-8 pb-12 pt-4 relative">
              {/* Decorative background number */}
              <div className="absolute right-10 top-0 text-[10rem] font-black text-white/5 font-mono pointer-events-none select-none">
                {track.number}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative z-10">
                {/* Album Art Area */}
                <div className="col-span-12 md:col-span-4 relative group/image">
                  <div className="aspect-square bg-neutral-900 overflow-hidden relative shadow-2xl border border-white/10">
                    <img
                      src={track.coverImage}
                      alt={track.album}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110 grayscale hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-all duration-500 backdrop-blur-[2px]">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-20 h-20 rounded-full bg-primary text-black flex items-center justify-center pl-1 shadow-[0_0_30px_rgba(45,212,191,0.6)]"
                      >
                        <Play fill="currentColor" size={32} />
                      </motion.button>
                    </div>
                  </div>

                  {/* Technical Specs */}
                  <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-primary/80 col-span-2">
                      <Disc size={12} className="text-primary" /> {track.genre}
                    </div>
                  </div>
                </div>

                {/* Details Area */}
                <div className="col-span-12 md:col-span-5 bg-white/3 p-6 md:p-10 border border-white/5 hover:border-white/10 transition-colors">
                  <h4 className="text-xs font-mono text-primary uppercase mb-6 tracking-widest neon-text">
                    Synopsis
                  </h4>
                  <p className="text-lg md:text-xl font-light leading-relaxed text-gray-200 mb-8 selection:bg-primary/30">
                    {track.description}
                  </p>
                  <p>
                    
                  </p>
                </div>

                {/* Action Area */}
                <div className="col-span-12 md:col-span-3 flex flex-col justify-between h-full min-h-[200px]">
                  <div className="space-y-4">
                    <h4 className="text-xs font-mono text-primary uppercase tracking-widest neon-text">
                      Listen
                    </h4>
                    <div className="flex flex-col gap-3">
                      {["Spotify", "Apple Music", "Soundcloud"].map(
                        (platform) => (
                          <motion.button
                            key={platform}
                            whileHover={{
                              x: 5,
                              backgroundColor: "rgba(255,255,255,0.05)",
                            }}
                            className="w-full text-left py-3 px-4 border border-white/10 transition-all text-sm uppercase tracking-wider flex justify-between items-center group/btn hover:border-primary/30"
                          >
                            {platform}{" "}
                            <ExternalLink
                              size={14}
                              className="text-primary opacity-0 group-hover/btn:opacity-100 transition-opacity"
                            />
                          </motion.button>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
