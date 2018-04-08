export interface PersonInfo {
    id: string;
    name: string;
}

export interface PeopleState {
    people: PersonInfo[];
}

export const defaultState: PeopleState = {
    people: [
        { id: '0', name: 'Balki' },
        { id: '1', name: 'Mavi' },
        { id: '2', name: 'Martin' },
        { id: '3', name: 'Matko' },
        { id: '4', name: 'Petra' },
    ]
};