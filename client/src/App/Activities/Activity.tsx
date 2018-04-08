import * as React from 'react';
import { List } from 'semantic-ui-react';
import { ActivityInfo } from './Activities.state';
import './Activity.css';

export interface Props extends ActivityInfo {
    groupName: string;
    lastTurnAt: number;
}

export const Activity = (props: Props) => (
    <List.Item className="Activity-list-item">
        <List.Icon name="shopping bag" />
        <List.Content>
            <List.Header>{props.name}</List.Header>
            <List.Description>
                <div>{props.groupName}</div>
                <div>{props.lastTurnAt}</div>
            </List.Description>
        </List.Content>
    </List.Item>
);

export default Activity;