import {ReactElement, useState, useEffect} from 'react';
import type {FilmCard} from '../../types';

import {dataFilms} from '../../config/dataFilms';
import {getGenrePlural, normalizeGenre, sortGenresAlphabetically} from '../../utils/genreUtils';
import {FilmsGenresList} from '../FilmsGenresList';
import {FilmsCatalogList} from '../FilmsCatalogList';

const FILMS_PER_PAGE_MAIN = 20;
const FILMS_PER_PAGE_RELATED = 4;

type NormalizedGenre = string;
type GenreWithAll = 'all' | NormalizedGenre;

type FilmsCatalogProps = {
  typeCatalog: 'main' | 'related';
  title?: string;
}

export function FilmsCatalog({typeCatalog, title}: FilmsCatalogProps):ReactElement {
  const filmsPerPage = typeCatalog === 'main' ? FILMS_PER_PAGE_MAIN : FILMS_PER_PAGE_RELATED;

  const baseClass = 'catalog';
  const classNames = typeCatalog === 'related' ? `${baseClass} ${baseClass}--like-this` : baseClass;

  const [activeGenre, setActiveGenre] = useState<GenreWithAll>('all');
  const [displayedCount, setDisplayedCount] = useState<number>(filmsPerPage);

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
    setDisplayedCount((prev) => prev + filmsPerPage);
  };

  useEffect(() => {
    setDisplayedCount(filmsPerPage);
  }, [activeGenre, filmsPerPage]);

  return (
    <section className={classNames} >
      <h2 className={`catalog__title ${title ? '' : 'visually-hidden'}`}>
        {title || 'Catalog'}
      </h2>
      {(typeCatalog !== 'related') && (
        <FilmsGenresList genres={genres} genreTexts={genreTexts} activeGenre={activeGenre} onGenreChange={setActiveGenre}/>
      )}
      <FilmsCatalogList films={displayedFilms} />
      {(filteredFilms.length > displayedCount) && (typeCatalog !== 'related') && (
        <div className="catalog__more">
          <button className="catalog__button" type="button" onClick={handleShowMore}>
            Show more
          </button>
        </div>
      )}
    </section>
  );
}
