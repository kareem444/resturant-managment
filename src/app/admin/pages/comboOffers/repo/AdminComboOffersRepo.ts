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

export class AdminComboOffersRepo {
    static createComboOffers = (
        data: IAdminComboOffersInputs,
        comboOffers: IComboOfferProduct[] | undefined
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

            const id: string = await FireStoreHelper.add(
                FireStoreCollectionsConstants.COMBO_OFFERS,
                refactoredData,
                { isAuthGuard: true }
            );

            return {
                id,
                ...refactoredData,
                products: comboOffers,
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

            const products: IAdminProductsModel[] =
                await AdminProductsRepo.getProducts();

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
                    };
                }
            );

            return refactoredComboOffers as IAdminComboOffersModel[];
        });
    };

    static updateComboOffers = (
        ComboOfferId: string,
        data: IAdminComboOffersInputs,
        comboOffers: IComboOfferProduct[] | undefined
    ): Promise<IAdminComboOffersModel> => {
        return AsyncHelper.createPromise(async () => {
            const refactoredProducts = comboOffers?.map((el) => {
                return {
                    id: el.product?.id,
                    size: el.size || "",
                    price: el.price.toString(),
                };
            });

            await FireStoreHelper.update(
                FireStoreCollectionsConstants.COMBO_OFFERS,
                ComboOfferId,
                { ...data, products: refactoredProducts },
                { isAuthGuard: true }
            );

            return {
                id: ComboOfferId,
                ...data,
                products: comboOffers,
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
