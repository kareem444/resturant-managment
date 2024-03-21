import { FireStoreHelper } from 'src/common/firebaseHandler/helper/FireStoreHelper'
import { IAdminExpensesDestinationInputs } from '../interfaces/AdminExpensesDestinationsInterface'
import { FireStoreCollectionsConstants } from 'src/common/constants/FireStoreCollectionsConstants'
import { AsyncHelper } from 'src/common/DataHandler/helper/ServerDataHandlerHelper'
import { IAdminExpensesDestinationModel } from 'src/app/admin/models/AdminExpensesDestinationModel'

export class AdminExpensesDestinationsRepo {
    static createExpensesDestination = async (data: IAdminExpensesDestinationInputs): Promise<string> => {
        return await AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.add(
                FireStoreCollectionsConstants.EXPENSES_DESTINATIONS,
                data,
                { isAuthGuard: true }
            )
        })
    }

    static getExpensesDestinations = async (): Promise<IAdminExpensesDestinationModel[]> => {
        return await AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.find(
                FireStoreCollectionsConstants.EXPENSES_DESTINATIONS,
                { isAuthGuard: true, orderBy: [{ field: 'createdAt', direction: 'desc' }] }
            )
        })
    }

    static updateExpensesDestination = async (id: string, data: IAdminExpensesDestinationInputs) => {
        return await AsyncHelper.createPromise(async () => {
            await FireStoreHelper.update(
                FireStoreCollectionsConstants.EXPENSES_DESTINATIONS,
                id,
                data,
                { isAuthGuard: true }
            )
        })
    }

    static deleteExpensesDestination = async (id: string) => {
        return await AsyncHelper.createPromise(async () => {
            await FireStoreHelper.delete(
                FireStoreCollectionsConstants.EXPENSES_DESTINATIONS,
                id,
                { isAuthGuard: true }
            )
        })
    }
}
