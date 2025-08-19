import {PropsWithChildren, ReactElement} from 'react';

type MoviePageInListProps = PropsWithChildren<{
  title?: string;
}>

export function MoviePageInList({title, children}:MoviePageInListProps): ReactElement {
  return (
    <>
      <div></div>
      {children}
    </>
  );
}
