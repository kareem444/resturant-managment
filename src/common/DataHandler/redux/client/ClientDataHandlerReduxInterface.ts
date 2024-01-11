interface IClientDataHandlerData<T> {
    [kay: string]: T
}

export interface IClientDataHandlerState<T> {
    data: IClientDataHandlerData<T>
}