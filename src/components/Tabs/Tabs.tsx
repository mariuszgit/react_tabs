import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  tabId: string,
  onTabChange: (value: Tab) => void
};

export const Tabs = ({ tabs, tabId, onTabChange }: Props) => {
  const activeTab = tabs.find(tab => tab.id === tabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={(tabId === tab.id) ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => onTabChange(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
