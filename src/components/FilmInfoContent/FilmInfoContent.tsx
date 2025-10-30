import { ReactElement } from 'react';
import { FilmInfoContentOverview } from '../FilmInfoContentOverview';
import { FilmInfoContentDetails } from '../FilmInfoContentDetails';
import { FilmInfoContentReviews } from '../FilmInfoContentReviews';

type FilmInfoContentProps = {
  activeTab: string;
  filmId: number;
};

export function FilmInfoContent({ activeTab, filmId }: FilmInfoContentProps): ReactElement {
  switch (activeTab) {
    case 'overview':
      return <FilmInfoContentOverview filmId={filmId} />;
    case 'details':
      return <FilmInfoContentDetails filmId={filmId} />;
    case 'reviews':
      return <FilmInfoContentReviews filmId={filmId} />;
    default:
      return <FilmInfoContentOverview filmId={filmId} />;
  }
}
