import { combineReducers } from 'redux';
import { StoreState } from '.';
import { helloReducer, HelloState } from '../Hello/Hello.reducers';

const rootReducer = combineReducers<StoreState>({
    app: combineReducers<HelloState>({
        hello: helloReducer
    }),
});

export default rootReducer;