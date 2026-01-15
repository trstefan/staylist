"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { Disc, Menu, X, Wallet, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NeonButton } from "@/components/ui/NeonButton";

/* ---------------------------------- */
/* Nav Links                          */
/* ---------------------------------- */

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <Link href={href} className="relative group py-1">
    <span className="relative z-10 text-[10px] font-medium text-muted-foreground group-hover:text-primary transition-colors uppercase tracking-widest">
      {children}
    </span>
    <span className="absolute -bottom-1 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform shadow-[0_0_10px_rgba(45,212,191,0.8)]" />
  </Link>
);

const MobileNavLink = ({
  href,
  index,
  children,
  onClick,
}: NavLinkProps & { index: number; onClick: () => void }) => (
  <Link
    href={href}
    onClick={onClick}
    className="block py-4 border-b border-white/5"
  >
    <motion.span
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.1 + index * 0.05 }}
      className="text-3xl font-black uppercase tracking-tighter text-white hover:text-primary flex items-center gap-4 group"
    >
      <span className="text-xs font-mono text-primary opacity-0 group-hover:opacity-100">
        0{index + 1}
      </span>
      {children}
    </motion.span>
  </Link>
);

/* ---------------------------------- */
/* Magnetic Wrapper                   */
/* ---------------------------------- */

const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * 0.4);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.4);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
};

/* ---------------------------------- */
/* Navbar                             */
/* ---------------------------------- */

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md"
      >
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between relative z-50">
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] group-hover:border-primary/60 transition-all duration-300">
              <Disc
                className={`w-5 h-5 ${isOpen ? "" : "animate-spin-slow"}`}
              />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase group-hover:text-primary transition-colors duration-300">
              Staylist_01
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="/catalogue">Catalogue</NavLink>
            <NavLink href="/about-staylist">About</NavLink>
            <NavLink href="/privacy">Privacy</NavLink>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Link href="/recommend-a-song">
                <MagneticButton>
                  <NeonButton
                    variant="outline"
                    className="hidden md:inline-flex h-10 px-6 text-[10px] relative overflow-hidden border-primary/30 text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300 shadow-[0_0_10px_rgba(45,212,191,0.2)] hover:shadow-[0_0_30px_rgba(45,212,191,0.6)] group hover:cursor-pointer"
                  >
                    <span className="relative z-10 flex items-center gap-2 font-bold tracking-widest">
                      Recommend a Song
                    </span>

                    {/* Glowing Background Pulse */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Scanline/Shine effect */}
                    <div className="absolute inset-0 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12 z-0" />
                  </NeonButton>
                </MagneticButton>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative w-10 h-10 flex items-center justify-center text-foreground hover:text-primary transition-colors z-50 rounded-full border border-white/10 bg-white/5 active:scale-95"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden flex flex-col pt-24 pb-8 px-6 overflow-y-auto"
          >
            {/* Background Decorations */}
            <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-accent/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="flex flex-col grow">
              <div className="flex flex-col space-y-2 mt-8">
                <span className="text-[10px] font-mono uppercase text-muted-foreground tracking-widest mb-4 block">
                  Navigation
                </span>
                <MobileNavLink
                  href="/"
                  index={0}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </MobileNavLink>
                <MobileNavLink
                  href="/catalogue"
                  index={1}
                  onClick={() => setIsOpen(false)}
                >
                  Catalogue
                </MobileNavLink>
                <MobileNavLink
                  href="/about-staylist"
                  index={2}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </MobileNavLink>
                <MobileNavLink
                  href="/privacy"
                  index={3}
                  onClick={() => setIsOpen(false)}
                >
                  Privacy
                </MobileNavLink>
              </div>

              <div className="mt-auto pt-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-6 border border-white/10 bg-white/5 rounded-lg"
                >
                  <Link href="/recommend-a-song">
                    <NeonButton
                      variant="outline"
                      className="w-full h-12 justify-centeritems-center px-4 group bg-black/40 hover:cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <span className="uppercase tracking-wider text-xs text-center">
                          Recommend a Song
                        </span>
                      </span>
                    </NeonButton>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-between items-end mt-8 border-t border-white/10 pt-4"
                >
                  <span className="text-[10px] uppercase text-muted-foreground">
                    © 2025 Staylist
                  </span>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-[10px] uppercase text-muted-foreground hover:text-white"
                    >
                      TW
                    </a>
                    <a
                      href="#"
                      className="text-[10px] uppercase text-muted-foreground hover:text-white"
                    >
                      IG
                    </a>
                    <a
                      href="#"
                      className="text-[10px] uppercase text-muted-foreground hover:text-white"
                    >
                      DC
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
