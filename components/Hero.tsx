import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-12 border-b border-white/5 overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Label */}
          <div className="md:col-span-12 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] uppercase tracking-widest font-mono"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Curated Audio Vol. 04
            </motion.div>
          </div>

          {/* Main Headline - Swiss Style (Big, Tight, Bold) */}
          <div className="md:col-span-10">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white mb-8"
            >
              Sonic <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-white/40">
                Architecture
              </span>
            </motion.h1>
          </div>

          {/* Description text aligned to grid */}
          <div className="md:col-span-5 md:col-start-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed border-l-2 border-primary/50 pl-6"
            >
              Very good music that stays with you. A decentralized archive of
              auditory experiences, strictly curated for the discerning
              listener.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-0 right-0 flex justify-center"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};
