import { ReactElement } from 'react';

type FilmInfoContentReviewsProps = {
  filmId: number;
};

export function FilmInfoContentReviews({ filmId }: FilmInfoContentReviewsProps): ReactElement {
  return (
    <div>
      <p>Контент Reviews для фильма ID: {filmId}</p>
    </div>
  );
}
