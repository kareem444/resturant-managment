import {
    IDefaultValuesProperties,
    IFormComponentProperties
} from 'src/common/components/FormComponent'
import { InputComponentProps } from 'src/common/components/InputComponent'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import { translateOptions, useTranslate } from 'src/common/hooks/useTranslate'

/* #region add unit form items Structure */
const inputsItems = (
    translate: (text: string | string[], option?: translateOptions) => string
): InputComponentProps[] => {
    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME}`),
            containerStyle: '!col-span-4 !col-start-1',
            validatedInput: {
                name: 'name',
                rules: {
                    isRequired: true,
                }
            }
        },
        {
            labelTitle: translate(`Email`),
            containerStyle: '!col-span-4 !col-start-5',
            type: 'email',
            validatedInput: {
                name: 'email',
                rules: {
                    isRequired: true,
                    isEmail: true
                }
            }
        },
        {
            labelTitle: translate(`Mobile`),
            containerStyle: '!col-span-4 !col-start-1',
            type: 'number',
            validatedInput: {
                name: 'mobile',
                rules: {
                    isRequired: true,
                    isMobile: true
                }
            }
        },
        {
            labelTitle: translate(`Password`),
            containerStyle: '!col-span-4 !col-start-5',
            type: 'password',
            validatedInput: {
                name: 'password',
                rules: {
                    isRequired: true,
                }
            }
        },
        {
            type: 'file',
            containerStyle: 'flex justify-center row-span-2 !col-span-4 ',
            uploadFileInput: {
                iconClassName: '!text-5xl',
            },
            className: '!w-3/4 !h-full',
            labelTitle: 'image',
            labelStyle: 'm-auto',
            validatedInput: {
                name: 'image',
                rules: {
                    isRequired: true
                }
            }
        },
        {
            labelTitle: 'Branch',
            labelStyle: '',
            type: 'dropdownSearch',
            containerStyle: '!col-start-7',
            validatedInput: {
                name: 'branch',
                rules: {
                    isRequired: true,
                    isArabic: true
                }
            },
            dropDownSearchInput: {
                data: [
                    { id: 1, name: 'Dummy 1' },
                    { id: 2, name: 'Dummy 2' },
                    { id: 3, name: 'Dummy 3' },
                    { id: 4, name: 'Dummy 4' }
                ],
                selectors: {
                    value: 'id',
                    text: 'name'
                },
            },
        },
        {
            labelTitle: 'Role',
            labelStyle: '',
            type: 'dropdownSearch',
            containerStyle: '!col-start-1',
            validatedInput: {
                name: 'role',
                rules: {
                    isRequired: true,
                    isArabic: true
                }
            },
            dropDownSearchInput: {
                data: [
                    { id: 1, name: 'Dummy 1' },
                    { id: 2, name: 'Dummy 2' },
                    { id: 3, name: 'Dummy 3' },
                    { id: 4, name: 'Dummy 4' }
                ],
                selectors: {
                    value: 'id',
                    text: 'name'
                },
            },
        },
        {
            labelTitle: translate(`Residential Number`),
            containerStyle: '!col-start-1',
            validatedInput: {
                name: 'residentialNumber',
                rules: {
                    isRequired: true,
                }
            }
        },
        {
            labelTitle: translate(`Health Certificate`),
            containerStyle: '!col-start-7',
            validatedInput: {
                name: 'healthCertificate',
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
        containerClassName: 'grid-rows-2 grid-flow-col',
        childClassnames: '',
        onSubmit: (data: IDefaultValuesProperties) => {
            console.log(data)
        },
        defaultValues: {
            name: '',
            email: '',
            mobile: '',
            password: '',
            image: '',
            branch: '',
            role: '',
            residentialNumber: '',
            healthCertificate: ''
        }
    }
}

export const AdminAddMemberFeatureFormStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate()
        return handelFormProperties(translate)
    }

export const AdminEditMemberModalFormStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate()

        return {
            ...handelFormProperties(translate, true),
            onSubmit: (data: IDefaultValuesProperties) => { },
            defaultValues: {
                name: 'Dummy Name',
                email: 'Dummy Email',
                mobile: 41546546486,
                password: 'Dummy Password',
                image: 'Dummy Image',
                branch: 'Dummy Branch',
                role: 'Dummy Role',
                residentialNumber: 'Dummy Residential Number',
                healthCertificate: 'Dummy Health Certificate'
            }
        }
    }
/* #endregion */
