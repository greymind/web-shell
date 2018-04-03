import { HelloState } from '../Hello/Hello.reducers';

export interface StoreState {
    app: {
        hello: HelloState;
    };
}