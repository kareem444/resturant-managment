import { IAdminTableInputs } from "../interfaces/AdminTablesInterface";

export const AdminTableInputsConstants: { [K in keyof IAdminTableInputs]: K } = {
    number: 'number',
    branchId: 'branchId',
}