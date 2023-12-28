import { IDefaultValuesProperties, IFormComponentProperties } from 'src/common/components/FormComponent'
import { InputComponentProps } from 'src/common/components/InputComponent'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import { translateOptions, useTranslate } from 'src/common/hooks/useTranslate'

/* #region add group form items Structure */
const inputsItems = (
    translate: (text: string | string[], option?: translateOptions) => string
): InputComponentProps[] => {
    return [
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
        childClassnames: '',
        onSubmit: (data: IDefaultValuesProperties) => {
            console.log(data)
        },
        defaultValues: {
            nameEn: '',
            nameAr: '',
            price: '',
            image: ''
        }
    }
}

export const AdminAddGroupFeatureFormStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate()
    return handelFormProperties(translate)
}

export const AdminEditGroupModalFormStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate()

    return {
        ...handelFormProperties(translate, true),
        onSubmit: (data: IDefaultValuesProperties) => { },
        defaultValues: {
            nameEn: 'Dummy Name',
            nameAr: 'اسم وهمي',
            price: '100',
            image: ''
        }
    }
}
/* #endregion */
