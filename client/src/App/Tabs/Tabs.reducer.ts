import reduceReducer from 'reduce-reducers';
import { defaultState } from './Tabs.state';
import { changeTabReducer } from './actions/Tabs.changeTab';

export const reducer = reduceReducer(
    (s = defaultState, a) => s,
    changeTabReducer
);