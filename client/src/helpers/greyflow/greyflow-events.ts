// tslint:disable:no-any no-console no-string-literal
import data, { GreyFlowEvent, GreyFlowEventName } from './greyflow-data';
import * as _ from 'lodash';

const baseAddListener = document.addEventListener;
const baseRemoveListener = document.removeEventListener;
const listeners = {};

const ignoreEventNames = ['mouseover', 'mousemove', 'message', 'keyup', 'keydown',
    'error', 'mouseout', 'blur', 'focus', 'scroll', 'mousedown', 'mouseup'];

const includeEventNames = _.values(GreyFlowEventName);

export default () => {
    document.addEventListener = (name: any, callback: any, options: any) => {
        if (!_.some(includeEventNames, n => n === name)) {
            const dummyCallback = (event: any) => {
                if (!_.some(ignoreEventNames, n => n === name)) {
                    console.log('Firing unhandled event:', name);
                    // console.log('Firing unhandled event', name, event);
                }

                callback(event);
            };

            listeners[name] = dummyCallback;
            baseAddListener(name, dummyCallback, options);
            return;
        }

        const newCallback = (event: GreyFlowEvent) => {
            if (data.isInReplayPlayback()) {
                callback(event);
                return;
            }

            // console.log('Firing event:', name);
            console.log('Firing event', name, event);

            const devToolsRoot = 'DevTools-root';
            const handlerKey = `on${name}`;

            let element: HTMLElement | null = event.target as HTMLElement;
            let handlerTarget: HTMLElement | null = null;

            while (element !== null) {
                if (element.classList.contains(devToolsRoot)) {
                    handlerTarget = element = null;
                    break;
                }

                if (handlerTarget === null && element[handlerKey] !== null) {
                    handlerTarget = element;
                }

                element = element.parentElement;
            }

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

    document.addEventListener('contextmenu', _.noop);
};