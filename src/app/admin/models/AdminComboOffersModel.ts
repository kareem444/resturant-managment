import { IAppModel } from "src/common/interfaces/modeInterface";
import {
    IAdminComboOffersInputs,
    IComboOfferProduct,
} from "../pages/comboOffers/interfaces/AdminComboOffersInterface";

export interface IAdminComboOffersModel
    extends IAppModel,
    Omit<IAdminComboOffersInputs, "branchId" | "image"> {
    products: IComboOfferProduct[];
    branch?: {
        id: string;
        name: string;
    };
    image?: string;
}
