import {ReactElement} from 'react';
import type { FilmCard } from '../../types';
import {FilmsCatalogCard} from '../FilmsCatalogCard';

type FilmsCatalogListProps = {
  films: FilmCard[];
};

export function FilmsCatalogList({films}: FilmsCatalogListProps): ReactElement {
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmsCatalogCard key={film.filmId} {...film} />
      ))}
    </div>
  );
}
