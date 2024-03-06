import { IAdminRoleModel } from 'src/app/admin/models/AdminRoleModel'
import { AsyncHelper } from 'src/common/DataHandler/helper/ServerDataHandlerHelper'
import { FireStoreCollectionsConstants } from 'src/common/constants/FireStoreCollectionsConstants'
import { FireStoreHelper } from 'src/common/firebaseHandler/helper/FireStoreHelper'

export class AdminRolesRepo {
    static async addRole(data: IAdminRoleModel) {
        return AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.add(
                FireStoreCollectionsConstants.ROLES,
                data,
                { isAuthGuard: true }
            )
        })
    }

    static async getRoles() {
        return AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.find(
                FireStoreCollectionsConstants.ROLES,
                { isAuthGuard: true, orderBy: [{ field: 'createdAt', direction: 'desc' }] }
            )
        })
    }

    static async deleteRole(id: string) {
        return AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.delete(
                FireStoreCollectionsConstants.ROLES,
                id,
                { isAuthGuard: true }
            )
        })
    }
}
