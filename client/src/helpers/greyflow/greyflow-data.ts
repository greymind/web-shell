// tslint:disable:no-any no-console no-string-literal
import { AnyAction } from 'redux';
import * as _ from 'lodash';

export const enum GreyFlowItemType {
    Event = 'event',
    Action = 'action'
}

export enum GreyFlowEventName {
    Click = 'click',
    KeyPress = 'keypress',
}

export type GreyFlowEvent = MouseEvent;

export interface GreyFlowItemBase {
    timeStamp: number;
    domTimeStamp: number;
}

export interface GreyFlowEventItem extends GreyFlowItemBase {
    type: GreyFlowItemType.Event;
    name: GreyFlowEventName;
    event: GreyFlowEvent;
    target: HTMLElement;
    handlerTarget: HTMLElement | null;
    linkedByAction: boolean;
    autClassName: string | null;
}

export interface GreyFlowActionItem extends GreyFlowItemBase {
    type: GreyFlowItemType.Action;
    action: AnyAction;
}

export type GreyFlowItem = GreyFlowEventItem | GreyFlowActionItem;

export class GreyStore {
    data: GreyFlowItem[];

    constructor() {
        this.data = [];
    }

    addEvent = (
        name: GreyFlowEventName,
        event: GreyFlowEvent,
        target: HTMLElement,
        handlerTarget: HTMLElement | null
    ) => {
        const item: GreyFlowEventItem = {
            type: GreyFlowItemType.Event,
            timeStamp: new Date().getTime(),
            domTimeStamp: event.timeStamp,
            name,
            event,
            target,
            handlerTarget,
            linkedByAction: false,
            autClassName: ''
        };

        this.checkAndSetAutClass(item);
        this.addItem(item);

        return item;
    }

    addAction = (action: AnyAction) => {
        const item: GreyFlowActionItem = {
            type: GreyFlowItemType.Action,
            timeStamp: new Date().getTime(),
            domTimeStamp: performance.now(),
            action
        };

        this.addItem(item);

        return item;
    }

    getData = () => {
        return this.data;
    }

    getAllLinkedEvents = (): GreyFlowEventItem[] => {
        return _.filter(this.data, this.isLinkedEventItem);
    }

    getLastEvent = (): GreyFlowEventItem | undefined => {
        return _.findLast(this.data, this.isEventItem);
    }

    private checkAndSetAutClass = (eventItem: GreyFlowEventItem) => {
        if (eventItem.handlerTarget === null
            || eventItem.linkedByAction) {
            return;
        }

        const { handlerTarget } = eventItem;

        const autClassName = _.find(handlerTarget.classList, className => className.startsWith('aut-'));

        if (autClassName === undefined) {
            console.warn('Handler element must have an aut-* class!', handlerTarget);
        } else {
            eventItem.linkedByAction = true;
            eventItem.autClassName = autClassName;
        }
    }

    private isEventItem(item: GreyFlowItem): item is GreyFlowEventItem {
        return (<GreyFlowEventItem>item).type === 'event';
    }

    private isLinkedEventItem(item: GreyFlowItem): item is GreyFlowEventItem {
        const eventItem = <GreyFlowEventItem>item;
        return eventItem.type === 'event' && eventItem.linkedByAction;
    }

    private addItem = (item: GreyFlowItem) => {
        console.log(item);
        this.data.push(item);
    }
}

export default new GreyStore();