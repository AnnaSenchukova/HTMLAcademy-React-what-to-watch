import {PropsWithChildren, ReactElement} from 'react';

type HeadGuestProps = PropsWithChildren<{
  title?: string;
}>

export function HeadGuest({title, children} : HeadGuestProps) : ReactElement {
  return (
    <>
      <div></div>
      {children}
    </>
  );
}
