import { IAdminDeliveryInputs } from "../interfaces/AdminDeliveryInterface";

export const AdminDeliveryInputsConstants: { [K in keyof IAdminDeliveryInputs]: K } = {
    image: 'image',
    name: 'name',
    branchId: 'branchId',
    mobile: 'mobile'
}