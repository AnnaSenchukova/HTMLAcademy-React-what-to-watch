import {ReactElement} from 'react';
import {Btn} from '../Btn';
import {Icon} from '../Icon';

type FilmButtonsProps = {
  filmId?: string;
  isFull?: boolean;
}

export function FilmButtons({filmId, isFull}: FilmButtonsProps): ReactElement {
  return (
    <div className="film-card__buttons">
      <Btn type="button" title="Play" action="play" classMod="film-card">
        <Icon viewBox="0 0 19 19" sprite="play-s"/>
      </Btn>
      <Btn type="button" title="My list" action="add" classMod="film-card">
        <Icon viewBox="0 0 19 20" sprite="add"/>
      </Btn>
      {isFull && (
        <Btn type="link" url={`/films/${filmId || ''}/review`} title="Add review" classMod="film-card"/>
      )}
    </div>
  );
}
