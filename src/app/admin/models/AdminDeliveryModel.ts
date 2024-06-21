import { IAppModel } from "src/common/interfaces/modeInterface";
import { IAdminDeliveryInputs } from "../pages/delivery/interfaces/AdminDeliveryInterface";
import { IAdminBranchModel } from "./AdminBranchModel";

export interface IAdminDeliveryModel extends IAppModel, Omit<IAdminDeliveryInputs, "branchId" | "image"> {
    image?: string;
    branch?: IAdminBranchModel;
}