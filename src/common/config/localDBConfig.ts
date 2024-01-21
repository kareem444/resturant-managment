import { LocalDB } from '../LocalDB/LocalDB'

export enum APP_INFO_LOCAL_DB_COLLECTIONS {
    INFO = 'info',
}

export enum APP_INFO_LOCAL_DB_COLLECTIONS_IDS {
    ORGANIZATION = 'organization',
    CURRENT_USER = 'current_user',
}

const APP_INFO_DB_NAME = 'AppInfo'
const APP_INFO_DB_VERSION = 1
const APP_INFO_DB_COLLECTIONS = [
    APP_INFO_LOCAL_DB_COLLECTIONS.INFO,
]

export const AppInfoLocalDB = new LocalDB(
    APP_INFO_DB_NAME,
    APP_INFO_DB_COLLECTIONS,
    APP_INFO_DB_VERSION
)