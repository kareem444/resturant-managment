import { IAdminComboOffersInputs } from "../interfaces/AdminComboOffersInterface";

export const AdminComboOffersInputsConstants: { [K in keyof IAdminComboOffersInputs]: K } = {
    name: 'name',
    code: 'code',
};