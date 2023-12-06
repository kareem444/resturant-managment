import { IModalState } from './ModalInterface'

export const openModal = (
    state: IModalState,
    action: {
        payload: IModalState
        type: string
    }
) => {
    const { title, Element, size , className} = action.payload
    state.isOpen = true
    state.Element = Element
    state.title = title
    state.size = size || 'md'
    state.className = className
    state.closeButtonClassName = action.payload.closeButtonClassName
    state.titleClassName = action.payload.titleClassName
}

export const closeModal = (state: IModalState) => {
    state.isOpen = false
    state.Element = null
    state.title = ''
    state.size = 'md'
    state.className = ''
    state.closeButtonClassName = ''
    state.titleClassName = ''
}
