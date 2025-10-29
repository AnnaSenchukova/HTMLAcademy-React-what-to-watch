import { dataFilms } from '../config/dataFilms';

export type Genre = typeof dataFilms[number]['genre'];

export type GenreWithAll = 'all' | Genre;

export type Film = {
  filmId: number;
  title: string;
  preview: string;
  genre: Genre;
  releaseDate: number;
  runTime: string;
  overview: string[];
};

export type FilmCard = {
  filmId: number;
  preview: string;
  title: string;
  genre: Genre;
};
