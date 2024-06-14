import { createSlice } from '@reduxjs/toolkit'
import { DiscountUiInitialState } from './DiscountUiState'
import { REDUX } from 'src/common/constants/ReduxConstants'
import {
addDiscountCustomer,
addDiscountProduct,
removeDiscountProduct,
removeAllDiscountProducts,
removeAllDiscountCustomers,
updateDiscountApplyTo,
removeDiscountCustomer,
resetAllDiscountUi,
setDiscountUiState
} from './DiscountUiActions'

export const DiscountUiSlice = createSlice({
    name: REDUX.slice.admin.discountUi,
    initialState: DiscountUiInitialState,
    reducers: {
        setDiscountUiStateAction: setDiscountUiState,
        addDiscountCustomerAction: addDiscountCustomer,
        addDiscountProductAction: addDiscountProduct,
        removeDiscountProductAction: removeDiscountProduct,
        removeAllDiscountProductsAction: removeAllDiscountProducts,
        removeAllDiscountCustomersAction: removeAllDiscountCustomers,
        updateDiscountApplyToAction: updateDiscountApplyTo,
        removeDiscountCustomerAction: removeDiscountCustomer,
        resetAllDiscountUiAction: resetAllDiscountUi
    }
})

export const {
    setDiscountUiStateAction,
    addDiscountCustomerAction,
    addDiscountProductAction,
    removeDiscountProductAction,
    removeAllDiscountProductsAction,
    removeAllDiscountCustomersAction,
    updateDiscountApplyToAction,
    removeDiscountCustomerAction,
    resetAllDiscountUiAction
} = DiscountUiSlice.actions

export default DiscountUiSlice.reducer
