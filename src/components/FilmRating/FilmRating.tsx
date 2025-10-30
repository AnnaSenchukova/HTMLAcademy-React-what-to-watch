import { ReactElement } from 'react';
import { dataFilmsRating } from '../../config/dataFilmsRating';

type FilmRatingProps = {
  filmId: number;
};

const getRatingText = (rating: number): string => {
  switch (true) {
    case isNaN(rating):
    case rating < 0:
    case rating > 10:
      return 'Invalid rating';
    case rating === 10:
      return 'Awesome';
    case rating >= 8:
      return 'Very good';
    case rating >= 5:
      return 'Good';
    case rating >= 3:
      return 'Normal';
    case rating >= 0:
      return 'Bad';

    default:
      return 'No ratings';
  }
};

export function FilmRating({ filmId }: FilmRatingProps): ReactElement {
  const filmRating = dataFilmsRating.find((rating) => rating.filmId === filmId);
  const ratingValue = filmRating?.value;
  const ratingText = getRatingText(ratingValue || 0);

  return (
    <div className="film-rating">
      <div className="film-rating__score">{ratingValue ? ratingValue.toFixed(1).replace('.', ',') : 'N/A'}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{ratingText}</span>
        <span className="film-rating__count">{filmRating?.voicesOfViewers || 0} ratings</span>
      </p>
    </div>
  );
}
