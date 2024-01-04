import 'react-notifications/lib/notifications.css'
import AdminPageContainer from '../../app/admin/containers/AdminPageContainer'
import ModalLayoutContainer from './ModalContainer'
import RightSidebarContainer from './RightSidebarContainer'
import ShowNotificationComponent from '../components/ShowNotificationComponent'
import PosPageContainer from 'src/app/pos/containers/PosPageContainer'

function LayoutContainer() {
    return (
        <ShowNotificationComponent>
            {false ? <AdminPageContainer /> : <PosPageContainer />}

            {/* Right drawer - containing secondary content like notifications list etc.. */}
            <RightSidebarContainer />

            {/* Modal layout container */}
            <ModalLayoutContainer />
        </ShowNotificationComponent>
    )
}

export default LayoutContainer
