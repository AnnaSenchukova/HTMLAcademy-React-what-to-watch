import {PropsWithChildren, ReactElement} from 'react';

import {Logo} from '../Logo';
import {UserBlock} from '../UserBlock';

type HeaderProps = PropsWithChildren <{
  title?: string;
  isUserBlock? : boolean;
}>

export function Header({title, isUserBlock = true, children}:HeaderProps): ReactElement {
  return (
    <header className="page-header">
      <Logo />
      {title && <h1 className="page-title user-page__title visually-hidden">{title}</h1>}
      {children}
      {isUserBlock && <UserBlock />}
    </header>
  );
}
