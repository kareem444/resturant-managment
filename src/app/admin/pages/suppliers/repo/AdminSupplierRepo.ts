import { FireStoreHelper } from 'src/common/firebaseHandler/helper/FireStoreHelper'
import { IAdminSupplierInputs } from '../interfaces/AdminSupplierInterface'
import { FireStoreCollectionsConstants } from 'src/common/constants/FireStoreCollectionsConstants'
import { AsyncHelper } from 'src/common/DataHandler/helper/ServerDataHandlerHelper'

export class AdminSuppliersRepo {
    static createSupplier = async (data: IAdminSupplierInputs): Promise<string> => {
        return await AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.add(
                FireStoreCollectionsConstants.SUPPLIERS,
                data,
                { isAuthGuard: true }
            )
        })
    }

    static getSuppliers = async () => {
        return await AsyncHelper.createPromise(async () => {
            const Suppliers = await FireStoreHelper.find(
                FireStoreCollectionsConstants.SUPPLIERS,
                { isAuthGuard: true, orderBy: [{ field: 'createdAt', direction: 'desc' }] }
            )
            return Suppliers
        })
    }

    static updateSupplier = async (id: string, data: IAdminSupplierInputs) => {
        return await AsyncHelper.createPromise(async () => {
            await FireStoreHelper.update(
                FireStoreCollectionsConstants.SUPPLIERS,
                id,
                data,
                { isAuthGuard: true }
            )
        })
    }

    static deleteSupplier = async (id: string) => {
        return await AsyncHelper.createPromise(async () => {
            await FireStoreHelper.delete(
                FireStoreCollectionsConstants.SUPPLIERS,
                id,
                { isAuthGuard: true }
            )
        })
    }
}
