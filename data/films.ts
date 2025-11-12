import { Film } from "@/types/film";

const films: Film[] = [
  {
    id: 1,
    title: "In the Mood for Love",
    year: 0, // represents 2000, matches your "20" + year pattern
    director: "Wong Kar-wai",
    country: "Hong Kong",
    genre: "Romance / Drama",
    runtime: "98 min",
    synopsis:
      "Two neighbors form a bond after suspecting their spouses of infidelity. As they grow closer, they struggle to keep their relationship platonic.",
    cast: "Tony Leung, Maggie Cheung",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/1e/In_the_Mood_for_Love_movie.jpg",
  },
  {
    id: 2,
    title: "Persona",
    year: 66, // 1966
    director: "Ingmar Bergman",
    country: "Sweden",
    genre: "Psychological Drama",
    runtime: "83 min",
    synopsis:
      "A nurse is assigned to care for an actress who has stopped speaking, leading to a complex and unsettling exploration of identity and repression.",
    cast: "Bibi Andersson, Liv Ullmann",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f2/Persona_poster.jpg",
  },
  {
    id: 3,
    title: "Beau Travail",
    year: 99,
    director: "Claire Denis",
    country: "France",
    genre: "Drama",
    runtime: "92 min",
    synopsis:
      "A Foreign Legion officer recalls his jealousy toward a young recruit that led to his downfall. A poetic reflection on masculinity and discipline.",
    cast: "Denis Lavant, Michel Subor, Grégoire Colin",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b0/Beau_Travail_film_poster.jpg",
  },
  {
    id: 4,
    title: "The Mirror",
    year: 75,
    director: "Andrei Tarkovsky",
    country: "USSR",
    genre: "Poetic Drama",
    runtime: "106 min",
    synopsis:
      "A fragmented and dreamlike reflection on memory, war, and identity through the eyes of a dying poet revisiting moments of his life.",
    cast: "Margarita Terekhova, Ignat Daniltsev",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4b/The_Mirror_%281975_film%29.jpg",
  },
  {
    id: 5,
    title: "Tokyo Story",
    year: 53,
    director: "Yasujirō Ozu",
    country: "Japan",
    genre: "Drama",
    runtime: "136 min",
    synopsis:
      "An aging couple visit their grown-up children in Tokyo, only to realize how distant they have become. A quiet meditation on generational divide.",
    cast: "Chishū Ryū, Chieko Higashiyama",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/5e/Tokyo_Story_poster.jpg",
  },
];

export default films;
