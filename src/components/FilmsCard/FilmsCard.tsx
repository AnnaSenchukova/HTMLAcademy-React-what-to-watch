import {ReactElement} from 'react';

type FilmsCardProps = {
  preview: string;
  title: string;
  link: string;
}

export function FilmsCard({preview, title, link}:FilmsCardProps):ReactElement {
  const imagePath = `img/${preview}.jpg`;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={imagePath} alt={title} width={280} height={175} />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={link}>{title}</a>
      </h3>
    </article>
  );
}
