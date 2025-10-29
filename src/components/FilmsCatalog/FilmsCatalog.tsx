import {ReactElement, useState, useEffect} from 'react';
import type {FilmCard} from '../../types';

import {dataFilms} from '../../config/dataFilms';
import {getGenrePlural, normalizeGenre, sortGenresAlphabetically} from '../../utils/genreUtils';
import {FilmsGenresList} from '../FilmsGenresList';
import {FilmsCatalogList} from '../FilmsCatalogList';

const FILMS_PER_PAGE = 20;

type NormalizedGenre = string;
type GenreWithAll = 'all' | NormalizedGenre;

export function FilmsCatalog():ReactElement {
  const [activeGenre, setActiveGenre] = useState<GenreWithAll>('all');
  const [displayedCount, setDisplayedCount] = useState<number>(FILMS_PER_PAGE);

  const catalogFilms: FilmCard[] = dataFilms.map((film) => ({
    filmId: film.filmId,
    preview: film.preview,
    title: film.title
  }));

  const uniqueGenres: string[] = Array.from(new Set(dataFilms.map((film) => normalizeGenre(film.genre))));

  const sortedGenres = sortGenresAlphabetically(uniqueGenres);
  const genres: GenreWithAll[] = ['all', ...sortedGenres];
  const genreTexts: string[] = genres.map((genre) => getGenrePlural(genre));

  const filteredFilms = activeGenre === 'all'
    ? catalogFilms
    : catalogFilms.filter((film) => {
      const foundFilm = dataFilms.find((originalFilm) => originalFilm.filmId === film.filmId);
      return foundFilm && normalizeGenre(foundFilm.genre) === activeGenre;
    });

  const displayedFilms = filteredFilms.slice(0, displayedCount);

  const handleShowMore = () => {
    setDisplayedCount((prev) => prev + FILMS_PER_PAGE);
  };

  useEffect(() => {
    setDisplayedCount(FILMS_PER_PAGE);
  }, [activeGenre]);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <FilmsGenresList genres={genres} genreTexts={genreTexts} activeGenre={activeGenre} onGenreChange={setActiveGenre}/>
      <FilmsCatalogList films={displayedFilms} />
      {filteredFilms.length > displayedCount && (
        <div className="catalog__more">
          <button className="catalog__button" type="button" onClick={handleShowMore}>
            Show more
          </button>
        </div>
      )}
    </section>
  );
}
