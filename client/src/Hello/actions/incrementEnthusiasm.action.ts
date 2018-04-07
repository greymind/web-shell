import { HelloState } from '../Hello.state';

export const _incrementEnthusiasm = 'Hello/incrementEnthusiasm';

export const incrementEnthusiasm = () => ({
    type: _incrementEnthusiasm,
});

export const incrementEnthusiasmMock = incrementEnthusiasm();

export const incrementEnthusiasmReducer =
    (state: HelloState, action: typeof incrementEnthusiasmMock): HelloState => {
        if (action.type === _incrementEnthusiasm) {
            return {
                ...state,
                enthusiasmLevel: state.enthusiasmLevel + 1
            };
        }

        return state;
    };