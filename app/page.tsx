import React from "react";
import { Hero } from "@/components/Hero";
import { TrackList } from "@/components/TrackList";
import { NeonButton } from "@/components/ui/NeonButton";

import Link from "next/link";
export default function Page() {
  return (
    <>
      <Hero />
      <TrackList />

      {/* Call to Action Section */}
      <section className="py-32 relative overflow-hidden group">
        {/* Neon Gradient Border Top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent opacity-50 shadow-[0_0_20px_rgba(45,212,191,0.5)]"></div>

        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
          <div className="absolute inset-0 bg-linear-to-t from-primary/10 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 transform group-hover:scale-[1.01] transition-transform duration-700">
            Do you have a sound <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-white to-accent neon-text">
              worth archiving?
            </span>
          </h3>
          <div className="flex justify-center">
            <Link href="/suggest-a-song" className="">
              <NeonButton variant="primary">Submit Recommendation</NeonButton>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
