"use client";
import { motion, Variants } from "framer-motion";
import { Globe } from "lucide-react";

export const AboutStaylist = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="min-h-screen pt-32 pb-20 bg-background relative overflow-hidden">
      {/* Background Grids & Blobs - Consistent with other pages */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size[60px_60px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Header Block */}
          <motion.div
            variants={itemVariants}
            className="mb-20 md:mb-32 relative"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-white mix-blend-difference">
              Signal <br />
              <span className="text-white/20">Over Noise</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            {/* Main Narrative */}
            <div className="md:col-span-7 space-y-12">
              <motion.div variants={itemVariants}>
                <p className="text-2xl md:text-3xl text-white font-medium leading-tight tracking-tight mb-8">
                  Staylist acts as a{" "}
                  <span className="text-primary italic">permanent record</span>{" "}
                  for auditory experiences that define our time.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  In an era of algorithmic feeds and ephemeral content, we
                  believe in the permanence of quality. Our mission is to
                  curate, archive, and present music that transcends the
                  temporary nature of the modern web. We are not a streaming
                  service; we are a gallery of sound.
                </p>
              </motion.div>

              <div className="space-y-8 pt-6">
                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-4 mb-6"
                >
                  <div className="h-px bg-linear-to-r from-primary/50 to-transparent w-12" />
                  <h3 className="text-xs font-mono text-primary uppercase tracking-[0.2em]">
                    Author's Top 5
                  </h3>
                </motion.div>

                <div className="space-y-3">
                  {[
                    {
                      title: "They Don’t Care About Us",
                      artist: "Michael Jackson",
                      year: "1996",
                    },
                    {
                      title: "Master of Puppets",
                      artist: "Metallica",
                      year: "1986",
                    },
                    {
                      title: "Lady (Hear Me Tonight)",
                      artist: "Modjo",
                      year: "2000",
                    },
                    { title: "Shoot To Thrill", artist: "AC/DC", year: "1980" },
                    {
                      title: "Blinding Lights",
                      artist: "The Weeknd",
                      year: "2020",
                    },
                  ].map((song, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      whileHover={{
                        x: 10,
                        backgroundColor: "rgba(255,255,255,0.05)",
                      }}
                      className="group flex items-center justify-between p-4 border-l-2 border-white/5 hover:border-primary bg-white/2 transition-all duration-300 cursor-default relative overflow-hidden"
                    >
                      <div className="flex items-center gap-5 relative z-10">
                        <span className="text-xs font-mono text-muted-foreground/30 group-hover:text-primary transition-colors">
                          0{i + 1}
                        </span>
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-primary transition-colors">
                            {song.title}
                          </span>
                          <span className="text-[10px] font-mono text-muted-foreground uppercase">
                            {song.artist}{" "}
                            <span className="text-muted-foreground/30 mx-1">
                              //
                            </span>{" "}
                            {song.year}
                          </span>
                        </div>
                      </div>

                      {/* Hover Effect Background */}
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pr-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(45,212,191,0.8)] animate-pulse" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Stats */}
            <div className="md:col-span-5 relative">
              {/* Vertical line for desktop */}
              <div className="hidden md:block absolute left-10 top-0 bottom-0 w-px bg-white/10" />

              <div className="space-y-16 md:sticky md:top-32">
                <motion.div variants={itemVariants} className="relative">
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
                    Established
                  </div>
                  <div className="text-7xl md:text-8xl font-bold text-white tracking-tighter">
                    2025
                  </div>
                  <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] text-primary/5 font-black select-none blur-sm">
                    01
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="relative">
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
                    Archived Tracks
                  </div>
                  <div className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-linear-to-b from-white to-white/40 tracking-tighter">
                    500+
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="pt-12 border-t border-white/10"
                >
                  <div className="flex items-center gap-2 mb-8">
                    <Globe size={14} className="text-primary" />
                    <span className="text-xs font-mono text-white uppercase tracking-widest">
                      Active Hubs
                    </span>
                  </div>

                  <div className="space-y-8">
                    {/* Romania */}
                    <div className="flex items-center gap-6 group cursor-default">
                      {/* Neon Romania Flag */}
                      <div className="relative w-20 h-14 flex rounded-sm overflow-hidden shadow-[0_0_20px_rgba(252,209,22,0.2)] group-hover:shadow-[0_0_40px_rgba(252,209,22,0.5)] transition-all duration-500 ring-1 ring-white/10">
                        <div className="w-1/3 h-full bg-[#002B7F] relative">
                          <div className="absolute inset-0 bg-[#002B7F] blur-[2px] opacity-50"></div>
                        </div>
                        <div className="w-1/3 h-full bg-[#FCD116] relative z-10">
                          <div className="absolute inset-0 bg-[#FCD116] blur-xs opacity-50"></div>
                        </div>
                        <div className="w-1/3 h-full bg-[#CE1126] relative">
                          <div className="absolute inset-0 bg-[#CE1126] blur-[2px] opacity-50"></div>
                        </div>
                        <div className="absolute inset-0 bg-linear-to-tr from-white/20 via-transparent to-black/20 pointer-events-none mix-blend-overlay"></div>
                      </div>

                      <div className="flex flex-col gap-1">
                        <div className="text-2xl font-black text-white uppercase tracking-tighter group-hover:text-primary transition-colors duration-300">
                          Romania
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                          </span>
                          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                            Active Region
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* United Kingdom */}
                    <div className="flex items-center gap-6 group cursor-default">
                      {/* Neon UK Flag */}
                      <div className="relative w-20 h-14 flex rounded-sm overflow-hidden shadow-[0_0_20px_rgba(200,16,46,0.2)] group-hover:shadow-[0_0_40px_rgba(200,16,46,0.5)] transition-all duration-500 ring-1 ring-white/10 bg-[#012169]">
                        <div className="absolute inset-0 bg-[#012169] blur-[2px] opacity-50"></div>

                        {/* White Diagonals */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[16%] bg-white rotate-33 blur-[0.5px]"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[16%] bg-white -rotate-33 blur-[0.5px]"></div>

                        {/* Red Diagonals */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[6%] bg-[#C8102E] rotate-33 blur-[0.5px]"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[6%] bg-[#C8102E] -rotate-33 blur-[0.5px]"></div>

                        {/* White Cross */}
                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[24%] bg-white blur-[0.5px]"></div>
                        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[24%] bg-white blur-[0.5px]"></div>

                        {/* Red Cross */}
                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[14%] bg-[#C8102E] blur-[0.5px]"></div>
                        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[14%] bg-[#C8102E] blur-[0.5px]"></div>

                        <div className="absolute inset-0 bg-l-to-tr from-white/20 via-transparent to-black/20 pointer-events-none mix-blend-overlay"></div>
                      </div>

                      <div className="flex flex-col gap-1">
                        <div className="text-2xl font-black text-white uppercase tracking-tighter group-hover:text-primary transition-colors duration-300">
                          United Kingdom
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                          </span>
                          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                            Active Region
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStaylist;
