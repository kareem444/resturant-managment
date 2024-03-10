import { FireStoreHelper } from 'src/common/firebaseHandler/helper/FireStoreHelper'
import { IAdminBranchInputs } from '../interfaces/AdminBranchesInterface'
import { FireStoreCollectionsConstants } from 'src/common/constants/FireStoreCollectionsConstants'
import { AsyncHelper } from 'src/common/DataHandler/helper/ServerDataHandlerHelper'
import { IAdminBranchModel } from 'src/app/admin/models/AdminBranchModel'

export class AdminBranchesRepo {
    static createBranch = async (data: IAdminBranchInputs): Promise<string> => {
        return await AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.add(
                FireStoreCollectionsConstants.BRANCHES,
                data,
                { isAuthGuard: true }
            )
        })
    }

    static getBranches = async (): Promise<IAdminBranchModel[]> => {
        return await AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.find(
                FireStoreCollectionsConstants.BRANCHES,
                { isAuthGuard: true, orderBy: [{ field: 'createdAt', direction: 'desc' }] }
            )
        })
    }

    static updateBranch = async (id: string, data: IAdminBranchInputs) => {
        return await AsyncHelper.createPromise(async () => {
            await FireStoreHelper.update(
                FireStoreCollectionsConstants.BRANCHES,
                id,
                data,
                { isAuthGuard: true }
            )
        })
    }

    static deleteBranch = async (id: string) => {
        return await AsyncHelper.createPromise(async () => {
            await FireStoreHelper.delete(
                FireStoreCollectionsConstants.BRANCHES,
                id,
                { isAuthGuard: true }
            )
        })
    }
}
