import cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { ILanguage, langOptions } from '../constants/langOptions'

export const useLang = () => {
    {/* @ts-ignore */}
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
    return {
        code: selectedLanguage?.code,
        country_code: selectedLanguage?.country_code,
        name: selectedLanguage?.name,
        dir: selectedLanguage?.dir ?? 'ltr',
        isArabic: selectedLanguage?.code === 'ar',
        translate: t,
        switchLang,
        toggleEnAr
    }
}
