// tslint:disable:no-any no-console no-string-literal
import data, { GreyFlowEvent, GreyFlowEventName } from './greyflow-data';
import * as _ from 'lodash';

const baseAddListener = document.addEventListener;
const baseRemoveListener = document.removeEventListener;
const listeners = {};

// const ignoreEventNames = ['mouseover', 'mousemove', 'message', 'keyup', 'keydown',
//     'error', 'mouseout', 'blur', 'focus', 'scroll', 'mousedown', 'mouseup'];

const includeEventNames = _.values(GreyFlowEventName);

export default () => {
    document.addEventListener = (name: any, callback: any, options: any) => {
        if (!_.some(includeEventNames, n => n === name)) {
            baseAddListener(name, callback, options);
            return;
        }

        const newCallback = (event: GreyFlowEvent) => {
            // console.log('firing event', name, evt);
            const appRoot = 'App-root';
            const handlerKey = `on${name}`;

            let element: HTMLElement | null = event.target as HTMLElement;
            let handlerTarget: HTMLElement | null = null;

            while (element !== null
                && !element.classList.contains(appRoot)) {
                if (handlerTarget === null && element[handlerKey] !== null) {
                    handlerTarget = element;
                }

                element = element.parentElement;
            }

            if (element === null) {
                callback(event);
                return;
            }

            // while (handlerTarget !== null
            //     && handlerTarget[handlerKey] === null) {
            //     handlerTarget = handlerTarget.parentElement;
            // }

            if (handlerTarget !== null) {
                data.addEvent(name, event, event.target as HTMLElement, handlerTarget);
            }

            callback(event);
        };

        listeners[name] = newCallback;
        baseAddListener(name, newCallback, options);
    };

    document.removeEventListener = (name: any, callback: any, options: any) => {
        if (!_.some(includeEventNames, n => n === name)) {
            baseRemoveListener(name, callback, options);
            return;
        }

        const newCallback = listeners[name];
        baseRemoveListener(name, newCallback, options);
        delete listeners[callback];
    };
};