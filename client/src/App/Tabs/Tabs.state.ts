export interface TabInfo {
    label: string;
    to: string;
}

export default interface TabsState {
    tabs: TabInfo[];
    currentTab: number;
}

export const defaultState: TabsState = {
    tabs: [
        { label: 'Activities', to: '/activities' },
        { label: 'Groups', to: '/groups' },
        { label: 'People', to: '/people' }
    ],
    currentTab: 0,
};