import {ReactElement} from 'react';

import {dataFilmsCardPromo} from '../../config/dataFilmsCardPromo';
import {Header} from '../../components/Header';
import {FilmsCardPromo} from '../../components/FilmsCardPromo';
import {Footer} from '../../components/Footer';
import {FilmsCatalog} from '../../components/FilmsCatalog';


export function Main(): ReactElement {
  return (
    <>
      <FilmsCardPromo {...dataFilmsCardPromo}>
        <div className="film-card__head">
          <Header />
        </div>
      </FilmsCardPromo>
      <div className="page-content">
        <FilmsCatalog typeCatalog="main" />
        <Footer />
      </div>
    </>
  );
}
