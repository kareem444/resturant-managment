import { useAppDispatch, useAppSelector } from 'src/common/redux/store'
import { IDiscountUiState } from './DiscountUiInterface'
import { discountUiState } from './DiscountUiSelectors'
import {
    addDiscountCustomerAction,
    addDiscountProductAction,
    removeDiscountCustomerAction,
    removeAllDiscountCustomersAction,
    removeAllDiscountProductsAction,
    removeDiscountProductAction,
    resetAllDiscountUiAction,
    updateDiscountApplyToAction,
    setDiscountUiStateAction
} from './DiscountUiSlice'
import { IAdminCustomerModel } from 'src/app/admin/models/AdminCustomerModel'
import { IAdminProductsModel } from 'src/app/admin/models/AdminProductsModel'
import { AdminDiscountApplyTo } from '../interfaces/AdminDiscountsInterface'

export default function useDiscountUiReducer() {
    const state: IDiscountUiState = useAppSelector(discountUiState)
    const dispatch = useAppDispatch()

    return {
        state,
        setDiscountUiState: (payload: IDiscountUiState) => {
            dispatch(setDiscountUiStateAction(payload))
        },
        addDiscountCustomer: (payload: IAdminCustomerModel) => {
            dispatch(addDiscountCustomerAction(payload))
        },
        addDiscountProduct: (payload: IAdminProductsModel) => {
            dispatch(addDiscountProductAction(payload))
        },
        removeDiscountCustomer: (payload: { index: number }) => {
            dispatch(removeDiscountCustomerAction(payload))
        },
        removeAllDiscountCustomers: () => {
            dispatch(removeAllDiscountCustomersAction())
        },
        removeAllDiscountProducts: () => {
            dispatch(removeAllDiscountProductsAction())
        },
        removeDiscountProduct: (payload: { index: number }) => {
            dispatch(removeDiscountProductAction(payload))
        },
        resetAllDiscountUi: () => {
            dispatch(resetAllDiscountUiAction())
        },
        updateDiscountApplyTo: (payload: AdminDiscountApplyTo) => {
            dispatch(updateDiscountApplyToAction(payload))
        }
    }
}
