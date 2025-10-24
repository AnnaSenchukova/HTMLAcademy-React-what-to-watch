import { ReactElement } from 'react';
import { dataFilmPersonalities } from '../../config/dataFilmsPersonalities';

type FilmPersonalitiesProps = {
  filmId: number;
  variant?: 'details';
};

export function FilmPersonalities({ filmId, variant }: FilmPersonalitiesProps): ReactElement {
  const VARIANT_DETAILS = 'details' as const;
  const baseClassName = 'film-card__personalities';
  const className = variant ? `${baseClassName} ${baseClassName}--${variant}` : baseClassName;

  const filmPersonalities = dataFilmPersonalities.find((personalities) => personalities.filmId === filmId);
  const mainActors = filmPersonalities?.starring?.filter((actor) => actor.roleMain) || [];
  const otherActors = filmPersonalities?.starring?.filter((actor) => !actor.roleMain) || [];
  const actorsToShow = variant === 'details' ? [...mainActors, ...otherActors] : mainActors;

  return (
    <>
      <p className={className}>
        <span className="film-card__personalities-role">Director</span>
        <span className="film-card__personalities-separator">:{'\u2009'}</span>
        <span className="film-card__personalities-name">{filmPersonalities?.director}</span>
      </p>
      <p className={className}>
        <span className="film-card__personalities-role">Starring</span>
        <span className="film-card__personalities-separator">:{'\u2009'}</span>
        {actorsToShow.map((actor, index) => (
          <span key={actor.name} className="film-card__personalities-name">
            {actor.name}
            {index < actorsToShow.length - 1 && ', '}
          </span>
        ))}
        {variant !== VARIANT_DETAILS && otherActors.length > 0 && (
          <span className="film-card__personalities-name">{'\u2009'}and others</span>
        )}
      </p>
    </>
  );
}
