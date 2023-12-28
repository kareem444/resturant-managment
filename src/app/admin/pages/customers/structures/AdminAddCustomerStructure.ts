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
            labelTitle: translate(`${TRANSLATE.NAME}`),
            validatedInput: {
                name: 'name',
                rules: {
                    isRequired: true,
                    isEnglish: true
                }
            }
        },
        {
            labelTitle: translate(`Mobile`),
            validatedInput: {
                name: 'mobile',
                rules: {
                    isRequired: true,
                    isNumber: true
                }
            }
        },
        {
            labelTitle: translate(`Tax Number`),
            validatedInput: {
                name: 'taxNumber',
                rules: {
                    isRequired: true,
                    isNumber: true
                }
            }
        },
        {
            labelTitle: translate(`Address`),
            validatedInput: {
                name: 'address',
                rules: {
                    isRequired: true,
                    isEnglish: true
                }
            }
        },
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
            name: '',
            mobile: '',
            taxNumber: '',
            address: ''
        }
    }
}

export const AdminAddCustomerFeatureFormStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate()
        return handelFormProperties(translate)
    }

export const AdminEditCustomerModalFormStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate()

        return {
            ...handelFormProperties(translate, true),
            onSubmit: (data: IDefaultValuesProperties) => { },
            defaultValues: {
                name: 'test',
                mobile: '0123456789',
                taxNumber: '123456789',
                address: 'test'
            }
        }
    }
/* #endregion */
