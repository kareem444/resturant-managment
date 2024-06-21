import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel";
import { IAdminTableModel } from "src/app/admin/models/AdminTableModel";
import { IAdminTableInputs } from "src/app/admin/pages/tables/interfaces/AdminTablesInterface";
import { AsyncHelper } from "src/common/DataHandler/helper/ServerDataHandlerHelper";
import { FireStoreCollectionsConstants } from "src/common/constants/FireStoreCollectionsConstants";
import { FireStoreHelper } from "src/common/firebaseHandler/helper/FireStoreHelper";

export class PosFirebaseTableRepo {
    static async getTables(
        branches: IAdminBranchModel[],
        branchId?: string,
    ): Promise<IAdminTableModel[] | undefined> {
        return AsyncHelper.createPromise(async () => {
            const tables: (IAdminTableInputs & IAdminTableModel)[] | undefined =
                await FireStoreHelper.find(FireStoreCollectionsConstants.TABLES, {
                    isAuthGuard: true,
                    where: branchId ? { field: "branchId", operator: "==", value: branchId } : undefined,
                });

            return tables?.map((table) => {
                const branch = branches.find((branch) => branch.id === table.branchId);
                delete table.branchId;

                return {
                    ...table,
                    branch,
                };
            });
        });
    }
}