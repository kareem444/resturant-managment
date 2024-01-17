import { IFirebaseFindOptions } from '../interface/FirebaseInterface'
import { handelOrderBy } from './FireBaseOrderByService'
import { handleWhereFilter } from './FireBaseWhereService'
import { limit as limitStatement, orderBy as orderByStatement } from 'firebase/firestore'

export const handelFindConstrains = ({
    where,
    mixedWhere,
    limit,
    orderBy
}: Partial<IFirebaseFindOptions>) => {
    let constrains = []

    let whereStatement: any[] = handleWhereFilter({ where, mixedWhere })

    if (whereStatement.length > 0) {
        constrains.push(...whereStatement)
    }

    if (limit) {
        constrains.push(limitStatement(limit))
    }

    if (!!orderBy) {
        constrains.push(...handelOrderBy({ orderBy }))
    }

    return constrains
}
