import { IModalState } from './ModalInterface'

export const openModal = (
    state: IModalState,
    action: {
        payload: IModalState
        type: string
    }
) => {
    const { title, Element, size } = action.payload
    state.isOpen = true
    state.Element = Element
    state.title = title
    state.size = size || 'md'
}

export const closeModal = (state: IModalState) => {
    state.isOpen = false
    state.Element = null
    state.title = ''
}
