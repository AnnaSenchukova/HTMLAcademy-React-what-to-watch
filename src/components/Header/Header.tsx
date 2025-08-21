import {ReactElement} from 'react';

import {Logo} from '../Logo';
import {UserBlock} from '../UserBlock';

export function Header(): ReactElement {
  return (
    <header className="page-header film-card__head">
      <Logo />
      <UserBlock />
    </header>
  );
}
