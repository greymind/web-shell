// tslint:disable:no-any no-console no-string-literal
import { Store, Dispatch, AnyAction } from 'redux';
import overrideEvents from './greyflow-events';
import data, { GreyFlowEventItem } from './greyflow-data';
import * as _ from 'lodash';

const replayLinkedEvents = () => {
    const timeDelay = 500;
    const seekDelay = 50;
    const retryTime = 5000;
    const retries = retryTime / seekDelay;
    let attempt = 0;
    let linkedEvents = data.getAllLinkedEvents().slice();

    const playNextLinkedEvent = (delay = timeDelay) => {
        let nextLinkedEvent: GreyFlowEventItem;

        if (linkedEvents.length <= 0) {
            return;
        }

        nextLinkedEvent = _.first(linkedEvents)!;

        if (attempt < retries) {
            attempt++;
        } else {
            console.warn(`Element with aut class ${nextLinkedEvent.autClassName} not found!`);
            return;
        }

        setTimeout(() => {
            const event = nextLinkedEvent!;
            const elements = document.getElementsByClassName(event.autClassName!);

            if (elements.length > 1) {
                console.warn(`Multiple elements with aut class ${event.autClassName} found!`);
            } else if (elements.length === 1) {
                const executeEvent = () => {
                    const element = _.first(elements)!;
                    (element as any).click();
                };

                const consumeEvent = () => {
                    attempt = 0;
                    linkedEvents.shift();
                };

                const action = () => {
                    executeEvent();
                    consumeEvent();
                    playNextLinkedEvent();
                };

                if (attempt > 1) {
                    setTimeout(() => {
                        action();
                    }, timeDelay);
                } else {
                    action();
                }

                // const event = document.createEvent('MouseEvent');
                // event.initMouseEvent('click');
                // element!.dispatchEvent(event);
            } else {
                const waitForNextElement = () => playNextLinkedEvent(seekDelay);
                waitForNextElement();
            }
        }, delay);
    };

    playNextLinkedEvent();
};

(window as any).replay = replayLinkedEvents;

const middleware = <S>(store: Store<S>) => (next: Dispatch<S>) => (action: AnyAction) => {
    // const lastEvent = data.getLastEvent();
    // ensureLastEventHasAutClass(lastEvent, action);

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
};

export default {
    initialize,
    getMiddleware: () => middleware,
    replayLinkedEvents,
};