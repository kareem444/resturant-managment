import { FireStoreHelper } from 'src/common/firebaseHandler/helper/FireStoreHelper'
import { IAdminBranchInputs } from '../interfaces/AdminBranchesInterface'
import { FireStoreCollectionsConstants } from 'src/common/constants/FireStoreCollectionsConstants'
import { AsyncHelper } from 'src/common/DataHandler/helper/ServerDataHandlerHelper'
import { FireAuthHelper } from 'src/common/firebaseHandler/helper/FireAuthHelper'

export class AdminBranchesRepo {
    static createBranch = async (data: IAdminBranchInputs): Promise<string> => {
        return await AsyncHelper.createPromise(async () => {
            const currentUser = await FireAuthHelper.getCurrentUser()
            return await FireStoreHelper.add(
                FireStoreCollectionsConstants.BRANCHES(currentUser.userId),
                data,
                { isAuthGuard: true }
            )
        })
    }

    static getBranches = async () => {
        return await AsyncHelper.createPromise(async () => {
            const currentUser = await FireAuthHelper.getCurrentUser()
            const branches = await FireStoreHelper.find(
                FireStoreCollectionsConstants.BRANCHES(currentUser.userId),
                { isAuthGuard: true, orderBy: [{ field: 'createdAt', direction: 'desc' }] }
            )
            return branches
        })
    }

    static updateBranch = async (id: string, data: IAdminBranchInputs) => {
        return await AsyncHelper.createPromise(async () => {
            const currentUser = await FireAuthHelper.getCurrentUser()
            await FireStoreHelper.update(
                FireStoreCollectionsConstants.BRANCHES(currentUser.userId),
                id,
                data,
                { isAuthGuard: true }
            )
        })
    }

    static deleteBranch = async (id: string) => {
        return await AsyncHelper.createPromise(async () => {
            const currentUser = await FireAuthHelper.getCurrentUser()
            await FireStoreHelper.delete(
                FireStoreCollectionsConstants.BRANCHES(currentUser.userId),
                id,
                { isAuthGuard: true }
            )
        })
    }
}
