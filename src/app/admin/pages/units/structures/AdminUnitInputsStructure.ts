import { InputComponentProps } from "src/common/components/InputComponent"
import { TRANSLATE } from "src/common/constants/TranslateConstants"
import { useTranslate } from "src/common/hooks/useTranslate"
import { AdminUnitInputsConstants } from "../constants/AdminUnitInputsConstants"

export const AdminUnitInputsStructure = (): InputComponentProps[] => {
    const { translate } = useTranslate()
    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME}`),
            containerStyle: '!col-span-12',
            validatedInput: {
                name: AdminUnitInputsConstants.name,
                rules: {
                    isRequired: true,
                }
            }
        },
    ]
}