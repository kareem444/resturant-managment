import {
    AdminDrawerRoutes,
    SideBarRoute
} from 'src/app/admin/routes/AdminDrawerRoutes'
import AdminRolesOptionsItems from '../components/AdminRolesOptionsItems'
import { removeDashFromRoutNameHelper } from 'src/common/helper/routesHelper'
import AdminRegularRoleOptionComponent from '../components/AdminRegularRoleOptionComponent'
import { IRolesOptions, IRoleTypes } from '../interfaces/AdminRoleInterface'

const handelAddPosRolesForDashboardRole = (
    setRoles: React.Dispatch<
        React.SetStateAction<{
            [key: string]: IRolesOptions | { [key: string]: boolean }
        }>
    >
) => {
    const adminPosRoles: string[] = [
        'add-customer',
        'apply-discount',
        'sales-return',
        'view-invoices'
    ]

    return {
        title: 'pos',
        component: (
            <AdminRegularRoleOptionComponent
                items={adminPosRoles}
                isCheckAll={true}
                onResult={val =>
                    setRoles(prev => ({
                        ...prev,
                        pos: val
                    }))
                }
            />
        )
    }
}

const handelRegularRoutesRoles = (
    route: SideBarRoute,
    setRoles: React.Dispatch<
        React.SetStateAction<{
            [key: string]: IRolesOptions | { [key: string]: boolean }
        }>
    >
) => {
    const reportItems: string[] = []

    route.submenu?.map(submenu => {
        const routeName = submenu.name
        reportItems.push(routeName)
    })

    return {
        title: route.name,
        component: (
            <AdminRegularRoleOptionComponent
                items={reportItems}
                onResult={val =>
                    setRoles(prev => ({
                        ...prev,
                        [removeDashFromRoutNameHelper(route.name)]: val
                    }))
                }
            />
        )
    }
}

const handelEnableOnlyAccessButton = (
    routeIndex: number,
    subMenuIndex: number
): boolean => {
    return (
        (routeIndex === 2 && (subMenuIndex === 1 || subMenuIndex === 2)) ||
        (routeIndex === 3 && (subMenuIndex === 1 || subMenuIndex === 2)) ||
        false
    )
}

const handelRolesItem = (
    roleType: IRoleTypes,
    setRoles: React.Dispatch<
        React.SetStateAction<{
            [key: string]: IRolesOptions | { [key: string]: boolean }
        }>
    >
) => {
    const accordionItems: any = []

    const generalRoutes = [
        AdminDrawerRoutes[1],
        AdminDrawerRoutes[2],
        AdminDrawerRoutes[3],
        AdminDrawerRoutes[4],
        AdminDrawerRoutes[6]
    ]

    const reportRoutes = AdminDrawerRoutes[5]

    generalRoutes.map((route, routesIndex) => {
        if (route.submenu) {
            const items: any = []
            route.submenu.map((submenu, submenuIndex) => {
                const routeName = submenu.name
                items.push({
                    title: routeName,
                    enableOnlyAccessButton: handelEnableOnlyAccessButton(
                        routesIndex,
                        submenuIndex
                    ),
                    onResult: (result: IRolesOptions) =>
                        setRoles(prev => ({
                            ...prev,
                            [removeDashFromRoutNameHelper(routeName)]: result
                        }))
                })
            })
            accordionItems.push({
                title: route.name,
                component: <AdminRolesOptionsItems items={items} />
            })
        }
    })

    accordionItems.push(handelRegularRoutesRoles(reportRoutes, setRoles))
    if (roleType === 'dashboardAndPos') {
        accordionItems.push(handelAddPosRolesForDashboardRole(setRoles))
    }

    return accordionItems
}

/* #region accordion items area */
export const AdminAccordionDataStructure = (
    roleType: IRoleTypes,
    setRoles: React.Dispatch<
        React.SetStateAction<{
            [key: string]: IRolesOptions | { [key: string]: boolean }
        }>
    >
) => {
    return handelRolesItem(roleType, setRoles)
}
/* #endregion */
