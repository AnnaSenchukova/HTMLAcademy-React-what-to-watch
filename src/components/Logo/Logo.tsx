import {ReactElement} from 'react';

type LogoProps = {
  isFooter?: boolean;
}

export function Logo({isFooter}:LogoProps): ReactElement {
  return (
    <>
      <h1 className="visually-hidden">WTW</h1>
      <div className="logo">
        <a href="/" className={`logo__link ${isFooter ? 'logo__link--light' : ''}`}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
    </>
  );
}
