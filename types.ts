export interface Song {
  id: number;
  title: string;
  year: number;
  director: string;
  country: string;
  genre: string;
  synopsis?: string;
  cast?: string;
  runtime?: string;
  imageUrl?: string;
}

export interface Track {
  id: string;
  number: string;
  title: string;
  artist: string;
  album: string;
  year: string;
  duration: string;
  genre: string;
  description: string;
  coverImage: string;
  credits: string[];
  bpm: number;
}

export interface NavItem {
  label: string;
  href: string;
}
