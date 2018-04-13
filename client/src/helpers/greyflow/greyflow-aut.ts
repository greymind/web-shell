export const aut = (...keys: string[]) => {
    return `aut-${keys.join('-')}`;
};

export default aut;