import { AsyncHelper } from "src/common/DataHandler/helper/ServerDataHandlerHelper"
import { FireStoreCollectionsConstants } from "src/common/constants/FireStoreCollectionsConstants"
import { FireStoreHelper } from "src/common/firebaseHandler/helper/FireStoreHelper"
import { IAdminAdditionsInputs } from "../interfaces/AdminAdditionInterface"
import { IAdminAdditionsModel } from "src/app/admin/models/AdminAdditionsModel"
import { FireStorageHelper } from "src/common/firebaseHandler/helper/FireStorageHelper"

export class AdminAdditionsRepo {
    static createAdditions = (Additions: IAdminAdditionsInputs): Promise<IAdminAdditionsModel> => {
        return AsyncHelper.createPromise(async () => {
            let image: string | undefined = undefined;

            if (!!Additions.image) {
                image = await FireStorageHelper.uploadFile(Additions.image, { directory: 'additions' })
            }

            const id: string = await FireStoreHelper.add(
                FireStoreCollectionsConstants.ADDITIONS,
                { ...Additions, image: image || '' },
                { isAuthGuard: true }
            )

            return {
                ...Additions,
                id,
                image,
            }
        })
    }

    static getAdditions = async (): Promise<IAdminAdditionsModel[]> => {
        return AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.find(
                FireStoreCollectionsConstants.ADDITIONS,
                { isAuthGuard: true, orderBy: [{ field: 'createdAt', direction: 'desc' }] }
            )
        })
    }

    static updateAdditions = (AdditionsId: string, Additions: IAdminAdditionsInputs): Promise<IAdminAdditionsModel> => {
        return AsyncHelper.createPromise(async () => {
            let image: string | undefined = undefined;

            if (!!Additions.image) {
                image = await FireStorageHelper.uploadFile(Additions.image, { directory: 'additions' })
            }

            const refactoredAdditions: IAdminAdditionsModel | IAdminAdditionsInputs = {
                name: Additions.name,
                price: Additions.price,
            }

            if (image) {
                refactoredAdditions.image = image;
            }

            await FireStoreHelper.update(
                FireStoreCollectionsConstants.ADDITIONS,
                AdditionsId,
                refactoredAdditions,
                { isAuthGuard: true }
            )

            return refactoredAdditions as IAdminAdditionsModel
        })
    }

    static deleteAdditions = (AdditionsId: string) => {
        return AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.delete(
                FireStoreCollectionsConstants.ADDITIONS,
                AdditionsId,
                { isAuthGuard: true }
            )
        })
    }
}