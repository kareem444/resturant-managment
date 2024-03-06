import { AsyncHelper } from "src/common/DataHandler/helper/ServerDataHandlerHelper"
import { FireStoreCollectionsConstants } from "src/common/constants/FireStoreCollectionsConstants"
import { FireStoreHelper } from "src/common/firebaseHandler/helper/FireStoreHelper"
import { IAdminMemberModel } from "src/app/admin/models/AdminMemberModel"

export class AdminMembersRepo {
    static createMember = (member: IAdminMemberModel) => {
        return AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.add(
                FireStoreCollectionsConstants.MEMBERS,
                member,
                { isAuthGuard: true }
            )
        })
    }

    static getMembers = () => {
        return AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.find(
                FireStoreCollectionsConstants.MEMBERS,
                { isAuthGuard: true, orderBy: [{ field: 'createdAt', direction: 'desc' }] }
            )
        })
    }

    static updateMember = (memberId: string, member: IAdminMemberModel) => {
        return AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.update(
                FireStoreCollectionsConstants.MEMBERS,
                memberId,
                member,
                { isAuthGuard: true }
            )
        })
    }

    static deleteMember = (memberId: string) => {
        return AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.delete(
                FireStoreCollectionsConstants.MEMBERS,
                memberId,
                { isAuthGuard: true }
            )
        })
    }
}