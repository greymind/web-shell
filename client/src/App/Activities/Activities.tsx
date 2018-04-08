import * as React from 'react';
import List from 'material-ui/List';
import Activity, { Props as ActivityProps } from './Activity';

export interface Props {
    activities: ActivityProps[];
}

export default (props: Props) => (
    <List>
        {props.activities.map(activityInfo => (
            <Activity {...activityInfo} />
        ))}
    </List>
);