import { combineReducers, AnyAction } from 'redux';
import reduceReducers from 'reduce-reducers';
import { StoreState } from './state';

import { reducer as people } from '../App/People/People.reducer';
import { reducer as groups } from '../App/Groups/Groups.reducer';
import { reducer as activities } from '../App/Activities/Activities.reducer';

const combinedReducers = combineReducers<StoreState>({
    people,
    groups,
    activities
});

const globalReducer = (state: StoreState, action: AnyAction) => {
    return state;
};

export const rootReducer = reduceReducers<StoreState>(combinedReducers, globalReducer);