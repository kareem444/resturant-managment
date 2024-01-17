export interface ILocalUserModel {
    id: string
    user_id: string
    name: string
    mobile: string
    email: string
    organizationName: string
    organizationCode?: string
    isRegistered?: boolean
}