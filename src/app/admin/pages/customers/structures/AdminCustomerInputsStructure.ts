import { InputComponentProps } from "src/common/components/InputComponent"
import { TRANSLATE } from "src/common/constants/TranslateConstants"
import { useTranslate } from "src/common/hooks/useTranslate"
import { AdminCustomerInputsConstants } from "../constants/AdminCustomerInputsConstants"

export const AdminCustomerInputsStructure = (): InputComponentProps[] => {
    const { translate } = useTranslate()
    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME}`),
            validatedInput: {
                name: AdminCustomerInputsConstants.name,
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