import { IComboOfferProduct } from '../../interfaces/AdminComboOfferInterface'
import { IComboOfferUiState } from './ComboOfferUiInterface'

export const addComboOfferProductToAdd = (
    state: IComboOfferUiState,
    action: {
        payload: IComboOfferProduct
        type: string
    }
) => {
    const { price, product, size } = action.payload
    state.productsToAdd?.push({
        price,
        product,
        size,
    })
}

export const removeComboOfferProductToAdd = (
    state: IComboOfferUiState,
    action: {
        payload: number
        type: string
    }
) => {
    state.productsToAdd?.splice(action.payload, 1)
}

export const removeComboOfferAllProductsToAdd = (state: IComboOfferUiState) => {
    state.productsToAdd = []
}

export const addComboOfferProductToEdit = (
    state: IComboOfferUiState,
    action: {
        payload: IComboOfferProduct
        type: string
    }
) => {
    const { price, product, size } = action.payload
    state.productsToEdit?.push({
        price,
        product,
        size,
    })
}

export const removeComboOfferProductToEdit = (
    state: IComboOfferUiState,
    action: {
        payload: number
        type: string
    }
) => {
    state.productsToEdit?.splice(action.payload, 1)
}

export const removeComboOfferAllProductsToEdit = (state: IComboOfferUiState) => {
    state.productsToEdit = []
}