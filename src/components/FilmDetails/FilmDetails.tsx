import { ReactElement } from 'react';

type FilmDetailsProps = {
  name: string;
  value: string | number;
};

export function FilmDetails({ name, value }: FilmDetailsProps): ReactElement {
  return (
    <p className="film-card__details-item">
      <span className="film-card__details-name">{name}</span>
      <span className="film-card__details-value">{value}</span>
    </p>
  );
}
