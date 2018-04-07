export interface HelloState {
    enthusiasmLevel: number;
    languageName: string;
}

export const defaultHelloState: HelloState = {
    enthusiasmLevel: 1,
    languageName: 'TypeScript Local Initial',
};