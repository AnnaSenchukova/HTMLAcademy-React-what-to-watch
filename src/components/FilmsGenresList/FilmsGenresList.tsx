import {ReactElement} from 'react';
import {FilmsGenre} from '../FilmsGenre';

type FilmsGenresListProps = {
  genres: string[];
  genreTexts: string[];
  activeGenre: string;
  onGenreChange: (genre: string) => void;
}

export function FilmsGenresList({ genres, genreTexts, activeGenre, onGenreChange }: FilmsGenresListProps): ReactElement {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => (
        <FilmsGenre key={genre} genreText={genreTexts[index]} isActive={genre === activeGenre} onClick={() => onGenreChange(genre)}/>
      ))}
    </ul>
  );
}
