import { INotificationState } from './NotificationInterface'

export const showNotification = (
    state: INotificationState,
    action: {
        payload: INotificationState
        type: string
    }
) => {
    const { body, status } = action.payload
    state.body = body
    state.status = status
}

export const removeNotification = (state: INotificationState) => {
    state.body = ''
    state.status = undefined
}
