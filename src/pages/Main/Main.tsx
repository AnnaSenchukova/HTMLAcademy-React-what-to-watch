import {ReactElement} from 'react';

import {dataFilms} from '../../config/dataFilms';
import {Header} from '../../components/Header';
import {FilmsCardPromo} from '../../components/FilmsCardPromo';
import {Footer} from '../../components/Footer';
import {FilmsCatalog} from '../../components/FilmsCatalog';


export function Main(): ReactElement {
  const promoFilm = dataFilms[0];

  return (
    <>
      <FilmsCardPromo isPromoFilm film={promoFilm}>
        <Header title="WTW" />
      </FilmsCardPromo>
      <div className="page-content">
        <FilmsCatalog />
        <Footer />
      </div>
    </>
  );
}
