import {ReactElement} from 'react';

import {Logo} from '../Logo';


export function Footer():ReactElement {
  return (
    <footer className="page-footer">
      <Logo isFooter />
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}
