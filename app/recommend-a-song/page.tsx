"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Send, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Suggest: React.FC = () => {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <section className="pt-32 pb-20 min-h-screen bg-background relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16 border-b border-white/10 pb-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-xs font-mono uppercase text-primary tracking-widest">
              Contribution Protocol
            </span>
          </div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white"
          >
            Submit <br />
            <span className="text-muted-foreground/50">Recommendation</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          {/* Context / Sidebar */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-light">
                The catalogue is a living archive. We invite you to contribute
                to the sonic architecture of Staylist.
              </p>

              <div className="space-y-8 border-l border-white/10 pl-6 py-2">
                <div>
                  <h4 className="text-xs font-mono text-white uppercase tracking-widest mb-2">
                    Criteria
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight
                        size={14}
                        className="mt-0.5 text-primary shrink-0"
                      />
                      <span>High production fidelity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight
                        size={14}
                        className="mt-0.5 text-primary shrink-0"
                      />
                      <span>Emotional resonance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight
                        size={14}
                        className="mt-0.5 text-primary shrink-0"
                      />
                      <span>Timeless composition</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-white uppercase tracking-widest mb-2">
                    Review Process
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Submissions are reviewed weekly by our curation team. If
                    selected, you will be credited in the permanent ledger.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Section */}
          <div className="md:col-span-8 md:col-start-6">
            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 border border-primary/20 bg-primary/5 rounded-sm"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-6">
                  <Check size={32} />
                </div>
                <h3 className="text-3xl font-bold uppercase tracking-tight mb-4">
                  Transmission Received
                </h3>
                <p className="text-muted-foreground max-w-md mb-8">
                  Your recommendation has been logged in our queue. Thank you
                  for contributing to the archive.
                </p>
                <Button variant="outline" onClick={() => setFormState("idle")}>
                  Submit Another
                </Button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label
                      htmlFor="artist"
                      className="text-xs font-mono uppercase text-muted-foreground tracking-wider"
                    >
                      Artist Name *
                    </label>
                    <input
                      type="text"
                      id="artist"
                      required
                      className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-white/10 focus:ring-0 text-white p-4 outline-none transition-all placeholder:text-white/20 text-sm"
                      placeholder="e.g. Radiohead"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="title"
                      className="text-xs font-mono uppercase text-muted-foreground tracking-wider"
                    >
                      Track Title *
                    </label>
                    <input
                      type="text"
                      id="title"
                      required
                      className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-white/10 focus:ring-0 text-white p-4 outline-none transition-all placeholder:text-white/20 text-sm"
                      placeholder="e.g. Everything In Its Right Place"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="link"
                    className="text-xs font-mono uppercase text-muted-foreground tracking-wider"
                  >
                    Streaming Link (Spotify / SC / YT) *
                  </label>
                  <input
                    type="url"
                    id="link"
                    required
                    className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-white/10 focus:ring-0 text-white p-4 outline-none transition-all placeholder:text-white/20 text-sm"
                    placeholder="https://..."
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="reason"
                    className="text-xs font-mono uppercase text-muted-foreground tracking-wider"
                  >
                    Why does this belong here? (Optional)
                  </label>
                  <textarea
                    id="reason"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-white/10 focus:ring-0 text-white p-4 outline-none transition-all placeholder:text-white/20 text-sm resize-none"
                    placeholder="Describe the sonic characteristics..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label
                      htmlFor="curator"
                      className="text-xs font-mono uppercase text-muted-foreground tracking-wider"
                    >
                      Your Name / Handle
                    </label>
                    <input
                      type="text"
                      id="curator"
                      className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-white/10 focus:ring-0 text-white p-4 outline-none transition-all placeholder:text-white/20 text-sm"
                      placeholder="@username"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-mono uppercase text-muted-foreground tracking-wider"
                    >
                      Email (Private)
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-white/10 focus:ring-0 text-white p-4 outline-none transition-all placeholder:text-white/20 text-sm"
                      placeholder="For acceptance notification"
                    />
                  </div>
                </div>

                <div className="pt-6 flex items-center justify-between border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <AlertCircle size={14} />
                    <span>All submissions are subject to review.</span>
                  </div>
                  <Button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="min-w-40"
                  >
                    {formState === "submitting" ? (
                      <span className="animate-pulse">Transmitting...</span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Signal <Send size={14} />
                      </span>
                    )}
                  </Button>
                </div>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suggest;
