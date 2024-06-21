import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel";
import { IAdminCustomerModel } from "src/app/admin/models/AdminCustomerModel";
import { IAdminDiscountModel } from "src/app/admin/models/AdminDiscountModal";
import { IAdminProductsModel } from "src/app/admin/models/AdminProductsModel";
import { IAdminRefactoredDiscountsInputs } from "src/app/admin/pages/discounts/interfaces/AdminDiscountsInterface";
import { AsyncHelper } from "src/common/DataHandler/helper/ServerDataHandlerHelper";
import { FireStoreCollectionsConstants } from "src/common/constants/FireStoreCollectionsConstants";
import { FireStoreHelper } from "src/common/firebaseHandler/helper/FireStoreHelper";

export class PosFirebaseDiscountRepo {
    static async getDiscounts(
        allBranches: IAdminBranchModel[],
        allProducts?: IAdminProductsModel[],
        allCustomers?: IAdminCustomerModel[],
        branchId?: string
    ): Promise<IAdminDiscountModel[] | undefined> {
        return AsyncHelper.createPromise(async () => {
            const discounts:
                | (IAdminRefactoredDiscountsInputs & IAdminDiscountModel)[]
                | undefined = await FireStoreHelper.find(
                    FireStoreCollectionsConstants.DISCOUNTS,
                    {
                        isAuthGuard: true,
                        where: branchId ? { field: "branchId", operator: "==", value: branchId } : undefined,
                    }
                );

            return discounts?.map((discount) => {
                return {
                    ...discount,
                    branch: allBranches.find((branch) => branch.id === discount.branchId),
                    products: discount.productsIds?.map((productId) => allProducts?.find((product) => product.id === productId) as IAdminProductsModel),
                    customers: discount.customersIds?.map((customerId) => allCustomers?.find((customer) => customer.id === customerId) as IAdminCustomerModel),
                }
            })
        });
    }
}