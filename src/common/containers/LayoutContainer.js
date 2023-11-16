import { useEffect } from "react"
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import LeftSidebarContainer from './LeftSideBarContainer';
import PageContentContainer from './PageContentContainer';
import ModalLayoutContainer from './ModalContainer';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { notificationState } from "../redux/notification/NotificationSelectors";
import { removeNotificationAction } from "../redux/notification/NotificationSlice";
import RightSidebarContainer from "./RightSidebarContainer";

function LayoutContainer() {
    const dispatch = useAppDispatch()
    const { body, status } = useAppSelector(notificationState)

    useEffect(() => {
        if (body !== "") {
            if (status === 'success') NotificationManager.success(body, status)
            if (status === 'error') NotificationManager.error(body, status)
            dispatch(removeNotificationAction())
        }
    }, [body])

    return (
        <>
            { /* Left drawer - containing page content and side bar (always open) */}
            <div className="drawer drawer-mobile">
                <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
                <PageContentContainer />
                <LeftSidebarContainer />
            </div>

            { /* Right drawer - containing secondary content like notifications list etc.. */}
            <RightSidebarContainer />

            {/** Notification layout container */}
            <NotificationContainer />

            {/* Modal layout container */}
            <ModalLayoutContainer />
        </>
    )
}

export default LayoutContainer