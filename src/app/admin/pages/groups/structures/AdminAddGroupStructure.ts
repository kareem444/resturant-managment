import { IDefaultValuesProperties } from 'src/common/components/FormComponent'
import { InputTextComponentProps } from 'src/common/components/InputTextComponent'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import { translateOptions, useTranslate } from 'src/common/hooks/useTranslate'

/* #region add group form items Structure */
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
            }
        ],
    ]
}

export const AdminAddGroupFeatureFormStructure = () => {
    const { translate } = useTranslate()

    return {
        inputs: inputsItems(translate),
        button: { text: translate(TRANSLATE.ADD), icon: 'fi-rr-plus' },
        onSubmit: (data: IDefaultValuesProperties) => { },
        defaultValues: {
            nameEn: '',
            nameAr: ''
        }
    }
}

export const AdminEditGroupModalFormStructure = () => {
    const { translate } = useTranslate()

    return {
        inputs: inputsItems(translate),
        button: { text: translate(TRANSLATE.EDIT), icon: 'fi-rr-pencil' },
        onSubmit: (data: IDefaultValuesProperties) => { console.log(data);},
        defaultValues: {
            nameEn: 'Dummy Name',
            nameAr: 'اسم وهمي'
        }
    }
}
/* #endregion */
