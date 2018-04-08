import * as React from 'react';
import './App.css';
import { Header } from 'semantic-ui-react';
import { TabBarContainer } from './TabBar/TabBar.container';
import { TabInfo } from './TabBar/TabBar';
import { Activities } from './Activity/Activities';
import { Groups } from './Group/Groups';
import { People } from './People/People';

const App = () => {
  const tabs: TabInfo[] = [
    { name: 'activities', label: 'Activities', to: '/activities', component: Activities },
    { name: 'groups', label: 'Groups', to: '/groups', component: Groups },
    { name: 'people', label: 'People', to: '/people', component: People }
  ];

  return (
    <div className="App">
      <div className="App-header">
        <Header inverted={true} as="h1">Greymind Turns</Header>
      </div>
      <TabBarContainer tabs={tabs} widths="3" />
    </div>
  );
};

export default App;
