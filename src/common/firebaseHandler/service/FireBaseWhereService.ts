import {
    QueryFieldFilterConstraint,
    where as whereFirestore,
    or,
    and,
    QueryCompositeFilterConstraint
} from 'firebase/firestore'
import {
    IFireBaseWhere,
    IFirebaseOptions
} from '../interface/FirebaseInterface'

export const handleWhereFilter = ({
    where,
    mixedWhere
}: Partial<IFirebaseOptions>) => {
    let whereStatement: any[] = []

    if (!!where) {
        whereStatement.push(
            whereFirestore(where.field, where.operator, where.value)
        )
    } else if (!!mixedWhere) {
        if ('condition' in mixedWhere && 'where' in mixedWhere) {
            // Multiple conditions with 'and' or 'or'
            const conditions: QueryFieldFilterConstraint[] = mixedWhere.where.map(
                condition => {
                    return whereFirestore(
                        condition.field,
                        condition.operator,
                        condition.value
                    )
                }
            )

            whereStatement.push(
                mixedWhere.condition === 'and' ? and(...conditions) : or(...conditions)
            )
        } else if (Array.isArray(mixedWhere)) {
            // Multiple sets of conditions
            const conditionSets: (
                | QueryFieldFilterConstraint
                | QueryCompositeFilterConstraint
            )[] = mixedWhere.map(
                (conditionSet: {
                    condition: 'and' | 'or'
                    where: IFireBaseWhere[]
                }) => {
                    const conditions: QueryFieldFilterConstraint[] =
                        conditionSet.where.map(condition => {
                            return whereFirestore(
                                condition.field,
                                condition.operator,
                                condition.value
                            )
                        })
                    return conditionSet.condition === 'and'
                        ? and(...conditions)
                        : or(...conditions)
                }
            )

            whereStatement.push(...conditionSets)
        }
    }

    return whereStatement
}
