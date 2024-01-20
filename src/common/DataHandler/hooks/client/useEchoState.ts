import { useDispatch } from 'react-redux'
import { RootState, useAppSelector } from '../../../redux/store'
import {
    deleteClientDataAction,
    setClientDataAction
} from '../../redux/client/ClientDataHandlerSlice'
import { useEffect } from 'react'

const useEchoState = <T>(
    key: string,
    defaultVal?: T,
    initVal?: T,
    isOverrideInitVal?: boolean
) => {
    let state: T =
        useAppSelector((state: RootState) => state.clientDataHandler.data[key]) ??
        defaultVal

    const dispatch = useDispatch()

    const setState = (updatedState: ((prevState: T) => T) | Partial<T>) => {
        let newState
        if (typeof updatedState === 'function') {
            newState = (updatedState as (prevState: T) => T)(state)
        } else {
            newState = updatedState
        }
        dispatch(setClientDataAction({ key, data: newState }))
    }

    const select = <S>(selector: (state: T) => S) => {
        return selector(state)
    }

    const deleteState = () => {
        dispatch(deleteClientDataAction(key))
    }

    useEffect(() => {
        if (initVal && (!state || isOverrideInitVal)) {
            setState(initVal)
        }
    }, [initVal, isOverrideInitVal])

    return {
        state,
        setState,
        select,
        deleteState
    }
}

export default useEchoState
