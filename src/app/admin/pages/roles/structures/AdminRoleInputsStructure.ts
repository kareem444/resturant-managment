import { InputComponentProps } from "src/common/components/InputComponent"
import { TRANSLATE } from "src/common/constants/TranslateConstants"
import { useTranslate } from "src/common/hooks/useTranslate"
import { IRoleTypes } from "../interfaces/AdminRoleInterface"
import { AdminRolesInputsConstant } from "../constants/AdminRoleDefaultVal"

export const AdminRoleInputsStructure = (
    setIsAdminRole: React.Dispatch<React.SetStateAction<IRoleTypes>>,
): InputComponentProps[] => {
    const { translate } = useTranslate()

    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME}`),
            validatedInput: {
                name: AdminRolesInputsConstant.name,
                rules: {
                    isRequired: true,
                }
            }
        },
        {
            labelTitle: translate(`Role`),
            type: 'dropdownSearch',
            validatedInput: {
                name: AdminRolesInputsConstant.role,
                rules: {
                    isRequired: true
                }
            },
            dropDownSearchInput: {
                data: [
                    { id: 'dashboardAndPos', name: 'Dashboard & Pos' },
                    { id: 'dashboard', name: 'Dashboard' },
                    { id: 'pos', name: 'Pos' },
                ],
                onSelect: (value: any) => setIsAdminRole(value.value),
                defaultSelectedValue: { id: 'dashboardAndPos', name: 'Dashboard & Pos' },
                selectors: {
                    value: 'id',
                    text: 'name'
                }
            }
        }
    ]
}