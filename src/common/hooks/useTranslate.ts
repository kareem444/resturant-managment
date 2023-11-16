import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export interface ILanguage {
    code: string;
    name: string;
    country_code: string;
    dir: string;
}

export const langOptions: ILanguage[] = [
    {
        code: "en",
        name: "English",
        country_code: "gb",
        dir: "ltr",
    },
    {
        code: "ar",
        name: "العربية",
        country_code: "sa",
        dir: "rtl",
    },
];

export const useTranslate = () => {
    {/* @ts-ignore */}
    const { t } = useTranslation();
    const currentLanguageCode = cookies.get("i18next") || "en";
    const selectedLanguage = langOptions.find(
        (l: ILanguage) => l.code === currentLanguageCode
    );
    const switchLang = (code: string) => i18next.changeLanguage(code);
    const toggleEnAr = () =>
        i18next.changeLanguage(
            selectedLanguage?.code === "ar"
                ? langOptions[0].code
                : langOptions[1].code
        );
    return {
        code: selectedLanguage?.code,
        country_code: selectedLanguage?.country_code,
        name: selectedLanguage?.name,
        dir: selectedLanguage?.dir ?? "ltr",
        isArabic: selectedLanguage?.code === "ar",
        translate: t,
        switchLang,
        toggleEnAr,
    };
};
