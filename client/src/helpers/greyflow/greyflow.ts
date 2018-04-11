// tslint:disable:no-any no-console no-string-literal
import { Store, Dispatch, AnyAction } from 'redux';
import overrideEvents from './greyflow-events';
import data, { GreyFlowEventItem } from './greyflow-data';
import * as _ from 'lodash';

const ensureLastEventHasAutClass = (lastEvent: GreyFlowEventItem | undefined, action: AnyAction) => {
    if (lastEvent === undefined
        || lastEvent.handlerTarget === null
        || lastEvent.linkedByAction) {
        return;
    }

    const { handlerTarget } = lastEvent;

    const autClassName = _.find(handlerTarget.classList, className => className.startsWith('aut-'));

    if (autClassName === undefined) {
        console.warn('Handler element must have an aut-* class!', handlerTarget,
            'Based on action', action.type, action);
    } else {
        lastEvent.linkedByAction = true;
        lastEvent.autClassName = autClassName;
    }
};

const replayLinkedEvents = () => {
    let linkedEvents = data.getAllLinkedEvents().slice();

    const playNextLinkedEvent = () => {
        const nextLinkedEvent = linkedEvents.shift();

        if (nextLinkedEvent === undefined) {
            return;
        }

        setTimeout(() => {
            const elements = document.getElementsByClassName(nextLinkedEvent.autClassName!);

            if (elements.length === 0) {
                console.warn(`Element with aut class ${nextLinkedEvent.autClassName} not found!`);
            } else if (elements.length > 1) {
                console.warn(`Multiple elements with aut class ${nextLinkedEvent.autClassName} found!`);
            } else {
                const element = _.first(elements)!;
                (element as any).click();
                playNextLinkedEvent();
                // const event = document.createEvent('MouseEvent');
                // event.initMouseEvent('click');
                // element!.dispatchEvent(event);
            }
        }, 500);
    };

    playNextLinkedEvent();
};

(window as any).replay = replayLinkedEvents;

const middleware = <S>(store: Store<S>) => (next: Dispatch<S>) => (action: AnyAction) => {
    const lastEvent = data.getLastEvent();
    ensureLastEventHasAutClass(lastEvent, action);

    data.addAction(action);

    // console.log('dispatching', action);
    // console.log('prev click time', lastEvent !== undefined ? lastEvent.domTimeStamp : '');
    // console.log('current action time', performance.now());
    const result = next(action);
    // console.log('next state', store.getState());
    return result;
};

const initialize = () => {
    overrideEvents();
    console.log(data);
};

export default {
    initialize,
    getMiddleware: () => middleware,
    replayLinkedEvents,
};