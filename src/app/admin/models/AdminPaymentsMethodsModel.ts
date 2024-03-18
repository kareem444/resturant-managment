import { IAppModel } from "src/common/interfaces/modeInterface";

export interface IAdminPaymentsMethodsModel extends IAppModel {
    name: string;
    active: boolean;
}