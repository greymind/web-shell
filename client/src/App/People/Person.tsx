import * as React from 'react';
import { List } from 'semantic-ui-react';
import './People.css';

export interface Props {
    name: string;
}

export const Person = (props: Props) => (
    <List.Item className="People-list-item">
        <List.Icon circular={true} name="user" />
        <List.Content>
            <List.Header>{props.name}</List.Header>
        </List.Content>
    </List.Item>
);