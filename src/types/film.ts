export type Film = {
  filmId: number;
  title: string;
  preview: string;
  genre: string;
  releaseDate: number;
  runTime: string;
  overview: string[];
};

export type FilmCard = {
  filmId: number;
  preview: string;
  title: string;
  genre: string;
};
