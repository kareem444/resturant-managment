import { AsyncHelper } from "src/common/DataHandler/helper/ServerDataHandlerHelper";
import { FireStoreCollectionsConstants } from "src/common/constants/FireStoreCollectionsConstants";
import { FireStoreHelper } from "src/common/firebaseHandler/helper/FireStoreHelper";
import {
    IAdminDiscountsInputs,
    IAdminRefactoredDiscountsInputs,
} from "../interfaces/AdminDiscountsInterface";
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel";
import { IDiscountUiState } from "../redux/DiscountUiInterface";
import { IAdminGroupModel } from "src/app/admin/models/AdminGroupModel";
import { IAdminProductsModel } from "src/app/admin/models/AdminProductsModel";
import { IAdminCustomerModel } from "src/app/admin/models/AdminCustomerModel";
import { IAdminDiscountModel } from "src/app/admin/models/AdminDiscountModal";
import { AdminProductsRepo } from "../../products/repo/AdminProductsRepo";
import { AdminCustomersRepo } from "../../customers/repo/AdminCustomersRepo";
import { AdminBranchesRepo } from "../../branches/repo/AdminBranchesRepo";

export class AdminDiscountsRepo {
    static createDiscounts = (
        data: IAdminDiscountsInputs,
        discountsState: IDiscountUiState,
        branches?: IAdminBranchModel[],
    ): Promise<IAdminDiscountModel> => {
        return AsyncHelper.createPromise(async () => {
            const productsIds = discountsState.products?.map((product) => product.id) as string[] | undefined;
            const customersIds = discountsState.customers?.map((customer) => customer.id) as string[] | undefined;
            const refactoredData: IAdminRefactoredDiscountsInputs = {
                ...data,
                productsIds,
                customersIds,
            }

            const id: string = await FireStoreHelper.add(
                FireStoreCollectionsConstants.DISCOUNTS,
                refactoredData,
                { isAuthGuard: true }
            );

            return {
                ...data,
                id,
                branch: branches?.find((branch) => branch.id === data.branchId),
                products: discountsState.products,
                customers: discountsState.customers,
            };
        });
    };

    static getDiscounts = async (): Promise<IAdminDiscountModel[]> => {
        return AsyncHelper.createPromise(async () => {
            const discounts: (IAdminRefactoredDiscountsInputs & IAdminDiscountModel)[]
                | undefined = await FireStoreHelper.find(
                    FireStoreCollectionsConstants.DISCOUNTS,
                    {
                        isAuthGuard: true,
                        orderBy: [{ field: "createdAt", direction: "desc" }],
                    }
                );

            const branches: IAdminBranchModel[] = await AdminBranchesRepo.getBranches();
            const products: IAdminProductsModel[] = await AdminProductsRepo.getProducts();
            const customers: IAdminCustomerModel[] = await AdminCustomersRepo.getCustomers();

            const refactoredDiscounts = discounts?.map(
                (el: IAdminRefactoredDiscountsInputs & IAdminDiscountModel) => {
                    const discount = {
                        ...el,
                        products: products.filter((product) => el.productsIds?.includes(product.id!)),
                        customers: customers.filter((customer) => el.customersIds?.includes(customer.id!)),
                        branch: branches.find((branch) => branch.id === el.branchId),
                    };

                    delete discount.productsIds;
                    delete discount.customersIds;

                    return discount;
                }
            );

            return refactoredDiscounts as IAdminDiscountModel[];
        });
    };

    static updateDiscounts = (
        discountId: string,
        data: IAdminDiscountsInputs,
        discountsState: IDiscountUiState,
        branches?: IAdminBranchModel[],
    ): Promise<IAdminDiscountModel> => {
        return AsyncHelper.createPromise(async () => {
            const productsIds = discountsState.products?.map((product) => product.id) as string[] | undefined;
            const customersIds = discountsState.customers?.map((customer) => customer.id) as string[] | undefined;

            const refactoredData: IAdminRefactoredDiscountsInputs = {
                ...data,
                productsIds,
                customersIds,
            };

            await FireStoreHelper.update(
                FireStoreCollectionsConstants.DISCOUNTS,
                discountId,
                refactoredData,
                { isAuthGuard: true }
            );

            return {
                ...data,
                id: discountId,
                branch: branches?.find((branch) => branch.id === data.branchId),
                products: discountsState.products,
                customers: discountsState.customers,
            };
        });
    };

    static deleteDiscounts = (DiscountId: string) => {
        return AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.delete(
                FireStoreCollectionsConstants.DISCOUNTS,
                DiscountId,
                { isAuthGuard: true }
            );
        });
    };
}
