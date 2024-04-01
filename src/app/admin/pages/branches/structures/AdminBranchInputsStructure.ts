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
            labelTitle: translate(TRANSLATE.BRANCH_CODE),
            validatedInput: {
                name: AdminBranchInputsConstants.branchCode,
            }
        },
        {
            labelTitle: translate(TRANSLATE.MOBILE),
            validatedInput: {
                name: AdminBranchInputsConstants.mobile,
                // rules: {
                //     isRequired: true,
                //     isNumber: true
                // }
            }
        },
        {
            labelTitle: translate(TRANSLATE.ADDRESS),
            validatedInput: {
                name: AdminBranchInputsConstants.address,
            }
        },
        {
            labelTitle: translate(TRANSLATE.START_TIME),
            type: 'time',
            validatedInput: {
                name: AdminBranchInputsConstants.startTime,
                // rules: {
                //     isRequired: true,
                // }
            }
        },
        {
            labelTitle: translate(TRANSLATE.END_TIME),
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