import { IServerSetDataActionProperties } from "../../interface/ServerDataHandlerInterface"
import { IServerDataHandlerState } from "./ServerDataHandlerReduxInterface"

export const setServerData = <T>(
    state: IServerDataHandlerState<T>,
    action: {
        payload: IServerSetDataActionProperties<T>
    }
) => {
    state.data = {
        ...state.data,
        [action.payload.key]: {
            ...state.data[action.payload.key],
            ...action.payload.data
        }
    }
}

export const deleteServerData = <T>(
    state: IServerDataHandlerState<T>,
    action: {
        payload: string
    }
) => {
    delete state.data[action.payload]
}