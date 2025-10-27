import { ReactElement } from 'react';

type FilmDetailsProps = {
  name: string;
  value: string | number;
};

export function FilmDetails({ name, value }: FilmDetailsProps): ReactElement {
  return (
    <p className="film-card__details-item">
      <strong className="film-card__details-name">{name}</strong>
      <span className="film-card__details-value">{value}</span>
    </p>
  );
}
