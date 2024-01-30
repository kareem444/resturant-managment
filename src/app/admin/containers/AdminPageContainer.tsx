import { routes } from "../../../common/routes/routes";
import AdminHeaderContainer from "./AdminHeaderContainer";
import ScrollToTopComponent from "../../../common/components/ScrollToTopComponent";
import SetRoutesContainer from "../../../common/containers/SetRoutesContainer";
import AdminDrawerContainer from "./AdminDrawerContainer";
import GuardedRouteComponent from "src/common/components/GuardedRouteComponent";
import useCurrentUser from "src/common/hooks/useCurrentUser";
import ModalLayoutContainer from "src/common/containers/ModalContainer";
import RightSidebarContainer from "src/common/containers/RightSidebarContainer";
import { useEffect, useState } from "react";
import { AdminDrawerRoutes, SideBarRoute } from "../routes/AdminDrawerRoutes";
import useAdminPermissions from "src/app/admin/hooks/useAdminPermissions";
import { handelRoutesWithPermission } from "../helper/AdminRoutesHelper";

function AdminPageContainer() {
    const { isCurrentUser, is_organization_owner, permissions } = useCurrentUser();

    const [updatedRoutes, setUpdatedRoutes] = useState<SideBarRoute[]>(AdminDrawerRoutes);

    useEffect(() => {
        if (isCurrentUser && !is_organization_owner) {
            setUpdatedRoutes(handelRoutesWithPermission(permissions));
        }
    }, [isCurrentUser, is_organization_owner]);

    const { isCanAccess, isAdmin } = useAdminPermissions();

    return (
        <GuardedRouteComponent authGuard={true}>
            <GuardedRouteComponent signUserGuard={!isAdmin} >
                <GuardedRouteComponent pathToRedirect={routes.admin.dashboard.fullPath} guard={isCanAccess} >
                    <>
                        <div className="drawer drawer-mobile">
                            <input
                                id="left-sidebar-drawer"
                                type="checkbox"
                                className="drawer-toggle"
                            />
                            <div className="drawer-content flex flex-col">
                                <AdminHeaderContainer />
                                <ScrollToTopComponent>
                                    <SetRoutesContainer routes={routes.admin} />
                                </ScrollToTopComponent>
                            </div>
                            <div className="drawer-side">
                                <label
                                    htmlFor="left-sidebar-drawer"
                                    className="drawer-overlay"
                                ></label>
                                <AdminDrawerContainer routes={updatedRoutes} />
                            </div>
                        </div>
                        <RightSidebarContainer />
                        <ModalLayoutContainer />
                    </>
                </GuardedRouteComponent>
            </GuardedRouteComponent>
        </GuardedRouteComponent>
    );
}

export default AdminPageContainer;
