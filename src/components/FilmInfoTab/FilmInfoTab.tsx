import { ReactElement } from 'react';

type FilmNavigationProps = {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
};

export function FilmInfoTab({ tabs, activeTab, onTabChange }: FilmNavigationProps): ReactElement {

  const getItemClass = (tab: string) => `film-nav__item ${activeTab === tab ? 'film-nav__item--active' : ''}`;

  return (
    <div className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {tabs.map((tab) => (
          <li key={tab} className={getItemClass(tab)} onClick={() => onTabChange(tab)}>
            <span className="film-nav__link">{tab}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
