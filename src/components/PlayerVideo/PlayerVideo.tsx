import {ReactElement, PropsWithChildren, useRef, useCallback} from 'react';

type PlayerVideoProps = PropsWithChildren<{
  videoSrc: string;
  poster?: string;
}>;

export function PlayerVideo({videoSrc, poster, children}: PlayerVideoProps): ReactElement {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isPlayingRef = useRef(false);
  const playPromiseRef = useRef<Promise<void> | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    hoverTimeoutRef.current = setTimeout(() => {
      const video = videoRef.current;
      if (video && videoSrc && !isPlayingRef.current) {
        video.currentTime = 0;

        playPromiseRef.current = video.play();

        playPromiseRef.current
          .then(() => {
            isPlayingRef.current = true;
            playPromiseRef.current = null;
          })
          .catch((error: Error) => {
            playPromiseRef.current = null;
          });
      }
    }, 1000);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }

    const video = videoRef.current;
    if (video && isPlayingRef.current) {
      video.pause();
      video.currentTime = 0;
      isPlayingRef.current = false;
    } else if (video && playPromiseRef.current) {
      playPromiseRef.current
        .then(() => {
          video.pause();
          video.currentTime = 0;
          isPlayingRef.current = false;
        })
        .catch(() => {
          video.pause();
          video.currentTime = 0;
        })
        .finally(() => {
          playPromiseRef.current = null;
        });
    }
  }, []);

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
        poster={poster ? `img/${poster}.jpg` : undefined}
        muted
        loop
        playsInline
        preload="metadata"
        width="280"
        height="175"
      />
      {children}
    </div>
  );
}
