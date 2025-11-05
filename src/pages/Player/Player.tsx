import {ReactElement} from 'react';
import {useParams} from 'react-router-dom';
import {dataFilms} from '../../config/dataFilms';

import {Btn} from '../../components/Btn';
import {PlayerControls} from '../../components/PlayerControls';
import {PlayerVideo} from '../../components/PlayerVideo';


export function Player(): ReactElement {
  const { id } = useParams<{ id: string }>();
  const filmId = Number(id);
  const film = dataFilms.find((subjectFilm) => subjectFilm.filmId === filmId) ?? dataFilms[0];

  return (
    <PlayerVideo videoSrc={film.videoMovie} poster={film.preview}>
      <Btn type='button' title='Exit' action='exit' />
      <PlayerControls filmName={film?.title}/>
    </PlayerVideo>
  );
}
