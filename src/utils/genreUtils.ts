const BASE_GENRE_NAMES = {
  'drama': 'Drama',
  'comedy': 'Comedy',
  'crime': 'Crime',
  'documentary': 'Documentary',
  'horror': 'Horror',
  'family': 'Kids & Family',
  'romance': 'Romance',
  'sci-fi': 'Sci-Fi',
  'thriller': 'Thriller',
  'fantasy': 'Fantasy',
  'biography': 'Biography',
  'adventure': 'Adventure'
} as const;

const GENRE_ALIASES = {
  'kids': 'family',
  'children': 'family',
  'kid': 'family',
  'child': 'family',
  'sci-fiction': 'sci-fi',
  'science-fiction': 'sci-fi',
  'biopic': 'biography',
  'biographical': 'biography'
} as const;

const PLURAL_EXCEPTIONS = {
  'comedy': 'Comedies',
  'biography': 'Biographies',
  'thriller': 'Thrillers',
  'adventure': 'Adventures',
  'drama': 'Dramas'
} as const;

export function normalizeGenre(genre: string): string {
  const lowerGenre = genre.toLowerCase();
  return GENRE_ALIASES[lowerGenre as keyof typeof GENRE_ALIASES] || lowerGenre;
}

export function getGenreSingular(genre: string): string {
  const normalizedGenre = normalizeGenre(genre);
  return BASE_GENRE_NAMES[normalizedGenre as keyof typeof BASE_GENRE_NAMES] || genre;
}

export function getGenrePlural(genre: string): string {
  if (genre === 'all'){ return 'All genres'; }

  const normalizedGenre = normalizeGenre(genre);

  const pluralException = PLURAL_EXCEPTIONS[normalizedGenre as keyof typeof PLURAL_EXCEPTIONS];
  if (pluralException){ return pluralException;}

  return BASE_GENRE_NAMES[normalizedGenre as keyof typeof BASE_GENRE_NAMES] || normalizedGenre;
}

export function sortGenresAlphabetically(genres: string[]): string[] {
  return [...genres].sort((firstGenre, secondGenre) => {
    const firstGenreDisplayName = getGenreSingular(firstGenre);
    const secondGenreDisplayName = getGenreSingular(secondGenre);
    return firstGenreDisplayName.localeCompare(secondGenreDisplayName);
  });
}
