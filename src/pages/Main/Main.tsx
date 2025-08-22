import {ReactElement} from 'react';

import {Header} from '../../components/Header';
import {FilmsCardPromo} from '../../components/FilmsCardPromo';
import {Footer} from '../../components/Footer';
import {FilmsCatalog} from '../../components/FilmsCatalog';

type PassthroughProps = {
  preview: string;
  title: string;
  genre: string;
  releaseDate: number;
};

export function Main(passthroughProps: PassthroughProps): ReactElement {
  return (
    <>
      <FilmsCardPromo {...passthroughProps}>
        <Header />
      </FilmsCardPromo>
      <div className="page-content">
        <FilmsCatalog />
        <Footer />
      </div>
    </>
  );
}
