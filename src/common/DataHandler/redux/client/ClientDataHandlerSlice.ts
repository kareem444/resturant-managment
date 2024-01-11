import { createSlice } from '@reduxjs/toolkit'
import { ClientDataHandlerState } from './ClientDataHandlerState'
import {
    deleteClientData,
    setClientData,
} from './ClientDataHandlerActions'

export const clientDataHandlerSlice = createSlice({
    name: 'clientDataHandler',
    initialState: ClientDataHandlerState,
    reducers: {
        setClientDataAction: setClientData,
        deleteClientDataAction: deleteClientData,
    }
})

export const {
    setClientDataAction,
    deleteClientDataAction,
} = clientDataHandlerSlice.actions

export default clientDataHandlerSlice.reducer
