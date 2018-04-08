import reduceReducer from 'reduce-reducers';
import { defaultState } from './People.state';

export const reducer = reduceReducer(
    (s = defaultState, a) => s,
);