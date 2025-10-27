import { ReactElement } from 'react';

type FilmInfoContentDetailsProps = {
  filmId: number;
};

export function FilmInfoContentDetails({ filmId }: FilmInfoContentDetailsProps): ReactElement {
  return (
    <div>
      <p>Контент Details для фильма ID: {filmId}</p>
    </div>
  );
}
