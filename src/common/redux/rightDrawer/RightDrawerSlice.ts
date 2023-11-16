import { createSlice } from '@reduxjs/toolkit'
import { REDUX } from '../../constants/reduxConstants'
import { RightDrawerInitialState } from './RightDrawerState'
import { closeRightDrawer, openRightDrawer } from './RightDrawerActions'

export const RightDrawerSlice = createSlice({
    name: REDUX.slice.rightDrawer,
    initialState: RightDrawerInitialState,
    reducers: {
        openRightDrawerAction: openRightDrawer,
        closeRightDrawerAction: closeRightDrawer
    }
})

export const { openRightDrawerAction , closeRightDrawerAction } = RightDrawerSlice.actions

export default RightDrawerSlice.reducer
