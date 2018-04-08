import { PeopleState } from '../App/People/People.state';
import { GroupState } from '../App/Groups/Groups.state';
import { ActivityState } from '../App/Activities/Activities.state';

export interface StoreState {
    people: PeopleState;
    groups: GroupState;
    activities: ActivityState;
}