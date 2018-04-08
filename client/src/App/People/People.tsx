import * as React from 'react';
import { List } from 'semantic-ui-react';
import { Person } from './Person';

export interface PersonInfo {
    name: string;
}

export interface Props {
    people: PersonInfo[];
}

export const People = (props: Props) => (
    <List relaxed="very" verticalAlign="middle" size="big" selection={true} >
        {props.people.map(personInfo => (
            <Person name={personInfo.name} />
        ))}
    </List>
);

export default People;