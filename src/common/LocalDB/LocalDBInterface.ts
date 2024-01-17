export type IOperator =
    | '==='
    | '=='
    | '!=='
    | '<'
    | '>'
    | '<='
    | '>='
    | 'in'
    | 'not in'
    | 'like'
    | 'not like'

export interface ILocalDBGetOptionsProperties {
    where?: [string, IOperator, any]
    orderBy?: [string, 'desc' | 'asc']
    limit?: number
}

export interface ILocalDBDataWithId {
    id: string | number
    [key: string]: any
}

export interface ILocalDBDataWithoutId {
    [key: string]: any
}
