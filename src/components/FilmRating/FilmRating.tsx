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
    case rating >= 9.0:
      return 'Awesome';
    case rating >= 8.1:
      return 'Very good';
    case rating >= 7.0:
      return 'Good';
    case rating >= 5.0:
      return 'Normal';
    case rating >= 4.0:
      return 'Bad';
    case rating >= 0:
      return 'Awful';

    default:
      return 'No ratings';
  }
};

export function FilmRating({ filmId }: FilmRatingProps): ReactElement {
  const filmRating = dataFilmsRating.find((rating) => rating.filmId === filmId);
  const ratingValue = filmRating?.value || 0;
  const ratingText = getRatingText(ratingValue);

  return (
    <div className="film-rating">
      <div className="film-rating__score">{ratingValue || 'N/A'}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{ratingText}</span>
        <span className="film-rating__count">{filmRating?.voicesOfViewers || 0} ratings</span>
      </p>
    </div>
  );
}
