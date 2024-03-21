import { AsyncHelper } from "src/common/DataHandler/helper/ServerDataHandlerHelper"
import { FireStoreCollectionsConstants } from "src/common/constants/FireStoreCollectionsConstants"
import { FireStoreHelper } from "src/common/firebaseHandler/helper/FireStoreHelper"
import { IAdminPaymentsMethods } from "../interface/AdminPaymentsMethodsInterface"
import { IAdminPaymentsMethodsModel } from "src/app/admin/models/AdminPaymentsMethodsModel"

export class AdminPaymentsMethodsRepo {
    static getPaymentsMethods = async (): Promise<IAdminPaymentsMethodsModel[]> => {
        return await AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.find(
                FireStoreCollectionsConstants.PAYMENTS_METHODS,
                { isAuthGuard: true }
            )
        })
    }

    static getActivePaymentsMethods = async (): Promise<IAdminPaymentsMethodsModel[]> => {
        return await AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.find(
                FireStoreCollectionsConstants.PAYMENTS_METHODS,
                { isAuthGuard: true, where: { field: 'active', operator: '==', value: true } }
            )
        })
    }

    static setPaymentMethod = async (id: string, data: IAdminPaymentsMethods) => {
        return await AsyncHelper.createPromise(async () => {
            await FireStoreHelper.set(
                FireStoreCollectionsConstants.PAYMENTS_METHODS,
                id,
                data,
                { isAuthGuard: true }
            )
        })
    }
}