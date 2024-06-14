import { IAdminProductsModel } from 'src/app/admin/models/AdminProductsModel'
import { IDiscountUiState } from './DiscountUiInterface'
import { DiscountUiInitialState } from './DiscountUiState'
import { IAdminCustomerModel } from 'src/app/admin/models/AdminCustomerModel'
import { AdminDiscountApplyTo } from '../interfaces/AdminDiscountsInterface'

export const setDiscountUiState = (
    state: IDiscountUiState,
    action: {
        payload: IDiscountUiState
        type: string
    }
) => {
    state.applyTo = action.payload.applyTo
    state.customers = action.payload.customers
    state.products = action.payload.products
}

export const updateDiscountApplyTo = (
    state: IDiscountUiState,
    action: {
        payload: AdminDiscountApplyTo
        type: string
    }
) => {
    state.applyTo = action.payload

    if (!action.payload.includes('product')) {
        state.products = []
    }

    if (!action.payload.includes('customer')) {
        state.customers = []
    }
}

export const addDiscountProduct = (
    state: IDiscountUiState,
    action: {
        payload: IAdminProductsModel
        type: string
    }
) => {
    const product = action.payload
    const isProductExist = state.products?.find((el) => el.id === product.id)
    if (!isProductExist) {
        state.products?.push(product)
    }
}

export const removeDiscountProduct = (
    state: IDiscountUiState,
    action: {
        payload: { index: number }
        type: string
    }
) => {
    const { index } = action.payload
    state.products?.splice(index, 1)
}

export const removeAllDiscountProducts = (
    state: IDiscountUiState,
) => {
    state.products = []
}

export const addDiscountCustomer = (
    state: IDiscountUiState,
    action: {
        payload: IAdminCustomerModel
        type: string
    }
) => {
    const customer = action.payload
    const isCustomerExist = state.customers?.find((el) => el.id === customer.id)
    if (!isCustomerExist) {
        state.customers?.push(customer)
    }
}

export const removeDiscountCustomer = (
    state: IDiscountUiState,
    action: {
        payload: { index: number }
        type: string
    }
) => {
    const { index } = action.payload
    state.customers?.splice(index, 1)
}

export const removeAllDiscountCustomers = (
    state: IDiscountUiState,
) => {
    state.customers = []
}

export const resetAllDiscountUi = (
    state: IDiscountUiState,
) => {
    state = DiscountUiInitialState
}