import { createSlice } from '@reduxjs/toolkit'
import { ComboOfferUiInitialState } from './ComboOfferUiState'
import { REDUX } from 'src/common/constants/ReduxConstants'
import {
    addComboOfferProductToAdd,
    addComboOfferProductToEdit,
    removeComboOfferAllProductsToAdd,
    removeComboOfferAllProductsToEdit,
    removeComboOfferProductToAdd,
    removeComboOfferProductToEdit
} from './ComboOfferUiActions'

export const ProductUiSlice = createSlice({
    name: REDUX.slice.admin.productUi,
    initialState: ComboOfferUiInitialState,
    reducers: {
        addComboOfferProductToAddAction: addComboOfferProductToAdd,
        removeComboOfferProductToAddAction: removeComboOfferProductToAdd,
        removeComboOfferAllProductsToAddAction: removeComboOfferAllProductsToAdd,
        addComboOfferProductToEditAction: addComboOfferProductToEdit,
        removeComboOfferProductToEditAction: removeComboOfferProductToEdit,
        removeComboOfferAllProductsToEditAction: removeComboOfferAllProductsToEdit
    }
})

export const {
    addComboOfferProductToAddAction,
    removeComboOfferProductToAddAction,
    removeComboOfferAllProductsToAddAction,
    addComboOfferProductToEditAction,
    removeComboOfferProductToEditAction,
    removeComboOfferAllProductsToEditAction
} = ProductUiSlice.actions

export default ProductUiSlice.reducer
