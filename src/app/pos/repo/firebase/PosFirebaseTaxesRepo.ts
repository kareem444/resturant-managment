import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel";
import { IAdminTaxModel } from "src/app/admin/models/AdminTaxModel";
import { IAdminTaxInputs } from "src/app/admin/pages/taxes/interfaces/AdminTaxesInterface";
import { AsyncHelper } from "src/common/DataHandler/helper/ServerDataHandlerHelper";
import { FireStoreCollectionsConstants } from "src/common/constants/FireStoreCollectionsConstants";
import { FireStoreHelper } from "src/common/firebaseHandler/helper/FireStoreHelper";

export class PosFirebaseTaxesRepo {
    static async getTaxes(
        branches: IAdminBranchModel[],
        branchId?: string
    ) {
        return AsyncHelper.createPromise(async () => {
            const taxes: (IAdminTaxInputs & IAdminTaxModel)[] | undefined = await FireStoreHelper.find(
                FireStoreCollectionsConstants.TAXES,
                {
                    isAuthGuard: true,
                    where: branchId ? { field: 'branchId', operator: '==', value: branchId } : undefined
                }
            )

            return taxes?.map(tax => {
                const branch = branches.find(branch => branch.id === tax.branchId);
                delete tax.branchId;
                return {
                    ...tax,
                    branch: {
                        id: branch?.id as string,
                        name: branch?.name as string
                    }
                }
            }) as IAdminTaxModel[]
        })
    }
}