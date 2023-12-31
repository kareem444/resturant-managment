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
            labelTitle: translate(`${TRANSLATE.NAME}`),
            validatedInput: {
                name: 'name',
                rules: {
                    isRequired: true,
                }
            }
        },
        {
            labelTitle: 'Branch',
            type: 'dropdownSearch',
            validatedInput: {
                name: 'branch',
                rules: {
                    isRequired: true,
                }
            },
            dropDownSearchInput: {
                data: [
                    { id: 1, name: 'branch 1' },
                    { id: 2, name: 'branch 2' },
                    { id: 3, name: 'branch 3' },
                    { id: 4, name: 'branch 4' }
                ],
                selectors: {
                    value: 'id',
                    text: 'name'
                },
            },
        },
        {
            labelTitle: translate(`Amount (%)`),
            containerStyle: '',
            type: 'number',
            validatedInput: {
                name: 'amount',
                rules: {
                    isRequired: true,
                    isNumber: true
                }
            }
        },
        {
            labelTitle: translate(`Minimum Amount`),
            containerStyle: '',
            type: 'number',
            validatedInput: {
                name: 'minimumAmount',
                rules: {
                    isNumber: true
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
        }
    }
}

export const AdminAddTaxFeatureFormStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate()
    return handelFormProperties(translate)
}

export const AdminEditTaxModalFormStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate()

    return {
        ...handelFormProperties(translate, true),
        onSubmit: (data: IDefaultValuesProperties) => { },
        defaultValues: {
        }
    }
}
/* #endregion */
