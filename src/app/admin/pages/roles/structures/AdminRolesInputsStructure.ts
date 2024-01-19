import { InputComponentProps } from "src/common/components/InputComponent"
import { TRANSLATE } from "src/common/constants/TranslateConstants"
import { useTranslate } from "src/common/hooks/useTranslate"

export const AdminRolesInputsStructure = (
    setIsAdminRole: React.Dispatch<React.SetStateAction<boolean>>,
): InputComponentProps[] => {
    const { translate } = useTranslate()

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
                    { id: 'dashboard', name: 'Dashboard' },
                    { id: 'pos', name: 'Pos' }
                ],
                onSelect: (value: any) => setIsAdminRole(value.value === 'dashboard'),
                defaultSelectedValue: { id: 'dashboard', name: 'Dashboard' },
                selectors: {
                    value: 'id',
                    text: 'name'
                }
            }
        }
    ]
}