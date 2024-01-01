import { IComboOfferProduct } from '../../interfaces/AdminComboOfferInterface'
import { IComboOfferUiState } from './ComboOfferUiInterface'

export const addComboOfferProduct = (
    state: IComboOfferUiState,
    action: {
        payload: IComboOfferProduct
        type: string
    }
) => {
    const { price, product, size } = action.payload
    state.products?.push({
        price,
        product,
        size,
    })
}

export const removeComboOfferProduct = (
    state: IComboOfferUiState,
    action: {
        payload: number
        type: string
    }
) => {
    state.products?.splice(action.payload, 1)
}

export const removeComboOfferAllProducts = (state: IComboOfferUiState) => {
    state.products = []
}