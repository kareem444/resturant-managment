import { IModalState } from './ModalInterface'
import { ModalInitialState } from './ModalState'

export const openModal = (
    state: IModalState,
    action: {
        payload: IModalState
        type: string
    }
) => {
    const { title, modalComponent, size, className, closeButton, xButton, buttons, onClose } = action.payload
    state.isOpen = true
    state.modalComponent = modalComponent
    state.title = title || undefined
    state.size = size || 'md'
    state.className = className || ''
    state.closeButton = closeButton || { showCloseButton: false }
    state.xButton = xButton || { showXButton: true }
    state.buttons = buttons || undefined
    state.onClose = onClose || undefined
}

export const closeModal = (state: IModalState) => ModalInitialState
