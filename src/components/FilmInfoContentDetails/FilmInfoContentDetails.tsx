import { ReactElement } from 'react';
import {FilmPersonalities} from '../FilmPersonalities';
import { dataFilms } from '../../config/dataFilms';

type FilmInfoContentDetailsProps = {
  filmId: number;
};

export function FilmInfoContentDetails({ filmId }: FilmInfoContentDetailsProps): ReactElement {
  const film = dataFilms.find((f) => f.filmId === filmId);

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <FilmPersonalities filmId={filmId} variant={'details'} />
      </div>
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{film?.runTime}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{film?.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{film?.releaseDate}</span>
        </p>
      </div>
    </div>
  );
}
