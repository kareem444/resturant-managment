import {
    IServerDataHandlerErrorProperties,
    IServerDataHandlerDataProperties,
} from "../redux/server/ServerDataHandlerReduxInterface";

export interface IQueryOptionsProperties {
    onSuccess?: (data: any, formattedData?: any) => void;
    onError?: (formattedError?: IServerDataHandlerErrorProperties) => void;
    selectors?: {
        [key: string]: (data: any) => any;
    };
    computedSelectors?: {
        [key: string]: (data: any) => any;
    };
    isSelectorMustMatchResponseKeys?: boolean;
    isReturnOnlySelectorProperties?: boolean;
    isComputedSelectorMustMatchResponseKey?: boolean;
    isExecuteOnInit?: boolean;
    echoState?: 'all' | 'data' | 'none';
}

export interface IMutateOptionsProperties {
    onSuccess?: (data: any, params?: any) => void;
    onError?: (formattedError?: IServerDataHandlerErrorProperties) => void;
}

export interface IFetchDataHandlerParams {
    key: string;
    queryFn: (param: any) => Promise<any>;
    options?: IQueryOptionsProperties;
}

export interface IMutateHandlerParams {
    queryFn: (param: any) => Promise<any>;
    key?: string;
    options?: IMutateOptionsProperties;
}

export interface IServerSetDataActionProperties<T> {
    key: string;
    data: IServerDataHandlerDataProperties<T>;
}
