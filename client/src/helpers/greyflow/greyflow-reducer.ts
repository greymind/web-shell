// tslint:disable:no-any

const enum Actions {
    SetState = 'GreyFlow/setState',
    ShowMenu = 'GreyFlow/showMenu',
}

export const setState = (state: any) => ({
    type: Actions.SetState,
    state
});

const setStateMock = setState(undefined);
type setStateType = typeof setStateMock;

export const showMenu = (event: PointerEvent) => ({
    type: Actions.ShowMenu,
    event
});

const showMenuMock = showMenu(new PointerEvent('contextmenu'));
type showMenuType = typeof showMenuMock;

type ActionType = setStateType | showMenuType;

export default (state: any, action: ActionType) => {
    switch (action.type) {
        case Actions.SetState:
            return {
                ...(action as setStateType).state
            };
        case Actions.ShowMenu:
            return {
                ...state,
            };
        default:
            return state;
    }
};