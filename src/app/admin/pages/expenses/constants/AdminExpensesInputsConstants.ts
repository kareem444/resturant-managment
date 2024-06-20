import { IAdminExpensesInputs } from "../interfaces/AdminExpensesInterface";

export const AdminExpensesInputsConstants: { [K in keyof IAdminExpensesInputs]: K } = {
    name: 'name',
    branchId: 'branchId',
    expensesDestinationId: 'expensesDestinationId',
    paymentMethodId: 'paymentMethodId',
    description: 'description',
    price: 'price',
}