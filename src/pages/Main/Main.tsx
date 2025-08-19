import {PropsWithChildren, ReactElement} from 'react';

type MainProps = PropsWithChildren<{
  title?: string;
}>

export function Main({title, children}: MainProps) : ReactElement {
  return (
    <>
      <div></div>
      {children}
    </>
  );
}
