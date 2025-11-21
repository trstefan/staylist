"use client";

import React from "react";
import { motion } from "framer-motion";
import { Disc, Menu } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 bg-primary/10 text-primary">
            <Disc className="w-5 h-5 animate-spin-slow" />
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase">
            Staylist_01
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/about-staylist"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest text-[10px]"
          >
            About
          </Link>
        </nav>

        <div className="">
          <Link href="/recommend-a-songg">
            <Button variant="outline" className="h-10 px-6 ">
              Recommend a song
            </Button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
