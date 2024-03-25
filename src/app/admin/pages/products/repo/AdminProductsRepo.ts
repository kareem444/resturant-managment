import { AsyncHelper } from "src/common/DataHandler/helper/ServerDataHandlerHelper"
import { FireStoreCollectionsConstants } from "src/common/constants/FireStoreCollectionsConstants"
import { FireStoreHelper } from "src/common/firebaseHandler/helper/FireStoreHelper"
import { IAdminProductsInputs } from "../interfaces/AdminProductsInterface"
import { AdminBranchesRepo } from "../../branches/repo/AdminBranchesRepo"
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel"
import { ErrorsConstants } from "src/common/constants/ErrorsConstants"
import { IAdminProductsModel } from "src/app/admin/models/AdminProductsModel"
import { FireStorageHelper } from "src/common/firebaseHandler/helper/FireStorageHelper"

export class AdminProductsRepo {
    static createProducts = (Products: IAdminProductsInputs): Promise<IAdminProductsModel> => {
        return AsyncHelper.createPromise(async () => {
            const branches: IAdminBranchModel[] = await AdminBranchesRepo.getBranches();
            const branch = branches?.find(branch => branch.id === Products.branchId);

            if (!branch) {
                throw ErrorsConstants.BRANCH_NOT_EXIST;
            }

            let image: string | undefined = undefined;

            if (!!Products.image) {
                image = await FireStorageHelper.uploadFile(Products.image, { directory: 'products' })
            }

            const id: string = await FireStoreHelper.add(
                FireStoreCollectionsConstants.PRODUCTS,
                { ...Products, image: image || '' },
                { isAuthGuard: true }
            )

            return {
                ...Products,
                id,
                image,
                branch: {
                    id: branch?.id as string,
                    name: branch?.name as string
                }
            }
        })
    }

    static getProducts = async (): Promise<IAdminProductsModel[] | undefined> => {
        return AsyncHelper.createPromise(async () => {
            const Products: (IAdminProductsInputs & IAdminProductsModel)[] | undefined = await FireStoreHelper.find(
                FireStoreCollectionsConstants.PRODUCTS,
                { isAuthGuard: true, orderBy: [{ field: 'createdAt', direction: 'desc' }] }
            )
            const branches: IAdminBranchModel[] = await AdminBranchesRepo.getBranches();

            const refactorProducts = Products?.map(el => {
                if (!!el.branchId) {
                    const branch = branches?.find(branch => branch.id === el.branchId);

                    if (branch) {
                        el.branch = {
                            id: branch?.id as string,
                            name: branch?.name as string
                        };
                    }
                }

                delete el.branchId;
                return el
            })

            return refactorProducts as IAdminProductsModel[]
        })
    }

    static updateProducts = (ProductsId: string, Products: IAdminProductsInputs): Promise<IAdminProductsModel> => {
        return AsyncHelper.createPromise(async () => {
            const branches: IAdminBranchModel[] = await AdminBranchesRepo.getBranches();
            const branch = branches?.find(branch => branch.id === Products.branchId);

            if (!branch) {
                throw ErrorsConstants.BRANCH_NOT_EXIST;
            }

            let image: string | undefined = undefined;

            if (!!Products.image) {
                image = await FireStorageHelper.uploadFile(Products.image, { directory: 'products' })
            }

            const refactoredProducts: IAdminProductsModel | IAdminProductsInputs = {
                name: Products.name,
                mobile: Products.mobile,
            }

            if (image) {
                refactoredProducts.image = image;
            }

            await FireStoreHelper.update(
                FireStoreCollectionsConstants.PRODUCTS,
                ProductsId,
                {...refactoredProducts, branchId: Products.branchId},
                { isAuthGuard: true }
            )

            return {
                ...refactoredProducts,
                branch: {
                    id: branch?.id as string,
                    name: branch?.name as string
                }
            } as IAdminProductsModel
        })
    }

    static deleteProducts = (ProductsId: string) => {
        return AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.delete(
                FireStoreCollectionsConstants.PRODUCTS,
                ProductsId,
                { isAuthGuard: true }
            )
        })
    }
}