import { createSlice } from '@reduxjs/toolkit'
import { ServerDataHandlerState } from './ServerDataHandlerState'
import {
    deleteServerData,
    setServerData,
} from './ServerDataHandlerActions'

export const serverDataHandlerSlice = createSlice({
    name: 'serverDataHandler',
    initialState: ServerDataHandlerState,
    reducers: {
        setServerDataAction: setServerData,
        deleteServerDataAction: deleteServerData,
    }
})

export const {
    setServerDataAction,
    deleteServerDataAction,
} = serverDataHandlerSlice.actions

export default serverDataHandlerSlice.reducer
