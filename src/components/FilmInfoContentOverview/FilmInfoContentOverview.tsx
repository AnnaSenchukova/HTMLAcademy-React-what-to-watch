import { ReactElement } from 'react';

type FilmInfoContentOverviewProps = {
  filmId: number;
};

export function FilmInfoContentOverview({ filmId }: FilmInfoContentOverviewProps): ReactElement {
  return (
    <div>
      <p>Контент Overview для фильма ID: {filmId}</p>
    </div>
  );
}
