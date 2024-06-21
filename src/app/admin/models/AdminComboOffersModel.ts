import { IAppModel } from "src/common/interfaces/modeInterface";
import {
    IAdminComboOffersInputs,
    IComboOfferProduct,
} from "../pages/comboOffers/interfaces/AdminComboOffersInterface";
import { IAdminBranchModel } from "./AdminBranchModel";

export interface IAdminComboOffersModel
    extends IAppModel,
    Omit<IAdminComboOffersInputs, "branchId" | "image"> {
    products: IComboOfferProduct[];
    branch?: IAdminBranchModel;
    image?: string;
}
