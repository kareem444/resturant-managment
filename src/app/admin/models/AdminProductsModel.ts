import { IAppModel } from "src/common/interfaces/modeInterface";
import { IAdminProductsInputs } from "../pages/products/interfaces/AdminProductsInterface";
import { IAdminBranchModel } from "./AdminBranchModel";
import { IAdminGroupModel } from "./AdminGroupModel";
import { IAdminTaxModel } from "./AdminTaxModel";
import { IAdminAdditionsModel } from "./AdminAdditionsModel";

export interface IAdminProductsModel
    extends IAppModel,
    Omit<
        IAdminProductsInputs,
        "branchId" | "image" | "groupId" | "taxesIds" | "additionsIds"
    > {
    image?: string;
    branch?: IAdminBranchModel;
    group?: IAdminGroupModel;
    taxes?: IAdminTaxModel[];
    additions?: IAdminAdditionsModel[];
    sizes?: {
        size: string;
        price: string;
    }[];
}
