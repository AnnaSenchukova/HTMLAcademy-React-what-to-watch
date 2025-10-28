import {ReactElement} from 'react';

type FilmsCardProps = {
  preview: string;
  title: string;
  link: string;
}

export function FilmsCard({preview, title, link}:FilmsCardProps):ReactElement {
  const imagePath = `img/${preview}.jpg`;

  return (
    <article className="film-card film-card--small catalog__films-card">
      <div className="film-card__preview">
        <img src={imagePath} alt={title} width={280} height={175} />
      </div>
      <h3 className="film-card__title film-card__title--small">
        <a className="film-card__link film-card__link--small" href={link}>{title}</a>
      </h3>
    </article>
  );
}
