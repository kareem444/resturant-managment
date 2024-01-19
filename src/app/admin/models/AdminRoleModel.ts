import { IAdminRoles } from "../pages/roles/interfaces/AdminRoleInterface"

export interface IAdminRoleModel {
    id?: string
    name: string
    role: 'dashboard' | 'pos'
    permissions: IAdminRoles
    createdAt?: Date
    updatedAt?: Date
}