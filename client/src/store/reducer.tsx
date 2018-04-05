import { StoreBuilder } from './utilities';

import { helloReducer } from '../Hello/Hello.reducers';

export const { reducers, dispatchFunctionsFactory } = new StoreBuilder()
    .addReducer('hello', helloReducer)
    .buildReducers();