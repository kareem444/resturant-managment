import { FirebaseOptions } from "firebase/app";
import { ILocalOrganizationModel } from "src/app/auth/models/local/AuthLocalModel";
import {
    APP_INFO_LOCAL_DB_COLLECTIONS,
    APP_INFO_LOCAL_DB_COLLECTIONS_IDS,
    AppInfoLocalDB,
} from "../config/localDBConfig";
import { FireBaseConfig } from "../config/firebase";
import { FireStoreHelper } from "../firebaseHandler/helper/FireStoreHelper";

export const initDynamicDB = async (credentials?: FirebaseOptions) => {
    let org: ILocalOrganizationModel | undefined;

    if (!credentials) {
        org = await AppInfoLocalDB.getOneById(
            APP_INFO_LOCAL_DB_COLLECTIONS.INFO,
            APP_INFO_LOCAL_DB_COLLECTIONS_IDS.ORGANIZATION
        );
    }

    const db = await FireBaseConfig.initDynamicDB(
        credentials ?? org?.projectCredentials
    );
    FireStoreHelper.setDB(db);
};
