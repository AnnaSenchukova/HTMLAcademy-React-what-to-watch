import { ReactElement } from 'react';
import { FilmReview } from '../FilmReview';
import { dataFilmsReviews } from '../../config/dataFilmsReviews';

type FilmInfoContentReviewsProps = {
  filmId: number;
};

export function FilmInfoContentReviews({ filmId }: FilmInfoContentReviewsProps): ReactElement {
  const filmReviews = dataFilmsReviews.filter((review) => review.filmId === filmId);

  const midIndex = Math.ceil(filmReviews.length / 2);
  const firstColumnReviews = filmReviews.slice(0, midIndex);
  const secondColumnReviews = filmReviews.slice(midIndex);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {firstColumnReviews.map((review) => (
          <FilmReview
            key={review.id}
            author={review.author}
            text={review.comment}
            rating={review.reviewRating}
            date={review.date}
          />
        ))}
      </div>
      <div className="film-card__reviews-col">
        {secondColumnReviews.map((review) => (
          <FilmReview
            key={review.id}
            author={review.author}
            text={review.comment}
            rating={review.reviewRating}
            date={review.date}
          />
        ))}
      </div>
    </div>
  );
}
