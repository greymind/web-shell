export interface GroupInfo {
    id: string;
    name: string;
    peopleIds: string[];
}

export interface GroupState {
    groups: GroupInfo[];
}

export const defaultState: GroupState = {
    groups: [
        { id: '0', name: 'Burek', peopleIds: ['0', '1', '2', '3'] },
        { id: '1', name: 'Unicorns', peopleIds: ['0', '4'] }
    ]
};