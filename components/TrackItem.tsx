import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Play, Clock, Disc, BarChart2 } from "lucide-react";
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`group border-t border-white/10 transition-colors duration-500 ${isOpen ? "bg-white/5" : "hover:bg-white/2]"}`}
    >
      {/* Main Row - Always Visible */}
      <div
        onClick={onToggle}
        className="grid grid-cols-12 gap-4 py-8 px-4 md:px-8 cursor-pointer items-center relative"
      >
        {/* Number */}
        <div className="col-span-2 md:col-span-1 text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">
          {track.number}
        </div>

        {/* Title & Artist (Mobile prominent) */}
        <div className="col-span-8 md:col-span-5 flex flex-col md:flex-row md:items-baseline gap-2">
          <h3
            className={`text-xl md:text-3xl font-bold uppercase tracking-tight transition-colors ${isOpen ? "text-primary" : "text-white"}`}
          >
            {track.title}
          </h3>
          <span className="hidden md:inline-block text-muted-foreground/40 mx-2">
            —
          </span>
          <span className="text-sm md:text-lg text-muted-foreground uppercase tracking-widest font-medium">
            {track.artist}
          </span>
        </div>

        {/* Metadata (Hidden on small mobile) */}
        <div className="hidden md:col-span-2 md:flex items-center text-xs font-mono text-muted-foreground uppercase">
          {track.album}
        </div>

        <div className="hidden md:col-span-2 md:flex items-center text-xs font-mono text-muted-foreground uppercase">
          {track.year}
        </div>

        {/* Action Icon */}
        <div className="col-span-2 md:col-span-2 flex justify-end items-center">
          <motion.button
            animate={{ rotate: isOpen ? 180 : 0 }}
            className={`w-8 h-8 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? "border-primary text-primary bg-primary/10" : "border-white/10 text-white group-hover:border-white/30"}`}
          >
            {isOpen ? <Minus size={16} /> : <Plus size={16} />}
          </motion.button>
        </div>
      </div>

      {/* Expanded Content - Accordion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-4 md:px-8 pb-12 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                {/* Album Art Area */}
                <div className="col-span-12 md:col-span-4 relative group/image">
                  <div className="aspect-square bg-neutral-800 overflow-hidden relative">
                    <img
                      src={track.coverImage}
                      alt={track.album}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110 grayscale group-hover/image:grayscale-0"
                    />
                    {/* Overlay Play Button */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                      <button className="w-16 h-16 rounded-full bg-primary text-black flex items-center justify-center pl-1 hover:scale-110 transition-transform">
                        <Play fill="currentColor" />
                      </button>
                    </div>
                  </div>

                  {/* Technical Specs */}
                  <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                      <Clock size={12} /> {track.duration}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                      <BarChart2 size={12} /> {track.bpm} BPM
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground col-span-2">
                      <Disc size={12} /> {track.genre}
                    </div>
                  </div>
                </div>

                {/* Details Area */}
                <div className="col-span-12 md:col-span-5 bg-white/5 p-6 md:p-10 backdrop-blur-sm">
                  <h4 className="text-xs font-mono text-primary uppercase mb-4 tracking-widest">
                    Synopsis
                  </h4>
                  <p className="text-lg md:text-xl font-light leading-relaxed text-gray-200 mb-8">
                    {track.description}
                  </p>

                  <h4 className="text-xs font-mono text-primary uppercase mb-4 tracking-widest">
                    Production Credits
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {track.credits.map((credit, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 border border-white/10 rounded-full text-xs text-muted-foreground hover:text-white hover:border-white/30 transition-colors cursor-default"
                      >
                        {credit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Area (Right Sidebar style) */}
                <div className="col-span-12 md:col-span-3 flex flex-col justify-between h-full min-h-[200px]">
                  <div className="space-y-4">
                    <h4 className="text-xs font-mono text-primary uppercase tracking-widest">
                      Availability
                    </h4>
                    <div className="flex flex-col gap-2">
                      <button className="w-full text-left py-3 px-4 border border-white/10 hover:bg-white/5 transition-colors text-sm uppercase tracking-wider flex justify-between items-center group/btn">
                        Spotify{" "}
                        <span className="text-primary opacity-0 group-hover/btn:opacity-100">
                          ↗
                        </span>
                      </button>
                      <button className="w-full text-left py-3 px-4 border border-white/10 hover:bg-white/5 transition-colors text-sm uppercase tracking-wider flex justify-between items-center group/btn">
                        Apple Music{" "}
                        <span className="text-primary opacity-0 group-hover/btn:opacity-100">
                          ↗
                        </span>
                      </button>
                      <button className="w-full text-left py-3 px-4 border border-white/10 hover:bg-white/5 transition-colors text-sm uppercase tracking-wider flex justify-between items-center group/btn">
                        Soundcloud{" "}
                        <span className="text-primary opacity-0 group-hover/btn:opacity-100">
                          ↗
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="mt-8 md:mt-0">
                    <div className="text-[10px] uppercase text-muted-foreground mb-2">
                      Added
                    </div>
                    <div className="font-mono text-sm">24 OCT 2025</div>
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
