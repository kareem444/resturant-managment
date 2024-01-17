import {
    NotificationContainer,
    NotificationManager,
} from "react-notifications";

export const NOTIFICATION_TYPE = {
    SUCCESS: "success",
    ERROR: "error",
}

export const showNotification = (status, body, dismissAll = true) => {
    if (dismissAll) {
        NotificationManager.removeAll();
    }
    if (status === NOTIFICATION_TYPE.SUCCESS) {
        NotificationManager.success(body, status);
    }
    if (status === NOTIFICATION_TYPE.ERROR) {
        NotificationManager.error(body, status);
    }
};

const ShowNotificationComponent = ({ children }) => {
    return (
        <>
            {children}
            {/** Notification layout container */}
            <NotificationContainer />
        </>
    );
};

export default ShowNotificationComponent;
