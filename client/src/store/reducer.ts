import { combineReducers, AnyAction } from 'redux';
import reduceReducers from 'reduce-reducers';
import { StoreState } from './state';

import { helloReducer } from '../Hello/Hello.reducers';

const combinedReducers = combineReducers<StoreState>({
    'hello': helloReducer
});

const globalReducer = (state: StoreState, action: AnyAction) => {
    return state;
};

export const rootReducer = reduceReducers<StoreState>(combinedReducers, globalReducer);