import { IAppModel } from "src/common/interfaces/modeInterface"
import { IDashboardRoles } from "../pages/roles/interfaces/AdminRoleInterface"

export interface IAdminRoleModel extends IAppModel{
    name: string
    role: 'dashboard' | 'pos' | 'dashboardAndPos'
    permissions: IDashboardRoles
}