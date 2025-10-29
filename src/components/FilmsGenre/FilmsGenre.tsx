import {ReactElement} from 'react';

type FilmsGenreProps = {
  genreText: string;
  isActive: boolean;
  onClick: () => void;
}

export function FilmsGenre({ genreText, isActive, onClick }: FilmsGenreProps): ReactElement {
  return (
    <li className={`catalog__genres-item ${isActive ? 'catalog__genres-item--active' : ''}`}>
      <span className="catalog__genres-link" onClick={onClick}>
        {genreText}
      </span>
    </li>
  );
}
