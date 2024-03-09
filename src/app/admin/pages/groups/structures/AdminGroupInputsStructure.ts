import { InputComponentProps } from "src/common/components/InputComponent"
import { TRANSLATE } from "src/common/constants/TranslateConstants"
import { useTranslate } from "src/common/hooks/useTranslate"
import { AdminGroupInputsConstants } from "../constants/AdminGroupInputsConstants"

export const AdminGroupInputsStructure = (): InputComponentProps[] => {
    const { translate } = useTranslate()
    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME}`),
            containerStyle: '!col-span-12',
            validatedInput: {
                name: AdminGroupInputsConstants.name,
                rules: {
                    isRequired: true,
                }
            }
        },
       
    ]
}