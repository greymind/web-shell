import * as React from 'react';
import { List } from 'semantic-ui-react';
import { ActivityInfo } from './Activities.state';

export interface Props extends ActivityInfo {
    groupName: string;
}

export const Activity = (props: Props) => (
    <List.Item className="Group-list-item">
        <List.Icon circular={true} name="shopping bag" />
        <List.Content>
            <List.Header>{props.name}</List.Header>
            <List.Description>{props.groupName}</List.Description>
        </List.Content>
    </List.Item>
);

export default Activity;