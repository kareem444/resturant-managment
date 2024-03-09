import { IAdminCustomerInputs } from "../pages/customers/interfaces/AdminCustomersInterface";

export interface IAdminCustomerModel extends IAdminCustomerInputs {
    id?: string
    createdAt?: Date
    updatedAt?: Date
}