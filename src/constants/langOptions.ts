export interface ILanguage {
    code: string
    name: string
    country_code: string
    dir: string
}

export const langOptions: ILanguage[] = [
    {
        code: 'en',
        name: 'English',
        country_code: 'gb',
        dir: 'ltr'
    },
    {
        code: 'ar',
        name: 'العربية',
        country_code: 'sa',
        dir: 'rtl'
    }
]