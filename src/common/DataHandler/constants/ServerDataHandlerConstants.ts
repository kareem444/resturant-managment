import { IQueryOptionsProperties } from "../interface/ServerDataHandlerInterface"

export const defaultQueryOptions: IQueryOptionsProperties = {
    echoState: 'data',
    isReturnOnlySelectorProperties: true,
    isSelectorMustMatchResponseKeys: false,
    isComputedSelectorMustMatchResponseKey: true,
    isExecuteOnInit: false
}

export const currentFetchingData: string[] = []