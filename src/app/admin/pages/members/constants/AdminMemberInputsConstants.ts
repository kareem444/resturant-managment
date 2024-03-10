import { IAdminMemberInputs } from "../interfaces/AdminMembersInterface";

export const AdminMemberInputsConstants: { [K in keyof IAdminMemberInputs]: K } = {
    name: 'name',
    email: 'email',
    mobile: 'mobile',
    password: 'password',
    branchId: 'branchId',
    roleId: 'roleId',
    residentialNumber: 'residentialNumber',
    healthCertificate: 'healthCertificate',
}