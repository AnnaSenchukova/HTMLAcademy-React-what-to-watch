import {ReactElement} from 'react';
import type { FilmCatalogCardType } from '../../types';

import {FilmsCatalogCard} from '../FilmsCatalogCard';

type FilmsCatalogListProps = {
  films: FilmCatalogCardType[];
};

export function FilmsCatalogList({films}: FilmsCatalogListProps): ReactElement {
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <div
          className="catalog__films-card"
          key={film.filmId}
        >
          <FilmsCatalogCard {...film} />
        </div>
      ))}
    </div>
  );
}
