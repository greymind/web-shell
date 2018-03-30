import { combineReducers } from 'redux';
import { StoreState } from '.';
import { enthusiasm } from '../Hello/Hello.reducers';

const reducers = combineReducers<StoreState>({
    app: enthusiasm,
});

export default reducers;