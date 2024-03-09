import { FireStoreHelper } from 'src/common/firebaseHandler/helper/FireStoreHelper'
import { IAdminGroupInputs } from '../interfaces/AdminGroupsInterface'
import { FireStoreCollectionsConstants } from 'src/common/constants/FireStoreCollectionsConstants'
import { AsyncHelper } from 'src/common/DataHandler/helper/ServerDataHandlerHelper'

export class AdminGroupsRepo {
    static createGroup = async (data: IAdminGroupInputs): Promise<string> => {
        return await AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.add(
                FireStoreCollectionsConstants.GROUPS,
                data,
                { isAuthGuard: true }
            )
        })
    }

    static getGroups = async () => {
        return await AsyncHelper.createPromise(async () => {
            const groups = await FireStoreHelper.find(
                FireStoreCollectionsConstants.GROUPS,
                { isAuthGuard: true, orderBy: [{ field: 'createdAt', direction: 'desc' }] }
            )
            return groups
        })
    }

    static updateGroup = async (id: string, data: IAdminGroupInputs) => {
        return await AsyncHelper.createPromise(async () => {
            await FireStoreHelper.update(
                FireStoreCollectionsConstants.GROUPS,
                id,
                data,
                { isAuthGuard: true }
            )
        })
    }

    static deleteGroup = async (id: string) => {
        return await AsyncHelper.createPromise(async () => {
            await FireStoreHelper.delete(
                FireStoreCollectionsConstants.GROUPS,
                id,
                { isAuthGuard: true }
            )
        })
    }
}
