import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel";
import { IAdminDeliveryModel } from "src/app/admin/models/AdminDeliveryModel";
import { IAdminDeliveryInputs } from "src/app/admin/pages/delivery/interfaces/AdminDeliveryInterface";
import { AsyncHelper } from "src/common/DataHandler/helper/ServerDataHandlerHelper";
import { FireStoreCollectionsConstants } from "src/common/constants/FireStoreCollectionsConstants";
import { FireStoreHelper } from "src/common/firebaseHandler/helper/FireStoreHelper";

export class PosFirebaseDeliveryRepo {
    static async getDeliveries(
        branches: IAdminBranchModel[],
        branchId?: string,
    ): Promise<IAdminDeliveryModel[] | undefined> {
        return AsyncHelper.createPromise(async () => {
            const delivery: (IAdminDeliveryInputs & IAdminDeliveryModel)[] | undefined = await FireStoreHelper.find(
                FireStoreCollectionsConstants.DELIVERY,
                {
                    isAuthGuard: true,
                    where: branchId ? { field: "branchId", operator: "==", value: branchId } : undefined,
                },
            );

            return delivery?.map((delivery) => {
                const branch = branches.find((branch) => branch.id === delivery.branchId);
                delete delivery.branchId;

                return {
                    ...delivery,
                    branch,
                };
            });
        });
    }
}