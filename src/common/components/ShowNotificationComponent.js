import { useEffect } from 'react'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import useNotificationReducer from '../redux/notification/useNotificationReducer';

const ShowNotificationComponent = ({ children }) => {
    const { state, removeNotification } = useNotificationReducer()
    useEffect(() => {
        if (state.body !== '') {
            if (state.status === 'success')
                NotificationManager.success(state.body, state.status)
            if (state.status === 'error')
                NotificationManager.error(state.body, state.status)
            removeNotification()
        }
    }, [state.body])
    return (
        <>
            {children}
            {/** Notification layout container */}
            <NotificationContainer />
        </>
    )
};

export default ShowNotificationComponent;
