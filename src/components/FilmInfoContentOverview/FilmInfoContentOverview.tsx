import { ReactElement } from 'react';
import { FilmRating } from '../FilmRating';
import { FilmPersonalities } from '../FilmPersonalities';
import { dataFilms } from '../../config/dataFilms';

type FilmInfoContentOverviewProps = {
  filmId: number;
};

export function FilmInfoContentOverview({ filmId }: FilmInfoContentOverviewProps): ReactElement {
  const film = dataFilms.find((f) => f.filmId === filmId);

  return (
    <>
      <FilmRating filmId={filmId} />
      <div className="film-card__text">
        {film?.overview.map((paragraph) => (
          <p key={paragraph.slice(0, 50)}>{paragraph}</p>
        ))}
      </div>
      <FilmPersonalities filmId={filmId} />
    </>
  );
}
