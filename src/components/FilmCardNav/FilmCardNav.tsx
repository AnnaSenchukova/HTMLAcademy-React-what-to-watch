import { ReactElement, useState } from 'react';

export function FilmCardNav(): ReactElement {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = ['overview', 'details', 'reviews'];

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const getItemClass = (tabName: string) => `film-nav__item ${activeTab === tabName ? 'film-nav__item--active' : ''}`;

  return (
    <div className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {tabs.map((tab) => (
          <li key={tab} className={getItemClass(tab)} onClick={() => handleTabClick(tab)}>
            <span className="film-nav__link">{tab}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
