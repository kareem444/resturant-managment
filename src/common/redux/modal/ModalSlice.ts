import { createSlice } from '@reduxjs/toolkit'
import { REDUX } from '../../constants/reduxConstants'
import { ModalInitialState } from './ModalState'
import { openModal, closeModal } from './ModalActions'

export const ModalSlice = createSlice({
    name: REDUX.slice.modal,
    initialState: ModalInitialState,
    reducers: {
        openModalAction: openModal,
        closeModalAction: closeModal
    }
})

export const { openModalAction , closeModalAction } = ModalSlice.actions

export default ModalSlice.reducer
