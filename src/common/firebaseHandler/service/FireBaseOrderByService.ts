import { IFirebaseOptions } from "../interface/FirebaseInterface";
import {
    orderBy as orderByStatement,
} from 'firebase/firestore'

export const handelOrderBy = ({
    orderBy
}: Partial<IFirebaseOptions>) => {
    let orderByList: any[] = []

    if (!!orderBy) {
        if (Array.isArray(orderBy)) {
            orderByList.push(
                ...orderBy.map(order => {
                    return orderByStatement(order.field, order.direction || 'asc')
                })
            )
        } else {
            orderByList.push(orderByStatement(orderBy.field, orderBy.direction || 'asc'))
        }
    }

    return orderByList
};