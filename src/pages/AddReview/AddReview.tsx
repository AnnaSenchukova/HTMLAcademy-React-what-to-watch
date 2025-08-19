import {PropsWithChildren, ReactElement} from 'react';

type AddReviewProps = PropsWithChildren<{
  title?: string;
}>

export function AddReview({title, children} : AddReviewProps): ReactElement {
  return (
    <>
      <div></div>
      {children}
    </>
  );
}
