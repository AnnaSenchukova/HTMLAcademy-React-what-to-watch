import {ReactElement, PropsWithChildren} from 'react';

type PlayerVideoProps = PropsWithChildren<{
  videoSrc?: string;
  poster?: string;
}>;

export function PlayerVideo({videoSrc, poster, children}: PlayerVideoProps): ReactElement {
  return (
    <div className="player">
      <video
        className="player__video"
        src={videoSrc}
        poster={poster}
      />
      {children}
    </div>
  );
}
