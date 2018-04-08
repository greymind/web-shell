import { PeopleState } from '../App/People/People.state';
import { GroupState } from '../App/Group/Group.state';

export interface StoreState {
    people: PeopleState;
    group: GroupState;
}