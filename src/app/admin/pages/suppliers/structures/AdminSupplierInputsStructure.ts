import { InputComponentProps } from "src/common/components/InputComponent"
import { TRANSLATE } from "src/common/constants/TranslateConstants"
import { useTranslate } from "src/common/hooks/useTranslate"
import { AdminSupplierInputsConstants } from "../constants/AdminSupplierInputsConstants"

export const AdminSupplierInputsStructure = (): InputComponentProps[] => {
    const { translate } = useTranslate()
    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME}`),
            validatedInput: {
                name: AdminSupplierInputsConstants.name,
            }
        },
        {
            labelTitle: translate(`Address`),
            validatedInput: {
                name: AdminSupplierInputsConstants.address,
            }
        },
        {
            labelTitle: translate(`Phone`),
            validatedInput: {
                name: AdminSupplierInputsConstants.phone,
            }
        },
        {
            labelTitle: translate(`Tax Number`),
            validatedInput: {
                name: AdminSupplierInputsConstants.taxNumber,
            }
        },
    ]
}