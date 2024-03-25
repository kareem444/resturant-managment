import { IAppModel } from "src/common/interfaces/modeInterface";
import { IAdminProductsInputs } from "../pages/products/interfaces/AdminProductsInterface";

export interface IAdminProductsModel extends IAppModel, Omit<IAdminProductsInputs, "branchId" | "image"> {
    image?: string;
    branch?: {
        id: string;
        name: string;
    };
}