import {PropsWithChildren, ReactElement} from 'react';

type MoviePageReviewsProps = PropsWithChildren<{
  title?: string;
}>

export function MoviePageReviews({title, children}:MoviePageReviewsProps): ReactElement {
  return (
    <>
      <div></div>
      {children}
    </>
  );
}
