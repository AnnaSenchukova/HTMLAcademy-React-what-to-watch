import {ReactElement} from 'react';

import {dataFilmsCard} from '../../config/dataFilmsCard';
import {FilmsGenres} from '../FilmsGenres';
import {FilmsCard} from '../FilmsCard';

export function FilmsCatalog():ReactElement {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <FilmsGenres />
      <div className="catalog__films-list">
        {dataFilmsCard.map((card) => (
          <FilmsCard key={card.preview} {...card}/>
        ))}
      </div>
      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}
