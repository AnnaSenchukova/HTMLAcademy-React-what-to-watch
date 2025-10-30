import {ReactElement} from 'react';

import {dataFilms} from '../../config/dataFilms';
import {Header} from '../../components/Header';
import {FilmsCard} from '../../components/FilmsCard';
import {Footer} from '../../components/Footer';
import {FilmsCatalog} from '../../components/FilmsCatalog';


export function Main(): ReactElement {
  const promoFilm = dataFilms[0];

  return (
    <>
      <FilmsCard isPromoFilm film={promoFilm}>
        <Header title="WTW" />
      </FilmsCard>
      <div className="page-content">
        <FilmsCatalog />
        <Footer />
      </div>
    </>
  );
}
