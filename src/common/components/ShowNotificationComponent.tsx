import { NotificationContainer, NotificationManager } from 'react-notifications'
import { ErrorsConstants } from '../constants/ErrorsConstants'

type NOTIFICATION_TYPE = 'success' | 'error'

export const showNotification = (
    body?: string,
    status: NOTIFICATION_TYPE = 'success',
    dismissAll = true
) => {
    if (dismissAll) {
        NotificationManager.removeAll()
    }
    if (status === 'success') {
        NotificationManager.success(body ?? "success", status)
    } else if (status === 'error') {
        NotificationManager.error(body ?? ErrorsConstants.SOMETHING_WENT_WRONG.code, status)
    }
}

const ShowNotificationComponent = ({ children }: { children: any }) => {
    return (
        <>
            {children}
            <NotificationContainer />
        </>
    )
}

export default ShowNotificationComponent
