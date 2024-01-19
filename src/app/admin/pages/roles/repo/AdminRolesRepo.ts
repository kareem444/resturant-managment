import { IAdminRoleModel } from 'src/app/admin/models/AdminRoleModel'
import { AsyncHelper } from 'src/common/DataHandler/helper/ServerDataHandlerHelper'
import { FireStoreCollectionsConstants } from 'src/common/constants/FireStoreCollectionsConstants'
import { FireAuthHelper } from 'src/common/firebaseHandler/helper/FireAuthHelper'
import { FireStoreHelper } from 'src/common/firebaseHandler/helper/FireStoreHelper'

export class AdminRolesRepo {
    static async addRole(data: IAdminRoleModel) {
        return AsyncHelper.createPromise(async () => {
            const currentUser = await FireAuthHelper.getCurrentUser()
            return await FireStoreHelper.add(
                FireStoreCollectionsConstants.ROLES(currentUser.userId),
                data,
                { isAuthGuard: true }
            )
        })
    }

    static async getRoles() {
        return AsyncHelper.createPromise(async () => {
            const currentUser = await FireAuthHelper.getCurrentUser()
            return await FireStoreHelper.find(
                FireStoreCollectionsConstants.ROLES(currentUser.userId),
                { isAuthGuard: true, orderBy: [{ field: 'createdAt', direction: 'desc' }] }
            )
        })
    }

    static async deleteRole(id: string) {
        return AsyncHelper.createPromise(async () => {
            const currentUser = await FireAuthHelper.getCurrentUser()
            return await FireStoreHelper.delete(
                FireStoreCollectionsConstants.ROLES(currentUser.userId),
                id,
                { isAuthGuard: true }
            )
        })
    }
}
