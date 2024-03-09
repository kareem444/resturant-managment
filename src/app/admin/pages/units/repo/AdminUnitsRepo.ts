import { FireStoreHelper } from 'src/common/firebaseHandler/helper/FireStoreHelper'
import { IAdminUnitInputs } from '../interfaces/AdminUnitsInterface'
import { FireStoreCollectionsConstants } from 'src/common/constants/FireStoreCollectionsConstants'
import { AsyncHelper } from 'src/common/DataHandler/helper/ServerDataHandlerHelper'

export class AdminUnitsRepo {
    static createUnit = async (data: IAdminUnitInputs): Promise<string> => {
        return await AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.add(
                FireStoreCollectionsConstants.UNITS,
                data,
                { isAuthGuard: true }
            )
        })
    }

    static getUnits = async () => {
        return await AsyncHelper.createPromise(async () => {
            const units = await FireStoreHelper.find(
                FireStoreCollectionsConstants.UNITS,
                { isAuthGuard: true, orderBy: [{ field: 'createdAt', direction: 'desc' }] }
            )
            return units
        })
    }

    static updateUnit = async (id: string, data: IAdminUnitInputs) => {
        return await AsyncHelper.createPromise(async () => {
            await FireStoreHelper.update(
                FireStoreCollectionsConstants.UNITS,
                id,
                data,
                { isAuthGuard: true }
            )
        })
    }

    static deleteUnit = async (id: string) => {
        return await AsyncHelper.createPromise(async () => {
            await FireStoreHelper.delete(
                FireStoreCollectionsConstants.UNITS,
                id,
                { isAuthGuard: true }
            )
        })
    }
}
