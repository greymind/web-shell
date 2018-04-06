export const IncrementEnthusiasm = 'incrementEnthusiasm';
export type IncrementEnthusiasm = typeof IncrementEnthusiasm;
export const incrementEnthusiasm = () => ({
    type: IncrementEnthusiasm
});

export const DecrementEnthusiasm = 'decrementEnthusiasm';
export type DecrementEnthusiasm = typeof DecrementEnthusiasm;
export const decrementEnthusiasm = () => ({
    type: DecrementEnthusiasm
});

export const IncrementEnthusiasmTwice = 'incrementEnthusiasmTwice';
export type IncrementEnthusiasmTwice = typeof IncrementEnthusiasmTwice;
export const incrementEnthusiasmTwice = () => ({
    type: IncrementEnthusiasmTwice
});

export type HelloActionTypes = IncrementEnthusiasm
    | DecrementEnthusiasm
    | IncrementEnthusiasmTwice;

export interface HelloAction {
    type: HelloActionTypes;
}

export interface HelloState {
    enthusiasmLevel: number;
    languageName: string;
}

const defaultState: HelloState = {
    enthusiasmLevel: 1,
    languageName: 'TypeScript Local Initial',
};

export const helloReducer = (state = defaultState, action: HelloAction) => {
    switch (action.type) {
        case IncrementEnthusiasm:
            return {
                ...state,
                enthusiasmLevel: state.enthusiasmLevel + 1
            };
        case DecrementEnthusiasm:
            return {
                ...state,
                enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
            };
        default:
            return state;
    }
};