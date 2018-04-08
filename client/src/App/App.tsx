import './App.css';
import * as React from 'react';

import withRoot from '../helpers/withRoot';
import withStyles, { WithStyles, StyleRulesCallback } from 'material-ui/styles/withStyles';
import { Paper } from 'material-ui';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import Activity from './Activities/Activities.container';
import Groups from './Groups/Groups.container';
import People from './People/People.container';

import Tabs, { TabInfo } from './Tabs/Tabs.container';

const styles: StyleRulesCallback<'app'> = theme => ({
  app: {
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
    <Paper className={classes.app}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Greymind Turns
            </Typography>
        </Toolbar>
      </AppBar>
      <Tabs tabs={tabs} />
    </Paper>
  );
};

export default withRoot(withStyles(styles)<{}>(App));
