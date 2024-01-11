export interface IServerDataHandlerErrorProperties {
    message?: string
    code?: string
    status?: number
}

export interface IServerDataHandlerDataProperties<T> {
    isLoading?: boolean
    isError?: boolean
    error?: IServerDataHandlerErrorProperties
    data?: T
}

interface IServerDataHandlerData<T> {
    [kay: string]: IServerDataHandlerDataProperties<T>
}

export interface IServerDataHandlerState<T> {
    data: IServerDataHandlerData<T>
}