export const handelLocalDBWhereCondition = (
    cursor: IDBCursorWithValue | null,
    key: string,
    operator: string,
    value: any,
    resolve: (value: any) => void
) => {
    if (cursor) {
        const result = cursor.value

        if (operator === 'in' || operator === 'not in') {
            if (Array.isArray(result[value])) {
                if (operator === 'in' && eval(`result[value].includes(key)`)) {
                    resolve(result)
                } else if (
                    operator === 'not in' &&
                    eval(`!result[value].includes(key)`)
                ) {
                    resolve(result)
                } else {
                    cursor.continue()
                }
            } else {
                cursor.continue()
            }
        } else if (operator === 'like' || operator === 'not like') {
            if (typeof result[key] === 'string') {
                if (operator === 'like' && eval(`result[key].includes(value)`)) {
                    resolve(result)
                } else if (
                    operator === 'not like' &&
                    eval(`!result[key].includes(value)`)
                ) {
                    resolve(result)
                } else {
                    cursor.continue()
                }
            } else {
                cursor.continue()
            }
        } else if (eval(`'${result[key]}' ${operator} '${value}'`)) {
            resolve(result)
        } else {
            cursor.continue()
        }
    } else {
        resolve(null)
    }
}