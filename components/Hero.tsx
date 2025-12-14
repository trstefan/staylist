"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, Variants } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  // Mouse position for spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  // Smooth mouse for the spotlight
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 300, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 300, mass: 0.5 });

  // Parallax - adjusted values to be less aggressive to prevent clipping
  const yBackground = useTransform(scrollY, [0, 1000], [0, 400]);
  const yText = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const title = "STAYLIST";

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const letterVariants: Variants = {
    hidden: { y: 150, rotateX: -90, opacity: 0 },
    visible: {
      y: 0,
      rotateX: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100dvh] w-full flex flex-col justify-between items-center overflow-hidden bg-background selection:bg-primary/30 perspective-1000 pt-24 pb-12 md:pt-20"
    >
        {/* Dynamic Spotlight Background */}
        <motion.div style={{ y: yBackground }} className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full animate-blob opacity-40" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-accent/5 blur-[120px] rounded-full animate-blob animation-delay-2000 opacity-40" />
            
            <motion.div 
                style={{ 
                    left: smoothX, 
                    top: smoothY,
                    transform: 'translate(-50%, -50%)'
                }}
                className="absolute w-[500px] h-[500px] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none hidden md:block mix-blend-plus-lighter"
            />
        </motion.div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

        {/* Technical Decoration - Safe positioning */}
        <motion.div 
            style={{ opacity }}
            className="absolute top-24 left-4 md:left-8 right-4 md:right-8 flex justify-between items-start text-[9px] md:text-xs font-mono text-muted-foreground/30 pointer-events-none select-none z-20"
        >
            <div className="flex flex-col gap-1">
                 <span className="flex items-center gap-2 tracking-widest"><div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div> LIVE SIGNAL</span>
                 <span className="tracking-widest hidden md:block">FREQ: 44.1KHZ // BIT: 24</span>
            </div>
            <div className="flex flex-col gap-1 text-right">
                 <span className="tracking-widest">EST. 2025 - RO</span>
                 <span className="tracking-widest hidden md:block">AUDIO ARCHIVE</span>
            </div>
        </motion.div>

        {/* Content Container - Flex center for the main block */}
        <div className="container mx-auto px-4 relative z-10 w-full flex-grow flex flex-col justify-center">
            
            <div className="flex flex-col items-center justify-center relative w-full">
                
                {/* Intro Label */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="mb-6 md:mb-10 overflow-hidden"
                >
                    <span className="inline-block text-primary text-[10px] font-bold md:text-xs font-mono uppercase tracking-[0.5em] border border-primary/20 px-4 py-1 rounded-full bg-primary/5 backdrop-blur-sm">
                        The
                    </span>
                </motion.div>

                {/* Main Typography */}
                <motion.div 
                    style={{ y: yText, opacity }}
                    className="relative z-10 text-center w-full"
                >
                    <motion.div 
                        className="flex flex-wrap justify-center items-center gap-0 lg:gap-2" 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {title.split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                variants={letterVariants}
                                // Adjusted sizing to fit mobile screens better while staying massive
                                className="inline-block text-[13vw] md:text-[15vw] font-black tracking-tighter leading-[0.8] text-white mix-blend-difference hover:text-primary transition-colors duration-500 cursor-default select-none"
                                style={{
                                    textShadow: "0 0 40px rgba(255,255,255,0.1)"
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Subtitle / Description */}
                <motion.div 
                    style={{ opacity }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                    className="mt-8 md:mt-16 max-w-xl text-center relative z-30 px-6"
                >
                     {/* Decorative lines */}
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 md:w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                     <p className="text-sm md:text-xl text-muted-foreground font-light leading-relaxed mt-6 md:mt-8">
                        Curating the sound of the <span className="text-white font-normal">decentralized web</span>. <br className="hidden md:block"/>
                        Strictly curated for the discerning listener.
                     </p>
                </motion.div>

            </div>
        </div>
            
        {/* Scroll Indicator */}
        <motion.div 
            style={{ opacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="relative md:absolute bottom-8 left-0 right-0 flex flex-col items-center gap-3 pointer-events-none z-20 mt-8 md:mt-0"
        >
            <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/50">Scroll</span>
            <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-primary/50 to-transparent overflow-hidden">
                <motion.div 
                    animate={{ y: [-20, 48] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="w-full h-1/2 bg-primary drop-shadow-[0_0_5px_rgba(45,212,191,0.8)]"
                />
            </div>
        </motion.div>

    </section>
  );
};