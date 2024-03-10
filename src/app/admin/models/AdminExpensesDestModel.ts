import { IAdminExpensesDestInputs } from "../pages/expensesDestination/interfaces/AdminExpensesDestInterface";

export interface IAdminExpensesDestModel extends IAdminExpensesDestInputs {
    id?: string
    createdAt?: Date
    updatedAt?: Date
}