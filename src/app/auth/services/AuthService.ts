import { AsyncHelper } from "src/common/DataHandler/helper/ServerDataHandlerHelper";
import {
    APP_INFO_LOCAL_DB_COLLECTIONS,
    APP_INFO_LOCAL_DB_COLLECTIONS_IDS,
    AppInfoLocalDB,
} from "src/common/config/localDBConfig";
import {
    ILocalCurrentUserModel,
    ILocalOrganizationModel,
} from "../models/local/AuthLocalModel";
import { HashHelper } from "src/common/helper/EncryptHelper";
import { FireStoreHelper } from "src/common/firebaseHandler/helper/FireStoreHelper";
import { FireStoreCollectionsConstants } from "src/common/constants/FireStoreCollectionsConstants";
import { IAdminMemberModel } from "src/app/admin/models/AdminMemberModel";
import { IAdminRoleModel } from "src/app/admin/models/AdminRoleModel";

export class AuthService {
    static async signUser(password: string) {
        return AsyncHelper.createPromise(async () => {
            const organization: ILocalOrganizationModel =
                await AppInfoLocalDB.getOneById(
                    APP_INFO_LOCAL_DB_COLLECTIONS.INFO,
                    APP_INFO_LOCAL_DB_COLLECTIONS_IDS.ORGANIZATION
                );

            if (!organization.organization_id) {
                throw new Error("Something went wrong");
            }

            const isPasswordMatch: boolean = await HashHelper.compare(
                password,
                organization.temporaryPassword
            );

            if (isPasswordMatch) {
                const localData: ILocalCurrentUserModel = {
                    id: APP_INFO_LOCAL_DB_COLLECTIONS_IDS.CURRENT_USER,
                    is_organization_owner: true,
                    name: organization.organization_name,
                    user_id: organization.organization_id,
                    email: organization.email,
                    mobile: organization.mobile,
                };

                AppInfoLocalDB.add(APP_INFO_LOCAL_DB_COLLECTIONS.INFO, localData, true);
                return;
            }

            const member: IAdminMemberModel | undefined = await AsyncHelper.createPromise(() =>
                FireStoreHelper.findOne<IAdminMemberModel>(
                    FireStoreCollectionsConstants.MEMBERS(organization.organization_id),
                    {
                        where: { field: "password", operator: "==", value: password },
                    }
                )
            );

            if (!!member) {
                const role: IAdminRoleModel | undefined = await AsyncHelper.createPromise(() =>
                    FireStoreHelper.findByDocId<IAdminRoleModel>(
                        FireStoreCollectionsConstants.ROLES(organization.organization_id),
                        member.role.id
                    )
                );

                if (!role) {
                    throw new Error("Something went wrong");
                }

                const localData: ILocalCurrentUserModel = {
                    id: APP_INFO_LOCAL_DB_COLLECTIONS_IDS.CURRENT_USER,
                    is_organization_owner: false,
                    name: member.name,
                    user_id: member.id,
                    email: member.email,
                    mobile: member.mobile,
                    permissions: role.permissions,
                    branch: member.branch,
                };

                AppInfoLocalDB.add(APP_INFO_LOCAL_DB_COLLECTIONS.INFO, localData, true);
                return;
            }

            throw {
                message: "Incorrect password",
                code: "INCORRECT_PASSWORD",
            };
        });
    }
}
