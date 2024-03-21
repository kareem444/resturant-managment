import { IAppModel } from "src/common/interfaces/modeInterface";
import { IAdminTableInputs } from "../pages/tables/interfaces/AdminTablesInterface";

export interface IAdminTableModel extends IAppModel, Omit<IAdminTableInputs, "branchId"> {
    branch?: {
        id: string;
        name: string;
    };
}