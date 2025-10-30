import {ReactElement, useState, useEffect} from 'react';
import type {FilmCard} from '../../types';

import {dataFilms} from '../../config/dataFilms';
import {dataFilmsRating} from '../../config/dataFilmsRating';
import {getGenrePlural, normalizeGenre, sortGenresAlphabetically} from '../../utils/genreUtils';
import {FilmsGenresList} from '../FilmsGenresList';
import {FilmsCatalogList} from '../FilmsCatalogList';

type NormalizedGenre = string;
type GenreWithAll = 'all' | NormalizedGenre;

type FilmsCatalogProps = {
  isRelated?: boolean;
  title?: string;
}

const FILMS_PER_PAGE_MAIN = 20;
const FILMS_PER_PAGE_RELATED = 4;

const getFilmRating = (filmId: number): number => {
  const filmRating = dataFilmsRating.find((rating) => rating.filmId === filmId);
  return filmRating?.value || 0;
};

const prepareCatalogFilms = (filterByGenre?: string): FilmCard[] => dataFilms
  .filter((film) => !filterByGenre || normalizeGenre(film.genre) === filterByGenre)
  .sort((a, b) => getFilmRating(b.filmId) - getFilmRating(a.filmId)) // Сортировка по рейтингу от лучших к худшим
  .map((film) => ({
    filmId: film.filmId,
    preview: film.preview,
    title: film.title,
  }));

const prepareGenres = (): { genres: GenreWithAll[]; genreTexts: string[] } => {
  const uniqueGenres: string[] = Array.from(new Set(dataFilms.map((film) => normalizeGenre(film.genre))));
  const sortedGenres = sortGenresAlphabetically(uniqueGenres);
  const genres: GenreWithAll[] = ['all', ...sortedGenres];
  const genreTexts: string[] = genres.map((genre) => getGenrePlural(genre));
  return { genres, genreTexts };
};

function getCssClasses(isRelated: boolean): string {
  return isRelated ? 'catalog catalog--like-this' : 'catalog';
}

const filterFilmsByGenre = (catalogFilms: FilmCard[], activeGenre: GenreWithAll): FilmCard[] => {
  if (activeGenre === 'all') {
    return catalogFilms;
  }
  return catalogFilms.filter((film) => {
    const foundFilm = dataFilms.find((originalFilm) => originalFilm.filmId === film.filmId);
    return foundFilm && normalizeGenre(foundFilm.genre) === activeGenre;
  });
};

export function FilmsCatalog({isRelated = false, title}: FilmsCatalogProps):ReactElement {
  const filmsPerPage = isRelated ? FILMS_PER_PAGE_RELATED : FILMS_PER_PAGE_MAIN;
  const classNames = getCssClasses(isRelated);

  const [activeGenre, setActiveGenre] = useState<GenreWithAll>('all');
  const [displayedCount, setDisplayedCount] = useState(filmsPerPage);

  const catalogFilms = prepareCatalogFilms();
  const { genres, genreTexts } = prepareGenres();

  const filteredFilms = filterFilmsByGenre(catalogFilms, activeGenre);
  const displayedFilms = filteredFilms.slice(0, displayedCount);

  const handleShowMore = () => {
    setDisplayedCount((prev) => prev + filmsPerPage);
  };

  useEffect(() => {
    setDisplayedCount(filmsPerPage);
  }, [activeGenre, filmsPerPage]);

  return (
    <section className={classNames}>
      <h2 className={`catalog__title ${title ? '' : 'visually-hidden'}`}>
        {title || 'Catalog'}
      </h2>
      {!isRelated && (
        <FilmsGenresList genres={genres} genreTexts={genreTexts} activeGenre={activeGenre} onGenreChange={setActiveGenre}/>
      )}
      <FilmsCatalogList films={displayedFilms} />
      {(filteredFilms.length > displayedCount) && !isRelated && (
        <div className="catalog__more">
          <button className="catalog__button" type="button" onClick={handleShowMore}>
            Show more
          </button>
        </div>
      )}
    </section>
  );
}
