import { RootState, useAppDispatch, useAppSelector } from '../../../redux/store'
import { IClientSetDataActionProperties } from '../../interface/ClientDataHandlerInterface'
import {
    IClientDataHandlerState,
} from './ClientDataHandlerReduxInterface'
import {
    deleteClientDataAction, setClientDataAction,
} from './ClientDataHandlerSlice'

export const clientDataHandlerState = (state: RootState) => state.clientDataHandler

export default function useClientDataHandlerReducer() {
    const state: IClientDataHandlerState<any> = useAppSelector(clientDataHandlerState)
    const dispatch = useAppDispatch()

    return {
        state,
        setData: (payload: IClientSetDataActionProperties<any>) => {
            dispatch(setClientDataAction(payload))
        },
        deleteData: (payload: string) => {
            dispatch(deleteClientDataAction(payload))
        },
    }
}
