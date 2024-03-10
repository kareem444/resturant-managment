import { IAdminMemberInputs } from "../pages/members/interfaces/AdminMembersInterface"
import { IRoleTypes } from "../pages/roles/interfaces/AdminRoleInterface"

export interface IAdminMemberModel extends Omit<IAdminMemberInputs, "branchId" | "roleId">{
    id?: string
    branch?: {
        id: string
        name: string
    }
    role?: {
        id: string
        name: string
        roleType: IRoleTypes
    }
    createdAt?: Date
    updatedAt?: Date
}