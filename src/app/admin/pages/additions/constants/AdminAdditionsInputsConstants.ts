import { IAdminAdditionsInputs } from "../interfaces/AdminAdditionInterface";

export const AdminAdditionsInputsConstants: { [K in keyof IAdminAdditionsInputs]: K } = {
    image: 'image',
    name: 'name',
    price: 'price',
}