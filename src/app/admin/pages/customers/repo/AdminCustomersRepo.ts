import { FireStoreHelper } from 'src/common/firebaseHandler/helper/FireStoreHelper'
import { IAdminCustomerInputs } from '../interfaces/AdminCustomersInterface'
import { FireStoreCollectionsConstants } from 'src/common/constants/FireStoreCollectionsConstants'
import { AsyncHelper } from 'src/common/DataHandler/helper/ServerDataHandlerHelper'

export class AdminCustomersRepo {
    static createCustomer = async (data: IAdminCustomerInputs): Promise<string> => {
        return await AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.add(
                FireStoreCollectionsConstants.CUSTOMERS,
                data,
                { isAuthGuard: true }
            )
        })
    }

    static getCustomers = async () => {
        return await AsyncHelper.createPromise(async () => {
            const customers = await FireStoreHelper.find(
                FireStoreCollectionsConstants.CUSTOMERS,
                { isAuthGuard: true, orderBy: [{ field: 'createdAt', direction: 'desc' }] }
            )
            return customers
        })
    }

    static updateCustomer = async (id: string, data: IAdminCustomerInputs) => {
        return await AsyncHelper.createPromise(async () => {
            await FireStoreHelper.update(
                FireStoreCollectionsConstants.CUSTOMERS,
                id,
                data,
                { isAuthGuard: true }
            )
        })
    }

    static deleteCustomer = async (id: string) => {
        return await AsyncHelper.createPromise(async () => {
            await FireStoreHelper.delete(
                FireStoreCollectionsConstants.CUSTOMERS,
                id,
                { isAuthGuard: true }
            )
        })
    }
}
