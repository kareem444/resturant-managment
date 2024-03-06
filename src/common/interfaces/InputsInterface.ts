export type IInputsConstants<T extends Record<string, any>> = {
    [K in keyof T]: keyof T;
};
