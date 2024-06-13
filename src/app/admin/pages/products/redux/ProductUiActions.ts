import { IProductUiState } from './ProductUiInterface'

export const updateProduct = (
    state: IProductUiState,
    action: {
        payload: IProductUiState
        type: string
    }
) => {
    const { productType, data } = action.payload
    state.productType = productType
    state.data = data
}

export const changeProductType = (
    state: IProductUiState,
    action: {
        payload: IProductUiState
        type: string
    }
) => {
    const { productType } = action.payload
    state.productType = productType
}

export const addProductSize = (
    state: IProductUiState,
    action: {
        payload: { size: string, price: string }
        type: string
    }
) => {
    const { size, price } = action.payload
    state.data?.productSizes?.push({ size, price })
}

export const removeProductSize = (
    state: IProductUiState,
    action: {
        payload: { index: number }
        type: string
    }
) => {
    const { index } = action.payload
    state.data?.productSizes?.splice(index, 1)
}

export const removeAllProductSize = (
    state: IProductUiState,
) => {
    if (state.data?.productSizes) {
        state.data.productSizes = []
    }
}

export const addProductTax = (
    state: IProductUiState,
    action: {
        payload: { id: string, name: string }
        type: string
    }
) => {
    const { id, name } = action.payload
    const isTaxExist = state.data?.productTaxes?.find((tax) => tax.id === id)
    if (!isTaxExist) {
        state.data?.productTaxes?.push({ id, name })
    }
}

export const removeProductTax = (
    state: IProductUiState,
    action: {
        payload: { index: number }
        type: string
    }
) => {
    const { index } = action.payload
    state.data?.productTaxes?.splice(index, 1)
}

export const removeAllProductTaxes = (
    state: IProductUiState,
) => {
    if (state.data?.productTaxes) {
        state.data.productTaxes = []
    }
}

export const addProductAddition = (
    state: IProductUiState,
    action: {
        payload: { id: string, name: string }
        type: string
    }
) => {
    const { id, name } = action.payload
    const isAdditionExist = state.data?.productAdditions?.find((addition) => addition.id === id)
    if (!isAdditionExist) {
        state.data?.productAdditions?.push({ id, name })
    }
}

export const removeProductAddition = (
    state: IProductUiState,
    action: {
        payload: { index: number }
        type: string
    }
) => {
    const { index } = action.payload
    state.data?.productAdditions?.splice(index, 1)
}

export const removeAllProductAdditions = (
    state: IProductUiState,
) => {
    if (state.data?.productAdditions) {
        state.data.productAdditions = []
    }
}