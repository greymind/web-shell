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

import Tabs from './Tabs/Tabs.container';
import { TabInfo } from './Tabs/TabInfo';
import Navigator from './Tabs/Navigator.container';
import TabContent from './Tabs/TabContent.container';

const styles: StyleRulesCallback<'app'> = theme => ({
  app: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  appbar: {
    order: '1',
  },
  content: {
    order: '2',
    overflowY: 'auto',
    flexGrow: '1',
    flexBasis: 'calc(100% - 10px)'
  }
});

type WithStylesKeys = 'app' | 'appbar' | 'content' | 'long';

const App = (props: WithStyles<WithStylesKeys>) => {
  const { classes } = props;

  const tabs: TabInfo[] = [
    { label: 'Activities', to: '/activities', component: Activity },
    { label: 'Groups', to: '/groups', component: Groups },
    { label: 'People', to: '/people', component: People }
  ];

  // const tabComponents = {
  //   'Activities': Activity,
  //   'Groups': Groups,
  //   'People': People,
  // };

  return (
    <Paper className={classes.app}>
      <div className={classes.appbar}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Greymind Turns
            </Typography>
          </Toolbar>
        </AppBar>
        <Tabs tabs={tabs} />
        <Navigator tabs={tabs} />
      </div>
      <div className={classes.content}>
        <TabContent tabs={tabs} />
      </div>
    </Paper>
  );
};

export default withRoot(withStyles(styles)<{}>(App));
