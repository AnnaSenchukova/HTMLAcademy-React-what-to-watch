import {PropsWithChildren, ReactElement} from 'react';

type PlayerPauseProps = PropsWithChildren<{
  title?: string;
}>

export function PlayerPause({title, children}:PlayerPauseProps): ReactElement {
  return (
    <>
      <div></div>
      {children}
    </>
  );
}
