import { IComboOfferProduct } from '../interfaces/AdminComboOffersInterface'
import { IComboOfferUiState } from './ComboOfferUiInterface'

export const addComboOfferProduct = (
    state: IComboOfferUiState,
    action: {
        payload: IComboOfferProduct
        type: string
    }
) => {
    const { price, product, size } = action.payload
    state.data?.push({
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
    state.data?.splice(action.payload, 1)
}

export const resetComboOfferProducts = (state: IComboOfferUiState) => {
    state.data = []
}