import { IAdminAdditionsModel } from "src/app/admin/models/AdminAdditionsModel";
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel";
import { IAdminGroupModel } from "src/app/admin/models/AdminGroupModel";
import { IAdminProductsModel } from "src/app/admin/models/AdminProductsModel";
import { IAdminTaxModel } from "src/app/admin/models/AdminTaxModel";
import { IAdminProductsInputs } from "src/app/admin/pages/products/interfaces/AdminProductsInterface";
import { AsyncHelper } from "src/common/DataHandler/helper/ServerDataHandlerHelper";
import { FireStoreCollectionsConstants } from "src/common/constants/FireStoreCollectionsConstants";
import { FireStoreHelper } from "src/common/firebaseHandler/helper/FireStoreHelper";

export class PosFirebaseProductsRepo {
    static async getProducts(
        allBranches: IAdminBranchModel[],
        allGroups: IAdminGroupModel[],
        allTaxes: IAdminTaxModel[],
        allAdditions: IAdminAdditionsModel[],
        branchId?: string
    ): Promise<IAdminProductsModel[] | undefined> {
        return AsyncHelper.createPromise(async () => {
            const products: (IAdminProductsInputs & IAdminProductsModel)[] | undefined =
                await FireStoreHelper.find(FireStoreCollectionsConstants.PRODUCTS, {
                    isAuthGuard: true,
                    where: branchId ? { field: "branchId", operator: "==", value: branchId } : undefined,
                });

            return products?.map((product) => {
                const branch = allBranches.find((branch) => branch.id === product.branchId);
                const group = allGroups.find((group) => group.id === product.groupId);
                const taxes = allTaxes.filter((tax) => product.taxesIds?.includes(tax.id!));
                const additions = allAdditions.filter((addition) => product.additionsIds?.includes(addition.id!));

                delete product.branchId;
                delete product.groupId;
                delete product.taxesIds;
                delete product.additionsIds;

                return {
                    ...product,
                    branch,
                    group,
                    taxes,
                    additions,
                };
            });
        });
    }
}