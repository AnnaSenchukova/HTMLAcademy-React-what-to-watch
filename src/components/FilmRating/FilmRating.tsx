import { ReactElement } from 'react';
import { dataFilmsRating } from '../../config/dataFilmsRating';

type FilmRatingProps = {
  filmId: number;
};

export function FilmRating({ filmId }: FilmRatingProps): ReactElement {
  const filmRating = dataFilmsRating.find((rating) => rating.filmId === filmId);

  return (
    <div className="film-rating">
      <div className="film-rating__score">{filmRating?.value || 'N/A'}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{filmRating?.decodingValue || 'Unknown'}</span>
        <span className="film-rating__count">{filmRating?.voicesOfViewers || 0} ratings</span>
      </p>
    </div>
  );
}
