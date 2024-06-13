import { useAppDispatch, useAppSelector } from 'src/common/redux/store'
import { IComboOfferUiState } from './ComboOfferUiInterface'
import { comboOfferUiState } from './ComboOfferUiSelectors'
import {
    addComboOfferProductAction,
    resetComboOfferProductsAction,
    removeComboOfferProductAction,
} from './ComboOfferUiSlice'
import { IComboOfferProduct } from '../interfaces/AdminComboOffersInterface'

export default function useComboOfferUiReducer() {
    const state: IComboOfferUiState = useAppSelector(comboOfferUiState)
    const dispatch = useAppDispatch()

    return {
        state,
        addComboOfferProduct: (payload: IComboOfferProduct) => {
            dispatch(addComboOfferProductAction(payload))
        },
        removeComboOfferProduct: (payload: number) => {
            dispatch(removeComboOfferProductAction(payload))
        },
        resetComboOfferProducts: () => {
            dispatch(resetComboOfferProductsAction())
        },
    }
}
