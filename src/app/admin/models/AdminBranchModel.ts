import { IAdminBranchInputs } from "../pages/branches/interfaces/AdminBranchesInterface";

export interface IAdminBranchModel extends IAdminBranchInputs {
    id: string
    createdAt?: Date
    updatedAt?: Date
}