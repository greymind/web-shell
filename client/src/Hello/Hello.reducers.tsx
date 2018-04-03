import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM, EnthusiasmAction } from './Hello.actions';

export interface HelloState {
    enthusiasmLevel: number;
    languageName: string;
}

const defaultState = {
    enthusiasmLevel: 1,
    languageName: 'TypeScript Local Initial',
};

export function helloReducer(state: HelloState = defaultState, action: EnthusiasmAction): HelloState {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
        default:
            return state;
    }
}