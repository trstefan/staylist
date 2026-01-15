"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, Home, RefreshCcw } from "lucide-react";
import { NeonButton } from "@/components/ui/NeonButton";
import Link from "next/link";

const notFound = () => {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden p-4">
      {/* LED Matrix Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#fcd116_1px,transparent_1px)] bg-size-[20px_20px]" />
      </div>

      {/* Glitch Overlays */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-30 mix-blend-screen">
        <motion.div
          animate={{ y: ["0%", "100%", "0%"] }}
          transition={{ duration: 0.2, repeat: Infinity, ease: "linear" }}
          className="w-full h-0.5 bg-primary shadow-[0_0_20px_#2dd4bf]"
        />
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#fcd116]/10 blur-[120px] rounded-full animate-pulse-slow" />

      <div className="relative z-20 text-center max-w-2xl">
        {/* Diagnostic Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 px-4 py-1.5 rounded-full mb-8"
        >
          <AlertCircle size={14} className="text-red-500 animate-pulse" />
          <span className="text-[10px] font-mono font-bold text-red-500 tracking-[0.3em] uppercase">
            Error: Signal_Lost_404
          </span>
        </motion.div>

        {/* Massive Glitch 404 */}
        <div className="relative mb-12 select-none">
          <motion.h1
            animate={{
              x: [-2, 2, -1, 3, -2],
              filter: [
                "drop-shadow(2px 0px 0px #2dd4bf) drop-shadow(-2px 0px 0px #fcd116)",
                "drop-shadow(-3px 0px 0px #2dd4bf) drop-shadow(3px 0px 0px #fcd116)",
                "drop-shadow(2px 0px 0px #2dd4bf) drop-shadow(-2px 0px 0px #fcd116)",
              ],
            }}
            transition={{ duration: 0.1, repeat: Infinity }}
            className="text-[25vw] md:text-[15rem] font-black leading-none text-white tracking-tighter"
          >
            404
          </motion.h1>

          {/* Sliced effect overlay */}
          <div className="absolute inset-0 flex flex-col justify-center pointer-events-none opacity-50">
            <div
              className="h-1 bg-black w-full my-4 animate-bounce"
              style={{ animationDuration: "0.1s" }}
            />
            <div
              className="h-0.5 bg-black w-full my-8 animate-pulse"
              style={{ animationDuration: "0.05s" }}
            />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white">
            Archive Entry{" "}
            <span className="text-[#fcd116] neon-text">Not Found</span>
          </h2>

          <div className="flex  items-center justify-center gap-4 pt-8">
            <Link href="/">
              <NeonButton variant="primary" className="h-14 px-8 group">
                <Home
                  size={18}
                  className="mr-2 group-hover:-rotate-12 transition-transform"
                />
                Return to Home Page
              </NeonButton>
            </Link>
          </div>
        </div>

        {/* Technical Logs decoration */}
        <div className="mt-20 text-left opacity-30 font-mono text-[9px] hidden md:block border-t border-white/10 pt-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-1">
              <div className="text-[#fcd116]"> SYSTEM_DIAGNOSTIC_INIT...</div>
              <div className="text-white"> SEEKING_MEMORY_ADDRESS_0x404...</div>
              <div className="text-white">
                {" "}
                FATAL_ERROR: NULL_POINTER_EXCEPTION
              </div>
            </div>
            <div className="space-y-1 text-right">
              <div className="text-white">LATENCY: 0.00ms</div>
              <div className="text-white">PACKET_LOSS: 100%</div>
              <div className="text-red-500">STATUS: SIGNAL_CRITICAL</div>
            </div>
          </div>
        </div>
      </div>

      {/* LED Scanline CRT Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%] pointer-events-none z-50 opacity-40" />
    </section>
  );
};

export default notFound;
