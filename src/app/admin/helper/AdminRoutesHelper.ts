import { removeDashFromRoutNameHelper } from "src/common/helper/routesHelper"
import { IDashboardRoles, IRolesOptions } from "../pages/roles/interfaces/AdminRoleInterface"
import { AdminDrawerRoutes } from "../routes/AdminDrawerRoutes"

export const handelRoutesWithPermission = (
    permissions: IDashboardRoles | undefined
) => {
    return AdminDrawerRoutes.map((route, index) => {
        const handelSubRoutes = route.submenu?.filter(subRoute => {
            const subRouteWithOutDash = removeDashFromRoutNameHelper(subRoute.name) as keyof IDashboardRoles
            const checkReportsPermissions = permissions?.reports?.[subRouteWithOutDash as keyof IDashboardRoles['reports']]
            const checkRoutePermissions = permissions?.[subRouteWithOutDash as keyof IDashboardRoles] as IRolesOptions | undefined;

            const isCanAccess = checkRoutePermissions?.access

            if ((index === 5 && checkReportsPermissions) || (index !== 5 && isCanAccess)) return true;

            return false
        })
        return { ...route, submenu: handelSubRoutes }
    })
}