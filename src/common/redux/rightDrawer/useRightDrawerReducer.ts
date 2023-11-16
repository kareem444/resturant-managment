import { useAppDispatch, useAppSelector } from '../store'
import { IRightDrawerState } from './RightDrawerInterface'
import { rightDrawerState } from './RightDrawerSelectors'
import { closeRightDrawerAction, openRightDrawerAction } from './RightDrawerSlice'

export default function useRightBarReducer() {
    const state: IRightDrawerState = useAppSelector(rightDrawerState)
    const dispatch = useAppDispatch()
    return {
        state,
        openRightDrawer: (payload: IRightDrawerState) => {
            dispatch(openRightDrawerAction(payload))
        },
        closeRightDrawer: () => {
            dispatch(closeRightDrawerAction())
        }
    }
}
