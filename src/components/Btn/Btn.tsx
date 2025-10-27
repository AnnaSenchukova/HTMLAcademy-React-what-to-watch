import {PropsWithChildren, ReactElement} from 'react';
import { Link} from 'react-router-dom';

type BtnProps = PropsWithChildren<{
  type: 'button' | 'link';
  title: string;
  classMod?: string;
  url?: string;
  action?: string;
}>

export function Btn({type, classMod, url, title, children, action}: BtnProps): ReactElement {
  const baseClass = 'btn';
  const actionClass = action ? `${baseClass}--${action}` : '';
  const modClass = classMod ? `${classMod}__${baseClass}` : '';
  const className = [baseClass, actionClass, modClass].filter(Boolean).join(' ');
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
