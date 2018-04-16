import './Activity.css';
import * as React from 'react';
import { ActivityInfo } from './Activities.state';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import aut from '../../helpers/GreyFlow/greyflow-aut';

export interface Props extends ActivityInfo {
    groupName: string;
    lastTurnAt: number;
    openActivity?: () => void;
}

export default (props: Props) => (
    <ListItem className={aut('button', props.name)} button={true} onClick={props.openActivity}>
        <ListItemIcon>
            <GroupWorkIcon />
        </ListItemIcon>
        <ListItemText className={aut('item', props.name)} primary={props.name} secondary={props.groupName} />
    </ListItem>
);