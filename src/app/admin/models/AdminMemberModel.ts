import { IAdminMemberInputs } from "../pages/members/interfaces/AdminMembersInterface"

export interface IAdminMemberModel extends IAdminMemberInputs {
    id?: string
    branch: {
        id: string
        name: string
    }
    role: {
        id: string
        name: string
    }
    createdAt?: Date
    updatedAt?: Date
}