import {PropsWithChildren, ReactElement} from 'react';

type MoviePageDetailsProps = PropsWithChildren<{
  title?: string;
}>

export function MoviePageDetails({title, children}:MoviePageDetailsProps): ReactElement {
  return (
    <>
      <div></div>
      {children}
    </>
  );
}
