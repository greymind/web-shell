import * as React from 'react';
import './App.css';

import { Route } from 'react-router-dom';
import Hello from '../Hello/Hello.container';
import Goodbye from '../Goodbye/Goodbye';
import { Header, Container, Segment } from 'semantic-ui-react';

import { TabBarContainer } from './TabBar/TabBar.container';

const App = () => {
  const tabs = [
    { name: 'activities', label: 'Activities', to: '/activities' },
    { name: 'groups', label: 'Groups', to: '/groups' },
    { name: 'people', label: 'People', to: '/people' }
  ];

  return (
    <div className="App">
      <div className="App-header">
        <Header inverted={true} as="h1">Greymind Turns</Header>
      </div>
      <Container>
        <TabBarContainer tabs={tabs} widths="3" />
      </Container>
      <Segment>
        <div>
          <Route path="/activities" component={Hello} />
          <Route path="/groups" component={Goodbye} />
          <Route path="/people" component={Goodbye} />
        </div>
      </Segment>
    </div>
  );
};

export default App;
