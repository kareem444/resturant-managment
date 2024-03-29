import { IInputsConstants } from "src/common/interfaces/InputsInterface";
import { IAdminBranchInputs } from "../interfaces/AdminBranchesInterface";

export const AdminBranchInputsConstants: IInputsConstants<IAdminBranchInputs> = {
    name: 'name',
    mobile: 'mobile',
    address: 'address',
    startTime: 'startTime',
    endTime: 'endTime',
    branchCode: 'branchCode',
}