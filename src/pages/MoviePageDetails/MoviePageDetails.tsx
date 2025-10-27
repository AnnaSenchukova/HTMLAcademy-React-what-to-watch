import {PropsWithChildren, ReactElement} from 'react';
import {Footer} from '../../components/Footer';
import {Header} from '../../components/Header';
import {FilmPersonalities} from '../../components/FilmPersonalities';
import {FilmsCatalogLikeThis} from '../../components/FilmsCatalogLikeThis';
import {FilmInfoTab} from '../../components/FilmInfoTab';
import {FilmButtons} from '../../components/FilmButtons';

type MoviePageDetailsProps = PropsWithChildren<{
  title?: string;
}>

export function MoviePageDetails({title, children}:MoviePageDetailsProps): ReactElement {
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>
          <div className="film-card__head">
            <Header />
          </div>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">The Grand Budapest Hotel</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">Drama</span>
                <span className="film-card__year">2014</span>
              </p>
              <FilmButtons filmId={'1'} />
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width={218} height={327} />
            </div>
            <div className="film-card__desc">
              <div className="film-card__text film-card__row">
                <div className="film-card__text-col">
                  <FilmPersonalities filmId={1} variant={'details'} />
                </div>
                <div className="film-card__text-col">
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Run Time</strong>
                    <span className="film-card__details-value">1h 39m</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Genre</strong>
                    <span className="film-card__details-value">Comedy</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Released</strong>
                    <span className="film-card__details-value">2014</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <FilmsCatalogLikeThis />
        <Footer />
      </div>
      {children}
    </>
  );
}
