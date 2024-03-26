import { IAdminProductsInputs } from "../interfaces/AdminProductsInterface";

export const AdminProductsInputsConstants: { [K in keyof IAdminProductsInputs]: K } = {
    image: 'image',
    name: 'name',
    branchId: 'branchId',
    groupId: 'groupId',
    code: 'code',
    productType: 'productType',
    price: 'price',
    taxesIds: 'taxesIds',
    additionsIds: 'additionsIds',
};