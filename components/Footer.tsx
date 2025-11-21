import Link from "next/link";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-background pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6 text-primary">
              Staylist
            </h2>
            <p className="text-muted-foreground max-w-md">
              Curating the sound of the decentralized web. A collection of audio
              experiences designed to stay with you.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-12">
            <Link href="/">
              {" "}
              <h4 className="text-xs font-mono text-primary uppercase mb-4">
                Home
              </h4>
            </Link>

            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-staylist"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Staylist
                </Link>
              </li>
              <li>
                <Link
                  href="/recommend-a-song"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Recommend a Song
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className=" border-t border-white/5 pt-8">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
            © 2025 Stefan T. All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
};
