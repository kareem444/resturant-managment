import { FirebaseOptions } from "firebase/app"
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel"
import { IDashboardRoles, IRoleTypes } from "src/app/admin/pages/roles/interfaces/AdminRoleInterface"

export interface ILocalOrganizationModel {
    id: string
    ownerId: string
    ownerName: string
    mobile: string
    email: string
    organizationName: string
    organizationCode?: string
    temporaryPassword: string
    projectCredentials?: FirebaseOptions
}

export interface ILocalCurrentUserModel {
    id: string
    userId?: string
    name: string
    branch?: IAdminBranchModel
    email?: string
    mobile?: string
    isOrganizationOwner?: boolean
    roleType?: IRoleTypes
    permissions?: IDashboardRoles
}