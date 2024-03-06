import { IInputsConstants } from "src/common/interfaces/InputsInterface";
import { IAdminCustomerInputs } from "../interfaces/AdminCustomersInterface";

export const AdminCustomerInputsConstants: IInputsConstants<IAdminCustomerInputs> = {
    name: 'name',
    mobile: 'mobile',
    taxNumber: 'taxNumber',
    address: 'address',
}