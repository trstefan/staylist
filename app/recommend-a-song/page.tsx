"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function Page() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="min-h-screen pt-32 pb-20 bg-background relative overflow-hidden flex flex-col justify-center items-center">
      {/* Background Ambience - Shifted to Amber/Yellow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#fcd116]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none opacity-50" />

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center"
        >
          {/* Primary Under Construction LED Portal */}
          <motion.div variants={itemVariants} className="w-full relative group">
            <div className="relative overflow-hidden bg-black/80 border-2 border-[#fcd116]/20 rounded-2xl p-8 md:p-16 backdrop-blur-3xl shadow-[0_0_80px_rgba(252,209,22,0.15)] flex flex-col items-center">
              {/* Neon High-Intensity Border Glow - Updated to Yellow */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.4, 0.9, 0.5],
                  boxShadow: [
                    "inset 0 0 30px rgba(252,209,22,0.2), 0 0 30px rgba(252,209,22,0.2)",
                    "inset 0 0 50px rgba(252,209,22,0.4), 0 0 50px rgba(252,209,22,0.4)",
                    "inset 0 0 30px rgba(252,209,22,0.2), 0 0 30px rgba(252,209,22,0.2)",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  times: [0, 0.2, 0.5, 0.8, 1],
                }}
                className="absolute inset-0 border-4 border-[#fcd116]/40 rounded-2xl pointer-events-none z-20"
              />

              {/* Inner Bright Neon Strip */}
              <div className="absolute inset-1 border border-white/10 rounded-[calc(1rem-2px)] pointer-events-none z-20 opacity-30" />

              {/* Hazard Stripes - Background Decoration */}
              <div className="absolute top-0 left-0 right-0 h-4 bg-[repeating-linear-gradient(45deg,#fcd116,#fcd116_20px,#000_20px,#000_40px)] opacity-20" />
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-[repeating-linear-gradient(45deg,#fcd116,#fcd116_20px,#000_20px,#000_40px)] opacity-20" />

              <div className="flex flex-col items-center gap-10 relative z-10 text-center">
                {/* Massive Neon SVG Sign */}
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  {/* Aura Glow */}
                  <div className="absolute inset-0 bg-yellow-400/20 blur-[60px] rounded-full animate-pulse-slow" />

                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      filter: [
                        "drop-shadow(0 0 20px rgba(252,209,22,0.4))",
                        "drop-shadow(0 0 40px rgba(252,209,22,0.7))",
                        "drop-shadow(0 0 20px rgba(252,209,22,0.4))",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-full h-full"
                  >
                    <Image
                      src="/sign.png"
                      alt="Under Construction"
                      fill
                      className="object-contain"
                    />
                  </motion.div>

                  {/* Scanline Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%),linear-gradient(90deg,rgba(255,255,0,0.02),rgba(252,209,22,0.05),rgba(255,255,0,0.02))] bg-size-[100%_4px,3px_100%] pointer-events-none opacity-40 mix-blend-overlay z-10" />
                </div>

                <div className="space-y-6">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-4 bg-[#fcd116]/10 border border-[#fcd116]/30 px-6 py-2 rounded-full backdrop-blur-sm">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fcd116] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#fcd116] shadow-[0_0_10px_rgba(252,209,22,0.7)]"></span>
                      </span>
                      <span className="text-sm font-mono font-bold text-[#fcd116] tracking-[0.4em] uppercase">
                        Status: Maintenance
                      </span>
                    </div>
                  </div>

                  <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.9]">
                    Protocol{" "}
                    <span
                      className="text-[#fcd116]"
                      style={{ textShadow: "0 0 20px rgba(252, 209, 22, 0.5)" }}
                    >
                      Offline
                    </span>
                  </h1>

                  <p className="text-lg md:text-xl font-mono text-muted-foreground uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
                    The submission core is currently undergoing{" "}
                    <span className="text-white">v2.0 synchronization</span>.
                    Archive ingestion is suspended until the signal stabilizes.
                  </p>
                </div>
              </div>
              {/* Scanning Progress Bar - Updated to Yellow */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/5 overflow-hidden">
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 w-2/3 bg-linear-to-r from-transparent via-[#fcd116] to-transparent shadow-[0_0_15px_rgba(252,209,22,1)]"
                />
              </div>
            </div>
          </motion.div>

          {/* Encouragement Footer */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <p className="text-muted-foreground text-sm font-light uppercase tracking-[0.3em]">
              Check back soon for the{" "}
              <span className="text-[#fcd116]">Next Era</span> of curation.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
