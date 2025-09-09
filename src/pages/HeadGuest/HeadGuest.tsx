import {PropsWithChildren, ReactElement} from 'react';

import {Header} from '../../components/Header';

type HeadGuestProps = PropsWithChildren<{
  title?: string;
}>

export function HeadGuest({title, children} : HeadGuestProps) : ReactElement {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          {/* <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" /> */}
          <img src="img/bg-header.jpg" alt="Фон для заголовка"/>
        </div>
        <Header />
      </section>
      {children}
    </>
  );
}
