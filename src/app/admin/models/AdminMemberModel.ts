import { IAdminMemberInputs } from "../pages/members/interfaces/AdminMembersInterface"
import { iRoleTypes } from "../pages/roles/interfaces/AdminRoleInterface"

export interface IAdminMemberModel extends IAdminMemberInputs {
    id?: string
    branch: {
        id: string
        name: string
    }
    role: {
        id: string
        name: string
        roleType: iRoleTypes
    }
    createdAt?: Date
    updatedAt?: Date
}