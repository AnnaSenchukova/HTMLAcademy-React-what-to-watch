import {ReactElement} from 'react';

export function UserBlock():ReactElement {
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
        </div>
      </li>
      <li className="user-block__item">
        <a href="/" className="user-block__link">Sign out</a>
        {/*<a href="sign-in.html" className="user-block__link">Sign in</a>*/}
      </li>
    </ul>
  );
}
