import { IAdminGroupInputs } from "../pages/groups/interfaces/AdminGroupsInterface";

export interface IAdminGroupModel extends IAdminGroupInputs {
    id?: string
    createdAt?: Date
    updatedAt?: Date
}