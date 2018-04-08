import * as React from 'react';
import List from 'material-ui/List';
import { Person } from './Person';
import { PersonInfo } from './People.state';

export interface Props {
    people: PersonInfo[];
    label: string;
}

export const People = (props: Props) => (
    <List>
        {props.people.map(personInfo => (
            <Person key={personInfo.id} name={personInfo.name} />
        ))}
    </List>
);

export default People;