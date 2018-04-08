import './Group.css';
import * as React from 'react';
import { GroupInfo } from './Groups.state';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui';
import GroupIcon from '@material-ui/icons/Group';

export interface Props extends GroupInfo {
    peopleNames: string[];
}

export default (props: Props) => (
    <ListItem button={true}>
        <ListItemIcon>
            <GroupIcon />
        </ListItemIcon>
        <ListItemText primary={props.name} secondary={props.peopleNames.join(', ')} />
    </ListItem>
);