import { RootState, useAppDispatch, useAppSelector } from '../../../redux/store'
import { IServerSetDataActionProperties } from '../../interface/ServerDataHandlerInterface'
import {
    IServerDataHandlerState,
} from './ServerDataHandlerReduxInterface'
import {
    deleteServerDataAction,
    setServerDataAction,
} from './ServerDataHandlerSlice'

export const serverDataHandlerState = (state: RootState) => state.serverDataHandler

export default function useServerDataHandlerReducer() {
    const state: IServerDataHandlerState<any> = useAppSelector(serverDataHandlerState)
    const dispatch = useAppDispatch()

    return {
        state,
        setData: (payload: IServerSetDataActionProperties<any>) => {
            dispatch(setServerDataAction(payload))
        },
        deleteData: (payload: string) => {
            dispatch(deleteServerDataAction(payload))
        },
    }
}
