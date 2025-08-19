import {PropsWithChildren, ReactElement} from 'react';

type SignInErrorProps = PropsWithChildren<{
  title?: string;
}>

export function SignInError({title, children}:SignInErrorProps): ReactElement {
  return (
    <>
      <div></div>
      {children}
    </>
  );
}
