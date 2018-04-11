// tslint:disable:no-any no-console no-string-literal
import { Store, Dispatch, AnyAction } from 'redux';
import overrideEvents from './greyflow-events';
import data from './greyflow-data';

const middleware = <S>(store: Store<S>) => (next: Dispatch<S>) => (action: AnyAction) => {
    const lastEvent = data.getLastEvent();

    console.log('dispatching', action);
    console.log('prev click time', lastEvent !== undefined ? lastEvent.domTimeStamp : '');
    console.log('current action time', performance.now());
    const result = next(action);
    console.log('next state', store.getState());
    return result;
};

const initialize = () => {
    overrideEvents();
    console.log(data);
};

export default {
    initialize,
    getMiddleware: () => middleware
};