import { ReactElement } from 'react';
import { FilmPersonalities } from '../FilmPersonalities';
import { FilmDetails } from '../FilmDetails';
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
        <FilmDetails name="Run Time" value={film?.runTime ?? 'Unknown'} />
        <FilmDetails name="Genre" value={film?.genre ?? 'Unknown'} />
        <FilmDetails name="Released" value={film?.releaseDate ?? 'Soon'} />
      </div>
    </div>
  );
}
