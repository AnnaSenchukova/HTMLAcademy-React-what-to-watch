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
        <Header />
      </FilmsCardPromo>
      <div className="page-content">
        <FilmsCatalog />
        <Footer />
      </div>
    </>
  );
}
