import {ReactElement, PropsWithChildren, useRef} from 'react';

type PlayerVideoProps = PropsWithChildren<{
  videoSrc: string;
  poster?: string;
}>;

export function PlayerVideo({videoSrc, poster, children}: PlayerVideoProps): ReactElement {
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      const video = videoRef.current;
      if (video) {
        video.currentTime = 0;
        video.play();
      }
    }, 1000);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
      video.load();
    }
  };

  const posterUrl = poster ? `img/${poster}.jpg` : undefined;


  return (
    <div
      className="player--video-preview"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        className="player__video"
        src={videoSrc}
        poster={posterUrl}
        muted
        loop
        playsInline
        preload="metadata"
      />
      {children}
    </div>
  );
}
