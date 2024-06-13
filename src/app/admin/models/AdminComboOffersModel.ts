import { IAppModel } from "src/common/interfaces/modeInterface";
import { IAdminComboOffersInputs, IComboOfferProduct } from "../pages/comboOffers/interfaces/AdminComboOffersInterface";

export interface IAdminComboOffersModel extends IAppModel, IAdminComboOffersInputs {
    products: IComboOfferProduct[];
}
