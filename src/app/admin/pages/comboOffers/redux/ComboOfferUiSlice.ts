import { createSlice } from '@reduxjs/toolkit'
import { ComboOfferUiInitialState } from './ComboOfferUiState'
import { REDUX } from 'src/common/constants/ReduxConstants'
import {
    addComboOfferProduct,
    resetComboOfferProducts,
    removeComboOfferProduct,
} from './ComboOfferUiActions'

export const ComboOfferUiSlice = createSlice({
    name: REDUX.slice.admin.comboOfferUi,
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
} = ComboOfferUiSlice.actions

export default ComboOfferUiSlice.reducer
