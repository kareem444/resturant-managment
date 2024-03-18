import { AsyncHelper } from "src/common/DataHandler/helper/ServerDataHandlerHelper"
import { FireStoreCollectionsConstants } from "src/common/constants/FireStoreCollectionsConstants"
import { FireStoreHelper } from "src/common/firebaseHandler/helper/FireStoreHelper"
import { IAdminPaymentsMethods } from "../interface/AdminPaymentsMethodsInterface"

export class AdminPaymentsMethodsRepo {
    static getPaymentsMethods = async () => {
        return await AsyncHelper.createPromise(async () => {
            const paymentsMethods = await FireStoreHelper.find(
                FireStoreCollectionsConstants.PAYMENTS_METHODS,
                { isAuthGuard: true }
            )
            return paymentsMethods
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