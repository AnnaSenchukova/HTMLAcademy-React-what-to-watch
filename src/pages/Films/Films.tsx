import {ReactElement} from 'react';
import { useParams } from 'react-router-dom';

import {dataFilms} from '../../config/dataFilms';
import {getGenreSingular} from '../../utils/genreUtils';

import {Page404} from '../Page404';
import {Header} from '../../components/Header';
import {FilmsCatalogLikeThis} from '../../components/FilmsCatalogLikeThis';
import {Footer} from '../../components/Footer';
import {FilmButtons} from '../../components/FilmButtons';
import {FilmInfo} from '../../components/FilmInfo';
import {FilmImage} from '../../components/FilmImage';


export function Films(): ReactElement {
  const { id } = useParams<{ id: string }>();
  const film = dataFilms.find((subjectFilm) => subjectFilm.filmId === Number(id));

  if (!film) {
    return <Page404 />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <FilmImage variant='bg' name={film.preview} title={film.title} />
          <div className="film-card__head">
            <Header />
          </div>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{getGenreSingular(film.genre)}</span>
                <span className="film-card__year">{film.releaseDate}</span>
              </p>
              <FilmButtons filmId={id} />
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <FilmImage variant='poster' name={film.preview} title={film.title} classModSize='big' />
            <FilmInfo filmId={film.filmId}/>
          </div>
        </div>
      </section>
      <div className="page-content">
        <FilmsCatalogLikeThis />
        <Footer />
      </div>
    </>
  );
}
