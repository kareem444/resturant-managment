import { IRightDrawerState } from './RightDrawerInterface'

export const openRightDrawer = (
    state: IRightDrawerState,
    action: {
        payload: IRightDrawerState
        type: string
    }
) => {
    const { title, Element } = action.payload
    state.isOpen = true
    state.Element = Element
    state.title = title
}

export const closeRightDrawer = (state: IRightDrawerState) => {
    state.isOpen = false
    state.Element = null
    state.title = ''
}
