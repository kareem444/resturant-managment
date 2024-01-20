import { IDashboardRoles } from "../pages/roles/interfaces/AdminRoleInterface"

export interface IAdminRoleModel {
    id?: string
    name: string
    role: 'dashboard' | 'pos' | 'dashboardAndPos'
    permissions: IDashboardRoles
    createdAt?: Date
    updatedAt?: Date
}