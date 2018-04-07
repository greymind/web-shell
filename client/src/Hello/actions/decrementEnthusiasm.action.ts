import { HelloState } from '../Hello.state';

export const _decrementEnthusiasm = 'Hello/decrementEnthusiasm';

export const decrementEnthusiasm = () => ({
    type: _decrementEnthusiasm,
});

export const decrementEnthusiasmMock = decrementEnthusiasm();

export const decrementEnthusiasmReducer =
    (state: HelloState, action: typeof decrementEnthusiasmMock): HelloState => {
        if (action.type === _decrementEnthusiasm) {
            return {
                ...state,
                enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
            };
        }

        return state;
    };