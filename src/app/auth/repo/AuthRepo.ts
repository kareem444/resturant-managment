import { AsyncHelper } from 'src/common/DataHandler/helper/ServerDataHandlerHelper'
import { FireStoreHelper } from 'src/common/firebaseHandler/helper/FireStoreHelper'
import { IRegisterInputs } from '../pages/register/interfaces/AuthRegisterInterface'
import { FireStoreCollectionsConstants } from 'src/common/constants/FireStoreCollectionsConstants'
import { FireAuthHelper } from 'src/common/firebaseHandler/helper/FireAuthHelper'
import {
    APP_INFO_LOCAL_DB_COLLECTIONS,
    APP_INFO_LOCAL_DB_COLLECTIONS_IDS,
    AppInfoLocalDB
} from 'src/common/config/localDBConfig'
import {
    IApiRequestTrailModel,
    IApiUserModel
} from '../models/api/AuthApiModel'
import { ILocalOrganizationModel } from '../models/local/AuthLocalModel'
import { HashHelper } from 'src/common/helper/EncryptHelper'

export class AuthRepo {
    private static checkRequestTrailExist(data: {
        mobile?: string
        email?: string
    }) {
        return FireStoreHelper.findOne<IApiRequestTrailModel>(
            FireStoreCollectionsConstants.REQUEST_TRAIL,
            {
                mixedWhere: {
                    condition: 'or',
                    where: [
                        { field: 'mobile', operator: '==', value: data.mobile ?? '' },
                        { field: 'email', operator: '==', value: data.email ?? '' }
                    ]
                }
            }
        )
    }

    private static checkUserExist(data: { mobile?: string; email?: string }) {
        return FireStoreHelper.findOne<IApiUserModel>(
            FireStoreCollectionsConstants.USERS,
            {
                mixedWhere: {
                    condition: 'or',
                    where: [
                        { field: 'mobile', operator: '==', value: data.mobile ?? '' },
                        { field: 'email', operator: '==', value: data.email ?? '' }
                    ]
                }
            }
        )
    }

    static async requestTrail(data: IRegisterInputs) {
        return AsyncHelper.createPromise(async () => {
            const checkIfRequestExist = await this.checkRequestTrailExist(data)
            if (!!checkIfRequestExist) {
                throw {
                    code: 'BAD_REQUEST',
                    message: 'This request is already exist'
                }
            }

            const checkIfExist = await this.checkUserExist(data)
            if (!!checkIfExist) {
                throw {
                    code: 'BAD_REQUEST',
                    message: 'This User already exist'
                }
            }

            return FireStoreHelper.add(
                FireStoreCollectionsConstants.REQUEST_TRAIL,
                data
            )
        })
    }

    static async login(
        organizationCode: string,
        mobile: string,
        password: string
    ) {
        return AsyncHelper.createPromise(async () => {
            const user = await FireStoreHelper.findOne<IApiUserModel>(
                FireStoreCollectionsConstants.USERS,
                {
                    mixedWhere: {
                        condition: 'and',
                        where: [
                            { field: 'mobile', operator: '==', value: mobile },
                            {
                                field: 'organizationCode',
                                operator: '==',
                                value: organizationCode
                            }
                        ]
                    }
                }
            )

            if (!user || (!user.isRegistered && user.password !== password)) {
                throw {
                    code: 'USER_NOT_FOUND',
                    message: 'User not found',
                    status: 400
                }
            }

            const handelAddLocalData = async (userId?: string) => {
                const hashedRandomPassword = await HashHelper.hash(
                    process.env.REACT_APP_DEFAULT_TEMPORARY_PASSWORD!
                )
                const localData: ILocalOrganizationModel = {
                    id: APP_INFO_LOCAL_DB_COLLECTIONS_IDS.ORGANIZATION,
                    email: user.email,
                    organizationCode: organizationCode,
                    organizationName: user.organizationName,
                    owner_name: user.name,
                    organization_id: userId ?? user.id,
                    mobile: mobile,
                    organization_name: user.name,
                    temporaryPassword: user.temporaryPassword ?? hashedRandomPassword
                }
                AppInfoLocalDB.add(APP_INFO_LOCAL_DB_COLLECTIONS.INFO, localData, true)
            }

            if (!user.isRegistered) {
                const userCredentials = await FireAuthHelper.signUp(
                    user.email,
                    password
                )
                await FireStoreHelper.delete(
                    FireStoreCollectionsConstants.USERS,
                    user.id
                )
                const setData: IApiUserModel = {
                    ...user,
                    id: userCredentials.uid,
                    isRegistered: true
                }
                await FireStoreHelper.set(
                    FireStoreCollectionsConstants.USERS_PRIVATE_DATA,
                    userCredentials.uid,
                    { password: setData.password }
                )
                delete setData.password
                delete setData.createdAt
                delete setData.updatedAt
                await FireStoreHelper.set(
                    FireStoreCollectionsConstants.USERS,
                    userCredentials.uid,
                    setData,
                    {
                        override: true
                    }
                )
                await handelAddLocalData(userCredentials.uid)
                return { ...user, id: userCredentials.uid, isRegistered: true }
            }

            await FireAuthHelper.signIn(user.email, password)
            await handelAddLocalData()
            return user
        })
    }

    static async signOut() {
        AppInfoLocalDB.deleteById(
            APP_INFO_LOCAL_DB_COLLECTIONS.INFO,
            APP_INFO_LOCAL_DB_COLLECTIONS_IDS.ORGANIZATION
        )
        return await FireAuthHelper.signOut()
    }

    static async forgetPassword(mobile: string) {
        const user = await this.checkUserExist({ mobile })

        if (!user) {
            throw {
                code: 'USER_NOT_FOUND',
                message: 'User not found',
                status: 400
            }
        }

        if (!user.forgetPassword) {
            await FireStoreHelper.update(
                FireStoreCollectionsConstants.USERS,
                user.id,
                {
                    forgetPassword: true
                }
            )
        }
    }
}
