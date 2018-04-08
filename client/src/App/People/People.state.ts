export interface PersonInfo {
    id: string;
    name: string;
}

export default interface PeopleState {
    people: PersonInfo[];
}

export const defaultState: PeopleState = {
    people: [
        { id: '0', name: 'Balki' },
        { id: '1', name: 'Mavi' },
        { id: '2', name: 'Martin' },
        { id: '3', name: 'Matko' },
        { id: '4', name: 'Petra' },
        { id: '5', name: 'Balki1' },
        { id: '6', name: 'Mavi1' },
        { id: '7', name: 'Martin1' },
        { id: '8', name: 'Matko1' },
        { id: '9', name: 'Petra1' },
        { id: '10', name: 'Balki2' },
        { id: '11', name: 'Mavi2' },
        { id: '12', name: 'Martin2' },
        { id: '13', name: 'Matko2' },
        { id: '14', name: 'Petra2' },
        { id: '15', name: 'Balki3' },
        { id: '16', name: 'Mavi3' },
        { id: '17', name: 'Martin3' },
        { id: '18', name: 'Matko3' },
        { id: '19', name: 'Petra3' },
    ]
};