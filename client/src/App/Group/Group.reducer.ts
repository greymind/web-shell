import reduceReducer from 'reduce-reducers';
import { defaultState } from './Group.state';

export const reducer = reduceReducer(
    (s = defaultState, a) => s,
);