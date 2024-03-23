import { IAppModel } from "src/common/interfaces/modeInterface";
import { IAdminDeliveryInputs } from "../pages/delivery/interfaces/AdminDeliveryInterface";

export interface IAdminDeliveryModel extends IAppModel, Omit<IAdminDeliveryInputs, "branchId" | "image"> {
    image?: string;
    branch?: {
        id: string;
        name: string;
    };
}