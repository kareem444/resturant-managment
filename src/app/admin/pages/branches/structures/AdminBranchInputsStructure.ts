import { InputComponentProps } from "src/common/components/InputComponent"
import { TRANSLATE } from "src/common/constants/TranslateConstants"
import { useTranslate } from "src/common/hooks/useTranslate"
import { AdminBranchInputsConstants } from "../constants/AdminBranchInputsConstants"

export const AdminBranchInputsStructure = (): InputComponentProps[] => {
    const { translate } = useTranslate()
    return [
        {
            labelTitle: translate(TRANSLATE.NAME),
            validatedInput: {
                name: AdminBranchInputsConstants.name,
                rules: {
                    isRequired: true,
                }
            }
        },
        {
            labelTitle: translate(`Branch Code`),
            validatedInput: {
                name: AdminBranchInputsConstants.branchCode,
            }
        },
        {
            labelTitle: translate(`Mobile`),
            validatedInput: {
                name: AdminBranchInputsConstants.mobile,
                // rules: {
                //     isRequired: true,
                //     isNumber: true
                // }
            }
        },
        {
            labelTitle: translate(`Address`),
            validatedInput: {
                name: AdminBranchInputsConstants.address,
            }
        },
        {
            labelTitle: translate(`Start Time`),
            type: 'time',
            validatedInput: {
                name: AdminBranchInputsConstants.startTime,
                // rules: {
                //     isRequired: true,
                // }
            }
        },
        {
            labelTitle: translate(`End Time`),
            type: 'time',
            validatedInput: {
                name: AdminBranchInputsConstants.endTime,
                // rules: {
                //     isRequired: true,
                // }
            }
        },
    ]
}