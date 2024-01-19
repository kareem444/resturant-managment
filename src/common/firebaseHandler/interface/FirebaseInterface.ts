export interface IFireBaseWhere {
    field: string
    operator:
    | '=='
    | '<'
    | '<='
    | '>'
    | '>='
    | 'array-contains'
    | 'in'
    | 'array-contains-any'
    | 'not-in'
    | '!='
    value: string | number | boolean | any[]
}

interface IFireBaseMixedWhere {
    condition: 'and' | 'or'
    where: IFireBaseWhere[]
}

interface IFireBaseOrderBy {
    field: string
    direction?: 'asc' | 'desc'
}

export interface IFirebaseOptions {
    where?: IFireBaseWhere
    mixedWhere?: IFireBaseMixedWhere | IFireBaseMixedWhere[]
    limit?: number,
    orderBy?: IFireBaseOrderBy | IFireBaseOrderBy[]
    isAuthGuard?: boolean
}