declare interface NodeModule {
    hot: {
        accept(match: string | string[], callback: () => void): void;
    }
}