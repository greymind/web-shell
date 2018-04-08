import { combineReducers, AnyAction } from 'redux';
import reduceReducers from 'reduce-reducers';
import { StoreState } from './state';

import { reducer as people } from '../App/People/People.reducer';

const combinedReducers = combineReducers<StoreState>({
    people
});

const globalReducer = (state: StoreState, action: AnyAction) => {
    return state;
};

export const rootReducer = reduceReducers<StoreState>(combinedReducers, globalReducer);