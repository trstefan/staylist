

"use client";

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Check } from 'lucide-react';
import { NeonButton } from '@/components/ui/NeonButton';

export default function Page() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-20 bg-background relative overflow-hidden flex flex-col justify-center">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50" />

      <div className="container mx-auto px-4 relative z-10 max-w-2xl">
        
        <motion.div 
           variants={containerVariants}
           initial="hidden"
           animate="visible"
           className="w-full"
        >
           {/* Minimal Text Section */}
           <motion.div variants={itemVariants} className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                 <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                 <span className="text-[10px] font-mono uppercase text-primary tracking-[0.2em]">Protocol Open</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
                 Submit Entry
              </h1>
              <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-md mx-auto">
                 Contribute to the permanent record. <br/>High fidelity audio submissions only.
              </p>
           </motion.div>

           {/* Form Container */}
           <motion.div 
              variants={itemVariants} 
              className="bg-white/[0.02] border border-white/10 p-8 md:p-10 backdrop-blur-md relative shadow-2xl"
           >
              {/* Decorative technical markers */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-primary/40" />
              <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-primary/40" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-primary/40" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-primary/40" />

              {formState === 'success' ? (
                <div className="py-16 flex flex-col items-center justify-center text-center">
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-16 h-16 rounded-full bg-primary text-black flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(45,212,191,0.4)]"
                  >
                    <Check size={32} />
                  </motion.div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-2">Signal Received</h3>
                  <p className="text-muted-foreground mb-8 text-sm max-w-xs">
                    Your recommendation has been logged in the curation queue.
                  </p>
                  <NeonButton variant="outline" onClick={() => setFormState('idle')} className="w-full">
                    Submit Another
                  </NeonButton>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="artist" className="text-[10px] font-mono uppercase text-muted-foreground/70 tracking-widest pl-1">Artist</label>
                      <input 
                        type="text" 
                        id="artist" 
                        required
                        className="w-full bg-black/40 border border-white/10 focus:border-primary/60 focus:bg-primary/5 text-white p-3 text-sm outline-none transition-all placeholder:text-white/10"
                        placeholder="NAME"
                      />
                    </div>
                    <div className="space-y-1.5">
                       <label htmlFor="title" className="text-[10px] font-mono uppercase text-muted-foreground/70 tracking-widest pl-1">Track Title</label>
                       <input 
                          type="text" 
                          id="title" 
                          required
                          className="w-full bg-black/40 border border-white/10 focus:border-primary/60 focus:bg-primary/5 text-white p-3 text-sm outline-none transition-all placeholder:text-white/10"
                          placeholder="TITLE"
                        />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                     <label htmlFor="link" className="text-[10px] font-mono uppercase text-muted-foreground/70 tracking-widest pl-1">Audio Source</label>
                     <input 
                        type="url" 
                        id="link" 
                        required
                        className="w-full bg-black/40 border border-white/10 focus:border-primary/60 focus:bg-primary/5 text-white p-3 text-sm outline-none transition-all placeholder:text-white/10"
                        placeholder="https://"
                      />
                  </div>

                  <div className="space-y-1.5">
                     <label htmlFor="reason" className="text-[10px] font-mono uppercase text-muted-foreground/70 tracking-widest pl-1">Curator Notes</label>
                     <textarea 
                        id="reason" 
                        rows={3}
                        className="w-full bg-black/40 border border-white/10 focus:border-primary/60 focus:bg-primary/5 text-white p-3 text-sm outline-none transition-all placeholder:text-white/10 resize-none"
                        placeholder="Describe the sonic characteristics..."
                      />
                  </div>

                  <div className="pt-2">
                     <NeonButton 
                       type="submit" 
                       disabled={formState === 'submitting'}
                       className="w-full h-12 text-sm"
                     >
                        {formState === 'submitting' ? (
                          <span className="animate-pulse">Transmitting...</span>
                        ) : (
                          <span>Submit to Archive</span>
                        )}
                     </NeonButton>
                  </div>
                </form>
              )}
           </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

