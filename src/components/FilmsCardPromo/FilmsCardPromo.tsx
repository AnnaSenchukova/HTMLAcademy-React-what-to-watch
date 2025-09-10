import {ReactElement, PropsWithChildren} from 'react';

type FilmsCardPromoProps = PropsWithChildren<{
  preview: string;
  title: string;
  genre: string;
  releaseDate: number;
}>

export function FilmsCardPromo({preview, title, genre, releaseDate, children}: FilmsCardPromoProps): ReactElement {
  return (
    <section className="film-card">
      {children}
      <div className="film-card__bg">
        <img src={`img/bg-${preview}.jpg`} alt={title} />
      </div>
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={`img/${preview}-poster.jpg`} alt={`${title} poster`} width={218} height={327} />
          </div>
          <div className="film-card__desc">
            <h2 className="film-card__title">{title}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{releaseDate}</span>
            </p>
            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width={19} height={19}>
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 19 20" width={19} height={20}>
                  <use xlinkHref="#add" />
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
