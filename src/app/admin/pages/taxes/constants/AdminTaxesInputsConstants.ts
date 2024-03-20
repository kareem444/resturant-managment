import { IAdminTaxInputs } from "../interfaces/AdminTaxesInterface";

export const AdminTaxInputsConstants: { [K in keyof IAdminTaxInputs]: K } = {
    name: 'name',
    branchId: 'branchId',
    amount: 'amount',
    minAmount: 'minAmount',
}