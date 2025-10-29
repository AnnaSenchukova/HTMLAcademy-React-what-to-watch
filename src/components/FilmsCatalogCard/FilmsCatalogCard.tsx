import {ReactElement} from 'react';
import type { FilmCard } from '../../types';
import {FilmImage} from '../FilmImage';
import {Link} from 'react-router-dom';

type FilmsCardProps = FilmCard;

export function FilmsCatalogCard({filmId, preview, title}:FilmsCardProps):ReactElement {
  const filmLink = `/films/${filmId}`;

  return (
    <div className="catalog__films-card">
      <article className="film-card film-card--small">
        <FilmImage variant='preview' name={preview} title={title} />
        <h3 className="film-card__title">
          <Link className="film-card__link" to={filmLink}>{title}</Link>
        </h3>
      </article>
    </div>
  );
}
