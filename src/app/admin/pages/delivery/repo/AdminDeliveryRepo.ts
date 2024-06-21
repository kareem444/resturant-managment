import { AsyncHelper } from "src/common/DataHandler/helper/ServerDataHandlerHelper";
import { FireStoreCollectionsConstants } from "src/common/constants/FireStoreCollectionsConstants";
import { FireStoreHelper } from "src/common/firebaseHandler/helper/FireStoreHelper";
import { IAdminDeliveryInputs } from "../interfaces/AdminDeliveryInterface";
import { AdminBranchesRepo } from "../../branches/repo/AdminBranchesRepo";
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel";
import { ErrorsConstants } from "src/common/constants/ErrorsConstants";
import { IAdminDeliveryModel } from "src/app/admin/models/AdminDeliveryModel";
import { FireStorageHelper } from "src/common/firebaseHandler/helper/FireStorageHelper";

export class AdminDeliveryRepo {
    static createDelivery = (
        delivery: IAdminDeliveryInputs
    ): Promise<IAdminDeliveryModel> => {
        return AsyncHelper.createPromise(async () => {
            const branches: IAdminBranchModel[] =
                await AdminBranchesRepo.getBranches();
            const branch = branches?.find(
                (branch) => branch.id === delivery.branchId
            );

            if (!branch) {
                throw ErrorsConstants.BRANCH_NOT_EXIST;
            }

            let image: string | undefined = undefined;

            if (!!delivery.image) {
                image = await FireStorageHelper.uploadFile(delivery.image, {
                    directory: "delivery",
                });
            }

            const id: string = await FireStoreHelper.add(
                FireStoreCollectionsConstants.DELIVERY,
                { ...delivery, image: image || "" },
                { isAuthGuard: true }
            );

            return {
                ...delivery,
                id,
                image,
                branch,
            };
        });
    };

    static getDelivery = async (): Promise<IAdminDeliveryModel[]> => {
        return AsyncHelper.createPromise(async () => {
            const delivery:
                | (IAdminDeliveryInputs & IAdminDeliveryModel)[]
                | undefined = await FireStoreHelper.find(
                    FireStoreCollectionsConstants.DELIVERY,
                    {
                        isAuthGuard: true,
                        orderBy: [{ field: "createdAt", direction: "desc" }],
                    }
                );
            const branches: IAdminBranchModel[] =
                await AdminBranchesRepo.getBranches();

            const refactorDelivery = delivery?.map((el) => {
                if (!!el.branchId) {
                    const branch = branches?.find((branch) => branch.id === el.branchId);
                    el.branch = branch;
                }

                delete el.branchId;
                return el;
            });

            return refactorDelivery as IAdminDeliveryModel[];
        });
    };

    static updateDelivery = (
        deliveryId: string,
        delivery: IAdminDeliveryInputs
    ): Promise<IAdminDeliveryModel> => {
        return AsyncHelper.createPromise(async () => {
            const branches: IAdminBranchModel[] =
                await AdminBranchesRepo.getBranches();
            const branch = branches?.find(
                (branch) => branch.id === delivery.branchId
            );

            if (!branch) {
                throw ErrorsConstants.BRANCH_NOT_EXIST;
            }

            let image: string | undefined = undefined;

            if (!!delivery.image) {
                image = await FireStorageHelper.uploadFile(delivery.image, {
                    directory: "delivery",
                });
            }

            const refactoredDelivery: IAdminDeliveryModel | IAdminDeliveryInputs = {
                name: delivery.name,
                mobile: delivery.mobile,
            };

            if (image) {
                refactoredDelivery.image = image;
            }

            await FireStoreHelper.update(
                FireStoreCollectionsConstants.DELIVERY,
                deliveryId,
                { ...refactoredDelivery, branchId: delivery.branchId },
                { isAuthGuard: true }
            );

            return {
                ...refactoredDelivery,
                branch,
            } as IAdminDeliveryModel;
        });
    };

    static deleteDelivery = (deliveryId: string) => {
        return AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.delete(
                FireStoreCollectionsConstants.DELIVERY,
                deliveryId,
                { isAuthGuard: true }
            );
        });
    };
}
