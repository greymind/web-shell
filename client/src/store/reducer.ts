import { combineReducers, AnyAction } from 'redux';
import reduceReducers from 'reduce-reducers';
import { StoreState } from './state';

import { reducer as tabs } from '../App/Tabs/Tabs.reducer';
import { reducer as people } from '../App/People/People.reducer';
import { reducer as groups } from '../App/Groups/Groups.reducer';
import { reducer as activities } from '../App/Activities/Activities.reducer';
import greyFlowReducer from '../helpers/greyflow/greyflow-reducer';

const combinedReducers = combineReducers<StoreState>({
    tabs,
    people,
    groups,
    activities
});

const globalReducer = (state: StoreState, action: AnyAction) => {
    return state;
};

// tslint:disable-next-line:no-any
export const rootReducer = reduceReducers<StoreState>(combinedReducers, globalReducer, greyFlowReducer);