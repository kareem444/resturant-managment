import { AsyncHelper } from "src/common/DataHandler/helper/ServerDataHandlerHelper";
import { FireStoreCollectionsConstants } from "src/common/constants/FireStoreCollectionsConstants";
import { FireStoreHelper } from "src/common/firebaseHandler/helper/FireStoreHelper";
import {
    IAdminComboOffersInputs,
    IAdminRefactoredComboOffersInputs,
    IComboOfferProduct,
} from "../interfaces/AdminComboOffersInterface";
import { IAdminProductsModel } from "src/app/admin/models/AdminProductsModel";
import { AdminProductsRepo } from "../../products/repo/AdminProductsRepo";
import { IAdminComboOffersModel } from "src/app/admin/models/AdminComboOffersModel";
import { AdminBranchesRepo } from "../../branches/repo/AdminBranchesRepo";
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel";
import { FireStorageHelper } from "src/common/firebaseHandler/helper/FireStorageHelper";

export class AdminComboOffersRepo {
    static createComboOffers = (
        data: IAdminComboOffersInputs,
        comboOffers: IComboOfferProduct[] | undefined,
        branches?: IAdminBranchModel[],
    ): Promise<IAdminComboOffersModel> => {
        return AsyncHelper.createPromise(async () => {
            const refactoredProducts = comboOffers?.map((el) => {
                return {
                    id: el.product?.id,
                    size: el.size || "",
                    price: el.price.toString(),
                };
            });

            const refactoredData: IAdminRefactoredComboOffersInputs = {
                ...data,
                products: refactoredProducts,
            };

            let image: string | undefined = undefined;

            if (!!refactoredData.image) {
                image = await FireStorageHelper.uploadFile(refactoredData.image, {
                    directory: "comboOffers",
                });
            }

            const id: string = await FireStoreHelper.add(
                FireStoreCollectionsConstants.COMBO_OFFERS,
                { ...refactoredData, image: image || "" },
                { isAuthGuard: true }
            );

            return {
                id,
                ...refactoredData,
                products: comboOffers,
                branch: branches?.find((branch) => branch.id === data.branchId),
                image,
            } as IAdminComboOffersModel;
        });
    };

    static getComboOffers = async (): Promise<IAdminComboOffersModel[]> => {
        return AsyncHelper.createPromise(async () => {
            const comboOffers:
                | (IAdminRefactoredComboOffersInputs & IAdminComboOffersModel)[]
                | undefined = await FireStoreHelper.find(
                    FireStoreCollectionsConstants.COMBO_OFFERS,
                    {
                        isAuthGuard: true,
                        orderBy: [{ field: "createdAt", direction: "desc" }],
                    }
                );

            const products: IAdminProductsModel[] = await AdminProductsRepo.getProducts();
            const branches: IAdminBranchModel[] = await AdminBranchesRepo.getBranches();

            const refactoredComboOffers = comboOffers?.map(
                (el: IAdminRefactoredComboOffersInputs & IAdminComboOffersModel) => {
                    const refactoredProducts = el.products?.map((product: any) => {
                        const productData = products.find((el) => el.id === product.id);

                        return {
                            product: productData,
                            size: product.size,
                            price: product.price,
                        };
                    });

                    return {
                        ...el,
                        products: refactoredProducts,
                        branch: branches.find((branch) => branch.id === el.branchId),
                    };
                }
            );

            return refactoredComboOffers as IAdminComboOffersModel[];
        });
    };

    static updateComboOffers = (
        ComboOfferId: string,
        data: IAdminComboOffersInputs,
        comboOffers: IComboOfferProduct[] | undefined,
        branches?: IAdminBranchModel[],
    ): Promise<IAdminComboOffersModel> => {
        return AsyncHelper.createPromise(async () => {
            const refactoredProducts = comboOffers?.map((el) => {
                return {
                    id: el.product?.id,
                    size: el.size || "",
                    price: el.price.toString(),
                };
            });

            const refactoredData: IAdminRefactoredComboOffersInputs = {
                ...data,
                products: refactoredProducts,
            };

            let image: string | undefined = undefined;

            if (!!refactoredData.image) {
                image = await FireStorageHelper.uploadFile(refactoredData.image, {
                    directory: "comboOffers",
                });
            }

            await FireStoreHelper.update(
                FireStoreCollectionsConstants.COMBO_OFFERS,
                ComboOfferId,
                { ...refactoredData, image: image || "" },
                { isAuthGuard: true }
            );

            return {
                id: ComboOfferId,
                ...data,
                products: comboOffers,
                branch: branches?.find((branch) => branch.id === data.branchId),
                image,
            } as IAdminComboOffersModel;
        });
    };

    static deleteComboOffers = (ComboOffersId: string) => {
        return AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.delete(
                FireStoreCollectionsConstants.COMBO_OFFERS,
                ComboOffersId,
                { isAuthGuard: true }
            );
        });
    };
}
