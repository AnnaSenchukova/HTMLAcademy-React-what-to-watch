import {ReactElement} from 'react';
import type { FilmCard } from '../../types';
import {FilmImage} from '../FilmImage';

type FilmsCardProps = FilmCard;

export function FilmsCard({filmId, preview, title}:FilmsCardProps):ReactElement {
  const filmLink = `/films/${filmId}`;

  return (
    <article className="film-card film-card--small catalog__films-card">
      <FilmImage variant='preview' name={preview} title={title} />
      <h3 className="film-card__title film-card__title--small">
        <a className="film-card__link film-card__link--small" href={filmLink}>{title}</a>
      </h3>
    </article>
  );
}
