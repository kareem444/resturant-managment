import { IAdminProductsInputs } from "../interfaces/AdminProductsInterface";

export const AdminProductsInputsConstants: { [K in keyof IAdminProductsInputs]: K } = {
    image: 'image',
    name: 'name',
    branchId: 'branchId',
    mobile: 'mobile'
}