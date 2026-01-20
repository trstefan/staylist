const placeholderSongs = [
  {
    "id": "1",
    "title": "Blinding Lights",
    "artist": "The Weeknd",
    "url": "https://example.com/blinding-lights",
    "description": "A synth-pop masterpiece inspired by 80s nostalgia.",
    "genre": ["Synth-pop", "New Wave"],
    "year": 2019,
    "album": "After Hours",
    "cover": "https://example.com/covers/after-hours.jpg",
    "isApproved": true,
    "createdAt": "2024-05-20T10:00:00Z"
  },
  {
    "id": "2",
    "title": "Bohemian Rhapsody",
    "artist": "Queen",
    "url": "https://example.com/bohemian-rhapsody",
    "description": "A progressive rock epic known for its unique structure.",
    "genre": ["Rock", "Progressive Rock"],
    "year": 1975,
    "album": "A Night at the Opera",
    "cover": "https://example.com/covers/queen-opera.jpg",
    "isApproved": true,
    "createdAt": "2024-05-20T10:05:00Z"
  },
  {
    "id": "3",
    "title": "Shape of You",
    "artist": "Ed Sheeran",
    "url": "https://example.com/shape-of-you",
    "genre": ["Pop", "Dance-pop"],
    "year": 2017,
    "album": "÷",
    "cover": "https://example.com/covers/divide.jpg",
    "isApproved": true,
    "createdAt": "2024-05-20T10:10:00Z"
  },
  {
    "id": "4",
    "title": "Flowers",
    "artist": "Miley Cyrus",
    "description": "An anthem of self-empowerment and independence.",
    "genre": ["Pop", "Disco"],
    "year": 2023,
    "album": "Endless Summer Vacation",
    "isApproved": true,
    "createdAt": "2024-05-20T10:15:00Z"
  },
  {
    "id": "5",
    "title": "Billie Jean",
    "artist": "Michael Jackson",
    "url": "https://example.com/billie-jean",
    "genre": ["Pop", "R&B"],
    "year": 1982,
    "album": "Thriller",
    "cover": "https://example.com/covers/thriller.jpg",
    "isApproved": true,
    "createdAt": "2024-05-20T10:20:00Z"
  },
  {
    "id": "6",
    "title": "Stay",
    "artist": "The Kid LAROI & Justin Bieber",
    "genre": ["Pop Rock", "Synth-pop"],
    "year": 2021,
    "album": "F*ck Love 3: Over You",
    "isApproved": true,
    "createdAt": "2024-05-20T10:25:00Z"
  },
  {
    "id": "7",
    "title": "Levitating",
    "artist": "Dua Lipa",
    "genre": ["Disco-pop", "Funk"],
    "year": 2020,
    "album": "Future Nostalgia",
    "isApproved": true,
    "createdAt": "2024-05-20T10:30:00Z"
  },
  {
    "id": "8",
    "title": "Dreams",
    "artist": "Fleetwood Mac",
    "description": "A classic soft rock track from the legendary Rumours album.",
    "genre": ["Soft Rock"],
    "year": 1977,
    "album": "Rumours",
    "isApproved": true,
    "createdAt": "2024-05-20T10:35:00Z"
  },
  {
    "id": "9",
    "title": "As It Was",
    "artist": "Harry Styles",
    "genre": ["Synth-pop", "Indie Pop"],
    "year": 2022,
    "album": "Harry's House",
    "isApproved": true,
    "createdAt": "2024-05-20T10:40:00Z"
  },
  {
    "id": "10",
    "title": "Smells Like Teen Spirit",
    "artist": "Nirvana",
    "description": "The song that defined the grunge movement.",
    "genre": ["Grunge", "Alternative Rock"],
    "year": 1991,
    "album": "Nevermind",
    "isApproved": true,
    "createdAt": "2024-05-20T10:45:00Z"
  },
  {
    "id": "11",
    "title": "Cruel Summer",
    "artist": "Taylor Swift",
    "genre": ["Synth-pop"],
    "year": 2019,
    "album": "Lover",
    "isApproved": true,
    "createdAt": "2024-05-20T10:50:00Z"
  },
  {
    "id": "12",
    "title": "Heat Waves",
    "artist": "Glass Animals",
    "genre": ["Psychedelic Pop"],
    "year": 2020,
    "album": "Dreamland",
    "isApproved": true,
    "createdAt": "2024-05-20T10:55:00Z"
  },
  {
    "id": "13",
    "title": "Rolling in the Deep",
    "artist": "Adele",
    "genre": ["Soul", "Pop"],
    "year": 2010,
    "album": "21",
    "isApproved": true,
    "createdAt": "2024-05-20T11:00:00Z"
  },
  {
    "id": "14",
    "title": "Hotel California",
    "artist": "Eagles",
    "genre": ["Soft Rock"],
    "year": 1976,
    "album": "Hotel California",
    "isApproved": true,
    "createdAt": "2024-05-20T11:05:00Z"
  },
  {
    "id": "15",
    "title": "Starboy",
    "artist": "The Weeknd ft. Daft Punk",
    "genre": ["R&B", "Electropop"],
    "year": 2016,
    "album": "Starboy",
    "isApproved": true,
    "createdAt": "2024-05-20T11:10:00Z"
  },
  {
    "id": "16",
    "title": "Bad Guy",
    "artist": "Billie Eilish",
    "genre": ["Electropop", "Pop"],
    "year": 2019,
    "album": "When We All Fall Asleep, Where Do We Go?",
    "isApproved": true,
    "createdAt": "2024-05-20T11:15:00Z"
  },
  {
    "id": "17",
    "title": "Lose Yourself",
    "artist": "Eminem",
    "description": "Lead single from the 8 Mile soundtrack.",
    "genre": ["Hip Hop"],
    "year": 2002,
    "album": "8 Mile",
    "isApproved": true,
    "createdAt": "2024-05-20T11:20:00Z"
  },
  {
    "id": "18",
    "title": "Uptown Funk",
    "artist": "Mark Ronson ft. Bruno Mars",
    "genre": ["Funk", "Pop"],
    "year": 2014,
    "album": "Uptown Special",
    "isApproved": true,
    "createdAt": "2024-05-20T11:25:00Z"
  },
  {
    "id": "19",
    "title": "Good 4 U",
    "artist": "Olivia Rodrigo",
    "genre": ["Pop Punk", "Emo Pop"],
    "year": 2021,
    "album": "SOUR",
    "isApproved": true,
    "createdAt": "2024-05-20T11:30:00Z"
  },
  {
    "id": "20",
    "title": "Stayin' Alive",
    "artist": "Bee Gees",
    "genre": ["Disco"],
    "year": 1977,
    "album": "Saturday Night Fever",
    "isApproved": true,
    "createdAt": "2024-05-20T11:35:00Z"
  }
]

export { placeholderSongs };