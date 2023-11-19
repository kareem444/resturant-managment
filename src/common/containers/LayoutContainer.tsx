import 'react-notifications/lib/notifications.css'
import AdminPageContentContainer from '../../app/admin/containers/AdminPageContentContainer'
import ModalLayoutContainer from './ModalContainer'
import RightSidebarContainer from './RightSidebarContainer'
import ShowNotificationComponent from '../components/ShowNotificationComponent'

function LayoutContainer() {
    return (
        <ShowNotificationComponent>
            <AdminPageContentContainer />

            {/* Right drawer - containing secondary content like notifications list etc.. */}
            <RightSidebarContainer />

            {/* Modal layout container */}
            <ModalLayoutContainer />
        </ShowNotificationComponent>
    )
}

export default LayoutContainer
