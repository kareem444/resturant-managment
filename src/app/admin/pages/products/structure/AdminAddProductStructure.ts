import { IDefaultValuesProperties } from 'src/common/components/FormComponent'
import { InputTextComponentProps } from 'src/common/components/InputTextComponent'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import { translateOptions, useTranslate } from 'src/common/hooks/useTranslate'

/* #region add unit form items Structure */
const inputsItems = (
    translate: (text: string | string[], option?: translateOptions) => string
): InputTextComponentProps[][] => {
    return [
        [
            {
                labelTitle: translate(`${TRANSLATE.NAME} ( ${TRANSLATE.EN} )`),
                validatedInput: {
                    name: 'nameEn',
                    rules: {
                        isRequired: true,
                        isEnglish: true
                    }
                }
            },
            {
                labelTitle: translate(`${TRANSLATE.NAME} ( ${TRANSLATE.AR} )`, {
                    isArabic: true
                }),
                className: 'text-right',
                validatedInput: {
                    name: 'nameAr',
                    rules: {
                        isRequired: true,
                        isArabic: true
                    }
                },
                labelStyle: 'ml-auto'
            },
        ],
        [
            {
                labelTitle: translate(`${TRANSLATE.NAME} ( ${TRANSLATE.EN} )`),
                labelStyle: "mt-10",

                validatedInput: {
                    name: 'nameEn',
                    rules: {
                        isRequired: true,
                        isEnglish: true
                    }
                }
            },
            {
                type: 'file',
                containerStyle: 'mt-5 flex justify-center',
                labelTitle: "Image",
                labelStyle: 'm-auto',
                validatedInput: {
                    name: 'image',
                    rules: {
                        isRequired: true,
                    }
                },
            },
            {
                labelTitle: translate(`${TRANSLATE.NAME} ( ${TRANSLATE.EN} )`),
                labelStyle: "mt-10",

                validatedInput: {
                    name: 'nameEn',
                    rules: {
                        isRequired: true,
                        isEnglish: true
                    }
                }
            },
        ],
        [
            {
                labelTitle: translate(`${TRANSLATE.NAME} ( ${TRANSLATE.EN} )`),
                labelStyle: "mt-6",
                validatedInput: {
                    name: 'nameEn',
                    rules: {
                        isRequired: true,
                        isEnglish: true
                    }
                }
            },
            {
                labelTitle: translate(`${TRANSLATE.NAME} ( ${TRANSLATE.AR} )`, {
                    isArabic: true
                }),
                className: 'text-right',
                validatedInput: {
                    name: 'nameAr',
                    rules: {
                        isRequired: true,
                        isArabic: true
                    }
                },
                labelStyle: 'ml-auto mt-6'
            },
        ],
    ]
}

export const AdminAddProductFeatureFormStructure = () => {
    const { translate } = useTranslate()

    return {
        inputs: inputsItems(translate),
        button: { text: translate(TRANSLATE.ADD), icon: 'fi-rr-plus' },
        onSubmit: (data: IDefaultValuesProperties) => { console.log(data); },
        defaultValues: {
            nameEn: '',
            nameAr: '',
            image: '',
        }
    }
}

export const AdminEditProductModalFormStructure = () => {
    const { translate } = useTranslate()

    return {
        inputs: inputsItems(translate),
        button: { text: translate(TRANSLATE.EDIT), icon: 'fi-rr-pencil' },
        onSubmit: (data: IDefaultValuesProperties) => { },
        defaultValues: {
            nameEn: 'Dummy Name',
            nameAr: 'اسم وهمي',
        }
    }
}
/* #endregion */
