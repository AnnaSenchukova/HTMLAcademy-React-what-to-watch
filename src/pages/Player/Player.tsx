import {PropsWithChildren, ReactElement} from 'react';

type PlayerProps = PropsWithChildren<{
  title?: string;
}>

export function Player({title, children}:PlayerProps): ReactElement {
  return (
    <>
      <div></div>
      {children}
    </>
  );
}
