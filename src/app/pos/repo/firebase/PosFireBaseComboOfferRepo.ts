import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel";
import { IAdminComboOffersModel } from "src/app/admin/models/AdminComboOffersModel";
import { IAdminProductsModel } from "src/app/admin/models/AdminProductsModel";
import { IAdminRefactoredComboOffersInputs } from "src/app/admin/pages/comboOffers/interfaces/AdminComboOffersInterface";
import { AsyncHelper } from "src/common/DataHandler/helper/ServerDataHandlerHelper";
import { FireStoreCollectionsConstants } from "src/common/constants/FireStoreCollectionsConstants";
import { FireStoreHelper } from "src/common/firebaseHandler/helper/FireStoreHelper";

export class PosFireBaseComboOfferRepo {
    static async getComboOffers(
        allBranches: IAdminBranchModel[],
        allProducts?: IAdminProductsModel[],
        branchId?: string
    ): Promise<IAdminComboOffersModel[] | undefined> {
        return AsyncHelper.createPromise(async () => {
            const comboOffers:
                | (IAdminRefactoredComboOffersInputs & IAdminComboOffersModel)[]
                | undefined = await FireStoreHelper.find(
                    FireStoreCollectionsConstants.COMBO_OFFERS,
                    {
                        isAuthGuard: true,
                        where: branchId ? { field: "branchId", operator: "==", value: branchId } : undefined,
                    }
                );

            return comboOffers?.map((comboOffer) => {
                const branch = allBranches.find((branch) => branch.id === comboOffer.branchId);
                const products = comboOffer.products.map((el) => {
                    const product = allProducts?.find((productData) => productData.id === el.id);
                    return { ...el, product };
                });

                delete comboOffer.branchId;

                return {
                    ...comboOffer,
                    branch,
                    products,
                };
            });
        });
    }
}
