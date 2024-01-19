import { InputComponentProps } from "src/common/components/InputComponent"
import { TRANSLATE } from "src/common/constants/TranslateConstants"
import { useTranslate } from "src/common/hooks/useTranslate"
import { AdminBranchesInputsConstant } from "../constants/AdminBranchConstants"

export const AdminBranchInputsStructure = (): InputComponentProps[] => {
    const { translate } = useTranslate()
    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME} ( ${TRANSLATE.EN} )`),
            validatedInput: {
                name: AdminBranchesInputsConstant.name,
                rules: {
                    isRequired: true,
                    isEnglish: true
                }
            }
        },
        {
            labelTitle: translate(`${TRANSLATE.NAME} ( ${TRANSLATE.AR} )`, {
                isArabic: true
            }),
            className: 'text-right',
            validatedInput: {
                name: AdminBranchesInputsConstant.nameAr,
                rules: {
                    isRequired: true,
                    isArabic: true
                }
            },
            labelStyle: 'ml-auto'
        },
        {
            labelTitle: translate(`Mobile`),
            validatedInput: {
                name: AdminBranchesInputsConstant.mobile,
                rules: {
                    isRequired: true,
                    isNumber: true
                }
            }
        },
        {
            labelTitle: translate(`Address`),
            validatedInput: {
                name: AdminBranchesInputsConstant.address,
                rules: {
                    isRequired: true,
                }
            }
        },
        {
            labelTitle: translate(`Start Time`),
            type: 'time',
            validatedInput: {
                name: AdminBranchesInputsConstant.startTime,
                rules: {
                    isRequired: true,
                }
            }
        },
        {
            labelTitle: translate(`End Time`),
            type: 'time',
            validatedInput: {
                name: AdminBranchesInputsConstant.endTime,
                rules: {
                    isRequired: true,
                }
            }
        },
        {
            labelTitle: translate(`Branch Code`),
            validatedInput: {
                name: AdminBranchesInputsConstant.branchCode,
                rules: {
                    isRequired: true,
                }
            }
        },
        {
            labelTitle: translate(`Tax Number`),
            validatedInput: {
                name: AdminBranchesInputsConstant.taxNumber,
                rules: {
                    isRequired: true,
                }
            }
        },
    ]
}