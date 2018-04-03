import { HelloState } from '../Hello/Hello.reducers';

export interface StoreState {
    app: HelloState;
}

export const initialState: StoreState = {
    app: {
        enthusiasmLevel: 1,
        languageName: 'TypeScript',
    }
};