import { IProductUiState } from "./ProductUiInterface";

export const ProductUiInitialState: IProductUiState = {
    productType: 'fixed',
    data: {
        productSizes: [],
        productAdditions: [],
        productTaxes: []
    }
};