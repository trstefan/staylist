"use client";

import { motion, Variants } from "framer-motion";
import { Activity } from "lucide-react";
import { AddForm } from "@/components/AddForm";


export default function Page() {
 const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-20 bg-background relative overflow-hidden">
      {/* Global Style Backgrounds */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#39FF14]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
           variants={containerVariants}
           initial="hidden"
           animate="visible"
           className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 border-b border-white/10 pb-12">
            <div className="flex items-center gap-3 mb-6">
              <Activity size={16} className="text-[#39FF14] animate-pulse" />
              <span className="text-xs font-mono uppercase text-[#39FF14] tracking-[0.3em] font-bold">// Archival_Submission</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-white">
              Signal <br/>
              <span className="text-[#39FF14] neon-text" style={{ textShadow: '0 0 30px rgba(57,255,20,0.4)' }}>Input</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            {/* Context / Instructions */}
            <div className="md:col-span-5 space-y-8">
              <motion.div variants={itemVariants}>
                <p className="text-xl md:text-2xl text-white font-medium leading-tight tracking-tight mb-6">
                  Help expand the <span className="text-[#39FF14] italic">Permanent Record</span>. 
                </p>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Staylist is a curated sanctuary for sound. We rely on the community to identify high-fidelity signals that deserve a place in our decentralized archive. 
                </p>
                <p className="text-muted-foreground leading-relaxed font-light mt-4">
                  Every submission is processed through our verification protocols to ensure atmospheric consistency.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="p-6 border border-white/10 bg-white/[0.02] rounded-sm">
                <h4 className="text-[10px] font-mono text-[#39FF14] uppercase tracking-widest mb-4">Transfer Protocols</h4>
                <ul className="space-y-3 text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                  <li className="flex items-start gap-3">
                    <span className="text-[#39FF14]">01</span> Verification of source integrity required.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#39FF14]">02</span> Atmospheric profile must match archive vibe.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#39FF14]">03</span> Redundant signals will be filtered.
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* The AddForm Component */}
            <div className="md:col-span-7">
              <motion.div variants={itemVariants}>
                <AddForm />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Persistent Scanline (Subtle) */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(57,255,20,0.01),rgba(57,255,20,0),rgba(57,255,20,0.01))] bg-[size:100%_2px,2px_100%] pointer-events-none z-50 opacity-20" />
    </section>
  );
}
