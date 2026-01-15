import React from "react";
import Link from "next/link";

const FooterLink: React.FC<{ href?: string; children: React.ReactNode }> = ({
  href = "#",
  children,
}) => (
  <Link href={href} className="group flex items-center w-fit">
    <span className="text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300 relative">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300 ease-out shadow-[0_0_5px_rgba(45,212,191,0.5)]"></span>
    </span>
  </Link>
);

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-background pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6 text-primary neon-text">
              Staylist
            </h2>
            <p className="text-muted-foreground max-w-md">
              Curating the sound of the decentralized web. A collection of audio
              experiences designed to stay with you.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-9">
            <h4 className="text-xs font-mono text-primary uppercase mb-4 tracking-widest">
              Platform
            </h4>
            <ul className="space-y-2">
              <li>
                <FooterLink href="/catalogue">Catalog</FooterLink>
              </li>
              <li>
                <FooterLink href="/recommend-a-song">Submit</FooterLink>
              </li>
              <li>
                <FooterLink href="/privacy">Privacy</FooterLink>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-mono text-primary uppercase mb-4 tracking-widest">
              Social
            </h4>
            <ul className="space-y-2">
              <li>
                <FooterLink href="https://github.com/trstefan/staylist">
                  Github
                </FooterLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/5 pt-8">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
            &#xa9; 2026 Stefan Traciu | Staylist | All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
