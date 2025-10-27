import {ReactElement} from 'react';
import { useParams } from 'react-router-dom';

import {dataFilms} from '../../config/dataFilms';

import {Page404} from '../Page404';
import {Header} from '../../components/Header';
import {FilmsCatalogLikeThis} from '../../components/FilmsCatalogLikeThis';
import {Footer} from '../../components/Footer';
import {FilmRating} from '../../components/FilmRating';
import {FilmPersonalities} from '../../components/FilmPersonalities';
import {FilmButtons} from '../../components/FilmButtons';
import {FilmCardNav} from '../../components/FilmCardNav';


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
          <div className="film-card__bg">
            <img src={`img/bg-${film.preview}.jpg`} alt={film.title} />
          </div>
          <div className="film-card__head">
            <Header />
          </div>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.releaseDate}</span>
              </p>
              <FilmButtons filmId={id} />
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={`img/${film.preview}-poster.jpg`} alt={`${film.title} poster`} width={218} height={327} />
            </div>
            <div className="film-card__desc">
              <FilmCardNav />
              <FilmRating filmId={film.filmId} />
              <div className="film-card__text">
                {film.overview.map((paragraph) => (
                  <p key={paragraph.slice(0, 50)}>{paragraph}</p>
                ))}
                <FilmPersonalities filmId={film.filmId} />
              </div>
            </div>
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
