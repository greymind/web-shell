import reduceReducer from 'reduce-reducers';
import { defaultState } from './Activities.state';

export const reducer = reduceReducer(
    (s = defaultState, a) => s,
);