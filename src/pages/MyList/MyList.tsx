import {PropsWithChildren, ReactElement} from 'react';

type MyListProps = PropsWithChildren<{
  title?: string;
}>

export function MyList({title, children}:MyListProps): ReactElement {
  return (
    <>
      <div></div>
      {children}
    </>
  );
}
