import * as React from 'react';
import Activity, { Props as ActivityProps } from './Activity';
import { List } from 'semantic-ui-react';

export interface Props {
    activities: ActivityProps[];
}

export const Activities = (props: Props) => (
    <List relaxed="very" verticalAlign="middle" size="big" selection={true} >
        {props.activities.map(activityInfo => (
            <Activity {...activityInfo} />
        ))}
    </List>
);

export default Activities;