import { useAppDispatch } from 'src/common/redux/store'
import { IPosAppState } from './PosReduxInterface'
import {
    clearDataAction,
    setAppAction,
    setDataAction
} from './PosReduxSlice'
import { IPosData } from '../interfaces'

export default function usePosActions() {
    const dispatch = useAppDispatch()

    return {
        setApp: (payload: Partial<IPosAppState>) => {
            dispatch(setAppAction(payload))
        },
        setData: (payload: Partial<IPosData>) => {
            dispatch(setDataAction(payload))
        },
        clearData: () => {
            dispatch(clearDataAction())
        }
    }
}
