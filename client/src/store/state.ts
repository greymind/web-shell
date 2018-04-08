import TabState from '../App/Tabs/Tabs.state';
import PeopleState from '../App/People/People.state';
import GroupState from '../App/Groups/Groups.state';
import ActivityState from '../App/Activities/Activities.state';

export interface StoreState {
    tabs: TabState;
    people: PeopleState;
    groups: GroupState;
    activities: ActivityState;
}