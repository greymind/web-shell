// tslint:disable:no-any

const enum Actions {
    SetState = 'GreyFlow/setState'
}

export const setState = (state: any) => ({
    type: Actions.SetState,
    state
});

const setStateMock = setState(undefined);
type setStateType = typeof setStateMock;

export default (state: any, action: setStateType) => {
    switch (action.type) {
        case Actions.SetState:
            return {
                ...action.state
            };
        default:
            return state;
    }
};