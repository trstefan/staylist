"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const AboutStaylist = () => {
  return (
    <section className="pt-32 pb-20 min-h-screen bg-background relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header Section */}
        <div className="mb-20 border-b border-white/10 pb-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-xs font-mono uppercase text-primary tracking-widest">
              About The Project
            </span>
          </div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-white mb-8"
          >
            Signal <br />
            <span className="text-muted-foreground/50">Over Noise</span>
          </motion.h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          {/* Main Column */}
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-16"
            >
              <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight leading-tight mb-8">
                Staylist acts as a{" "}
                <span className="text-primary">permanent record</span> for
                auditory experiences that define our time.
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                In an era of algorithmic feeds and ephemeral content, we believe
                in the permanence of quality. Our mission is to curate, archive,
                and present music that transcends the temporary nature of the
                modern web. We are not a streaming service; we are a gallery of
                sound.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xs font-mono text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                  <ArrowRight size={12} /> The Philosophy
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every track in our catalogue is hand-picked by human curators.
                  We analyze sonic architecture, emotional resonance, and
                  production fidelity. We reject the notion of "background
                  music."
                </p>
              </div>
              <div>
                <h4 className="text-xs font-mono text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                  <ArrowRight size={12} /> The Technology
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Built on decentralized protocols, Staylist ensures that the
                  metadata and curation history of these tracks remain
                  accessible forever, independent of any single platform or
                  entity.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="md:col-span-4 md:border-l border-white/10 md:pl-12 flex flex-col justify-between h-full">
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter">
                  2025
                </div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  Established
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter">
                  500+
                </div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  Tracks Archived
                </div>
              </motion.div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10">
              <h4 className="text-xs font-mono text-white uppercase tracking-widest mb-4">
                Based In
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-mono uppercase">
                <li>Zurich, CH</li>
                <li>Berlin, DE</li>
                <li>Tokyo, JP</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStaylist;
