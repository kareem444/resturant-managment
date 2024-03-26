import { AsyncHelper } from "src/common/DataHandler/helper/ServerDataHandlerHelper"
import { FireStoreCollectionsConstants } from "src/common/constants/FireStoreCollectionsConstants"
import { FireStoreHelper } from "src/common/firebaseHandler/helper/FireStoreHelper"
import { IAdminTaxInputs } from "../interfaces/AdminTaxesInterface"
import { AdminBranchesRepo } from "../../branches/repo/AdminBranchesRepo"
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel"
import { ErrorsConstants } from "src/common/constants/ErrorsConstants"
import { IAdminTaxModel } from "src/app/admin/models/AdminTaxModel"

export class AdminTaxesRepo {
    static createTax = (tax: IAdminTaxInputs): Promise<IAdminTaxModel> => {
        return AsyncHelper.createPromise(async () => {
            const branches: IAdminBranchModel[] = await AdminBranchesRepo.getBranches();
            const branch = branches?.find(branch => branch.id === tax.branchId);

            if (!branch) {
                throw ErrorsConstants.BRANCH_NOT_EXIST;
            }

            const id: string = await FireStoreHelper.add(
                FireStoreCollectionsConstants.TAXES,
                tax,
                { isAuthGuard: true }
            )

            return {
                ...tax,
                id,
                branch: {
                    id: branch?.id as string,
                    name: branch?.name as string
                }
            }
        })
    }

    static getTaxes = async (): Promise<IAdminTaxModel[]> => {
        return AsyncHelper.createPromise(async () => {
            const Taxes: (IAdminTaxInputs & IAdminTaxModel)[] | undefined = await FireStoreHelper.find(
                FireStoreCollectionsConstants.TAXES,
                { isAuthGuard: true, orderBy: [{ field: 'createdAt', direction: 'desc' }] }
            )
            const branches: IAdminBranchModel[] = await AdminBranchesRepo.getBranches();

            const refactorTaxes = Taxes?.map(tax => {
                if (!!tax.branchId) {
                    const branch = branches?.find(branch => branch.id === tax.branchId);

                    if (branch) {
                        tax.branch = {
                            id: branch?.id as string,
                            name: branch?.name as string
                        };
                    }
                }

                delete tax.branchId;
                return tax
            })

            return refactorTaxes as IAdminTaxModel[]
        })
    }

    static updateTax = (taxId: string, tax: IAdminTaxInputs): Promise<IAdminTaxModel> => {
        return AsyncHelper.createPromise(async () => {
            const branches: IAdminBranchModel[] = await AdminBranchesRepo.getBranches();
            const branch = branches?.find(branch => branch.id === tax.branchId);

            if (!branch) {
                throw ErrorsConstants.BRANCH_NOT_EXIST;
            }

            await FireStoreHelper.update(
                FireStoreCollectionsConstants.TAXES,
                taxId,
                tax,
                { isAuthGuard: true }
            )

            return {
                ...tax,
                branch: {
                    id: branch?.id as string,
                    name: branch?.name as string
                },
            }
        })
    }

    static deleteTax = (taxId: string) => {
        return AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.delete(
                FireStoreCollectionsConstants.TAXES,
                taxId,
                { isAuthGuard: true }
            )
        })
    }
}