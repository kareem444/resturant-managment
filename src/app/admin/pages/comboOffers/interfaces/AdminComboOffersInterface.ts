import { IAdminProductsModel } from "src/app/admin/models/AdminProductsModel";

export interface IAdminComboOffersInputs {
    name: string;
    code: string;
}

export interface IAdminRefactoredComboOffersInputs extends IAdminComboOffersInputs {
    products: {
        id: string | undefined;
        size: string;
        price: string;
    }[] | undefined;
}

export interface IComboOfferProduct {
    product?: IAdminProductsModel;
    size?: string;
    price: string;
}
