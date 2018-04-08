import * as React from 'react';
import List from 'material-ui/List';
import { Person } from './Person';

export interface PersonInfo {
    name: string;
}

export interface Props {
    people: PersonInfo[];
    label: string;
}

export const People = (props: Props) => (
    <List>
        {props.people.map(personInfo => (
            <Person name={personInfo.name} />
        ))}
    </List>
);

export default People;