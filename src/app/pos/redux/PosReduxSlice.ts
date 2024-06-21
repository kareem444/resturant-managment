import { createSlice } from '@reduxjs/toolkit'
import { PosInitialState } from './PosReduxState'
import { REDUX } from 'src/common/constants/ReduxConstants'
import {
    clearData,
    setApp,
    setData
} from './PosReduxActions'

export const PosSlice = createSlice({
    name: REDUX.slice.pos,
    initialState: PosInitialState,
    reducers: {
        setAppAction: setApp,
        setDataAction: setData,
        clearDataAction: clearData
    }
})

export const {
    setAppAction,
    setDataAction,
    clearDataAction
} = PosSlice.actions

export default PosSlice.reducer
