import { IDefaultValuesProperties, IFormComponentProperties } from 'src/common/components/FormComponent'
import { InputComponentProps } from 'src/common/components/InputComponent'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import { translateOptions, useTranslate } from 'src/common/hooks/useTranslate'

/* #region add group form items Structure */
const inputsItems = (
    translate: (text: string | string[], option?: translateOptions) => string
): InputComponentProps[] => {
    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME} ( ${TRANSLATE.EN} )`),
            validatedInput: {
                name: 'nameEn',
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
                name: 'nameAr',
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
                name: 'mobile',
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
                }
            }
        },
        {
            labelTitle: translate(`Start Time`),
            type: 'time',
            validatedInput: {
                name: 'startTime',
                rules: {
                    isRequired: true,
                }
            }
        },
        {
            labelTitle: translate(`End Time`),
            type: 'time',
            validatedInput: {
                name: 'endTime',
                rules: {
                    isRequired: true,
                }
            }
        },
        {
            labelTitle: translate(`Branch Code`),
            validatedInput: {
                name: 'branchCode',
                rules: {
                    isRequired: true,
                }
            }
        },
        {
            labelTitle: translate(`Tax Number`),
            validatedInput: {
                name: 'taxNumber',
                rules: {
                    isRequired: true,
                }
            }
        },
    ]
}

const handelFormProperties = (
    translate: (text: string | string[], option?: translateOptions) => string,
    isEdit?: boolean
): IFormComponentProperties => {
    return {
        inputs: inputsItems(translate),
        button: {
            text: translate(isEdit ? TRANSLATE.EDIT : TRANSLATE.ADD),
            icon: isEdit ? 'fi-rr-pencil' : 'fi-rr-plus'
        },
        containerClassName: '',
        childClassnames: '',
        onSubmit: (data: IDefaultValuesProperties) => {
            console.log(data)
        },
        defaultValues: {
            nameEn: '',
            nameAr: '',
            mobile: '',
            address: '',
            startTime: '',
            endTime: '',
            branchCode: '',
            taxNumber: '',
        }
    }
}

export const AdminAddBranchFeatureFormStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate()
    return handelFormProperties(translate)
}

export const AdminEditBranchModalFormStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate()

    return {
        ...handelFormProperties(translate, true),
        onSubmit: (data: IDefaultValuesProperties) => { },
        defaultValues: {
            nameEn: 'Name En',
            nameAr: 'اسم عربي',
            mobile: '0123456789',
            address: 'Address',
            startTime: '10:00',
            endTime: '10:00',
            branchCode: '123456789',
            taxNumber: '123456789',
        }
    }
}
/* #endregion */
