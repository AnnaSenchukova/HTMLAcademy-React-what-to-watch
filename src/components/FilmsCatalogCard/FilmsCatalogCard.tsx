import {ReactElement} from 'react';
import type { FilmCatalogCardType } from '../../types';
import {FilmImage} from '../FilmImage';
import {Link} from 'react-router-dom';

type FilmsCatalogCardProps = FilmCatalogCardType;

export function FilmsCatalogCard({filmId, preview, title}:FilmsCatalogCardProps):ReactElement {
  const filmLink = `/films/${filmId}`;

  return (
    <article className="film-card film-card--small">
      <FilmImage variant='preview' name={preview} title={title} />
      <h3 className="film-card__title">
        <Link className="film-card__link" to={filmLink}>{title}</Link>
      </h3>
    </article>
  );
}
