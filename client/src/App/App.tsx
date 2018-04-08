import * as React from 'react';
import './App.css';
import { Header } from 'semantic-ui-react';
import TabBar from './TabBar/TabBar.container';
import { TabInfo } from './TabBar/TabBar';
import Activity from './Activities/Activities.container';
import Groups from './Groups/Groups.container';
import People from './People/People.container';

const App = () => {
  const tabs: TabInfo[] = [
    { name: 'activities', label: 'Activities', to: '/activities', component: Activity },
    { name: 'groups', label: 'Groups', to: '/groups', component: Groups },
    { name: 'people', label: 'People', to: '/people', component: People }
  ];

  return (
    <div className="App">
      <div className="App-header">
        <Header inverted={true} as="h1">Greymind Turns</Header>
      </div>
      <TabBar tabs={tabs} widths="3" />
    </div>
  );
};

export default App;
