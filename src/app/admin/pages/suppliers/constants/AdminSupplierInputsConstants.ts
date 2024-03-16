import { IInputsConstants } from "src/common/interfaces/InputsInterface";
import { IAdminSupplierInputs } from "../interfaces/AdminSupplierInterface";

export const AdminSupplierInputsConstants: IInputsConstants<IAdminSupplierInputs> = {
    name: 'name',
    address: 'address',
    phone: 'phone',
    taxNumber: 'taxNumber',
}