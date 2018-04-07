import reduceReducer from 'reduce-reducers';
import { defaultHelloState } from './Hello.state';
import { incrementEnthusiasmReducer } from './actions/incrementEnthusiasm.action';
import { decrementEnthusiasmReducer } from './actions/decrementEnthusiasm.action';

export const helloSliceReducer = reduceReducer(
    (s = defaultHelloState, a) => s,
    incrementEnthusiasmReducer,
    decrementEnthusiasmReducer
);