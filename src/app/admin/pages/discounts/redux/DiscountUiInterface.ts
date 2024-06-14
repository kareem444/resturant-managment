import { IAdminCustomerModel } from "src/app/admin/models/AdminCustomerModel";
import { IAdminProductsModel } from "src/app/admin/models/AdminProductsModel";
import { AdminDiscountApplyTo } from "../interfaces/AdminDiscountsInterface";

export interface IDiscountUiState {
    applyTo?: AdminDiscountApplyTo;
    products?: IAdminProductsModel[];
    customers?: IAdminCustomerModel[];
}
