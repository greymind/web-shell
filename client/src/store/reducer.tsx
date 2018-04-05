// import { combineReducers } from 'redux';
// import { StoreState } from '.';
import { helloReducer } from '../Hello/Hello.reducers';
import { StoreBuilder } from './utilities';

export const { reducers, dispatchFunctionsFactory } = new StoreBuilder()
    .addReducer('hello', helloReducer)
    .buildReducers();