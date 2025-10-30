import { ReactElement } from 'react';

type FilmReviewProps = {
  author: string;
  text: string;
  rating: number;
  date: {
    dateTime: string;
    dateValue: string;
  };
};

export function FilmReview({ author, text, rating, date }: FilmReviewProps): ReactElement {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>
        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime={date.dateTime}>
            {date.dateValue}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating.toFixed(1).replace('.', ',')}</div>
    </div>
  );
}
