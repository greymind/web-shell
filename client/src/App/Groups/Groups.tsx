import * as React from 'react';
import List from 'material-ui/List';
import Group, { Props as GroupProps } from './Group';

export interface Props {
    groups: GroupProps[];
}

export default (props: Props) => (
    <List>
        {props.groups.map(groupInfo => (
            <Group {...groupInfo} />
        ))}
    </List>
);