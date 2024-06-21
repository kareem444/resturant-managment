import { useAppDispatch, useAppSelector } from 'src/common/redux/store'
import { IProductUiState } from './ProductUiInterface'
import { productUiState } from './ProductUiSelectors'
import {
    addProductAdditionAction,
    addProductSizeAction,
    addProductTaxAction,
    changeProductTypeAction,
    removeAllProductAdditionsAction,
    removeAllProductSizeAction,
    removeAllProductTaxesAction,
    removeProductAdditionAction,
    removeProductSizeAction,
    removeProductTaxAction,
    updateProductAction
} from './ProductUiSlice'
import { IAdminAdditionsModel } from 'src/app/admin/models/AdminAdditionsModel'
import { IAdminTaxModel } from 'src/app/admin/models/AdminTaxModel'

export default function useProductUiReducer() {
    const state: IProductUiState = useAppSelector(productUiState)
    const dispatch = useAppDispatch()

    return {
        state,
        updateProduct: (payload: IProductUiState) => {
            dispatch(updateProductAction(payload))
        },
        changeProductType: (payload: IProductUiState) => {
            dispatch(changeProductTypeAction(payload))
        },
        addProductSize: (payload: { size: string; price: string }) => {
            dispatch(addProductSizeAction(payload))
        },
        removeProductSize: (payload: { index: number }) => {
            dispatch(removeProductSizeAction(payload))
        },
        removeAllProductSize: () => {
            dispatch(removeAllProductSizeAction())
        },
        addProductTax: (payload: IAdminTaxModel) => {
            dispatch(addProductTaxAction(payload))
        },
        removeProductTax: (payload: { index: number }) => {
            dispatch(removeProductTaxAction(payload))
        },
        removeAllProductTaxes: () => {
            dispatch(removeAllProductTaxesAction())
        },
        addProductAddition: (payload: IAdminAdditionsModel) => {
            dispatch(addProductAdditionAction(payload))
        },
        removeProductAddition: (payload: { index: number }) => {
            dispatch(removeProductAdditionAction(payload))
        },
        removeAllProductAdditions: () => {
            dispatch(removeAllProductAdditionsAction())
        },
        resetProduct: () => {
            dispatch(changeProductTypeAction({ productType: 'fixed' }))
            dispatch(removeAllProductSizeAction())
            dispatch(removeAllProductTaxesAction())
            dispatch(removeAllProductAdditionsAction())
        }
    }
}
