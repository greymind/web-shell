// tslint:disable:no-any no-console no-string-literal
import { AnyAction } from 'redux';
import * as _ from 'lodash';

export type GreyFlowEventName = 'click';
export type GreyFlowEvent = MouseEvent;

export interface GreyFlowEventData {
    name: GreyFlowEventName;
    event: GreyFlowEvent;
    target: HTMLElement;
    handlerTarget: HTMLElement | null;
}

export type GreyFlowDataType = GreyFlowEventData | AnyAction;

export interface GreyFlowItem {
    timeStamp: number;
    domTimeStamp: number;
    data: GreyFlowDataType;
    type: 'event' | 'action' | 'start';
}

export class GreyStore {
    data: GreyFlowItem[];

    constructor() {
        this.data = [];
    }

    addEvent = (eventData: GreyFlowEventData) => {
        if (eventData.handlerTarget !== null
            && !_.some(eventData.handlerTarget.classList, className => className.startsWith('aut-'))) {
            console.warn('Handler element must have an aut-* class!', eventData.handlerTarget);
        }

        this.addItem({
            type: 'event',
            timeStamp: new Date().getTime(),
            domTimeStamp: eventData.event.timeStamp,
            data: eventData,
        });
    }

    addAction = (actionData: AnyAction) => {
        this.addItem({
            type: 'action',
            timeStamp: new Date().getTime(),
            domTimeStamp: performance.now(),
            data: actionData
        });
    }

    getLastEvent = (): GreyFlowItem | undefined => {
        return _.findLast(this.data, item => item.type === 'event');
    }

    private addItem = (item: GreyFlowItem) => {
        console.log(item);
        this.data.push(item);
    }
}

export default new GreyStore();