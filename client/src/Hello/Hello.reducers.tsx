import { createReducer } from '../store/utilities';

export interface HelloState {
    enthusiasmLevel: number;
    languageName: string;
}

const defaultState: HelloState = {
    enthusiasmLevel: 1,
    languageName: 'TypeScript Local Initial',
};

export const helloReducer = createReducer(defaultState)
    .addHandler(
        'incrementEnthusiasm',
        (state) => ({ ...state, enthusiasmLevel: state.enthusiasmLevel + 1 })
    )
    .addSetter(
        'decrementEnthusiasm',
        state => ({ ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) })
    );