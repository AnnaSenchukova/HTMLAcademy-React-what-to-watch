import {ReactElement, useState} from 'react';

import {dataFilms} from '../../config/dataFilms';
import {getGenrePlural, normalizeGenre, sortGenresAlphabetically} from '../../utils/genreUtils';
import {FilmsGenresList} from '../FilmsGenresList';
import {FilmsCatalogList} from '../FilmsCatalogList';

type NormalizedGenre = string;
type GenreWithAll = 'all' | NormalizedGenre;

export function FilmsCatalog():ReactElement {
  const [activeGenre, setActiveGenre] = useState<GenreWithAll>('all');

  const catalogFilms = dataFilms.map((film) => ({
    filmId: film.filmId,
    preview: film.preview,
    title: film.title,
    genre: film.genre
  }));

  const uniqueGenres: string[] = Array.from(new Set(dataFilms.map((film) => normalizeGenre(film.genre))));

  const sortedGenres = sortGenresAlphabetically(uniqueGenres);
  const genres: GenreWithAll[] = ['all', ...sortedGenres];
  const genreTexts: string[] = genres.map((genre) => getGenrePlural(genre));

  const filteredFilms = activeGenre === 'all'
    ? catalogFilms
    : catalogFilms.filter((film) => normalizeGenre(film.genre) === activeGenre);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <FilmsGenresList genres={genres} genreTexts={genreTexts} activeGenre={activeGenre} onGenreChange={setActiveGenre}/>
      <FilmsCatalogList films={filteredFilms} />
      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}
