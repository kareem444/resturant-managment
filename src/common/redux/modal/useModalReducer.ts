import { useAppDispatch, useAppSelector } from '../store'
import { IModalState } from './ModalInterface'
import { modalState } from './ModalSelectors'
import { closeModalAction, openModalAction } from './ModalSlice'

export default function useModalReducer() {
    const state: IModalState = useAppSelector(modalState)
    const dispatch = useAppDispatch()
    return {
        state,
        openModel: (payload: IModalState) => {
            dispatch(openModalAction(payload))
        },
        closeModal: () => {
            dispatch(closeModalAction())
        }
    }
}
