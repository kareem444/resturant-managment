import { IAppModel } from "src/common/interfaces/modeInterface";
import { IAdminTableInputs } from "../pages/tables/interfaces/AdminTablesInterface";
import { IAdminBranchModel } from "./AdminBranchModel";

export interface IAdminTableModel extends IAppModel, Omit<IAdminTableInputs, "branchId"> {
    branch?: IAdminBranchModel;
}