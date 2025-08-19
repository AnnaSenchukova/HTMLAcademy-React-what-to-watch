import {PropsWithChildren, ReactElement} from 'react';

type SignInProps = PropsWithChildren<{
  title?: string;
}>

export function SignIn({title, children}:SignInProps): ReactElement {
  return (
    <>
      <div></div>
      {children}
    </>
  );
}
