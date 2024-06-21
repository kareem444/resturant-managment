import { AsyncHelper } from "src/common/DataHandler/helper/ServerDataHandlerHelper";
import { FireStoreCollectionsConstants } from "src/common/constants/FireStoreCollectionsConstants";
import { FireStoreHelper } from "src/common/firebaseHandler/helper/FireStoreHelper";
import {
    IAdminProductsInputs,
    IAdminRefactoredProductsInputs,
} from "../interfaces/AdminProductsInterface";
import { AdminBranchesRepo } from "../../branches/repo/AdminBranchesRepo";
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel";
import { ErrorsConstants } from "src/common/constants/ErrorsConstants";
import { IAdminProductsModel } from "src/app/admin/models/AdminProductsModel";
import { FireStorageHelper } from "src/common/firebaseHandler/helper/FireStorageHelper";
import { IProductUiState } from "../redux/ProductUiInterface";
import { IAdminGroupModel } from "src/app/admin/models/AdminGroupModel";
import { IAdminTaxModel } from "src/app/admin/models/AdminTaxModel";
import { IAdminAdditionsModel } from "src/app/admin/models/AdminAdditionsModel";
import { AdminGroupsRepo } from "../../groups/repo/AdminGroupsRepo";
import { AdminTaxesRepo } from "../../taxes/repo/AdminTaxesRepo";
import { AdminAdditionsRepo } from "../../additions/repo/AdminAdditionsRepo";

export class AdminProductsRepo {
    static createProducts = (
        productsInputs: IAdminRefactoredProductsInputs,
        productsState: IProductUiState,
        branches?: IAdminBranchModel[],
        groups?: IAdminGroupModel[]
    ): Promise<IAdminProductsModel> => {
        return AsyncHelper.createPromise(async () => {
            const refactoredData: IAdminRefactoredProductsInputs = {
                name: productsInputs.name,
                code: productsInputs.code,
                price: productsInputs.price,
                branchId: productsInputs.branchId,
                groupId: productsInputs.groupId,
                image: productsInputs.image,
                productType: productsState.productType,
                sizes: productsState.data?.productSizes,
                additionsIds: productsState.data?.productAdditions?.map(
                    (item) => item.id!
                ),
                taxesIds: productsState.data?.productTaxes?.map((item) => item.id!),
            };

            const branch = branches?.find(
                (branch) => branch.id === refactoredData.branchId
            );
            if (!branch?.id) {
                throw ErrorsConstants.BRANCH_NOT_EXIST;
            }

            const group = groups?.find(
                (group) => group.id === refactoredData.groupId
            );
            if (!group?.id) {
                throw ErrorsConstants.GROUP_NOT_EXIST;
            }

            let image: string | undefined = undefined;

            if (!!refactoredData.image) {
                image = await FireStorageHelper.uploadFile(refactoredData.image, {
                    directory: "products",
                });
            }

            const id: string = await FireStoreHelper.add(
                FireStoreCollectionsConstants.PRODUCTS,
                { ...refactoredData, image: image || "" },
                { isAuthGuard: true }
            );

            return {
                ...refactoredData,
                id,
                image,
                branch,
                group,
                additions: productsState.data?.productAdditions,
                taxes: productsState.data?.productTaxes,
            };
        });
    };

    static getProducts = async (): Promise<IAdminProductsModel[]> => {
        return AsyncHelper.createPromise(async () => {
            const products:
                | (IAdminProductsInputs & IAdminProductsModel)[]
                | undefined = await FireStoreHelper.find(
                    FireStoreCollectionsConstants.PRODUCTS,
                    {
                        isAuthGuard: true,
                        orderBy: [{ field: "createdAt", direction: "desc" }],
                    }
                );

            if (!products || products.length === 0) {
                return [];
            }

            const branches: IAdminBranchModel[] =
                await AdminBranchesRepo.getBranches();
            const groups: IAdminGroupModel[] = await AdminGroupsRepo.getGroups();
            const taxes: IAdminTaxModel[] = await AdminTaxesRepo.getTaxes();
            const additions: IAdminAdditionsModel[] =
                await AdminAdditionsRepo.getAdditions();

            const refactorProducts = products?.map((el) => {
                if (!!el.branchId) {
                    const branch = branches?.find((branch) => branch.id === el.branchId);
                    el.branch = branch;
                }

                if (!!el.groupId) {
                    const group = groups?.find((group) => group.id === el.groupId);
                    el.group = group;
                }

                if (!!el.taxesIds) {
                    const filteredTaxes = taxes?.filter((tax) => {
                        if (tax.id && el.taxesIds?.includes(tax.id)) {
                            return tax;
                        }
                    });
                    el.taxes = filteredTaxes;
                }

                if (!!el.additionsIds) {
                    const filteredAdditions = additions?.filter((addition) => {
                        if (addition.id && el.additionsIds?.includes(addition.id)) {
                            return addition;
                        }
                    });
                    el.additions = filteredAdditions;
                }

                delete el.branchId;
                delete el.groupId;
                delete el.taxesIds;
                delete el.additionsIds;
                return el;
            });

            return refactorProducts as IAdminProductsModel[];
        });
    };

    static updateProducts = (
        productId: string,
        productsInputs: IAdminRefactoredProductsInputs,
        productsState: IProductUiState,
        branches?: IAdminBranchModel[],
        groups?: IAdminGroupModel[]
    ): Promise<IAdminProductsModel> => {
        return AsyncHelper.createPromise(async () => {
            const refactoredData: IAdminRefactoredProductsInputs = {
                name: productsInputs.name,
                code: productsInputs.code,
                price: productsInputs.price,
                branchId: productsInputs.branchId,
                groupId: productsInputs.groupId,
                image: productsInputs.image,
                productType: productsState.productType,
                sizes: productsState.data?.productSizes,
                additionsIds: productsState.data?.productAdditions?.map(
                    (item) => item.id!
                ),
                taxesIds: productsState.data?.productTaxes?.map((item) => item.id!),
            };

            const branch = branches?.find((branch) => branch.id === refactoredData.branchId);
            if (!branch?.id) {
                throw ErrorsConstants.BRANCH_NOT_EXIST;
            }

            const group = groups?.find((group) => group.id === refactoredData.groupId);
            if (!group?.id) {
                throw ErrorsConstants.GROUP_NOT_EXIST;
            }

            let image: string | undefined = undefined;

            if (!!refactoredData.image) {
                image = await FireStorageHelper.uploadFile(refactoredData.image, {
                    directory: "products",
                });
            } else {
                delete refactoredData.image
            }

            if (refactoredData.productType === "multi") {
                refactoredData.price = ""
            } else {
                refactoredData.sizes = []
            }

            await FireStoreHelper.update(
                FireStoreCollectionsConstants.PRODUCTS,
                productId,
                !!image ? { ...refactoredData, image: image || "" } : refactoredData,
                { isAuthGuard: true }
            );

            const product: IAdminProductsModel = {
                ...refactoredData,
                id: productId,
                image,
                branch,
                group,
                additions: productsState.data?.productAdditions,
                taxes: productsState.data?.productTaxes,
            };

            if (!image) {
                delete product.image
            }

            return product;
        });
    };

    static deleteProducts = (ProductsId: string) => {
        return AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.delete(
                FireStoreCollectionsConstants.PRODUCTS,
                ProductsId,
                { isAuthGuard: true }
            );
        });
    };
}
