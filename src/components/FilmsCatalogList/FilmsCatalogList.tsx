import {ReactElement} from 'react';
import type { FilmCard } from '../../types';
import {FilmsCard} from '../FilmsCard';

type FilmsCatalogListProps = {
  films: FilmCard[];
};

export function FilmsCatalogList({films}: FilmsCatalogListProps): ReactElement {
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmsCard key={film.filmId} {...film} />
      ))}
    </div>
  );
}
