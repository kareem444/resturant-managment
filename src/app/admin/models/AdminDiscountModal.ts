import { IAppModel } from "src/common/interfaces/modeInterface";
import { IAdminDiscountsInputs } from "../pages/discounts/interfaces/AdminDiscountsInterface";
import { IAdminBranchModel } from "./AdminBranchModel";
import { IAdminCustomerModel } from "./AdminCustomerModel";
import { IAdminProductsModel } from "./AdminProductsModel";

export interface IAdminDiscountModel
    extends IAppModel,
    Omit<IAdminDiscountsInputs, "branchId"> {
    branch?: IAdminBranchModel;
    customers?: IAdminCustomerModel[];
    products?: IAdminProductsModel[];
}
