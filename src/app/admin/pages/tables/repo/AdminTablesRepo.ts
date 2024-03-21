import { AsyncHelper } from "src/common/DataHandler/helper/ServerDataHandlerHelper"
import { FireStoreCollectionsConstants } from "src/common/constants/FireStoreCollectionsConstants"
import { FireStoreHelper } from "src/common/firebaseHandler/helper/FireStoreHelper"
import { IAdminTableInputs } from "../interfaces/AdminTablesInterface"
import { AdminBranchesRepo } from "../../branches/repo/AdminBranchesRepo"
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel"
import { ErrorsConstants } from "src/common/constants/ErrorsConstants"
import { IAdminTableModel } from "src/app/admin/models/AdminTableModel"

export class AdminTablesRepo {
    static createTable = (Table: IAdminTableInputs): Promise<IAdminTableModel> => {
        return AsyncHelper.createPromise(async () => {
            const branches: IAdminBranchModel[] = await AdminBranchesRepo.getBranches();
            const branch = branches?.find(branch => branch.id === Table.branchId);

            if (!branch) {
                throw ErrorsConstants.BRANCH_NOT_EXIST;
            }

            const id: string = await FireStoreHelper.add(
                FireStoreCollectionsConstants.TABLES,
                Table,
                { isAuthGuard: true }
            )

            return {
                ...Table,
                id,
                branch: {
                    id: branch?.id as string,
                    name: branch?.name as string
                }
            }
        })
    }

    static getTables = async (): Promise<IAdminTableModel[] | undefined> => {
        return AsyncHelper.createPromise(async () => {
            const Tables: (IAdminTableInputs & IAdminTableModel)[] | undefined = await FireStoreHelper.find(
                FireStoreCollectionsConstants.TABLES,
                { isAuthGuard: true, orderBy: [{ field: 'createdAt', direction: 'desc' }] }
            )
            const branches: IAdminBranchModel[] = await AdminBranchesRepo.getBranches();

            const refactorTables = Tables?.map(Table => {
                if (!!Table.branchId) {
                    const branch = branches?.find(branch => branch.id === Table.branchId);

                    if (branch) {
                        Table.branch = {
                            id: branch?.id as string,
                            name: branch?.name as string
                        };
                    }

                    delete Table.branchId;
                }

                return Table
            })

            return refactorTables as IAdminTableModel[]
        })
    }

    static updateTable = (TableId: string, Table: IAdminTableInputs): Promise<IAdminTableModel> => {
        return AsyncHelper.createPromise(async () => {
            const branches: IAdminBranchModel[] = await AdminBranchesRepo.getBranches();
            const branch = branches?.find(branch => branch.id === Table.branchId);

            if (!branch) {
                throw ErrorsConstants.BRANCH_NOT_EXIST;
            }

            await FireStoreHelper.update(
                FireStoreCollectionsConstants.TABLES,
                TableId,
                Table,
                { isAuthGuard: true }
            )

            return {
                ...Table,
                branch: {
                    id: branch?.id as string,
                    name: branch?.name as string
                },
            }
        })
    }

    static deleteTable = (TableId: string) => {
        return AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.delete(
                FireStoreCollectionsConstants.TABLES,
                TableId,
                { isAuthGuard: true }
            )
        })
    }
}