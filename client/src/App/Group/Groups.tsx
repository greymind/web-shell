import * as React from 'react';
import { List } from 'semantic-ui-react';
import Group, { Props as GroupProps } from './Group';

export interface Props {
    groups: GroupProps[];
}

export const Groups = (props: Props) => (
    <List relaxed="very" verticalAlign="middle" size="big" selection={true} >
        {props.groups.map(groupInfo => (
            <Group {...groupInfo} />
        ))}
    </List>
);

export default Groups;