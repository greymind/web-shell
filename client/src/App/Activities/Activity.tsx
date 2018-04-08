import './Activity.css';
import * as React from 'react';
import { ActivityInfo } from './Activities.state';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui';
import GroupWorkIcon from '@material-ui/icons/GroupWork';

export interface Props extends ActivityInfo {
    groupName: string;
    lastTurnAt: number;
}

export default (props: Props) => (
    <ListItem button={true}>
        <ListItemIcon>
            <GroupWorkIcon />
        </ListItemIcon>
        <ListItemText primary={props.name} secondary={props.groupName} />
    </ListItem>
);