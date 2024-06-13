export interface IProductUiState {
    productType: 'fixed' | 'multi'
    data?: {
        productSizes?: { size: string, price: string }[]
        productAdditions?: { id: string, name: string }[]
        productTaxes?: { id: string, name: string }[]
    }
}