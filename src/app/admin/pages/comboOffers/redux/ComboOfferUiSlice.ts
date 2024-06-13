import { createSlice } from '@reduxjs/toolkit'
import { ComboOfferUiInitialState } from './ComboOfferUiState'
import { REDUX } from 'src/common/constants/ReduxConstants'
import {
    addComboOfferProduct,
    resetComboOfferProducts,
    removeComboOfferProduct,
} from './ComboOfferUiActions'

export const ProductUiSlice = createSlice({
    name: REDUX.slice.admin.productUi,
    initialState: ComboOfferUiInitialState,
    reducers: {
        addComboOfferProductAction: addComboOfferProduct,
        removeComboOfferProductAction: removeComboOfferProduct,
        resetComboOfferProductsAction: resetComboOfferProducts,
    }
})

export const {
    addComboOfferProductAction,
    removeComboOfferProductAction,
    resetComboOfferProductsAction,
} = ProductUiSlice.actions

export default ProductUiSlice.reducer
