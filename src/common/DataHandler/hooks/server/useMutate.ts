import { useState } from 'react'
import { IMutateHandlerParams } from '../../interface/ServerDataHandlerInterface'
import { defaultServerDataState } from '../../redux/server/ServerDataHandlerState'
import {
    IServerDataHandlerDataProperties,
    IServerDataHandlerErrorProperties
} from '../../redux/server/ServerDataHandlerReduxInterface'
import useOnlineState from 'beautiful-react-hooks/useOnlineState'
import { noInterError } from '../../constants/ErrorsConstants'

const useMutate = <T>({ queryFn, options }: IMutateHandlerParams) => {
    const [res, setRes] = useState<IServerDataHandlerDataProperties<T | any>>(
        defaultServerDataState
    )
    const isOnline = useOnlineState();

    const mutate = async (mutateParams?: any) => {
        if (!isOnline) {
            const data: IServerDataHandlerDataProperties<T> = {
                ...defaultServerDataState,
                error: noInterError,
                isError: true
            }
            setRes(data)
            return
        }

        setRes({ ...defaultServerDataState, isLoading: true })

        try {
            const response = await queryFn(mutateParams)
            setRes(_ => ({ ...defaultServerDataState, data: response }))

            if (options?.onSuccess) {
                options.onSuccess(response, mutateParams)
            }
        } catch (error) {
            const formattedError = error as IServerDataHandlerErrorProperties

            setRes(_ => ({
                ...defaultServerDataState,
                isError: true,
                error: formattedError
            }))

            if (options?.onError) {
                options.onError(formattedError)
            }
        }

        setRes(prev => ({ ...prev, isLoading: false }))
    }

    return {
        mutate,
        isLoading: res.isLoading,
        isError: res.isError,
        error: res.error,
        data: res.data
    }
}

export default useMutate
