"use client";

import { Song } from "@/types/song";

export default function SongDetails({ song }: { song: Song }) {
  return (
    <div className="border-t border-black/10 bg-black/1 px-4 pb-12 pt-8 md:px-12 md:pb-16 md:pt-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[300px_1fr] md:gap-12 lg:grid-cols-[400px_1fr] lg:gap-16">
        <div className="mx-auto w-full max-w-[300px] md:mx-0 md:max-w-none">
          <div className="aspect-2/3 overflow-hidden border border-black/10 bg-black/5">
            <img
              src={`/.jpg?height=600&width=400&query=${encodeURIComponent(
                song.title + " film poster"
              )}`}
              alt={song.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-xl font-bold uppercase tracking-tight md:text-2xl lg:text-3xl">
            {song.title}
          </h3>

          <div className="grid gap-3 text-sm md:text-base">
            <Metadata label="Director" value={song.director} />
            <Metadata label="Year" value={`20${song.year}`} />
            <Metadata label="Country" value={song.country} />
            <Metadata label="Genre" value={song.genre} />
            {song.runtime && <Metadata label="Runtime" value={song.runtime} />}
          </div>

          {song.synopsis && (
            <Section title="Synopsis">
              <p className="leading-relaxed text-black/80">{song.synopsis}</p>
            </Section>
          )}

          {song.cast && (
            <Section title="Cast">
              <p className="text-black/80">{song.cast}</p>
            </Section>
          )}
        </div>
      </div>
    </div>
  );
}

function Metadata({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-4">
      <span className="text-black/50">{label}</span>
      <span>{value}</span>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h4 className="text-xs uppercase tracking-wider text-black/50">
        {title}
      </h4>
      {children}
    </div>
  );
}
