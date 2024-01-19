export interface IAdminBranchInputs {
    name: string
    nameAr: string
    mobile: string
    address: string
    startTime: string
    endTime: string
    branchCode: string
    taxNumber: string
}

export type IAdminBranchesInputsEnum = {
    [K in keyof IAdminBranchInputs]: K;
};