import { IAdminAdditionsModel } from "src/app/admin/models/AdminAdditionsModel"
import { IAdminTaxModel } from "src/app/admin/models/AdminTaxModel"

export interface IProductUiState {
    productType: 'fixed' | 'multi'
    data?: {
        productSizes?: { size: string, price: string }[]
        productAdditions?: IAdminAdditionsModel[]
        productTaxes?: IAdminTaxModel[]
    }
}