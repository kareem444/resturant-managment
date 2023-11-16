import { useAppDispatch, useAppSelector } from '../store'
import { INotificationState } from './NotificationInterface'
import { notificationState } from './NotificationSelectors'
import { removeNotificationAction, showNotificationAction } from './NotificationSlice'

export default function useNotificationReducer() {
    const state: INotificationState = useAppSelector(notificationState)
    const dispatch = useAppDispatch()
    return {
        state,
        showNotification: (payload: INotificationState) => {
            dispatch(showNotificationAction(payload))
        },
        removeNotification: () => {
            dispatch(removeNotificationAction())
        }
    }
}
