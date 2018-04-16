// tslint:disable:no-any no-console no-string-literal
import { AnyAction } from 'redux';
import * as _ from 'lodash';
import { Store } from 'redux';
import { setState } from './greyflow-reducer';

export const enum GreyFlowItemType {
    Event = 'event',
    Action = 'action'
}

export enum GreyFlowEventName {
    Click = 'click',
    ContextMenu = 'contextmenu',
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
    linked: boolean;
    autClassName: string | null;
}

export interface GreyFlowActionItem extends GreyFlowItemBase {
    type: GreyFlowItemType.Action;
    action: AnyAction;
}

export type GreyFlowItem = GreyFlowEventItem | GreyFlowActionItem;

export class GreyStore {
    data: GreyFlowItem[];
    store: Store<any> | null;
    initialState: any;
    inReplayPlayback: boolean;

    constructor() {
        this.data = [];
        this.store = null;
        this.initialState = undefined;
        this.inReplayPlayback = false;
    }

    showMenu = (event: PointerEvent) => {
        // this.store!.dispatch()
    }

    setStore = (store: Store<any>) => {
        this.store = store;
    }

    getStore = () => {
        return this.store;
    }

    resetStore = () => {
        if (this.store === null) {
            console.error('Store is null, please call setStore first!');
            return;
        }

        this.store.dispatch(setState(this.initialState));
    }

    setInitialState = (initialState: any) => {
        this.initialState = initialState;
    }

    getInitialState = () => {
        return this.initialState;
    }

    beginReplay = () => {
        this.inReplayPlayback = true;
    }

    endReplay = () => {
        this.inReplayPlayback = false;
    }

    isInReplayPlayback = () => {
        return this.inReplayPlayback;
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
            linked: false,
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
            || eventItem.linked) {
            return;
        }

        const { handlerTarget } = eventItem;

        const autClassName = _.find(handlerTarget.classList, className => className.startsWith('aut-'));

        if (autClassName === undefined) {
            console.warn('Handler element must have an aut-* class!', handlerTarget);
        } else {
            eventItem.linked = true;
            eventItem.autClassName = autClassName;
        }
    }

    private isEventItem(item: GreyFlowItem): item is GreyFlowEventItem {
        return (<GreyFlowEventItem>item).type === 'event';
    }

    private isLinkedEventItem(item: GreyFlowItem): item is GreyFlowEventItem {
        const eventItem = <GreyFlowEventItem>item;
        return eventItem.type === 'event' && eventItem.linked;
    }

    private addItem = (item: GreyFlowItem) => {
        console.log(item);
        this.data.push(item);
    }
}

export default new GreyStore();