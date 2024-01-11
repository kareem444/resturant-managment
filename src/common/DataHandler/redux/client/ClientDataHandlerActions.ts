import { IClientSetDataActionProperties } from "../../interface/ClientDataHandlerInterface"
import { IClientDataHandlerState } from "./ClientDataHandlerReduxInterface"

export const setClientData = <T>(
    state: IClientDataHandlerState<T>,
    action: {
        payload: IClientSetDataActionProperties<T>
    }
) => {
    state.data[action.payload.key] = action.payload.data

}

export const deleteClientData = <T>(
    state: IClientDataHandlerState<T>,
    action: {
        payload: string
    }
) => {
    delete state.data[action.payload]
}