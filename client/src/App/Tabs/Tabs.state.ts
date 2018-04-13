import history from '../../helpers/history';

export interface TabInfo {
    label: string;
    to: string;
}

export default interface TabsState {
    tabs: TabInfo[];
    currentTab: number;
}

const tabs: TabInfo[] = [
    { label: 'Activities', to: '/activities' },
    { label: 'Groups', to: '/groups' },
    { label: 'People', to: '/people' }
];

const getCurrentTabBasedOnLocation = () => {
    const firstTab = 0;

    const locationTab = tabs.findIndex(tabInfo => {
        return tabInfo.to === history.location.pathname;
    });

    return Math.max(locationTab, firstTab);
};

export const defaultState: TabsState = {
    tabs,
    currentTab: getCurrentTabBasedOnLocation(),
};