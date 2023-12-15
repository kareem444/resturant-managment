import { IDefaultValuesProperties } from 'src/common/components/FormComponent'
import { InputComponentProps } from 'src/common/components/InputComponent'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import { translateOptions, useTranslate } from 'src/common/hooks/useTranslate'

/* #region add unit form items Structure */
const inputsItems = (
    translate: (text: string | string[], option?: translateOptions) => string
): InputComponentProps[][] => {
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
        ]
    ]
}

export const AdminAddUnitFeatureFormStructure = () => {
    const { translate } = useTranslate()

    return {
        inputs: inputsItems(translate),
        button: { text: translate(TRANSLATE.ADD), icon: 'fi-rr-plus' },
        onSubmit: (data: IDefaultValuesProperties) => { console.log(data); },
        defaultValues: {
            nameEn: '',
            nameAr: '',
        }
    }
}

export const AdminEditUnitModalFormStructure = () => {
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
