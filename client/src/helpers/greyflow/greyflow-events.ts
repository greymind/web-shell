// tslint:disable:no-any no-console no-string-literal
import data, { GreyFlowEvent } from './greyflow-data';

const baseAddListener = document.addEventListener;
const baseRemoveListener = document.removeEventListener;
const listeners = {};

const ignoreEventNames = ['mouseover', 'mousemove', 'message', 'keyup', 'keydown',
    'error', 'mouseout', 'blur', 'focus'];

export default () => {
    document.addEventListener = (name: any, callback: any, options: any) => {
        if (!ignoreEventNames.some(n => n === name)) {
            // console.log("event is being registered", name, options);
        }

        const newCallback = (event: GreyFlowEvent) => {
            if (!ignoreEventNames.some(n => n === name)) {
                // console.log('firing event', name, evt);
                const depth = 100;
                const handlerKey = `on${name}`;

                let handlerTarget: HTMLElement | null = event.target as HTMLElement;
                let level = 1;

                while (level <= depth
                    && handlerTarget !== null
                    && handlerTarget[handlerKey] === null) {
                    handlerTarget = handlerTarget.parentElement;
                    level++;
                }

                data.addEvent(name,  event, event.target as HTMLElement, handlerTarget);
            }

            callback(event);
        };

        listeners[callback] = newCallback;
        baseAddListener(name, newCallback, options);
    };

    document.removeEventListener = (name: any, callback: any, options: any) => {
        const newCallback = listeners[callback];
        baseRemoveListener(name, newCallback, options);
        delete listeners[callback];
    };
};