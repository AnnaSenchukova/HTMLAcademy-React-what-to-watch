import {PropsWithChildren, ReactElement} from 'react';

import {Header} from '../../components/Header';
import {FilmsCardSelect} from '../../components/FilmsCardSelect';
import {Footer} from '../../components/Footer';
import {FilmsCatalog} from '../../components/FilmsCatalog';

type MainProps = PropsWithChildren<{
  title?: string;
}>

export function Main({title, children}: MainProps) : ReactElement {
  return (
    <>
      <FilmsCardSelect>
        <Header />
      </FilmsCardSelect>
      <div className="page-content">
        <FilmsCatalog />
        <Footer />
      </div>
      {children}
    </>
  );
}
