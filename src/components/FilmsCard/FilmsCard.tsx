import {ReactElement, PropsWithChildren} from 'react';

import {getGenreSingular} from '../../utils/genreUtils';
import type {Film} from '../../types/film';

import {FilmImage} from '../FilmImage';
import {FilmButtons} from '../FilmButtons';
import {FilmInfo} from '../FilmInfo';

type FilmsCardPromoProps = PropsWithChildren<{
  isPromoFilm?: boolean;
  film: Film;
}>

export function FilmsCard({isPromoFilm, film, children}: FilmsCardPromoProps): ReactElement {

  return (
    <section className={`film-card ${!isPromoFilm ? 'film-card--full' : ''}`}>
      <div className="film-card__hero">
        <div className="film-card__head">
          {children}
        </div>
        <FilmImage variant="bg" name={film.preview} title={film.title}/>
        <div className="film-card__wrap film-card__info">
          {isPromoFilm && (
            <FilmImage variant="poster" name={film.preview} title={film.title}/>
          )}
          <div className="film-card__desc">
            <h2 className="film-card__title">{film.title}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{getGenreSingular(film.genre)}</span>
              <span className="film-card__year">{film.releaseDate}</span>
            </p>
            <FilmButtons filmId={String(film.filmId)} isFull={!isPromoFilm}/>
          </div>
        </div>
      </div>
      {!isPromoFilm && (
        <div className={`film-card__wrap film-card__info ${!isPromoFilm ? 'film-card__translate-top' : ''}`}>
          <FilmImage variant="poster" name={film.preview} title={film.title} classModSize='big'/>
          <FilmInfo filmId={film.filmId}/>
        </div>
      )}
    </section>
  );
}
