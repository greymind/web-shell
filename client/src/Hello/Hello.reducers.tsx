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
    ('incrementEnthusiasm', (state: HelloState) => ({
        ...state,
        enthusiasmLevel: state.enthusiasmLevel + 1
    }))
    ('decrementEnthusiasm', (state) => ({
        ...state,
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
    }));

export type Dispatch = typeof helloReducer.__dispatchType;