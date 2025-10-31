import {ReactElement} from 'react';

import {Btn} from '../Btn';
import {Icon} from '../Icon';
import {PlayerControlsTime} from '../PlayerControlsTime';

type PlayerControlsProps = {
  filmName?: string;
}

export function PlayerControls({filmName}: PlayerControlsProps): ReactElement {
  return (
    <div className="player__controls">
      <div className="player__controls-row">
        <PlayerControlsTime />
      </div>
      <div className="player__controls-row">
        <Btn type='button' title='Play' action='play' classMod='player'>
          <Icon viewBox="0 0 19 19" sprite='play-s' />
        </Btn>
        <Btn type='button' title='Pause' action='pause' classMod='player'>
          <Icon viewBox='0 0 14 21' sprite='pause' />
        </Btn>
        <div className="player__name">{filmName || 'Movie'}</div>
        <Btn type='button' title='Full screen' action='full-screen' classMod='player'>
          <Icon viewBox="0 0 27 27" sprite='full-screen' />
        </Btn>
      </div>
    </div>
  );
}
