import { AsyncHelper } from "src/common/DataHandler/helper/ServerDataHandlerHelper"
import { FireStoreCollectionsConstants } from "src/common/constants/FireStoreCollectionsConstants"
import { FireAuthHelper } from "src/common/firebaseHandler/helper/FireAuthHelper"
import { FireStoreHelper } from "src/common/firebaseHandler/helper/FireStoreHelper"
import { IAdminMemberModel } from "src/app/admin/models/AdminMemberModel"

export class AdminMembersRepo {
    static createMember = (member: IAdminMemberModel) => {
        return AsyncHelper.createPromise(async () => {
            const currentUser = await FireAuthHelper.getCurrentUser()
            return await FireStoreHelper.add(
                FireStoreCollectionsConstants.MEMBERS(currentUser.userId),
                member,
                { isAuthGuard: true }
            )
        })
    }

    static getMembers = () => {
        return AsyncHelper.createPromise(async () => {
            const currentUser = await FireAuthHelper.getCurrentUser()
            return await FireStoreHelper.find(
                FireStoreCollectionsConstants.MEMBERS(currentUser.userId),
                { isAuthGuard: true, orderBy: [{ field: 'createdAt', direction: 'desc' }] }
            )
        })
    }

    static updateMember = (memberId: string, member: IAdminMemberModel) => {
        return AsyncHelper.createPromise(async () => {
            const currentUser = await FireAuthHelper.getCurrentUser()
            return await FireStoreHelper.update(
                FireStoreCollectionsConstants.MEMBERS(currentUser.userId),
                memberId,
                member,
                { isAuthGuard: true }
            )
        })
    }

    static deleteMember = (memberId: string) => {
        return AsyncHelper.createPromise(async () => {
            const currentUser = await FireAuthHelper.getCurrentUser()
            return await FireStoreHelper.delete(
                FireStoreCollectionsConstants.MEMBERS(currentUser.userId),
                memberId,
                { isAuthGuard: true }
            )
        })
    }
}