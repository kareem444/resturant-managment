import {
    IDefaultValuesProperties,
    IFormComponentProperties
} from 'src/common/components/FormComponent'
import { InputComponentProps } from 'src/common/components/InputComponent'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import { translateOptions, useTranslate } from 'src/common/hooks/useTranslate'

/* #region add group form items Structure */
const inputsItems = (
    translate: (text: string | string[], option?: translateOptions) => string,
    setIsAdminRole: React.Dispatch<React.SetStateAction<boolean>>,
): InputComponentProps[] => {
    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME}`),
            validatedInput: {
                name: 'nameEn',
                rules: {
                    isRequired: true,
                    isEnglish: true
                }
            }
        },
        {
            labelTitle: 'Role',
            type: 'dropdownSearch',
            validatedInput: {
                name: 'role',
                rules: {
                    isRequired: true
                }
            },
            dropDownSearchInput: {
                data: [
                    { id: 1, name: 'Admin' },
                    { id: 2, name: 'Cahier' }
                ],
                onSelect: (value: any) => setIsAdminRole(value.value === 1),
                defaultSelectedValue: { id: 1, name: 'Admin' },
                selectors: {
                    value: 'id',
                    text: 'name'
                }
            }
        }
    ]
}

export const AdminAddRoleFeatureFormStructure = (
    setIsAdminRole: React.Dispatch<React.SetStateAction<boolean>>
): IFormComponentProperties => {
    const { translate } = useTranslate()
    return {
        inputs: inputsItems(translate, setIsAdminRole),
        button: {
            text: translate(TRANSLATE.ADD),
            icon: 'fi-rr-plus'
        },
        onSubmit: (data: IDefaultValuesProperties) => {
            console.log(data)
        },
        defaultValues: {}
    }
}

export const AdminEditRoleModalFormStructure = (
    setIsAdminRole: React.Dispatch<React.SetStateAction<boolean>>
): IFormComponentProperties => {
    const { translate } = useTranslate()

    return {
        inputs: inputsItems(translate, setIsAdminRole),
        button: {
            text: translate(TRANSLATE.EDIT),
            icon: 'fi-rr-pencil'
        },
        onSubmit: (data: IDefaultValuesProperties) => {
            console.log(data)
        },
        defaultValues: {}
    }
}
/* #endregion */
