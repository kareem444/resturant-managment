import { AsyncHelper } from "src/common/DataHandler/helper/ServerDataHandlerHelper";
import { FireStoreHelper } from "src/common/firebaseHandler/helper/FireStoreHelper";
import { IRegisterInputs } from "../pages/register/interfaces/AuthRegisterInterface";
import { FireStoreCollectionsConstants } from "src/common/constants/FireStoreCollectionsConstants";
import { FireAuthHelper } from "src/common/firebaseHandler/helper/FireAuthHelper";
import {
    APP_INFO_LOCAL_DB_COLLECTIONS,
    APP_INFO_LOCAL_DB_COLLECTIONS_IDS,
    AppInfoLocalDB,
} from "src/common/config/localDBConfig";
import {
    IApiRequestTrailModel,
    IApiUserModel,
} from "../models/api/AuthApiModel";
import { ILocalOrganizationModel } from "../models/local/AuthLocalModel";
import { HashHelper } from "src/common/helper/EncryptHelper";
import { FireBaseConfig } from "src/common/config/firebase";
import { ErrorsConstants } from "src/common/constants/ErrorsConstants";
import { initDynamicDB } from "src/common/init/FirebaseDynamicDbInit";

export class AuthRepo {
    private static checkRequestTrailExist(data: {
        mobile?: string;
        email?: string;
    }) {
        return FireStoreHelper.findOne<IApiRequestTrailModel>(
            FireStoreCollectionsConstants.REQUEST_TRAIL,
            {
                mixedWhere: {
                    condition: "or",
                    where: [
                        { field: "mobile", operator: "==", value: data.mobile ?? "" },
                        { field: "email", operator: "==", value: data.email ?? "" },
                    ],
                },
                DB: FireBaseConfig.defaultDB,
            }
        );
    }

    private static checkUserExist(data: { mobile?: string; email?: string }) {
        return FireStoreHelper.findOne<IApiUserModel>(
            FireStoreCollectionsConstants.USERS,
            {
                mixedWhere: {
                    condition: "or",
                    where: [
                        { field: "mobile", operator: "==", value: data.mobile ?? "" },
                        { field: "email", operator: "==", value: data.email ?? "" },
                    ],
                },
                DB: FireBaseConfig.defaultDB,
            }
        );
    }

    static async requestTrail(data: IRegisterInputs) {
        return AsyncHelper.createPromise(async () => {
            const checkIfRequestExist = await this.checkRequestTrailExist(data);
            if (!!checkIfRequestExist) {
                throw ErrorsConstants.REQUEST_ALREADY_EXIST;
            }

            const checkIfExist = await this.checkUserExist(data);
            if (!!checkIfExist) {
                throw ErrorsConstants.USER_ALREADY_EXIST;
            }

            return FireStoreHelper.add(
                FireStoreCollectionsConstants.REQUEST_TRAIL,
                data,
                {
                    DB: FireBaseConfig.defaultDB,
                }
            );
        });
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
                        condition: "and",
                        where: [
                            { field: "mobile", operator: "==", value: mobile },
                            { field: "organizationCode", operator: "==", value: organizationCode },
                        ],
                    },
                    DB: FireBaseConfig.defaultDB,
                }
            );

            if (!user) {
                throw ErrorsConstants.USER_NOT_FOUND;
            }

            const handelAddLocalData = async () => {
                const hashedRandomPassword = await HashHelper.hash(
                    process.env.REACT_APP_DEFAULT_TEMPORARY_PASSWORD!
                );
                const localData: ILocalOrganizationModel = {
                    id: APP_INFO_LOCAL_DB_COLLECTIONS_IDS.ORGANIZATION,
                    email: user.email,
                    organizationCode: organizationCode,
                    organizationName: user.organizationName,
                    ownerName: user.name,
                    ownerId: user.id,
                    mobile: mobile,
                    projectCredentials: user.projectCredentials,
                    temporaryPassword: user.temporaryPassword ?? hashedRandomPassword,
                };
                await initDynamicDB(localData.projectCredentials);
                AppInfoLocalDB.add(APP_INFO_LOCAL_DB_COLLECTIONS.INFO, localData, true);
            };

            await FireAuthHelper.signIn(user.email, password);
            await handelAddLocalData();
        });
    }

    static async signOut() {
        AppInfoLocalDB.deleteById(
            APP_INFO_LOCAL_DB_COLLECTIONS.INFO,
            APP_INFO_LOCAL_DB_COLLECTIONS_IDS.ORGANIZATION
        );
        return await FireAuthHelper.signOut();
    }

    static async forgetPassword(mobile: string) {
        const user = await this.checkUserExist({ mobile });

        if (!user) {
            throw ErrorsConstants.USER_NOT_FOUND;
        }

        if (!user.forgetPassword) {
            await FireStoreHelper.update(
                FireStoreCollectionsConstants.USERS,
                user.id,
                {
                    forgetPassword: true,
                },
                {
                    DB: FireBaseConfig.defaultDB,
                }
            );
        }
    }
}
