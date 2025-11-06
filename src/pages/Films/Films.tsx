import {ReactElement} from 'react';
import {useParams} from 'react-router-dom';

import {dataFilms} from '../../config/dataFilms';
import {Header} from '../../components/Header';
import {FilmsCatalog} from '../../components/FilmsCatalog';
import {FilmsCard} from '../../components/FilmsCard';
import {Footer} from '../../components/Footer';

export function Films(): ReactElement | null {
  const { id } = useParams<{ id: string }>();
  const film = dataFilms.find((subjectFilm) => subjectFilm.filmId === Number(id));

  return film ? (
    <>
      <FilmsCard film={film}>
        <Header />
      </FilmsCard>
      <div className="page-content">
        <FilmsCatalog isRelated title="More like this" />
        <Footer />
      </div>
    </>
  ) : null;
}
