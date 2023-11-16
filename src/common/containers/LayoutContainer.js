import { useEffect } from "react"
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import LeftSidebarContainer from './LeftSideBarContainer';
import PageContentContainer from './PageContentContainer';
import ModalLayoutContainer from './ModalContainer';
import RightSidebarContainer from "./RightSidebarContainer";
import useNotificationReducer from "../redux/notification/useNotificationReducer";

function LayoutContainer() {
    const { state, removeNotification } = useNotificationReducer()
    useEffect(() => {
        if (state.body !== "") {
            if (state.status === 'success') NotificationManager.success(state.body, state.status)
            if (state.status === 'error') NotificationManager.error(state.body, state.status)
            removeNotification()
        }
    }, [state.body])

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