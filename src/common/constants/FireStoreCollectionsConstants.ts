const mainCollection = 'users';

export const FireStoreCollectionsConstants = {
    USERS: 'users',
    USERS_PRIVATE_DATA: 'users_private_data',
    REQUEST_TRAIL: 'request_trail',
    BRANCHES: (userId: string) => `${mainCollection}/${userId}/` + 'branches',
    PRODUCTS: 'products',
    UNITS: 'units',
    CATEGORIES: 'categories',
    MEMBERS: 'members',
    ROLES: (userId: string) => `${mainCollection}/${userId}/` + 'roles',
    TAXES: 'taxes',
}