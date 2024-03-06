import { FirebaseOptions } from "firebase/app"

export interface IApiUserModel {
    id: string
    name: string
    mobile: string
    email: string
    organizationName: string
    organizationCode?: string
    password?: string
    temporaryPassword?: string
    forgetPassword?: string
    projectCredentials?: FirebaseOptions
    createdAt?: Date
    updatedAt?: Date
}

export interface IApiRequestTrailModel {
    name: string
    mobile: string
    email: string
    organizationName: string
    createdAt?: Date
}