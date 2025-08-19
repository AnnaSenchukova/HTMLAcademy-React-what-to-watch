import {PropsWithChildren, ReactElement} from 'react';

type MoviePageProps = PropsWithChildren<{
  title?: string;
}>

export function MoviePage({title, children}: MoviePageProps): ReactElement {
  return (
    <>
      <div></div>
      {children}
    </>
  );
}
