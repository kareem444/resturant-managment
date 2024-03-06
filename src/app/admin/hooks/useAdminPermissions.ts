import { useLocation } from "react-router-dom"
import useCurrentUser from "../../../common/hooks/useCurrentUser"
import { useEffect, useState } from "react"
import { IDashboardRoles, IRolesOptions } from "src/app/admin/pages/roles/interfaces/AdminRoleInterface"
import { removeDashFromRoutNameHelper } from "../../../common/helper/routesHelper"
import { routes } from "../../../common/routes/routes"

export default function useAdminPermissions() {
    const { pathname } = useLocation()
    const { isCurrentUser, isOrganizationOwner, permissions, roleType } = useCurrentUser()
    const [routesPermissions, setRoutePermissions] = useState<IRolesOptions>()

    const isAdminRole = roleType === 'dashboard' || roleType === 'dashboardAndPos'

    useEffect(() => {
        const currentRoute = pathname.split('/').pop();
        if (currentRoute) {
            const currentRouteWithOutDash = removeDashFromRoutNameHelper(currentRoute)
            const isDashboardRoute = currentRouteWithOutDash === routes.admin.dashboard.path.split('/').pop()
            const checkRoutePermissions = permissions?.[currentRouteWithOutDash as keyof IDashboardRoles] as IRolesOptions | undefined;
            const checkReportsPermissions = permissions?.reports?.[currentRouteWithOutDash as keyof IDashboardRoles['reports']];

            setRoutePermissions({
                access: isDashboardRoute || checkRoutePermissions?.access || checkReportsPermissions || false,
                edit: checkRoutePermissions?.edit || false,
                add: checkRoutePermissions?.add || false,
                delete: checkRoutePermissions?.delete || false,
            })
        }
    }, [pathname, isCurrentUser])

    return {
        isAdmin: isCurrentUser && (isOrganizationOwner || isAdminRole),
        isCanAccess: isCurrentUser && (isOrganizationOwner || (isAdminRole && routesPermissions?.access)),
        isCanEdit: isCurrentUser && (isOrganizationOwner || (isAdminRole && routesPermissions?.edit)),
        isCanAdd: isCurrentUser && (isOrganizationOwner || (isAdminRole && routesPermissions?.add)),
        isCanDelete: isCurrentUser && (isOrganizationOwner || (isAdminRole && routesPermissions?.delete)),
    }
}
