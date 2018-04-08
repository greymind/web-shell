export interface GroupInfo {
    id: string;
    name: string;
    people: string[];
}

export interface GroupState {
    groups: GroupInfo[];
}

export const defaultState: GroupState = {
    groups: [
        { id: '0', name: 'Burek', people: ['0', '1', '2', '3'] },
        { id: '1', name: 'Unicorns', people: ['0', '4'] }
    ]
};