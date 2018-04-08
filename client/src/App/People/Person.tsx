import './People.css';
import * as React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import PersonIcon from '@material-ui/icons/Person';
// import Avatar from 'material-ui/Avatar';

export interface Props {
    name: string;
}

export const Person = (props: Props) => (
    <ListItem key={props.name} button={true}>
        <ListItemIcon>
            <PersonIcon />
        </ListItemIcon>
        <ListItemText primary={props.name} />
    </ListItem>
);