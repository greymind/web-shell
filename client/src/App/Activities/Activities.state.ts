import * as cuid from 'cuid';

export interface ActivityInfo {
    id: string;
    name: string;
    groupId: string;
    turns: TurnInfo[];
}

export interface TurnInfo {
    id: string;
    activityId: string;
    personId: string;
    timeStamp: Date;
}

export default interface ActivitiesState {
    activities: ActivityInfo[];
}

export const defaultState: ActivitiesState = {
    activities: [
        {
            id: '0', name: 'Coffee', groupId: '0',
            turns: [
                { id: cuid(), activityId: '0', personId: '1', timeStamp: new Date(2017, 6, 5) },
                { id: cuid(), activityId: '0', personId: '2', timeStamp: new Date(2017, 6, 16) },
                { id: cuid(), activityId: '0', personId: '0', timeStamp: new Date(2017, 6, 23) },
                { id: cuid(), activityId: '0', personId: '2', timeStamp: new Date(2017, 7, 14) },
                { id: cuid(), activityId: '0', personId: '3', timeStamp: new Date(2017, 7, 19) },
                { id: cuid(), activityId: '0', personId: '3', timeStamp: new Date(2017, 7, 27) },
                { id: cuid(), activityId: '0', personId: '3', timeStamp: new Date(2017, 8, 30) },
                { id: cuid(), activityId: '0', personId: '1', timeStamp: new Date(2017, 12, 1) },
                { id: cuid(), activityId: '0', personId: '3', timeStamp: new Date(2018, 4, 9) },
            ]
        },
        {
            id: '1', name: 'Cake', groupId: '0',
            turns: [
                { id: cuid(), activityId: '1', personId: '3', timeStamp: new Date(2017, 9, 8) },
                { id: cuid(), activityId: '1', personId: '0', timeStamp: new Date(2017, 9, 15) },
                { id: cuid(), activityId: '1', personId: '0', timeStamp: new Date(2017, 9, 29) },
                { id: cuid(), activityId: '1', personId: '1', timeStamp: new Date(2018, 4, 6) },
                { id: cuid(), activityId: '1', personId: '0', timeStamp: new Date(2018, 4, 13) },

            ]
        },
        {
            id: '2', name: 'McDonalds', groupId: '1',
            turns: [

            ]
        },
    ]
};