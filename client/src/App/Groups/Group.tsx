import * as React from 'react';
import { GroupInfo } from './Groups.state';
import { List } from 'semantic-ui-react';
import './Group.css';

export interface Props extends GroupInfo {
    peopleNames: string[];
}

export const Group = (props: Props) => (
    <List.Item className="Group-list-item">
        <List.Icon circular={true} name="group" />
        <List.Content>
            <List.Header>{props.name}</List.Header>
            <List.Description>{props.peopleNames.join(', ')}</List.Description>
        </List.Content>
    </List.Item>
);

export default Group;