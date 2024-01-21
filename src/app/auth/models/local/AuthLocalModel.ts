import { IDashboardRoles } from "src/app/admin/pages/roles/interfaces/AdminRoleInterface"

export interface ILocalOrganizationModel {
    id: string
    organization_id: string
    organization_name: string
    owner_name: string
    mobile: string
    email: string
    organizationName: string
    organizationCode?: string
    isRegistered?: boolean
    temporaryPassword: string
}

export interface ILocalCurrentUserModel {
    id: string
    user_id?: string
    name: string
    branch?: {
        id: string
        name: string
    }
    email?: string
    mobile?: string
    is_organization_owner?: boolean
    permissions?: IDashboardRoles
}