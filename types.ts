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
  isApproved?: boolean;
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  url?: string;
  description?: string;
  genre?: string[];
  year?: number;
  album?: string;
  cover?: string;
  createdAt: string;
}

export interface NavItem {
  label: string;
  href: string;
}
