import {
    APP_INFO_LOCAL_DB_COLLECTIONS,
    APP_INFO_LOCAL_DB_COLLECTIONS_IDS,
    AppInfoLocalDB
} from 'src/common/config/localDBConfig'

export class AdminHeaderService {
    static async logout() {
        await AppInfoLocalDB.deleteById(
            APP_INFO_LOCAL_DB_COLLECTIONS.INFO,
            APP_INFO_LOCAL_DB_COLLECTIONS_IDS.CURRENT_USER
        )
    }
}
