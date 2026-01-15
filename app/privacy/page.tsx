"use client";
import { motion, Variants } from "framer-motion";
import { Database, Fingerprint, FileCode, Lock, EyeOff } from "lucide-react";
import { PrivacySection } from "@/components/PrivacySection";
const Privacy = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <section className="min-h-screen pt-32 pb-20 bg-background relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Encryption Background Effect */}
      <div className="absolute inset-0 opacity-[0.03] font-mono text-[8px] text-primary pointer-events-none select-none overflow-hidden leading-none break-all p-4">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="mb-1">
            {Math.random().toString(36).substring(2, 15) +
              Math.random().toString(36).substring(2, 15)}
            {Math.random().toString(36).substring(2, 15) +
              Math.random().toString(36).substring(2, 15)}
          </div>
        ))}
      </div>

      <div className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-20 text-center md:text-left"
          >
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6">
              Privacy <br /> <span className=" text-white/20">Manifesto</span>
            </h1>
            <p className="text-muted-foreground text-lg font-light max-w-xl">
              Staylist treats your digital presence with the same reverence as
              the audio we archive. Decentralized. Transparent. Immutable.
            </p>
          </motion.div>

          {/* Privacy Content */}
          <div className="space-y-16">
            <PrivacySection
              title="No Personal Data Collection"
              icon={<Database size={20} />}
              index={0}
            >
              <p className="mb-4">
                We do not collect, store, or sell your personal information. Our
                system is designed to facilitate song sharing without the need
                for accounts, emails, or identity tracking. We only see the
                music.
              </p>
              <code className="text-[10px] bg-white/5 p-2 block border border-white/10 rounded">
                STORAGE_LOG: [song_title, artist_name, timestamp, anonymous_id]
              </code>
            </PrivacySection>

            <PrivacySection
              title="Identity & Anonymous Curation"
              icon={<Fingerprint size={20} />}
              index={1}
            >
              <p>
                Your contributions are pseudonymous. When you add a song to the
                archive, no link is created between your physical identity and
                the track. We believe great music should stand on its own.
              </p>
            </PrivacySection>

            <PrivacySection
              title="Open Metadata"
              icon={<FileCode size={20} />}
              index={2}
            >
              <p>
                The list of songs is transparent and public. While we don't
                track who you are, we do keep a verifiable record of the music
                added to ensure the collection remains high-quality and
                consistent for all visitors.
              </p>
            </PrivacySection>

            <PrivacySection
              title="Security & Integrity"
              icon={<Lock size={20} />}
              index={3}
            >
              <p className="mb-4">
                Every interaction with our database is encrypted. We use
                industry-standard protocols to ensure that the connection
                between your browser and our song archive remains secure and
                tamper-proof.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-4 border border-white/5 bg-white/2 rounded">
                  <div className="text-[10px] font-mono text-primary mb-1">
                    DATA_RETENTION
                  </div>
                  <div className="text-white text-sm font-bold">
                    NON_IDENTIFIABLE
                  </div>
                </div>
                <div className="p-4 border border-white/5 bg-white/2 rounded">
                  <div className="text-[10px] font-mono text-primary mb-1">
                    ENCRYPTION
                  </div>
                  <div className="text-white text-sm font-bold">
                    SSL_TLS_1.3
                  </div>
                </div>
              </div>
            </PrivacySection>

            <PrivacySection
              title="Cookie-Free Experience"
              icon={<EyeOff size={20} />}
              index={4}
            >
              <p>
                We do not use tracking cookies or third-party pixels. Your
                browsing habits across the web remain your business. Our site
                uses only essential local storage to remember your session while
                you're actively listening.
              </p>
            </PrivacySection>
          </div>

          {/* Contact Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-32 p-10 border border-primary/20 bg-primary/5 rounded-2xl text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent animate-pulse" />
            <h4 className="text-xl font-bold uppercase tracking-tight text-white mb-4">
              Integrity Inquiries
            </h4>
            <p className="text-muted-foreground text-sm font-mono uppercase tracking-widest mb-8">
              sec_ops@staylist.audio
            </p>
            <div className="text-[10px] text-primary/40 font-mono tracking-widest">
              LAST_UPDATED: 2025.10.24 // VERSION: 1.0.4_STABLE
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Interactive Marker */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="fixed bottom-10 right-10 z-50 pointer-events-none hidden lg:block"
      >
        <div className="bg-black/80 border border-white/10 p-4 backdrop-blur-md rounded-lg flex items-center gap-4">
          <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
          <div className="text-[9px] font-mono text-white/50 uppercase tracking-[0.3em]">
            Data_Integrity: <span className="text-primary">Secured</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Privacy;
