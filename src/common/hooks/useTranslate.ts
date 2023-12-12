import cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

export interface ILanguage {
    code: "en" | "ar"
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

export interface translateOptions {
    specificLanguage?: 'en' | 'ar',
    isArabic?: boolean
}

export const useTranslate = () => {
    {
        /* @ts-ignore */
    }
    const { t } = useTranslation()
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const selectedLanguage = langOptions.find(
        (l: ILanguage) => l.code === currentLanguageCode
    )
    const switchLang = (code: string) => i18next.changeLanguage(code)
    const toggleEnAr = () =>
        i18next.changeLanguage(
            selectedLanguage?.code === 'ar'
                ? langOptions[0].code
                : langOptions[1].code
        )

    const translate = (
        text: string | string[],
        options: translateOptions = { specificLanguage: selectedLanguage?.code ?? "en", isArabic: false }
    ) => {
        const textToTranslate = typeof text === 'string' ? text.split(' ') : text
        const translatedText = textToTranslate.map(word => {
            return t(word, { lng: options.isArabic ? "ar" : options?.specificLanguage })
        })
        return translatedText.join(' ')
    }

    return {
        code: selectedLanguage?.code,
        country_code: selectedLanguage?.country_code,
        name: selectedLanguage?.name,
        dir: selectedLanguage?.dir ?? 'ltr',
        isArabic: selectedLanguage?.code === 'ar',
        translate,
        switchLang,
        toggleEnAr
    }
}
