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
            containerStyle: '',
            validatedInput: {
                name: 'amount',
                rules: {
                    isRequired: true,
                    isNumber: true
                }
            }
        },
        {
            labelTitle: 'Branch',
            type: 'dropdownSearch',
            containerStyle: '',
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
            placeholder: 'Dummy Placeholder'
        },
        {
            labelTitle: 'Destination',
            type: 'dropdownSearch',
            containerStyle: '',
            validatedInput: {
                name: 'destination',
                rules: {
                    isRequired: true,
                }
            },
            dropDownSearchInput: {
                data: [
                    { id: 1, name: 'destination 1' },
                    { id: 2, name: 'destination 2' },
                    { id: 3, name: 'destination 3' },
                    { id: 4, name: 'destination 4' }
                ],
                selectors: {
                    value: 'id',
                    text: 'name'
                },
            },
            placeholder: 'Dummy Placeholder'
        },
        {
            labelTitle: 'Payment Method',
            type: 'dropdownSearch',
            containerStyle: '',
            validatedInput: {
                name: 'paymentMethod',
                rules: {
                    isRequired: true,
                }
            },
            dropDownSearchInput: {
                data: [
                    { id: 1, name: 'Payment Method 1' },
                    { id: 2, name: 'Payment Method 2' },
                    { id: 3, name: 'Payment Method 3' },
                    { id: 4, name: 'Payment Method 4' }
                ],
                selectors: {
                    value: 'id',
                    text: 'name'
                },
            },
            placeholder: 'Dummy Placeholder'
        },
        {
            labelTitle: translate(`Description`),
            containerStyle: '!col-span-12',
            validatedInput: {
                name: 'description',
                rules: {}
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
            amount: '',
            branch: '',
            destination: '',
            paymentMethod: '',
            description: ''
        }
    }
}

export const AdminAddExpensesFeatureFormStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate()
        return handelFormProperties(translate)
    }

export const AdminEditExpensesModalFormStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate()

        return {
            ...handelFormProperties(translate, true),
            onSubmit: (data: IDefaultValuesProperties) => { },
            defaultValues: {
                amount: '100',
                branch: 'branch 1',
                destination: 'destination 1',
                paymentMethod: 'Payment Method 1',
                description: ''
            }
        }
    }
/* #endregion */
