import { InputComponentProps } from "src/common/components/InputComponent"
import { TRANSLATE } from "src/common/constants/TranslateConstants"
import { useTranslate } from "src/common/hooks/useTranslate"
import { AdminExpensesDestinationInputsConstants } from "../constants/AdminExpensesDestinationInputsConstants"

export const AdminExpensesDestinationInputsStructure = (): InputComponentProps[] => {
    const { translate } = useTranslate()
    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME}`),
            containerStyle: '!col-span-12',
            validatedInput: {
                name: AdminExpensesDestinationInputsConstants.name,
                rules: {
                    isRequired: true,
                }
            }
        },
    ]
}