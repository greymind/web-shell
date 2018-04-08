export interface ActivityInfo {
    id: string;
    name: string;
    groupId: string;
}

export interface ActivityState {
    activities: ActivityInfo[];
}

export const defaultState: ActivityState = {
    activities: [
        { id: '0', name: 'Coffee', groupId: '0' },
        { id: '0', name: 'Cake', groupId: '0' },
        { id: '0', name: 'McDonalds', groupId: '1' },
    ]
};