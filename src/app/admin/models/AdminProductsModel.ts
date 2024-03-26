import { IAppModel } from "src/common/interfaces/modeInterface";
import { IAdminProductsInputs } from "../pages/products/interfaces/AdminProductsInterface";

export interface IAdminProductsModel
    extends IAppModel,
    Omit<
        IAdminProductsInputs,
        "branchId" | "image" | "groupId" | "taxesIds" | "additionsIds"
    > {
    image?: string;
    branch?: {
        id: string;
        name: string;
    };
    group?: {
        id: string;
        name: string;
    };
    taxes?: {
        id: string;
        name: string;
    }[];
    additions?: {
        id: string;
        name: string;
    }[];
    sizes?: {
        size: string;
        price: string;
    }[];
}
