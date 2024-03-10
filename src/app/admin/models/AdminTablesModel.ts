import { IAdminTablesInputs } from "../pages/tables/interfaces/AdminTablesInterface";

export interface IAdminTablesModel extends IAdminTablesInputs {
    id?: string
    createdAt?: Date
    updatedAt?: Date
}