import {PropsWithChildren, ReactElement} from 'react';
import { Link} from 'react-router-dom';

type BtnProps = PropsWithChildren<{
  type: 'button' | 'link';
  title: string;
  classMod?: string;
  url?: string;
}>

export function Btn({type, classMod, url, title, children}: BtnProps): ReactElement {
  const baseClass = 'btn';
  const className = classMod ? `${baseClass} ${classMod}__${baseClass}` : baseClass;
  const content = (
    <>
      {children}
      <span>{title}</span>
    </>
  );

  return type === 'link' ? (
    <Link className={className} to={url || '/'}>
      {content}
    </Link>
  ) : (
    <button className={className} type="button">
      {content}
    </button>
  );
}
