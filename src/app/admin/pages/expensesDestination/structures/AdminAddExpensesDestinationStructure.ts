import {
    IDefaultValuesProperties,
    IFormComponentProperties
} from 'src/common/components/FormComponent'
import { InputComponentProps } from 'src/common/components/InputComponent'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import { translateOptions, useTranslate } from 'src/common/hooks/useTranslate'

/* #region add unit form items Structure */
const inputsItems = (
    translate: (text: string | string[], option?: translateOptions) => string
): InputComponentProps[] => {
    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME} ( ${TRANSLATE.EN} )`),
            containerStyle: '!col-span-6',
            validatedInput: {
                name: 'nameEn',
                rules: {
                    isRequired: true,
                }
            }
        },
        {
            labelTitle: translate(`${TRANSLATE.NAME} ( ${TRANSLATE.AR} )`, {
                isArabic: true
            }),
            containerStyle: '!col-span-6',
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
    ]
}

const handelFormProperties = (
    translate: (text: string | string[], option?: translateOptions) => string,
    isEdit?: boolean
): IFormComponentProperties => {
    return {
        inputs: inputsItems(translate),
        button: {
            text: translate(isEdit ? TRANSLATE.EDIT : TRANSLATE.ADD),
            icon: isEdit ? 'fi-rr-pencil' : 'fi-rr-plus'
        },
        containerClassName: '',
        childClassnames: '!col-span-12',
        onSubmit: (data: IDefaultValuesProperties) => {
            console.log(data)
        },
        defaultValues: {
            nameEn: '',
            nameAr: '',
        }
    }
}

export const AdminAddExpensesDestinationFeatureFormStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate()
        return handelFormProperties(translate)
    }

export const AdminEditExpensesDestinationModalFormStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate()

        return {
            ...handelFormProperties(translate, true),
            onSubmit: (data: IDefaultValuesProperties) => { },
            defaultValues: {
                nameEn: '',
                nameAr: '',
            }
        }
    }
/* #endregion */
