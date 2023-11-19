import { createSlice } from '@reduxjs/toolkit'
import { REDUX } from '../../constants/ReduxConstants'
import { removeNotification, showNotification } from './NotificationActions'
import { notificationInitialState } from './NotificationState'

export const NotificationSlice = createSlice({
    name: REDUX.slice.notification,
    initialState: notificationInitialState,
    reducers: {
        showNotificationAction: showNotification,
        removeNotificationAction: removeNotification
    }
})

export const { showNotificationAction , removeNotificationAction } = NotificationSlice.actions

export default NotificationSlice.reducer
