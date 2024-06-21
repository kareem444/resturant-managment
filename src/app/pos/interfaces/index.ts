import { IAdminGroupModel } from "src/app/admin/models/AdminGroupModel";
import { IAdminProductsModel } from "src/app/admin/models/AdminProductsModel";
import { IAdminComboOffersModel } from "src/app/admin/models/AdminComboOffersModel";
import { IAdminTableModel } from "src/app/admin/models/AdminTableModel";
import { IAdminDeliveryModel } from "src/app/admin/models/AdminDeliveryModel";
import { IAdminDiscountModel } from "src/app/admin/models/AdminDiscountModal";
import { IAdminPaymentsMethodsModel } from "src/app/admin/models/AdminPaymentsMethodsModel";
import { IAdminCustomerModel } from "src/app/admin/models/AdminCustomerModel";

export type IPosProductOrCombo = 'product' | 'combo'

export interface IPosLoadingText {
    show: boolean
    percent?: number
    text?: string
    showDots?: boolean
}

export interface IPosData {
    groups?: IAdminGroupModel[];
    products?: IAdminProductsModel[];
    comboOffers?: IAdminComboOffersModel[];
    tables?: IAdminTableModel[];
    delivery?: IAdminDeliveryModel[];
    discounts?: IAdminDiscountModel[];
    paymentsMethods?: IAdminPaymentsMethodsModel[];
    customers?: IAdminCustomerModel[];
}