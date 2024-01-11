import { useEffect, useState } from 'react'
import { IFetchDataHandlerParams } from '../../interface/ServerDataHandlerInterface'
import { defaultServerDataState } from '../../redux/server/ServerDataHandlerState'
import useAsyncState from './useAsyncState'
import { currentFetchingData, defaultQueryOptions } from '../../constants/ServerDataHandlerConstants'
import { IServerDataHandlerDataProperties, IServerDataHandlerErrorProperties } from '../../redux/server/ServerDataHandlerReduxInterface'
import useOnlineState from 'beautiful-react-hooks/useOnlineState'
import { noInterError } from '../../constants/ErrorsConstants'

const useFetch = <T>({
    key,
    queryFn,
    options
}: IFetchDataHandlerParams) => {
    const { state, setState } = useAsyncState<T>(key, defaultServerDataState)
    const [silentData, setSilentData] = useState<IServerDataHandlerDataProperties<T>>(defaultServerDataState)

    const isOnline = useOnlineState();

    options = { ...defaultQueryOptions, ...options }

    const query = async (queryParams?: any) => {
        if (!isOnline) {
            const data: IServerDataHandlerDataProperties<T> = {
                ...defaultServerDataState,
                error: noInterError,
                isError: true
            }
            if (options?.echoState === 'all') {
                setState(data)
            } else {
                setSilentData(data)
            }
            return
        }

        if (!currentFetchingData.includes(key)) {
            currentFetchingData.push(key)

            if (options?.echoState === 'all') {
                setState({ ...defaultServerDataState, isLoading: true })
            } else {
                setSilentData({ ...defaultServerDataState, isLoading: true })
            }

            try {
                const res = await queryFn(queryParams)
                let data = res;

                if (options?.selectors) {
                    const selectors = options.selectors
                    data = Object.keys(selectors).reduce((acc, key) => {
                        if (options?.isSelectorMustMatchResponseKeys && !(key in res)) {
                            return acc
                        }
                        acc[key] = selectors[key](res)
                        return acc
                    }, options.isReturnOnlySelectorProperties ? {} : data as Record<string, any>)
                }

                if (options?.computedSelectors) {
                    const computedSelectors = options.computedSelectors
                    data = Object.keys(computedSelectors).reduce((acc, key) => {
                        if (options?.isComputedSelectorMustMatchResponseKey && !(key in data)) {
                            return acc
                        }
                        acc[key] = computedSelectors[key](data)
                        return acc
                    }, data)
                }

                if (options?.echoState === 'none') {
                    setSilentData({ ...defaultServerDataState, data })
                } else if (options?.echoState === 'data') {
                    setSilentData({ ...defaultServerDataState })
                    setState({ ...defaultServerDataState, data })
                } else {
                    setState({ ...defaultServerDataState, data })
                }

                if (options?.onSuccess) options.onSuccess(data)
            } catch (error) {
                const formattedError = error as IServerDataHandlerErrorProperties
                const data: IServerDataHandlerDataProperties<T> = {
                    ...defaultServerDataState,
                    error: formattedError,
                    isError: true
                }
                if (options?.echoState === 'all') {
                    setState(data)
                } else {
                    setSilentData(data)
                }
                if (options?.onError) options.onError(data.error)
            }

            if (currentFetchingData.indexOf(key) > -1) {
                currentFetchingData.splice(currentFetchingData.indexOf(key), 1)
            }
        }
    }

    if (options?.isExecuteOnInit) {
        useEffect(() => {
            query()
        }, [])
    }

    return {
        query,
        isLoading: options?.echoState == 'all'
            ? state?.isLoading
            : silentData.isLoading,
        isError: options?.echoState == 'all'
            ? state?.isError
            : silentData.isError,
        error: options?.echoState == 'all'
            ? state?.error
            : silentData.error,
        data: options?.echoState == 'none'
            ? silentData.data
            : state?.data
    }
}

export default useFetch
