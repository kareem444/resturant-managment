import { routes } from '../../../common/routes/routes'
import AdminHeaderContainer from './AdminHeaderContainer'
import ScrollToTopComponent from '../../../common/components/ScrollToTopComponent'
import SetRoutesContainer from '../../../common/containers/SetRoutesContainer'
import LeftSidebarContainer from './AdminDrawerContainer'

function AdminPageContainer() {
    return (
        <div className='drawer drawer-mobile'>
            <input
                id='left-sidebar-drawer'
                type='checkbox'
                className='drawer-toggle'
            />
            <div className='drawer-content flex flex-col '>
                <AdminHeaderContainer />
                <ScrollToTopComponent>
                    <SetRoutesContainer routes={routes.admin} />
                    <div className='h-16'></div>
                </ScrollToTopComponent>
            </div>
            <div className='drawer-side'>
                <label htmlFor='left-sidebar-drawer' className='drawer-overlay'></label>
                <LeftSidebarContainer />
            </div>
        </div>
    )
}

export default AdminPageContainer
