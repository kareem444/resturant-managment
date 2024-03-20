import { IAppModel } from "src/common/interfaces/modeInterface";
import { IAdminTaxInputs } from "../pages/taxes/interfaces/AdminTaxesInterface";

export interface IAdminTaxModel extends IAppModel, Omit<IAdminTaxInputs, "branchId"> {
    branch?: {
        id: string;
        name: string;
    };
}