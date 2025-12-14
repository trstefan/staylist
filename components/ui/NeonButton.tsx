"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface NeonButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "outline" | "ghost";
  children?: React.ReactNode;
}

export const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 font-mono uppercase tracking-wider relative overflow-hidden group";

    const variants = {
      primary:
        "bg-primary text-primary-foreground hover:bg-white hover:text-black shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_40px_rgba(45,212,191,0.6)] border border-transparent",
      outline:
        "border border-white/20 bg-transparent hover:border-primary/50 text-foreground neon-border",
      ghost:
        "hover:bg-white/5 text-muted-foreground hover:text-primary hover:shadow-[0_0_20px_rgba(45,212,191,0.1)]",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        {variant === "primary" && (
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        )}
      </motion.button>
    );
  }
);
NeonButton.displayName = "NeonButton";