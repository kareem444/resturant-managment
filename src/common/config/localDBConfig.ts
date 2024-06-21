import { LocalDB } from '../LocalDB/LocalDB'

/* #region info DB section */
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
/* #endregion */

/* #region pos DB section */
export enum APP_POS_LOCAL_DB_COLLECTIONS {
    GROUPS = 'groups',
    PRODUCTS = 'products',
    COMBO_OFFERS = 'comboOffers',
    TABLES = 'tables',
    DELIVERY = 'delivery',
    DISCOUNTS = 'discounts',
    PAYMENTS_METHODS = 'paymentsMethods',
    CUSTOMERS = 'customers',
}

const APP_POS_DB_NAME = 'AppPos'
const APP_POS_DB_VERSION = 1
const APP_POS_DB_COLLECTIONS = [
    APP_POS_LOCAL_DB_COLLECTIONS.PRODUCTS,
    APP_POS_LOCAL_DB_COLLECTIONS.GROUPS,
    APP_POS_LOCAL_DB_COLLECTIONS.COMBO_OFFERS,
    APP_POS_LOCAL_DB_COLLECTIONS.TABLES,
    APP_POS_LOCAL_DB_COLLECTIONS.DELIVERY,
    APP_POS_LOCAL_DB_COLLECTIONS.DISCOUNTS,
    APP_POS_LOCAL_DB_COLLECTIONS.PAYMENTS_METHODS,
    APP_POS_LOCAL_DB_COLLECTIONS.CUSTOMERS,

]

export const AppPosLocalDB = new LocalDB(
    APP_POS_DB_NAME,
    APP_POS_DB_COLLECTIONS,
    APP_POS_DB_VERSION
)
/* #endregion */