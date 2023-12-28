export const removeDashFromRoutNameHelper = (routeName: string): string => {
    const deleteDash = routeName.split('-')
    const upperCaseName = deleteDash.map((item, index) => {
        if (index > 0) {
            return item.charAt(0).toUpperCase() + item.slice(1)
        }
        return item
    })
    return upperCaseName.join('')
}