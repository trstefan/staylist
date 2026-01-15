import React from "react";
import { motion } from "framer-motion";

export const PrivacySection: React.FC<{
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  index: number;
}> = ({ title, icon, children, index }) => (
  <motion.div
    initial={{ x: -20, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="relative group mb-12"
  >
    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary/20 group-hover:bg-primary transition-colors duration-500 shadow-[0_0_15px_rgba(45,212,191,0.5)]" />
    <div className="pl-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-primary p-2 bg-primary/10 rounded-lg border border-primary/20 group-hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white group-hover:neon-text transition-all">
          {title}
        </h3>
      </div>
      <div className="text-muted-foreground font-light leading-relaxed max-w-3xl selection:bg-primary/20">
        {children}
      </div>
    </div>
  </motion.div>
);
