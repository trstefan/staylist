export interface Film {
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
