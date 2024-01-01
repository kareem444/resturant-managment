import { createSlice } from '@reduxjs/toolkit'
import { ComboOfferUiInitialState } from './ComboOfferUiState'
import { REDUX } from 'src/common/constants/ReduxConstants'
import {
    addComboOfferProduct,
    removeComboOfferAllProducts,
    removeComboOfferProduct
} from './ComboOfferUiActions'

export const ProductUiSlice = createSlice({
    name: REDUX.slice.admin.productUi,
    initialState: ComboOfferUiInitialState,
    reducers: {
        addComboOfferProductAction: addComboOfferProduct,
        removeComboOfferProductAction: removeComboOfferProduct,
        removeComboOfferAllProductsAction: removeComboOfferAllProducts
    }
})

export const {
    addComboOfferProductAction,
    removeComboOfferProductAction,
    removeComboOfferAllProductsAction
} = ProductUiSlice.actions

export default ProductUiSlice.reducer
