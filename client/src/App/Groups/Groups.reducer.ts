import reduceReducer from 'reduce-reducers';
import { defaultState } from './Groups.state';

export const reducer = reduceReducer(
    (s = defaultState, a) => s,
);