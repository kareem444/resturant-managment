import { IServerDataHandlerState, IServerDataHandlerDataProperties } from "./ServerDataHandlerReduxInterface";

export const defaultServerDataState: IServerDataHandlerDataProperties<any> = {
    isLoading: false,
    isError: false,
    error: undefined,
    data: undefined,
}

export const ServerDataHandlerState: IServerDataHandlerState<any> = {
    data: {},
}