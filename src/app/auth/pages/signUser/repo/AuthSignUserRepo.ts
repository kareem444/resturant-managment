import { AsyncHelper } from 'src/common/DataHandler/helper/ServerDataHandlerHelper'
import {
    APP_INFO_LOCAL_DB_COLLECTIONS,
    APP_INFO_LOCAL_DB_COLLECTIONS_IDS,
    AppInfoLocalDB
} from 'src/common/config/localDBConfig'
import {
    ILocalCurrentUserModel,
    ILocalOrganizationModel
} from '../../../models/local/AuthLocalModel'
import { HashHelper } from 'src/common/helper/EncryptHelper'
import { FireStoreHelper } from 'src/common/firebaseHandler/helper/FireStoreHelper'
import { FireStoreCollectionsConstants } from 'src/common/constants/FireStoreCollectionsConstants'
import { IAdminRoleModel } from 'src/app/admin/models/AdminRoleModel'
import { ErrorsConstants } from 'src/common/constants/ErrorsConstants'
import { FireAuthHelper } from 'src/common/firebaseHandler/helper/FireAuthHelper'
import { IAdminMemberInputs } from 'src/app/admin/pages/members/interfaces/AdminMembersInterface'
import { IAdminBranchModel } from 'src/app/admin/models/AdminBranchModel'

export class AuthSignUserRepo {
    static async signUser(password: string): Promise<ILocalCurrentUserModel> {
        return AsyncHelper.createPromise(async () => {
            const organization: ILocalOrganizationModel =
                await AppInfoLocalDB.getOneById(
                    APP_INFO_LOCAL_DB_COLLECTIONS.INFO,
                    APP_INFO_LOCAL_DB_COLLECTIONS_IDS.ORGANIZATION
                )

            if (!organization.ownerId) {
                throw ErrorsConstants.SOMETHING_WENT_WRONG
            }

            // check if the password is organization owner's password
            const isPasswordMatch: boolean = await HashHelper.compare(
                password,
                organization.temporaryPassword
            )

            // if the password is organization owner's password
            if (isPasswordMatch) {
                const localData: ILocalCurrentUserModel = {
                    id: APP_INFO_LOCAL_DB_COLLECTIONS_IDS.CURRENT_USER,
                    isOrganizationOwner: true,
                    name: organization.organizationName,
                    userId: organization.ownerId,
                    email: organization.email,
                    mobile: organization.mobile,
                }

                AppInfoLocalDB.add(APP_INFO_LOCAL_DB_COLLECTIONS.INFO, localData, true)
                return localData
            }

            // if the password is member's password
            const member: IAdminMemberInputs & { id: string } | undefined =
                await AsyncHelper.createPromise(() =>
                    FireStoreHelper.findOne(
                        FireStoreCollectionsConstants.MEMBERS,
                        {
                            where: { field: 'password', operator: '==', value: password }
                        }
                    )
                )

            if (!!member && member.roleId && member.branchId) {
                const role: IAdminRoleModel | undefined =
                    await AsyncHelper.createPromise(() =>
                        FireStoreHelper.findByDocId<IAdminRoleModel>(
                            FireStoreCollectionsConstants.ROLES,
                            member.roleId!
                        )
                    )

                const branch: IAdminBranchModel | undefined =
                    await AsyncHelper.createPromise(() =>
                        FireStoreHelper.findByDocId<IAdminBranchModel>(
                            FireStoreCollectionsConstants.BRANCHES,
                            member.branchId!
                        )
                    )

                if (!role) {
                    throw ErrorsConstants.ROLES_NOT_EXIST
                }

                if (!branch) {
                    throw ErrorsConstants.BRANCH_NOT_EXIST
                }

                const localData: ILocalCurrentUserModel = {
                    id: APP_INFO_LOCAL_DB_COLLECTIONS_IDS.CURRENT_USER,
                    isOrganizationOwner: false,
                    name: member.name,
                    userId: member.id,
                    email: member.email,
                    mobile: member.mobile,
                    permissions: role.permissions,
                    branch: {
                        id: branch.id!,
                        name: branch.name
                    },
                    roleType: role.role,
                }

                AppInfoLocalDB.add(APP_INFO_LOCAL_DB_COLLECTIONS.INFO, localData, true)
                return localData
            }

            throw ErrorsConstants.INCORRECT_PASSWORD
        })
    }

    static getOrganization(): Promise<ILocalOrganizationModel | undefined> {
        return AsyncHelper.createPromise(async () => {
            return await FireAuthHelper.getOrganizationLocalData()
        })
    }
}
