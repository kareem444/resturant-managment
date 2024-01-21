export const generateRandomNumber = (
    min: number = 0,
    max: number = 9,
    count: number = 6,
    spacer: string = ''
): string => {
    return Array.from(
        { length: count },
        () => Math.floor(Math.random() * (max - min + 1)) + min
    ).join(spacer)
}

export const generateRandomString = (
    length: number = 6,
    chars: string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
): string => {
    let result = ''
    for (let i = length; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)]
    }

    return result
}
