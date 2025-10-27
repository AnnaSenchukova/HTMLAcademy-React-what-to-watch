import { ReactElement, useState } from 'react';
import {FilmInfoTab} from '../FilmInfoTab';
import { FilmInfoContent } from '../FilmInfoContent';

const tabs = ['overview', 'details', 'reviews'];
const DEFAULT_TAB = 'overview';

type FilmInfoProps = {
  filmId: number;
};

export function FilmInfo({ filmId }: FilmInfoProps): ReactElement {
  const [activeTab, setActiveTab] = useState(DEFAULT_TAB);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="film-card__desc">
      <FilmInfoTab
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      <FilmInfoContent activeTab={activeTab} filmId={filmId} />
    </div>
  );
}
