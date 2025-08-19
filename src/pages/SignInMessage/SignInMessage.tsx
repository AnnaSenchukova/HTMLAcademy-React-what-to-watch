import {PropsWithChildren, ReactElement} from 'react';

type SignInMessageProps = PropsWithChildren<{
  title?: string;
}>

export function SignInMessage({title, children}:SignInMessageProps): ReactElement {
  return (
    <>
      <div></div>
      {children}
    </>
  );
}
