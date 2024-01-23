import { routes } from '../../../common/routes/routes'
import AdminHeaderContainer from './AdminHeaderContainer'
import ScrollToTopComponent from '../../../common/components/ScrollToTopComponent'
import SetRoutesContainer from '../../../common/containers/SetRoutesContainer'
import LeftSidebarContainer from './AdminDrawerContainer'
import GuardedRouteComponent from 'src/common/components/GuardedRouteComponent'
import useCurrentUser from 'src/common/hooks/useCurrentUser'
import ModalLayoutContainer from 'src/common/containers/ModalContainer'
import RightSidebarContainer from 'src/common/containers/RightSidebarContainer'
import { useEffect } from 'react'

function AdminPageContainer() {
    const { isCurrentUser, roleType, is_organization_owner, deleteCurrentUser } = useCurrentUser()

    useEffect(() => {
        if (isCurrentUser && !is_organization_owner && !roleType) {
            deleteCurrentUser()
        }
    }, [isCurrentUser, roleType, is_organization_owner])

    return (
        <GuardedRouteComponent authGuard={true}>
            <GuardedRouteComponent
                pathToRedirect={routes.signUser.path}
                guard={isCurrentUser && (is_organization_owner || roleType === 'dashboardAndPos' || roleType === 'dashboard')}
            >
                <>
                    <div className='drawer drawer-mobile'>
                        <input
                            id='left-sidebar-drawer'
                            type='checkbox'
                            className='drawer-toggle'
                        />
                        <div className='drawer-content flex flex-col'>
                            <AdminHeaderContainer />
                            <ScrollToTopComponent>
                                <SetRoutesContainer routes={routes.admin} />
                            </ScrollToTopComponent>
                        </div>
                        <div className='drawer-side'>
                            <label htmlFor='left-sidebar-drawer' className='drawer-overlay'></label>
                            <LeftSidebarContainer />
                        </div>
                    </div>
                    <RightSidebarContainer />
                    <ModalLayoutContainer />
                </>
            </GuardedRouteComponent>
        </GuardedRouteComponent>
    )
}

export default AdminPageContainer
