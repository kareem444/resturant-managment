import { useAppDispatch, useAppSelector } from 'src/common/redux/store'
import { IComboOfferUiState } from './ComboOfferUiInterface'
import { comboOfferUiState } from './ComboOfferUiSelectors'
import {
    addComboOfferProductToAddAction,
    addComboOfferProductToEditAction,
    removeComboOfferAllProductsToAddAction,
    removeComboOfferAllProductsToEditAction,
    removeComboOfferProductToAddAction,
    removeComboOfferProductToEditAction
} from './ComboOfferUiSlice'
import { IComboOfferProduct } from '../../interfaces/AdminComboOfferInterface'

export default function useComboOfferUiReducer() {
    const state: IComboOfferUiState = useAppSelector(comboOfferUiState)
    const dispatch = useAppDispatch()

    return {
        state,
        addComboOfferProductToAdd: (payload: IComboOfferProduct) => {
            dispatch(addComboOfferProductToAddAction(payload))
        },
        removeComboOfferProductToAdd: (payload: number) => {
            dispatch(removeComboOfferProductToAddAction(payload))
        },
        removeComboOfferAllProductsToAdd: () => {
            dispatch(removeComboOfferAllProductsToAddAction())
        },
        addComboOfferProductToEdit: (payload: IComboOfferProduct) => {
            dispatch(addComboOfferProductToEditAction(payload))
        },
        removeComboOfferProductToEdit: (payload: number) => {
            dispatch(removeComboOfferProductToEditAction(payload))
        },
        removeComboOfferAllProductsToEdit: () => {
            dispatch(removeComboOfferAllProductsToEditAction())
        }
    }
}
