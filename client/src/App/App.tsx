import './App.css';
import * as React from 'react';
import { Route } from 'react-router';

import withRoot from '../helpers/withRoot';
import withStyles, { WithStyles, StyleRulesCallback } from 'material-ui/styles/withStyles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import Activity from './Activities/Activities.container';
import Groups from './Groups/Groups.container';
import People from './People/People.container';

import DocumentTitle from 'react-document-title';
import Tabs, { TabInfo } from './Tabs/Tabs.container';

const styles: StyleRulesCallback<'app'> = theme => ({
  app: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

const App = (props: WithStyles<'app'>) => {
  const { classes } = props;

  const tabs: TabInfo[] = [
    { label: 'Activities', to: '/activities', component: Activity },
    { label: 'Groups', to: '/groups', component: Groups },
    { label: 'People', to: '/people', component: People }
  ];

  return (
    <div className={classes.app}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Greymind Turns
            </Typography>
        </Toolbar>
      </AppBar>
      <Tabs tabs={tabs} />
      <div>
        {tabs.map(tabInfo => (
          <Route
            path={tabInfo.to}
            render={() =>
              <DocumentTitle title={`${tabInfo.label} | Greymind Turns`}>
                <tabInfo.component />
              </DocumentTitle>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default withRoot(withStyles(styles)<{}>(App));
