import * as React from 'react';
import { List, Icon } from 'semantic-ui-react';

export interface Props {
    name: string;
}

export const Person = (props: Props) => (
    <List.Item className="People-list-item">
        <Icon circular={true} name="user" />
        <List.Content>
            <List.Header>{props.name}</List.Header>
        </List.Content>
    </List.Item>
);