import {
    AdminDrawerRoutes,
    SideBarRoute
} from 'src/app/admin/routes/AdminDrawerRoutes'
import { RoleOptionsComponentResult } from '../components/AdminAdminRoleOptionsComponent'
import AdminRolesOptionsItems from '../components/AdminRolesOptionsItems'
import { removeDashFromRoutNameHelper } from 'src/common/helper/routesHelper'
import AdminRegularRoleOptionComponent from '../components/AdminRegularRoleOptionComponent'

const handelRegularRoutesRoles = (
    route: SideBarRoute,
    setRoles: React.Dispatch<
        React.SetStateAction<{
            [key: string]: RoleOptionsComponentResult | { [key: string]: boolean }
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
    setRoles: React.Dispatch<
        React.SetStateAction<{
            [key: string]: RoleOptionsComponentResult | { [key: string]: boolean }
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
                    onResult: (result: RoleOptionsComponentResult) =>
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

    return accordionItems
}

/* #region accordion items area */
export const AdminAccordionDataStructure = (
    setRoles: React.Dispatch<
        React.SetStateAction<{
            [key: string]: RoleOptionsComponentResult | { [key: string]: boolean }
        }>
    >
) => {
    return handelRolesItem(setRoles)
}
/* #endregion */
